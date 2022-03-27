### Notes

A test command:

```bash
datasette ~/Library/Safari/History.db  --plugins-dir=plugins/
```

```bash
datasette ~/Library/Safari/History.db  --plugins-dir=plugins/ --static assets:dist/
```

--static assets:static-files/

### Related GH Issues

- <https://github.com/simonw/datasette/issues/1688>
- Look into fixing <https://github.com/nteract/data-explorer/issues/83>
- Issue with parcel / SWC bundler: comments aren't stripped, code is not minified. <https://github.com/parcel-bundler/parcel/issues/657>
  - <https://parceljs.org/features/production/>
  - Size audit: <https://bundle-buddy.com/parcel>
  - Building for web target is not working. Needed to force it by building an HTML file. Investigate why later.
    - <https://parceljs.org/features/targets/>
    - <https://github.com/parcel-bundler/parcel/issues/7101>

### Bundling

Use these two commands

```
yarn run build
```

```
python setup.py sdist &&  datasette install dist/datasette-nteract-data-explorer-0.1.0.tar.gz && datasette ~/Library/Safari/History.db
```

### Sample Datasets

- <http://2016.padjo.org/tutorials/sqlite-your-browser-history/>
- <https://github.com/metonym/parcel-preact-typescript>
