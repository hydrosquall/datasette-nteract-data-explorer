# datasette-nteract-data-explorer

[![PyPI](https://img.shields.io/pypi/v/datasette-nteract-data-explorer.svg)](https://pypi.org/project/datasette-nteract-data-explorer/)
[![Changelog](https://img.shields.io/github/v/release/hydrosquall/datasette-nteract-data-explorer?include_prereleases&label=changelog)](https://github.com/hydrosquall/datasette-nteract-data-explorer/releases)
[![Tests](https://github.com/hydrosquall/datasette-nteract-data-explorer/workflows/Test/badge.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/actions?query=workflow%3ATest)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/blob/main/LICENSE)

Automatic data visualization for Datasette

## Installation

Install this plugin in the same environment as Datasette.

```bash
datasette install datasette-nteract-data-explorer
```

## Usage

- Click "toggle" to open the panel
- Use the "advanced settings" mode to override the inferred field types. (For example, you may want to treat a number as a "string" to make it appear available as a dimension that could be used with color)
- See a [live demo](https://data-explorer.nteract.io/) of this component in action.
- TODO: Add a live Datasette demo.

## Development

### Python

To set up this plugin locally, first checkout the code. Then create a new virtual environment:

    cd datasette-nteract-data-explorer
    python3 -mvenv venv
    source venv/bin/activate

Or if you are using `pipenv`:

    pipenv shell

Or if you are using `pyenv`:

    pyenv virtualenv 3.9.10 datasette-nteract-data-explorer
    pyenv

Now install the dependencies and test dependencies:

    pip install -e '.[test]'

To run the tests:

    pytest

### Javascript

To ensure stability when resolving 3rd party dependencies, we use the Yarn package manager.

```bash
yarn install
```

To build a local test page

```bash
yarn run dev
```

To build the package for production, then export the built files to where the Python package can use them

```bash
yarn run build
yarn run export
```

## Acknowledgements

- The [Data Explorer](https://github.com/nteract/data-explorer) was designed by Elijah Meeks. I co-maintain this project as part of the [Nteract](https://nteract.io/) open-source team. You can read about the design behind this tool [here](https://blog.nteract.io/designing-the-nteract-data-explorer-f4476d53f897)
- The data model is based on the [Frictionless Data Spec](https://specs.frictionlessdata.io/).
- This plugin was bootstrapped by Simon Willison's [Datasette plugin template](https://simonwillison.net/2020/Jun/20/cookiecutter-plugins/)
