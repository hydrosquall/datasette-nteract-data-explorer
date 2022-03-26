from datasette import hookimpl
import glob
from os import path, pardir
# from pathlib import Path

# TODO: is this in-memory cache necessary?
cache = {}
static_dir = path.join(path.dirname(__file__), pardir, "dist")

# cache files
def cached_filepaths_for_extension(extension):
    pattern = path.join(static_dir, "*.{}".format(extension))
    if pattern not in cache:
        # cache[pattern] = [
        #     "/-/static-plugins/datasette_nteract_data_explorer/{}".format(path.basename(g))
        #     for g in glob.glob(pattern)
        # ]
        cache[pattern] = [
            "/assets/{}".format(path.basename(g))
            for g in glob.glob(pattern)
        ]
    return cache[pattern]


@hookimpl
def extra_css_urls(view_name):
    if view_name == "table":
        return cached_filepaths_for_extension("css")


@hookimpl
def extra_js_urls(view_name):
    if view_name == "table":
        return cached_filepaths_for_extension("js")
