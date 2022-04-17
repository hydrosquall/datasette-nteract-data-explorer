from datasette import hookimpl
from os import path

# Store JS in separate file to enable basic IDE hinting support
script_name = path.join(path.dirname(__file__), "footer.js")
SCRIPT = open(script_name).read()


@hookimpl
def extra_body_script():
    return SCRIPT
