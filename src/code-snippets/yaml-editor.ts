export const DEMO_YAML_EXAMPLE = `name: name
description: description`;

export const COMPLEX_YAML_DATA = `company: spacelift
domain:
 - devops
 - devsecops
tutorial:
  - yaml:
      name: "YAML Ain't Markup Language"
      type: awesome
      born: 2001
  - json:
      name: JavaScript Object Notation
      type: great
      born: 2001
  - xml:
      name: Extensible Markup Language
      type: good
      born: 1996
author: omkarbirade
published: true`;

export const YAML_EDITOR_IMPORT = `import { YamlEditor } from 'webeditos-react'; `;
export const BASIC_YAML_EDITOR_TSX = `<YamlEditor value={value} />`;

export const YAML_EDITOR_WITH_FOOTER_CONFIG = `
<YamlEditor value={value} footerConfig={{ color: '#000', backgroundColor: '#efefef'}}/>
`;

export const YAML_EDITOR_WITH_ACTION_PANEL = `<YamlEditor value={value} showActionsPanel={true} >
  <div slot="panel"> Actions Panel Content </div>
</YamlEditor>
`;
