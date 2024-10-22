
import React, { useState, useCallback } from 'react';
//import * as React from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './components/CustomNode';
import NodeForm from './components/NodeForm';

const nodeTypes = {
  custom: CustomNode,
};

const WeightedNodeConnector: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const addNode = useCallback((label: string, weight: number) => {
    const newNode = {
      id: \`\${nodes.length + 1}\`,
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
            