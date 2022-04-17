# datasette-nteract-data-explorer

[![PyPI](https://img.shields.io/pypi/v/datasette-nteract-data-explorer.svg)](https://pypi.org/project/datasette-nteract-data-explorer/)
[![Changelog](https://img.shields.io/github/v/release/hydrosquall/datasette-nteract-data-explorer?include_prereleases&label=changelog)](https://github.com/hydrosquall/datasette-nteract-data-explorer/releases)
[![Tests](https://github.com/hydrosquall/datasette-nteract-data-explorer/workflows/Test/badge.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/actions?query=workflow%3ATest)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/hydrosquall/datasette-nteract-data-explorer/blob/main/LICENSE)

An automatic data visualization plugin for the [Datasette](https://datasette.io/) ecosystem. See your dataset from multiple views with an easy-to-use, customizable menu-based interface.

## Demo

Try the [live demo](https://datasette-nteract-data-explorer.vercel.app/happy_planet_index/hpi_cleaned?_size=137)

![screenshot](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/yAuK9LRE/6802f849-315d-4a21-93b4-61c94d066bdc.jpg?v=f1ceee5ed70832d74e745b6508baeffb)

_Running Datasette with the Happy Planet Index dataset_

## Installation

Install this plugin in the same Python environment as Datasette.

```bash
datasette install datasette-nteract-data-explorer
```

## Usage

- Click "View in Data Explorer" to expand the visualization panel
- Click the icons on the right side to change the visualization type.
- Use the menus underneath the graphing area to configure your graph (e.g. change which columns to graph, colors to use, etc)
- Use "advanced settings" mode to override the inferred column types. For example, you may want to treat a number as a "string" to be able to use it as a category.
- See a [live demo](https://data-explorer.nteract.io/) of the original Nteract data-explorer component used in isolation.

You can run a minimal demo after the installation step

```bash
datasette -i demo/happy_planet_index.db
```

If you're interested in improving the demo site, you can run a copy of the site the extra metadata/plugins used in the [published demo](https://datasette-nteract-data-explorer.vercel.app).

```bash
make run-demo
```

Thank you for reading this far! If you use the Data Explorer in your own site and would like others to find it, you can [mention it here](https://github.com/hydrosquall/datasette-nteract-data-explorer/discussions/10).

## Development

See [contributing docs](./docs/CONTRIBUTING.md).

## Acknowledgements

- The [Data Explorer](https://github.com/nteract/data-explorer) was designed by Elijah Meeks. I co-maintain this project as part of the [Nteract](https://nteract.io/) open-source team. You can read about the design behind this tool [here](https://blog.nteract.io/designing-the-nteract-data-explorer-f4476d53f897)
- The data model is based on the [Frictionless Data Spec](https://specs.frictionlessdata.io/).
- This plugin was bootstrapped by Simon Willison's [Datasette plugin template](https://simonwillison.net/2020/Jun/20/cookiecutter-plugins/)
- Demo dataset from the [Happy Planet Index](https://happyplanetindex.org/) was cleaned by Doris Lee. This dataset was chosen because of its global appeal, modest size, and variety in column datatypes (numbers, low cardinality and high cardinality strings, booleans).
- Hosting for the demo site is provided by Vercel.

[![site hosted by vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=datasette-visualization-plugin-demos&utm_campaign=oss)
