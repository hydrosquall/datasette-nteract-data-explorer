

Build package for production: First, generate a wheel

```bash
python setup.py sdist
```

Then, to test it:

```
datasette install dist/datasette-nteract-data-explorer-0.1.0.tar.gz
```

Then, run datasette

```
datasette ~/Library/Safari/History.db
```

Then check plugins

```
http://127.0.0.1:8001/-/plugins
```
