import { mockXML } from "@/app/mock";

export const DEMO_XML_EXAMPLE = `name: name
description: description`;

export const COMPLEX_XML_DATA = mockXML;

export const XML_EDITOR_IMPORT = `import { XmlEditor } from 'webeditos-react'; `;
export const BASIC_XML_EDITOR_TSX = `<XmlEditor value={value} />`;

export const XML_EDITOR_WITH_FOOTER_CONFIG = `
<XmlEditor value={value} footerConfig={{ color: '#000', backgroundColor: '#efefef'}}/>
`;

export const XML_EDITOR_WITH_ACTION_PANEL = `<XmlEditor value={value} showActionsPanel={true} >
  <div slot="panel"> Actions Panel Content </div>
</XmlEditor>
`;
