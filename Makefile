
.PHONY: publish-vercel, install

install:
	yarn install
	pip install -r demo/requirements.txt
	pip install -e .

publish-vercel: install
	 datasette publish vercel demo/happy_planet_index.db \
  			--project=datasette-nteract-data-explorer \
				--scope=datasette-visualization-plugin-demo \
  			--vercel-json vercel.json
