
.PHONY: publish-vercel, install

# None of this is needed since publish is happening
# in the CI environment using the statics from PyPI, not from a local build
# Need to re-evaluate how to use locally created plugins/statics for this in a future iteration. For now, just use published assets for simplicity.

install:
	pip install -r demo/requirements.txt
# 	# pip install -e .

# https://github.com/simonw/datasette-publish-vercel#other-options
publish-vercel: install

	 datasette publish vercel demo/happy_planet_index.db \
  			--project=datasette-nteract-data-explorer \
				--scope=datasette-visualization-plugin-demos \
				--token=${VERCEL_TOKEN} \
				--vercel-json=vercel.json \
				--install datasette-nteract-data-explorer \
				--public
