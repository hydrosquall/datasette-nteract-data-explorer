### Notes

> this is not official documentation, and should be regarded as a "scratch pad".

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

Use something resembling these two commands in tandem

```
yarn run build
```

```
python setup.py sdist &&  datasette install dist/datasette-nteract-data-explorer-0.1.0.tar.gz && datasette ~/Library/Safari/History.db
```

### Sample Datasets

- <http://2016.padjo.org/tutorials/sqlite-your-browser-history/>

### Research links

- <https://github.com/metonym/parcel-preact-typescript>
- The parcel warning messages were very helpful for realizing that the bundles were much bigger than I had hoped
- At some point, we may want to revisit tree-shaking: <https://parceljs.org/features/code-splitting/>

### Mini roadmap

- The "query" view type loses this plugin, we should bring that back
- Otherwise, people will lose data explorer if they want to apply a custom limit.
