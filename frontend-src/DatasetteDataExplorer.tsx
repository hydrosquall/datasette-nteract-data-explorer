import { h, FunctionComponent } from "preact";
// import useEffect and useState from preact hooks
import { useEffect, useState } from "preact/hooks";

import DataExplorer from "@nteract/data-explorer";

const basicData = {
  schema: {
    fields: [
      {
        name: "index",
        type: "integer",
      },
      {
        name: "param_session",
        type: "object",
      },
    ],
    primaryKey: ["index"],
  },
  data: [
    {
      index: 0,
      param_session: [
        {
          name: "foo",
        },
        {
          name: "foo",
        },
      ],
    },
  ],
};

//  DatasetteExplorer
// TODO... make component height configurable
// NOTE: datasette explorer URL params may collide with Datasette native URl params.
// Use filters with CAUTION! perhaps, may need to disable
// the native URL params integration with a pull request to Data-explorer.

interface DatasetteDataExplorerProps {
  dataUrl: string;
}

type DatasetteRow = Record<string, number | string>;
type DatasetteTable = DatasetteRow[];

// TODO: investigate d3 autoType
const dataFrameToFrictionlessSpec = (table: DatasetteTable) => {
  if (table.length === 0) {
    return null;
  }

  // we assume all rows have same keys
  const fieldNames = Object.keys(table[0]);

  const fields = fieldNames.map((col) => {
    // TODO: permit user to set datatype, e.g. calling status code
    // a color item. Or generation
    // TODO: check what columns appear across all rows
    // Throw warning if they don't all have same shape
    // Maybe parse datase
    // TODO: permit  datetime to be processed specially
    // TODO: permit user specified datatype mapping
    // https://github.com/nteract/data-explorer/blob/3f7cd5b336ab43ff25fcd283aa62a182a801375d/src/utilities/types.ts

    if (table.every((r) => typeof r[col] === "number")) {
      if (table.every((r) => Number.isInteger(r[col]))) {
        return { name: col, type: "integer" };
      }
      return { name: col, type: "number" };
    }

    if (table.every((r) => typeof r[col] === "boolean")) {
      return { name: col, type: "boolean" };
    }

    // if (col.meta.type === "datetime") {
    //   return { name: id, type: "datetime" };
    // }

    // Resolve upstream bug with nteract to fix table display
    // https://github.com/nteract/data-explorer/pull/41
    // if (col.kind === "string") {
    //   return { name: id, type: "string" };
    // }

    return { name: col, type: "string" };

    // return { name: id, type: "any" };
  });

  const data = {
    schema: {
      fields,
      primaryKey: [],
    },
    data: table,
    // data: table.map((r: any, i: number) => {
    //   const row = {
    //     ...r,
    //   };

    //   // FillNa - // Data integrity
    //   // We can remove this if we enforce data quality checks
    //   // higher up in the data pipeline
    //   // fields.forEach((field) => {
    //   //   if (row.type === "string" && row[field.name] === null) {
    //   //     row[field.name] = "";
    //   //   }
    //   // });
    //   return row;
    // }),
  };

  return data;
};

// TODO: allow setting datatype per column and/or doing light parsing.

export const DatasetteDataExplorer: FunctionComponent<
  DatasetteDataExplorerProps
> = (props) => {
  console.log("DatasetteDataExplorer", props);

  // fetch data from props.dataUrl in a useEffect hook
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(props.dataUrl)
      .then((response) => response.json())
      .then((json) => {
        // const rawData = json;
        const parsedData = dataFrameToFrictionlessSpec(json);

        setData(parsedData);
      });
  }, [props.dataUrl]);

  console.log({ data });

  return (
    <div className="DatasetteDataExplorer">
      {data && <DataExplorer data={data ?? basicData} />};
    </div>
  );
};
