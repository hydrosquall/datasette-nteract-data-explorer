import { h, FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Button } from "@modulz/design-system";
import {
  FrictionlessSpecField,
  FIELD_TYPES
} from "./datasette-data-explorer.types";

// a control panel for assigning custom frictionless types
interface FieldTypeCustomizerProps {
  // Programmatically inferred
  inferredFields: FrictionlessSpecField[];
  // user assigned
  customFields?: FrictionlessSpecField[];
  onSave: (fields: FrictionlessSpecField[]) => void;
}
export const FieldTypeCustomizerPanel: FunctionComponent<FieldTypeCustomizerProps> = ({
  inferredFields, customFields = [], onSave,
}) => {
  const [localCustomFields, setLocalCustomFields] = useState(customFields);
  return (
    <div>
      {/* add a save button for customFields */}
      <div style={{ marginBottom: 4, marginTop: 4 }}>
        <Button
          onClick={() => {
            onSave(localCustomFields);
          }}
        >
          Save settings (refresh page to apply)
        </Button>

        <Button
          onClick={() => {
            onSave([]);
          }}
          style={{ marginLeft: "4px" }}
        >
          Delete settings
        </Button>
      </div>

      <table>
        {inferredFields.map((field) => {
          const maybeCustomField = localCustomFields.find(
            (f) => f.name === field.name
          );

          const handleChange: h.JSX.GenericEventHandler<HTMLSelectElement> = (
            val
          ) => {
            if (val.target !== null) {
              const target = val.target as HTMLSelectElement;

              if (maybeCustomField) {
                // update existing entry
                const newCustomFields = localCustomFields.map((customField) => {
                  if (customField.name === field.name) {
                    return {
                      ...customField,
                      type: target.value as FrictionlessSpecField["type"],
                    };
                  }
                  return customField;
                });
                setLocalCustomFields(newCustomFields);
              } else {
                // add new entry
                setLocalCustomFields([
                  ...localCustomFields,
                  {
                    ...field,
                    type: target.value as FrictionlessSpecField["type"],
                  },
                ]);
              }
            }
          };

          return (
            <tr>
              <td>
                <label>{field.name}</label>
              </td>
              <td>
                <select
                  value={maybeCustomField ? maybeCustomField.type : field.type}
                  onChange={handleChange}
                >
                  {FIELD_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
