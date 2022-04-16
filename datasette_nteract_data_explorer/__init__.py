from datasette import hookimpl
import glob
from os import path

cache = {}
static_dir = path.join(path.dirname(__file__), "static")


def argmin(array):
    array = list(array)
    return array.index(min(array))


def cached_filepaths_for_js_modules():

    pattern = path.join(static_dir, "*.js")
    if pattern not in cache:
        # TODO: parse HTML to retrieve only the ES module version. For now, we rely on the hacky fact
        # that the ES6 module version gets built first.
        files = [path.basename(file) for file in glob.glob(pattern)]

        ## Hack two... we could check filesizes, and
        ## pick the smaller index file.
        ## Figure out support for older browsers once
        ## an MVP is working better.
        filesizes = [path.getsize(file) for file in glob.glob(pattern)]
        # print("pattern", pattern, files)

        smallestFileIndex = argmin(filesizes)

        moduleFiles = [
            {
                "url": f"/-/static-plugins/datasette-nteract-data-explorer/{files[smallestFileIndex]}",
                # note modules
                "module": True,
            }
        ]

        # TODO: find a way to serve some assets
        # using async/defer in the script tag.

        return moduleFiles
    return cache[pattern]


def cached_filepaths_for_extension(extension):
    pattern = path.join(static_dir, "*.{}".format(extension))
    if pattern not in cache:
        files = [path.basename(file) for file in glob.glob(pattern)]

        assetPaths = [
            f"/-/static-plugins/datasette-nteract-data-explorer/{file}"
            for file in files
        ]
        return assetPaths
    return cache[pattern]


# Create a set with table names that should activate the plugin
# for the datasette UI.
# Listing: https://docs.datasette.io/en/stable/custom_templates.html#custom-templates
# database view is activated by writing custom SQL
PERMITTED_VIEWS = {"table", "query", "database"}


# These hooks only run
# for the TABLE pages. Other view choices include
# database, index, etc
@hookimpl
def extra_css_urls(view_name):
    # check if the view is in the set of permitted views
    if view_name in PERMITTED_VIEWS:
        return cached_filepaths_for_extension("css")


@hookimpl
def extra_js_urls(view_name):
    print(view_name)
    if view_name in PERMITTED_VIEWS:
        return cached_filepaths_for_js_modules()
