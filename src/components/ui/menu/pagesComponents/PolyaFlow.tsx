import React from 'react';
import ReactFlow, { useReactFlow, Position, useNodesState, useEdgesState, Background, MiniMap, ReactFlowProvider, Node } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
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
                position: { x: 1400, y: -50 },
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
                position: { x: 1430, y: -150 },
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
                position: { x: 525, y: 50 },
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
                position: { x: 755, y: 50 },
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
                position: { x: 765, y: 150 },
                className: 'custom-node',
            },
            {
                id: '123',
                type: 'custom',
                data: {
                    idTo: 123,
                    title: 'Окликнуть студентку',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 1070, y: 50 },
                className: 'custom-node',
            },
            {
                id: '1231',
                type: 'custom',
                data: {
                    idTo: 1231,
                    title: 'Промолчать',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 1400, y: 50 },
                className: 'custom-node',
            },
            {
                id: '1232',
                type: 'custom',
                data: {
                    idTo: 1232,
                    title: 'Ответить',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 1430, y: 150 },
                className: 'custom-node',
            },
            {
                id: '1310-p',
                type: 'custom',
                data: {
                    title: '~',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 1630, y: 2 },
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
                position: { x: 1740, y: 50 },
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
                position: { x: 1780, y: -50 },
                className: 'custom-node',
            },
            {
                id: '1311-2-p',
                type: 'custom',
                data: {
                    title: '~',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 2065, y: 2 },
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
                position: { x: 2170, y: -50 },
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
                position: { x: 2170, y: 50 },
                className: 'custom-node',
            },
            {
                id: '14',
                type: 'custom',
                data: {
                    idTo: 14,
                    title: 'Отправить заявку',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                    onClick: handleClick,
                },
                position: { x: 2410, y: 0 },
                className: 'custom-node',
            },
            {
                id: '15-1',
                type: 'custom',
                data: {
                    idTo: 15,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 2700, y: 250 },
                className: 'custom-node',
            },
            {
                id: '15-2',
                type: 'custom',
                data: {
                    idTo: 15,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 2700, y: 150 },
                className: 'custom-node',
            },
            {
                id: '15-3',
                type: 'custom',
                data: {
                    idTo: 15,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 2700, y: 50 },
                className: 'custom-node',
            },
            {
                id: '15-4',
                type: 'custom',
                data: {
                    idTo: 15,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 2700, y: -50 },
                className: 'custom-node',
            },
            {
                id: '15-5',
                type: 'custom',
                data: {
                    idTo: 15,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 2700, y: -150 },
                className: 'custom-node',
            },
            {
                id: '15-6',
                type: 'custom',
                data: {
                    idTo: 15,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 1,
                },
                position: { x: 2700, y: -250 },
                className: 'custom-node',
            },
        ])

        setEdges([
            {
                id: 'polya-e0-1',
                source: '0',
                type: 'default',
                target: '1',
                animated: (currentVideo === 0),
                style: { stroke: '#00aedd', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1-11',
                source: '1',
                type: 'default',
                target: '11',
                animated: (currentVideo === 1),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e11-111',
                source: '11',
                type: 'default',
                target: '111',
                animated: (currentVideo === 11),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e11-112',
                source: '11',
                type: 'default',
                target: '112',
                animated: (currentVideo === 11),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e111-113',
                source: '111',
                type: 'default',
                target: '113',
                animated: (currentVideo === 111),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e112-113',
                source: '112',
                type: 'default',
                target: '113',
                animated: (currentVideo === 112),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e113-1131',
                source: '113',
                type: 'default',
                target: '1131',
                animated: (currentVideo === 113),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e113-1132',
                source: '113',
                type: 'default',
                target: '1132',
                animated: (currentVideo === 113),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            
            {
                id: 'polya-e1131-1310-p',
                source: '1131',
                type: 'default',
                target: '1310-p',
                animated: (currentVideo === 1131),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1132-1310-p',
                source: '1132',
                type: 'default',
                target: '1310-p',
                animated: (currentVideo === 1132),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1-12',
                source: '1',
                type: 'default',
                target: '12',
                animated: (currentVideo === 1),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e12-121',
                source: '12',
                type: 'default',
                target: '121',
                animated: (currentVideo === 12),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e12-122',
                source: '12',
                type: 'default',
                target: '122',
                animated: (currentVideo === 12),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e121-123',
                source: '121',
                type: 'default',
                target: '123',
                animated: (currentVideo === 121),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e122-123',
                source: '122',
                type: 'default',
                target: '123',
                animated: (currentVideo === 122),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e123-1231',
                source: '123',
                type: 'default',
                target: '1231',
                animated: (currentVideo === 123),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e123-1232',
                source: '123',
                type: 'default',
                target: '1232',
                animated: (currentVideo === 123),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1231-1310-p',
                source: '1231',
                type: 'default',
                target: '1310-p',
                animated: (currentVideo === 1231),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1232-1310-p',
                source: '1232',
                type: 'default',
                target: '1310-p',
                animated: (currentVideo === 1232),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1310-p-132',
                source: '1310-p',
                type: 'default',
                target: '132',
                animated: ((currentVideo === 1132) || (currentVideo === 1131) || (currentVideo === 1231) || (currentVideo === 1232)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1310-p-131',
                source: '1310-p',
                type: 'default',
                target: '131',
                animated: ((currentVideo === 1132) || (currentVideo === 1131) || (currentVideo === 1231) || (currentVideo === 1232)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e131-1311-2-p',
                source: '131',
                type: 'default',
                target: '1311-2-p',
                animated: (currentVideo === 131),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e132-1311-2-p',
                source: '132',
                type: 'default',
                target: '1311-2-p',
                animated: (currentVideo === 132),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1311-2-p-1311',
                source: '1311-2-p',
                type: 'default',
                target: '1311',
                animated: ((currentVideo === 131) || (currentVideo === 132)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1311-2-p-1321',
                source: '1311-2-p',
                type: 'default',
                target: '1321',
                animated: ((currentVideo === 131) || (currentVideo === 132)),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1311-14',
                source: '1311',
                type: 'default',
                target: '14',
                animated: (currentVideo === 1311),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e1321-14',
                source: '1321',
                type: 'default',
                target: '14',
                animated: (currentVideo === 1321),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e14-15-1',
                source: '14',
                type: 'default',
                target: '15-1',
                animated: (currentVideo === 14),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e14-15-2',
                source: '14',
                type: 'default',
                target: '15-2',
                animated: (currentVideo === 14),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e14-15-3',
                source: '14',
                type: 'default',
                target: '15-3',
                animated: (currentVideo === 14),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e14-15-4',
                source: '14',
                type: 'default',
                target: '15-4',
                animated: (currentVideo === 14),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e14-15-5',
                source: '14',
                type: 'default',
                target: '15-5',
                animated: (currentVideo === 14),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e14-15-6',
                source: '14',
                type: 'default',
                target: '15-6',
                animated: (currentVideo === 14),
                style: { stroke: '#80c41c', strokeWidth: 2 },
                label: ''
            },
        ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
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