## Happy Planet Index

Data on metrics for wellbeing for 137 countries from happy planet index: <https://happyplanetindex.org/> . Data cleaned by Doris Lee for the Lux project.

```bash
wget https://raw.githubusercontent.com/lux-org/lux-datasets/master/data/hpi_cleaned.csv -P demo/
csvs-to-sqlite demo/hpi_cleaned.csv demo/happy_planet_index.db
```

TODO: Figure out how to get landlocked processed as either string or boolean without inference
