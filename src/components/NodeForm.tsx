
import React, { useState, useCallback } from 'react';
import { Button, Input, Label } from './ui';

interface NodeFormProps {
  onAddNode: (label: string, weight: number) => void;
}

const NodeForm: React.FC<NodeFormProps> = ({ onAddNode }) => {
  const [nodeName, setNodeName] = useState('');
  const [nodeWeight, setNodeWeight] = useState<number>(0);

  const handleSubmit = useCallback(() => {
    onAddNode(nodeName, nodeWeight);
    setNodeName('');
    setNodeWeight(0);
  }, [nodeName, nodeWeight, onAddNode]);

  return (
    <div>
      <Label htmlFor="nodeName">Node Name</Label>
      <Input id="nodeName" value={nodeName} onChange={(e) => setNodeName(e.target.value)} placeholder="Enter node name" />
      <Label htmlFor="nodeWeight">Node Weight</Label>
      <Input id="nodeWeight" type="number" value={nodeWeight} onChange={(e) => setNodeWeight(Number(e.target.value))} placeholder="Enter node weight" />
      <Button onClick={handleSubmit}>Add Node</Button>
    </div>
  );
};

export default NodeForm;
                