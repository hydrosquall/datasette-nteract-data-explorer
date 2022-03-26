//  DatasetteExplorer
// TODO... make component height configurable
// NOTE: datasette explorer URL params may collide with Datasette native URl params.
// Use filters with CAUTION! perhaps, may need to disable
// the native URL params integration with a pull request to Data-explorer.

type DatasetteRow = Record<string, number | string>;
export type DatasetteTable = DatasetteRow[];
export const FIELD_TYPES = [
  "boolean",
  "number",
  "integer",
  "datetime",
  "string",
] as const;

export interface FrictionlessSpecField {
  name: string;
  type: typeof FIELD_TYPES[number];
}

export interface FrictionlessSpec {
  schema: {
    fields: FrictionlessSpecField[];
    primaryKey: string[];
  };
  data: DatasetteTable;
}
