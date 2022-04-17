
.PHONY: publish-vercel, install

# Flags used during local dev and in the published demo.
DATASETTE_DEMO_FLAGS := \
    --plugins-dir=demo/demo-plugins \
		--metadata=demo/demo-metadata.yml

# We didn't need to install yarn, npm packages etc
# in the CI environment using the statics from PyPI, not from contents of the local repo.
# We need to re-evaluate how to use locally created plugins/statics for this someday. For now, just use published assets on PyPI for simplicity.

install:
	pip install -r demo/requirements.txt

# https://github.com/simonw/datasette-publish-vercel#other-options
publish-vercel: install
	 datasette publish vercel demo/happy_planet_index.db \
  			--project=datasette-nteract-data-explorer \
				--scope=datasette-visualization-plugin-demos \
				--token=${VERCEL_TOKEN} \
				--install datasette-nteract-data-explorer \
				--public \
				${DATASETTE_DEMO_FLAGS}


run-demo:
	datasette -i demo/happy_planet_index.db \
		${DATASETTE_DEMO_FLAGS}
# --template-dir=demo/demo-templates
