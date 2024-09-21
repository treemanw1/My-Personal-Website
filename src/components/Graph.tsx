import React from 'react'
import ForceGraph2D from 'react-force-graph-2d';
import { navigate } from 'astro:transitions/client';

const data = {
    nodes: [ 
      { id: "1", name: "Software Engineering", val: 5},
      { id: "2", name: "Book Reviews", val: 4},
      { id: "3", name: "Best Practices", val: 3},
      { id: "4", name: "Abstraction", val: 2},
      { id: "5", name: "Premature Abstraction", val: 1, link: "premature-abstraction"},
    ],
     links: [
        { source: "1", target: "3", value: 1 },
        { source: "3", target: "4", value: 1 },
        { source: "4", target: "5", value: 1 },
    ]
}
const handleClick = (node: any) => {
    if (node.link !== undefined) {
        return navigate(node.link);
    }
};
  const handleNodeDrag = () => {
	console.log("drag");
};
const Graph = () => {
    return (
      <ForceGraph2D
        graphData={data}
        onNodeClick={handleClick}
        nodeAutoColorBy={"name"}
        nodeVal={(node: any) => node.val}
      /> 
    )
}

export default Graph;