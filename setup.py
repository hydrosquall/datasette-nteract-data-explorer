from setuptools import setup
import os

VERSION = "0.2.3"
ROOT = os.path.dirname(os.path.abspath(__file__))

def get_long_description():
    with open(
        os.path.join(ROOT, "README.md"),
        encoding="utf8",
    ) as fp:
        return fp.read()


setup(
    name="datasette-nteract-data-explorer",
    description="automatic visual data explorer for datasette",
    long_description=get_long_description(),
    long_description_content_type="text/markdown",
    author="Cameron Yick",
    url="https://github.com/hydrosquall/datasette-nteract-data-explorer",
    project_urls={
        "Issues": "https://github.com/hydrosquall/datasette-nteract-data-explorer/issues",
        "CI": "https://github.com/hydrosquall/datasette-nteract-data-explorer/actions",
        "Changelog": "https://github.com/hydrosquall/datasette-nteract-data-explorer/releases",
    },
    license="Apache License, Version 2.0",
    classifiers=[
        "Framework :: Datasette",
        "License :: OSI Approved :: Apache Software License",
    ],
    version=VERSION,
    packages=["datasette_nteract_data_explorer"],
    entry_points={
        "datasette": ["nteract_data_explorer = datasette_nteract_data_explorer"]
    },
    install_requires=["datasette"],
    extras_require={"test": ["pytest", "pytest-asyncio"]},
    package_data={"datasette_nteract_data_explorer": ["static/*", "templates/*"]},
    python_requires=">=3.7",
)
