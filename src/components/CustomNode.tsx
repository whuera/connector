
import React from 'react';
import { NodeProps, Handle, Position } from 'reactflow';

type CustomNodeData = {
  label: string;
  weight: number;
  isConnected: boolean;
};

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data, id }) => (
  <div className={\`p-3 rounded-md border-2 \${data.isConnected ? 'bg-primary/20 border-primary' : 'bg-background border-border'}\`}>
    <Handle type="target" position={Position.Top} className="w-4 h-4 !bg-primary" />
    <p className="font-semibold">{data.label}</p>
    <p className="text-sm">Weight: {data.weight}</p>
    <p className="text-xs text-gray-500">ID: {id}</p>
    <Handle type="source" position={Position.Bottom} className="w-4 h-4 !bg-primary" />
  </div>
);

export default CustomNode;
                