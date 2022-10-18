
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

### Releasing new versions

To publish a new package to PyPI

1. Open a PR like this one: <https://github.com/hydrosquall/datasette-nteract-data-explorer/pull/11> which bumps the package version
2. Tag the PR after merging locally, then push

```bash
git tag 0.3.1
git push --tags
```

3. Open the [releases](https://github.com/hydrosquall/datasette-nteract-data-explorer/releases) page, and create a new release

![screenshot calling out the button for creating a new release](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/P8u7rZzw/2669d96b-3075-43b8-b85f-e0fe8e04ddf1.jpg?v=f2955a03fa423a7bd9aa0d7a74a1e018)


Once created, the release will automatically trigger the PyPi publish [workflow](https://github.com/hydrosquall/datasette-nteract-data-explorer/actions/workflows/publish.yml)
