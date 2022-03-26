from setuptools import setup
import os
from wheel.bdist_wheel import bdist_wheel
from distutils.core import Command
from subprocess import check_output

VERSION = "0.1.0"
ROOT = os.path.dirname(os.path.abspath(__file__))

def get_long_description():
    with open(
        os.path.join(ROOT, "README.md"),
        encoding="utf8",
    ) as fp:
        return fp.read()


class BdistWheelWithBuildStatic(bdist_wheel):
    def run(self):
        self.run_command("build_static")
        return bdist_wheel.run(self)


class BuildStatic(Command):
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        check_output(["yarn", "install"], cwd=ROOT)
        check_output(["yarn", "run", "build"], cwd=ROOT)
        check_output(
            ["mkdir", "-p", "datasette_nteract_data_explorer/static"], cwd=ROOT
        )
        check_output(
            "mv dist/index.js datasette_nteract_data_explorer/static",
            shell=True,
            cwd=ROOT,
        )


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
    cmdclass={
        "bdist_wheel": BdistWheelWithBuildStatic,
        "build_static": BuildStatic,
    },
    python_requires=">=3.7",
)
