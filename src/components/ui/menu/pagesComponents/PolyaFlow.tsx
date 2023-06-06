import React from 'react';
import ReactFlow, { useReactFlow, Position, useNodesState, useEdgesState, Background, MiniMap, ReactFlowProvider, Node } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode, { CustomNodeData } from './CustomNode';
import { useStore } from '@/utils/Store';

const nodeTypes = {
    custom: CustomNode,
};

export default function PolyaFlow({ handleClick }: { handleClick: (index: number, indexPer: number) => void }) {

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
                position: { x: -30, y: 0 },
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
                position: { x: 300, y: 0 },
                className: 'custom-node',
            },
            {
                id: '11',
                type: 'custom',
                data: {
                    idTo: 11,
                    title: 'В университет',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 500, y: -50 },
                className: 'custom-node',
            },
            {
                id: '12',
                type: 'custom',
                data: {
                    idTo: 12,
                    title: 'На берег',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 500, y: 50 },
                className: 'custom-node',
            },
            {
                id: '121',
                type: 'custom',
                data: {
                    idTo: 121,
                    title: 'Поехать на ленты',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 710, y: 50 },
                className: 'custom-node',
            },
            {
                id: '122',
                type: 'custom',
                data: {
                    idTo: 122,
                    title: 'Побыть с папой',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 720, y: 150 },
                className: 'custom-node',
            },
            {
                id: '111',
                type: 'custom',
                data: {
                    idTo: 111,
                    title: 'Сказать правду',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 780, y: -50 },
                className: 'custom-node',
            },
            {
                id: '112',
                type: 'custom',
                data: {
                    idTo: 112,
                    title: 'Соврать',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 815, y: -150 },
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
                position: { x: 1070, y: -50 },
                className: 'custom-node',
            },
            {
                id: '1131',
                type: 'custom',
                data: {
                    idTo: 1131,
                    title: 'Промолчать',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 1400, y: -150 },
                className: 'custom-node',
            },
            {
                id: '1132',
                type: 'custom',
                data: {
                    idTo: 1132,
                    title: 'Ответить',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 1430, y: -50 },
                className: 'custom-node',
            },
            {
                id: '131',
                type: 'custom',
                data: {
                    idTo: 131,
                    title: 'Вдохновиться Бирюсой',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 1660, y: -50 },
                className: 'custom-node',
            },
            {
                id: '132',
                type: 'custom',
                data: {
                    idTo: 132,
                    title: 'Проявить себя',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 1660, y: -150 },
                className: 'custom-node',
            },
            {
                id: '1311',
                type: 'custom',
                data: {
                    idTo: 1311,
                    title: 'Ждут друзья',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 2000, y: -150 },
                className: 'custom-node',
            },
            {
                id: '1321',
                type: 'custom',
                data: {
                    idTo: 1321,
                    title: 'Нужно домой',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 2000, y: -50 },
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
                style: { stroke: '#00aedd', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1-11',
                source: '1',
                type: 'smoothstep',
                target: '11',
                animated: (currentVideo === Number(edges[1]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e11-111',
                source: '11',
                type: 'smoothstep',
                target: '111',
                animated: (currentVideo === Number(edges[3]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e11-112',
                source: '11',
                type: 'smoothstep',
                target: '112',
                animated: (currentVideo === Number(edges[3]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e111-113',
                source: '111',
                type: 'smoothstep',
                target: '113',
                animated: (currentVideo === Number(edges[5]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e112-113',
                source: '112',
                type: 'smoothstep',
                target: '113',
                animated: (currentVideo === Number(edges[6]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e113-1131',
                source: '113',
                type: 'smoothstep',
                target: '1131',
                animated: (currentVideo === Number(edges[8]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e113-1132',
                source: '113',
                type: 'smoothstep',
                target: '1132',
                animated: (currentVideo === Number(edges[8]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1-12',
                source: '1',
                type: 'smoothstep',
                target: '12',
                animated: (currentVideo === Number(edges[1]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e12-121',
                source: '12',
                type: 'smoothstep',
                target: '121',
                animated: (currentVideo === Number(edges[10]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e12-122',
                source: '12',
                type: 'smoothstep',
                target: '122',
                animated: (currentVideo === Number(edges[10]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1131-131',
                source: '1131',
                type: 'default',
                target: '131',
                animated: (currentVideo === Number(edges[10]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1131-132',
                source: '1131',
                type: 'default',
                target: '132',
                animated: (currentVideo === Number(edges[10]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1132-131',
                source: '1132',
                type: 'default',
                target: '131',
                animated: (currentVideo === Number(edges[12]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1132-132',
                source: '1132',
                type: 'default',
                target: '132',
                animated: (currentVideo === Number(edges[12]?.source)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
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
                fitViewOptions={{ padding: 0.3 }}
            >
                <Background color="#80c41c" gap={12} />
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