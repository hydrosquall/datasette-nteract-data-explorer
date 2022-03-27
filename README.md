# datasette-nteract-data-explorer

[![PyPI](https://img.shields.io/pypi/v/datasette-nteract-data-explorer.svg)](https://pypi.org/project/datasette-nteract-data-explorer/)
[![Changelog](https://img.shields.io/github/v/release/hydrosquall/datasette-nteract-data-explorer?include_prereleases&label=changelog)](https://github.com/hydrosquall/datasette-nteract-data-explorer/releases)
[![Tests](https://github.com/hydrosquall/datasette-nteract-data-explorer/workflows/Test/badge.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/actions?query=workflow%3ATest)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/blob/main/LICENSE)

A free automatic data visualization plugin for the [Datasette](https://datasette.io/) ecosystem. Explore your data through clicking and menus, without writing any code.

## Demo

![screenshot](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/7KuQ8rxG/2a9d8178-803c-41a6-8630-9d6db44f20d9.jpg?v=95ed24febf588fcfc957b2e3ae09e61c)

_Running Datasette against my Safari browser history_

## Installation

Install this plugin in the same Python environment as Datasette.

```bash
datasette install datasette-nteract-data-explorer
```

## Usage

- Click "View in Data Explorer" to open the panel.
- Click the icons on the right hand side to change the visualization type.
- Use the menus underneath the main graphing area to configure your visualization.
- Use the "advanced settings" mode to override the inferred field types. For example, you may want to treat a number as a "string" to be able to use it as a category.
- See a [live demo](https://data-explorer.nteract.io/) of this component and additional documentation.
- TODO: Add a live Datasette demo.

## Development

See [contributing docs](./docs/CONTRIBUTING.md)

## Acknowledgements

- The [Data Explorer](https://github.com/nteract/data-explorer) was designed by Elijah Meeks. I co-maintain this project as part of the [Nteract](https://nteract.io/) open-source team. You can read about the design behind this tool [here](https://blog.nteract.io/designing-the-nteract-data-explorer-f4476d53f897)
- The data model is based on the [Frictionless Data Spec](https://specs.frictionlessdata.io/).
- This plugin was bootstrapped by Simon Willison's [Datasette plugin template](https://simonwillison.net/2020/Jun/20/cookiecutter-plugins/)
