"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ui_1 = require("./ui");
const NodeForm = ({ onAddNode }) => {
    const [nodeName, setNodeName] = (0, react_1.useState)('');
    const [nodeWeight, setNodeWeight] = (0, react_1.useState)(0);
    const handleSubmit = (0, react_1.useCallback)(() => {
        onAddNode(nodeName, nodeWeight);
        setNodeName('');
        setNodeWeight(0);
    }, [nodeName, nodeWeight, onAddNode]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ui_1.Label, { htmlFor: "nodeName" }, "Node Name"),
        react_1.default.createElement(ui_1.Input, { id: "nodeName", value: nodeName, onChange: (e) => setNodeName(e.target.value), placeholder: "Enter node name" }),
        react_1.default.createElement(ui_1.Label, { htmlFor: "nodeWeight" }, "Node Weight"),
        react_1.default.createElement(ui_1.Input, { id: "nodeWeight", type: "number", value: nodeWeight, onChange: (e) => setNodeWeight(Number(e.target.value)), placeholder: "Enter node weight" }),
        react_1.default.createElement(ui_1.Button, { onClick: handleSubmit }, "Add Node")));
};
exports.default = NodeForm;
