"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactflow_1 = require("reactflow");
require("reactflow/dist/style.css");
const CustomNode_1 = __importDefault(require("./components/CustomNode"));
const nodeTypes = {
    custom: CustomNode_1.default,
};
const WeightedNodeConnector = () => {
    const [nodes, setNodes, onNodesChange] = (0, reactflow_1.useNodesState)([]);
    const [edges, setEdges, onEdgesChange] = (0, reactflow_1.useEdgesState)([]);
    const onConnect = (0, react_1.useCallback)((params) => setEdges((eds) => (0, reactflow_1.addEdge)(params, eds)), [setEdges]);
    const addNode = (0, react_1.useCallback)((label, weight) => {
        const newNode = {
            id: 
        } `\${nodes.length + 1}\`,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label, weight, isConnected: false },
      type: 'custom',
    };
    setNodes((nds) => nds.concat(newNode));
  }, [nodes, setNodes]);

  return (
    <div className="flex flex-col w-full h-screen">
      <NodeForm onAddNode={addNode} />
      <div className="flex-grow">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        />
      </div>
    </div>
  );
};

export default WeightedNodeConnector;
            ;
    });
};
