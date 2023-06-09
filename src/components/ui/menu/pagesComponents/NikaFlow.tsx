import React from 'react';
import ReactFlow, { useReactFlow, Position, useNodesState, useEdgesState, MiniMap, ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import { useStore } from '@/utils/Store';

const nodeTypes = {
    custom: CustomNode,
};

export default function NikaFlow({ handleClick }: { handleClick: (index: number, indexPer: number) => void }) {

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
                id: '3',
                type: 'custom',
                data: {
                    idTo: 3,
                    title: 'Ника',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 300, y: 0 },
                className: 'custom-node',
            },
            {
                id: '31',
                type: 'custom',
                data: {
                    idTo: 31,
                    title: 'Одобрить заявку',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 535, y: -50 },
                className: 'custom-node',
            },
            {
                id: '32',
                type: 'custom',
                data: {
                    idTo: 32,
                    title: 'Отклонить заявку',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 530, y: 50 },
                className: 'custom-node',
            },
            {
                id: '33',
                type: 'custom',
                data: {
                    idTo: 33,
                    title: 'От организаторов «Феста»',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 850, y: 50 },
                className: 'custom-node',
            },
            {
                id: '34',
                type: 'custom',
                data: {
                    idTo: 34,
                    title: 'От друга',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 940, y: 150 },
                className: 'custom-node',
            },
            {
                id: '311',
                type: 'custom',
                data: {
                    idTo: 311,
                    title: 'В столовую',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1260, y: -150 },
                className: 'custom-node',
            },
            {
                id: '312',
                type: 'custom',
                data: {
                    idTo: 312,
                    title: 'На прогулку',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1255, y: -50 },
                className: 'custom-node',
            },
            {
                id: '35',
                type: 'custom',
                data: {
                    idTo: 35,
                    title: 'Окликнуть Нику',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1240, y: 150 },
                className: 'custom-node',
            },
            {
                id: '3-p',
                type: 'custom',
                data: {
                    title: '~',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                },
                position: { x: 1630, y: -100 },
                className: 'custom-node',
            },
            {
                id: '351',
                type: 'custom',
                data: {
                    idTo: 351,
                    title: 'Позвать прогуляться',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1530, y: 50 },
                className: 'custom-node',
            },
            {
                id: '352',
                type: 'custom',
                data: {
                    idTo: 352,
                    title: 'Оставить одну',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1900, y: 250 },
                className: 'custom-node',
            },
            {
                id: '3511',
                type: 'custom',
                data: {
                    idTo: 3511,
                    title: 'Поехать к подруге',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1880, y: 50 },
                className: 'custom-node',
            },
            {
                id: '3512',
                type: 'custom',
                data: {
                    idTo: 3512,
                    title: 'Помочь на работе',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1880, y: 150 },
                className: 'custom-node',
            },
            {
                id: '3111',
                type: 'custom',
                data: {
                    idTo: 3111,
                    title: 'О форуме',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1920, y: -150 },
                className: 'custom-node',
            },
            {
                id: '3121',
                type: 'custom',
                data: {
                    idTo: 3121,
                    title: 'О проекте',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                    onClick: handleClick,
                },
                position: { x: 1920, y: -50 },
                className: 'custom-node',
            },
            {
                id: '36-1',
                type: 'custom',
                data: {
                    idTo: 36,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                },
                position: { x: 2200, y: -150 },
                className: 'custom-node',
            },
            {
                id: '36-2',
                type: 'custom',
                data: {
                    idTo: 36,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                },
                position: { x: 2200, y: -50 },
                className: 'custom-node',
            },
            {
                id: '36-3',
                type: 'custom',
                data: {
                    idTo: 36,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                },
                position: { x: 2200, y: 50 },
                className: 'custom-node',
            },
            {
                id: '36-4',
                type: 'custom',
                data: {
                    idTo: 36,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                },
                position: { x: 2200, y: 150 },
                className: 'custom-node',
            },
            {
                id: '36-5',
                type: 'custom',
                data: {
                    idTo: 36,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 3,
                },
                position: { x: 2200, y: 250 },
                className: 'custom-node',
            },
        ])

        setEdges([
            {
                id: 'polya-e0-3',
                source: '0',
                type: 'default',
                target: '3',
                animated: (currentVideo === 0),
                style: { stroke: '#00aedd', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3-31',
                source: '3',
                type: 'default',
                target: '31',
                animated: (currentVideo === 3),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3-32',
                source: '3',
                type: 'default',
                target: '32',
                animated: (currentVideo === 3),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e32-33',
                source: '32',
                type: 'default',
                target: '33',
                animated: (currentVideo === 32),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e32-34',
                source: '32',
                type: 'default',
                target: '34',
                animated: (currentVideo === 32),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e31-311',
                source: '31',
                type: 'default',
                target: '311',
                animated: (currentVideo === 31),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e31-312',
                source: '31',
                type: 'default',
                target: '312',
                animated: (currentVideo === 31),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e33-311',
                source: '33',
                type: 'default',
                target: '311',
                animated: (currentVideo === 33),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e33-312',
                source: '33',
                type: 'default',
                target: '312',
                animated: (currentVideo === 33),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e34-35',
                source: '34',
                type: 'default',
                target: '35',
                animated: (currentVideo === 34),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e35-351',
                source: '35',
                type: 'default',
                target: '351',
                animated: (currentVideo === 35),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e35-352',
                source: '35',
                type: 'default',
                target: '352',
                animated: (currentVideo === 35),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e311-3-p',
                source: '311',
                type: 'default',
                target: '3-p',
                animated: (currentVideo === 311),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e312-3-p',
                source: '312',
                type: 'default',
                target: '3-p',
                animated: (currentVideo === 312),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3-p-3111',
                source: '3-p',
                type: 'default',
                target: '3111',
                animated: ((currentVideo === 311) || (currentVideo === 312)),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3-p-3121',
                source: '3-p',
                type: 'default',
                target: '3121',
                animated: ((currentVideo === 311) || (currentVideo === 312)),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e351-3511',
                source: '351',
                type: 'default',
                target: '3511',
                animated: (currentVideo === 351),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e351-3512',
                source: '351',
                type: 'default',
                target: '3512',
                animated: (currentVideo === 351),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3111-36-1',
                source: '3111',
                type: 'default',
                target: '36-1',
                animated: (currentVideo === 3111),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3121-36-2',
                source: '3121',
                type: 'default',
                target: '36-2',
                animated: (currentVideo === 3121),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3511-36-3',
                source: '3511',
                type: 'default',
                target: '36-3',
                animated: (currentVideo === 3511),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e3512-36-4',
                source: '3512',
                type: 'default',
                target: '36-4',
                animated: (currentVideo === 3512),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e352-36-5',
                source: '352',
                type: 'default',
                target: '36-5',
                animated: (currentVideo === 352),
                style: { stroke: '#f41e6b', strokeWidth: 2 },
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