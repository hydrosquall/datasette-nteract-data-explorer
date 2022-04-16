
.PHONY: publish-vercel, install

install:
	yarn install
	pip install -r demo/requirements.txt
	pip install -e .

# https://github.com/simonw/datasette-publish-vercel#other-options
publish-vercel: install
	 datasette publish vercel demo/happy_planet_index.db \
  			--project=datasette-nteract-data-explorer \
				--scope=datasette-visualization-plugin-demos \
				--token=${VERCEL_TOKEN} \
				--vercel-json=vercel.json
