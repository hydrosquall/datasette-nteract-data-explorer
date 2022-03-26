# datasette-nteract-data-explorer

[![PyPI](https://img.shields.io/pypi/v/datasette-nteract-data-explorer.svg)](https://pypi.org/project/datasette-nteract-data-explorer/)
[![Changelog](https://img.shields.io/github/v/release/hydrosquall/datasette-nteract-data-explorer?include_prereleases&label=changelog)](https://github.com/hydrosquall/datasette-nteract-data-explorer/releases)
[![Tests](https://github.com/hydrosquall/datasette-nteract-data-explorer/workflows/Test/badge.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/actions?query=workflow%3ATest)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/blob/main/LICENSE)

my first datasette plugin

## Installation

Install this plugin in the same environment as Datasette.

    $ datasette install datasette-nteract-data-explorer

## Usage

Usage instructions go here.

## Development

To set up this plugin locally, first checkout the code. Then create a new virtual environment:

    cd datasette-nteract-data-explorer
    python3 -mvenv venv
    source venv/bin/activate

Or if you are using `pipenv`:

    pipenv shell

Now install the dependencies and test dependencies:

    pip install -e '.[test]'

To run the tests:

    pytest

### Notes

A test command:

```bash
datasette ~/Library/Safari/History.db  --plugins-dir=plugins/
```

- <http://2016.padjo.org/tutorials/sqlite-your-browser-history/>
