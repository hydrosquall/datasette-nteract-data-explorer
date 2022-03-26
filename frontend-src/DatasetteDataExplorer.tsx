import { h, FunctionComponent } from "preact";
import { useEffect, useState, useMemo } from "preact/hooks";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@modulz/design-system";

import DataExplorer from "@nteract/data-explorer";
import localforage from "localforage";
import { dataFrameToFrictionlessSpec } from "./datasette-data-explorer-helpers";
import {
  FrictionlessSpecField,
  FrictionlessSpec,
} from "./datasette-data-explorer.types";
import { FieldTypeCustomizerPanel } from "./FieldTypeCustomizer";

interface DatasetteDataExplorerProps {
  dataUrl: string;
}

export const DatasetteDataExplorer: FunctionComponent<
  DatasetteDataExplorerProps
> = (props) => {
  const { dataUrl } = props;
  const [frictionlessData, setFrictionlessData] = useState<FrictionlessSpec>();
  const [customFields, setCustomFields] = useState<FrictionlessSpecField[]>();

  useEffect(() => {

    // TODO: Swap dataURL for
    // option that checks the columns metadata instead of just
    // checking the first row.
    fetch(props.dataUrl)
      .then((response) => response.json())
      .then((json) => {
        const maybeFrictionlessDataSpec = dataFrameToFrictionlessSpec(json);
        setFrictionlessData(maybeFrictionlessDataSpec);
      });
  }, [props.dataUrl]);

  // Combine user defined with inferred field types
  const combinedData = useMemo(() => {
    if (frictionlessData && customFields) {
      return {
        ...frictionlessData,
        schema: {
          ...frictionlessData.schema,
          fields: frictionlessData.schema.fields.map((field) => {
            const maybeCustomField = customFields.find(
              (f) => f.name === field.name
            );
            return {
              ...field,
              type: maybeCustomField ? maybeCustomField.type : field.type,
            };
          }),
        },
      };
    }
    return frictionlessData;
  }, [frictionlessData, customFields]);

  // Load custom field type assignments from localStorage
  useEffect(() => {
    // TODO: rethink how cache works, since it may change based
    // on which URL params are included in the URL
    localforage.getItem(dataUrl, function (err, value) {
      if (value) {
        setCustomFields(value as any);
      } else {
        console.warn(err);
      }
    });
  }, []);

  // Handler to save custom fields to local storage
  const handleSave = (field: FrictionlessSpecField[]) => {
    localforage.setItem(dataUrl, field, function (err, value) {
      if (err) {
        console.warn(err);
      }
    });
  };

  return (
    <div className="datasette-data-explorer">
      {combinedData && (
        <Accordion type="single">
          <AccordionItem value="default-1">
            <AccordionTrigger>
              <Button>
                Toggle Data Explorer ({combinedData.data.length} rows )
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              <div style={{ marginBottom: 16 }}>
                <DataExplorer data={combinedData} />
                <details>
                  <summary>
                    Advanced: Customize field types (
                    {combinedData.schema.fields.length} fields)
                  </summary>
                  <div>
                    <FieldTypeCustomizerPanel
                      inferredFields={combinedData.schema.fields}
                      customFields={customFields}
                      onSave={handleSave}
                    />
                  </div>
                </details>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};
