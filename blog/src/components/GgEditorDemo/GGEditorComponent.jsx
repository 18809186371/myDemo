import GGEditor, { Flow } from 'gg-editor';
import React from 'react';


export default class GGEditorComponent extends React.Component {
    render() {
        return <GGEditor>
        <Flow style={{ width: 500, height: 500 }} data={data} />
      </GGEditor>;
    }
}
const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 55,
      y: 55,
    },
    {
      id: '1',
      label: 'Node',
      x: 55,
      y: 255,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      target: '1',
    },
  ],
};

