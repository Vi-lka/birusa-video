import React from 'react';
import ReactFlow, { useReactFlow, Position, useNodesState, useEdgesState, Background, MiniMap, ReactFlowProvider, Node } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode, { CustomNodeData } from './CustomNode';
import { useStore } from '@/utils/Store';

const nodeTypes = {
    custom: CustomNode,
};

export default function PolyaFlow({ handleClick } : { handleClick: (index: number) => void}) {
    
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const { currentVideo } = useStore()

    React.useEffect(() => {

        setNodes([
            {
                id: '0',
                type: 'custom',
                data: { 
                  idTo: 0,
                  title: 'Выбери персонажа',
                  target: Position.Left,
                  source: Position.Right,
                  personId: 0,
                  onClick: handleClick,
                },
                position: { x: -100, y: 80 },
                className: 'custom-node',
            },
            {
              id: '1',
              type: 'custom',
              data: { 
                idTo: 1,
                title: 'Куда поедем?',
                target: Position.Left,
                source: Position.Right,
                personId: 1,
                onClick: handleClick,
              },
              position: { x: 300, y: 80 },
              className: 'custom-node',
            },
            {
              id: '2',
              sourcePosition: Position.Right,
              targetPosition: Position.Left,
              data: { label: 'A Node' },
              position: { x: 600, y: 0 },
            },
            {
              id: '3',
              sourcePosition: Position.Right,
              targetPosition: Position.Left,
              data: { label: 'Node 3' },
              position: { x: 600, y: 160 },
            },
            {
              id: '4',
              sourcePosition: Position.Right,
              targetPosition: Position.Left,
              data: { label: 'Node 4' },
              position: { x: 900, y: 0 },
            },
            {
              id: '5',
              sourcePosition: Position.Top,
              targetPosition: Position.Bottom,
              data: { label: 'Node 5' },
              position: { x: 900, y: 100 },
            },
        ])

        setEdges([
            {
                id: 'polya-e0-1',
                source: '0',
                type: 'smoothstep',
                target: '1',
                animated: (currentVideo === Number(edges[0]?.source)),
                style: {stroke: '#00aedd', strokeWidth: 2},
                label: 'Поля'
            },
            {
                id: 'polya-e1-2',
                source: '1',
                type: 'smoothstep',
                target: '2',
                animated: (currentVideo === Number(edges[1]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: 'В университет'
            },
            {
                id: 'polya-e1-3',
                source: '1',
                type: 'smoothstep',
                target: '3',
                animated: (currentVideo === Number(edges[1]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: 'На берег'
            },
            {
                id: 'polya-e1-4',
                source: '2',
                type: 'smoothstep',
                target: '4',
                label: 'хер]',
            },
            {
                id: 'polya-e3-5',
                source: '3',
                type: 'smoothstep',
                target: '5',
                // animated: true,
            },
        ])
    }, [currentVideo])
    

    function Flow() {
        const reactFlowInstance = useReactFlow();

        const onLoad = () => {
            reactFlowInstance.fitView();
        }

        return (
            <ReactFlow 
                nodes={nodes} 
                edges={edges} 
                onLoad={onLoad}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{padding: 0.3}}
            >
                <Background color="#80c41c" gap={12}/>
                <MiniMap nodeStrokeWidth={3} zoomable pannable />
            </ReactFlow>
        )
    }

    return (
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
    )
}