from datasette import hookimpl
import os

#  set variable named script  equal to contents of footer.js\
SCRIPT = open(os.path.join(os.path.dirname(__file__), "footer.js")).read()

@hookimpl
def extra_body_script():
    return SCRIPT
