import {
  DatasetteTable,
  FrictionlessSpec,
  FrictionlessSpecField,
} from "./datasette-data-explorer.types";

// TODO: investigate d3 autoType
export const dataFrameToFrictionlessSpec = (
  table: DatasetteTable
): FrictionlessSpec | undefined => {
  if (table.length === 0) {
    return undefined;
  }

  // we assume all rows have same keys
  const fieldNames = Object.keys(table[0]);

  const detectedFields = fieldNames.map((col) => {
    // TODO: permit user to set datatype, e.g. calling status code
    // a color item. Or generation
    // TODO: check what columns appear across all rows
    // Throw warning if they don't all have same shape
    // Maybe parse datase
    // TODO: permit datetime to be processed specially
    // TODO: permit user specified datatype mapping
    // https://github.com/nteract/data-explorer/blob/3f7cd5b336ab43ff25fcd283aa62a182a801375d/src/utilities/types.ts
    if (table.every((r) => typeof r[col] === "number")) {
      if (table.every((r) => Number.isInteger(r[col]))) {
        return { name: col, type: "integer" as const };
      }
      return { name: col, type: "number" as const };
    }

    if (table.every((r) => typeof r[col] === "boolean")) {
      return { name: col, type: "boolean" as const };
    }

    if (table.every((r) => typeof r[col] === "object")) {
      return { name: col, type: "object" as const };
    }

    // if (col.meta.type === "datetime") {
    //   return { name: id, type: "datetime" };
    // }
    // Resolve upstream bug with nteract to fix table display
    // https://github.com/nteract/data-explorer/pull/41
    // if (col.kind === "string") {
    //   return { name: id, type: "string" };
    // }
    return { name: col, type: "string" as const };
  });

  // Remove object fields, they break frictionless
  const fields = detectedFields.filter(
    (f) => f.type !== "object"
  ) as FrictionlessSpecField[]; // hardcode the cleaning

  const data = {
    schema: {
      fields,
      primaryKey: [] as string[],
    },
    data: table.map((r: any, i: number) => {
      const row: Record<string, string | number> = {};
      // FillNa - // Data integrity
      // We can remove this if we enforce data quality checks
      // higher up in the data pipeline
      fields.forEach((field) => {
        if (field.type === "string" && r[field.name] === null) {
          row[field.name] = "";
        } else {
          row[field.name] = r[field.name];
        }
      });
      return row;
    }),
  };

  return data;
};
