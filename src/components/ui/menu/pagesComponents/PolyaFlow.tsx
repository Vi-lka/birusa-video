import React from 'react';
import ReactFlow, { useReactFlow, Position, useNodesState, useEdgesState, Background, MiniMap, ReactFlowProvider, Node } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode, { CustomNodeData } from './CustomNode';
import { useStore } from '@/utils/Store';

const nodeTypes = {
    custom: CustomNode,
};

export default function PolyaFlow({ handleClick } : { handleClick: (index: number, indexPer: number) => void}) {
    
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
                  title: 'Начало',
                  target: Position.Left,
                  source: Position.Right,
                  personId: 0,
                  onClick: handleClick,
                },
                position: { x: 0, y: 80 },
                className: 'custom-node',
            },
            {
              id: '1',
              type: 'custom',
              data: { 
                idTo: 1,
                title: 'Поля',
                target: Position.Left,
                source: Position.Right,
                personId: 1,
                onClick: handleClick,
              },
              position: { x: 300, y: 80 },
              className: 'custom-node',
            },
            {
                id: '11',
                type: 'custom',
                data: { 
                  idTo: 11,
                  title: 'Университет',
                  target: Position.Left,
                  source: Position.Right,
                  personId: 1,
                  onClick: handleClick,
                },
                position: { x: 570, y: 0 },
                className: 'custom-node',
            },
            {
                id: '12',
                type: 'custom',
                data: { 
                  idTo: 12,
                  title: 'Берег',
                  target: Position.Left,
                  source: Position.Right,
                  personId: 1,
                  onClick: handleClick,
                },
                position: { x: 600, y: 150 },
                className: 'custom-node',
            },
            {
                id: '111',
                type: 'custom',
                data: { 
                  idTo: 111,
                  title: 'Правда',
                  target: Position.Left,
                  source: Position.Right,
                  personId: 1,
                  onClick: handleClick,
                },
                position: { x: 900, y: -50 },
                className: 'custom-node',
            },
            {
                id: '112',
                type: 'custom',
                data: { 
                  idTo: 112,
                  title: 'Ложь',
                  target: Position.Left,
                  source: Position.Right,
                  personId: 1,
                  onClick: handleClick,
                },
                position: { x: 910, y: 50 },
                className: 'custom-node',
            },
            {
                id: '113',
                type: 'custom',
                data: { 
                  idTo: 113,
                  title: 'Окликнуть студентку',
                  target: Position.Left,
                  source: Position.Right,
                  personId: 1,
                  onClick: handleClick,
                },
                position: { x: 1200, y: 0 },
                className: 'custom-node',
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
                label: 'Выбор персонажа'
            },
            {
                id: 'polya-e1-11',
                source: '1',
                type: 'smoothstep',
                target: '11',
                animated: (currentVideo === Number(edges[1]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: 'В университет'
            },
            {
                id: 'polya-e1-12',
                source: '1',
                type: 'smoothstep',
                target: '12',
                animated: (currentVideo === Number(edges[1]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: 'На берег'
            },
            {
                id: 'polya-e11-111',
                source: '11',
                type: 'smoothstep',
                target: '111',
                animated: (currentVideo === Number(edges[3]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: 'Сказать правду'
            },
            {
                id: 'polya-e11-112',
                source: '11',
                type: 'smoothstep',
                target: '112',
                animated: (currentVideo === Number(edges[3]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: 'Соврать'
            },
            {
                id: 'polya-e111-113',
                source: '111',
                type: 'default',
                target: '113',
                animated: (currentVideo === Number(edges[5]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: ''
            },
            {
                id: 'polya-e112-113',
                source: '112',
                type: 'default',
                target: '113',
                animated: (currentVideo === Number(edges[6]?.source)),
                style: {stroke: '#80c41c', strokeWidth: 2},
                label: ''
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