import { standardMock } from "@/app/mock";

export const DEMO_JSON_EXAMPLE = JSON.stringify(
  {
    name: "Example of JSON editor",
    description:
      "This example demonstrates the usage of the JSON editor component with different themes",
  },
  null,
  2
);

export const COMPLEX_JSON_DATA = JSON.stringify(standardMock, null, 2);
export const JSON_EDITOR_IMPORT = `import { JsonEditor } from 'webeditos-react'; `;
export const BASIC_JSON_EDITOR_TSX = `<JsonEditor value={value} />`;
export const EditorFooterConfig_Type_Example = `
{
  backgroundColor: string;
  color: string;
}`;

export const EDITOR_WITH_FOOTER_CONFIG = `
<JsonEditor value={value} footerConfig={{ color: '#000', backgroundColor: '#efefef'}}/>
`;

export const EDITOR_WITH_ACTION_PANEL = `<JsonEditor value={value} showActionsPanel={true} >
  <div slot="panel"> Actions Panel Content </div>
</JsonEditor>
`;
