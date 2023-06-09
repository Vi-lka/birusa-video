import React from 'react';
import ReactFlow, { useReactFlow, Position, useNodesState, useEdgesState, MiniMap, ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import { useStore } from '@/utils/Store';

const nodeTypes = {
    custom: CustomNode,
};

export default function YanFlow({ handleClick }: { handleClick: (index: number, indexPer: number) => void }) {

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
                id: '2',
                type: 'custom',
                data: {
                    idTo: 2,
                    title: 'Ян',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 300, y: 0 },
                className: 'custom-node',
            },
            {
                id: '21',
                type: 'custom',
                data: {
                    idTo: 21,
                    title: 'Передать задачу коллеге',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 500, y: -50 },
                className: 'custom-node',
            },
            {
                id: '22',
                type: 'custom',
                data: {
                    idTo: 22,
                    title: 'Пойти на обед',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 555, y: 50 },
                className: 'custom-node',
            },
            {
                id: '2-p',
                type: 'custom',
                data: {
                    title: '~',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                },
                position: { x: 890, y: 0 },
                className: 'custom-node',
            },
            {
                id: '23',
                type: 'custom',
                data: {
                    idTo: 23,
                    title: 'Пообедать',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1070, y: -100 },
                className: 'custom-node',
            },
            {
                id: '24',
                type: 'custom',
                data: {
                    idTo: 24,
                    title: 'Новые знакомства',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1030, y: 0 },
                className: 'custom-node',
            },
            {
                id: '25',
                type: 'custom',
                data: {
                    idTo: 25,
                    title: 'Взять отпуск',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1060, y: 100 },
                className: 'custom-node',
            },
            {
                id: '233',
                type: 'custom',
                data: {
                    idTo: 233,
                    title: 'Отправиться домой',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1350, y: -200 },
                className: 'custom-node',
            },
            {
                id: '243',
                type: 'custom',
                data: {
                    idTo: 243,
                    title: 'Отправиться домой',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1350, y: 0 },
                className: 'custom-node',
            },
            {
                id: '253',
                type: 'custom',
                data: {
                    idTo: 253,
                    title: 'Отправиться домой',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1350, y: 200 },
                className: 'custom-node',
            },
            {
                id: '2331',
                type: 'custom',
                data: {
                    idTo: 2331,
                    title: 'Сменить тему',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1750, y: -250 },
                className: 'custom-node',
            },
            {
                id: '2332',
                type: 'custom',
                data: {
                    idTo: 2332,
                    title: 'Попросить отпуск',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1730, y: -150 },
                className: 'custom-node',
            },
            {
                id: '2431',
                type: 'custom',
                data: {
                    idTo: 2431,
                    title: 'Сменить тему',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1750, y: -50 },
                className: 'custom-node',
            },
            {
                id: '2432',
                type: 'custom',
                data: {
                    idTo: 2432,
                    title: 'Попросить отпуск',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1730, y: 50 },
                className: 'custom-node',
            },
            {
                id: '2531',
                type: 'custom',
                data: {
                    idTo: 2531,
                    title: 'Сменить тему',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1750, y: 150 },
                className: 'custom-node',
            },
            {
                id: '2532',
                type: 'custom',
                data: {
                    idTo: 2532,
                    title: 'Попросить отпуск',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 1730, y: 250 },
                className: 'custom-node',
            },
            {
                id: '234',
                type: 'custom',
                data: {
                    idTo: 234,
                    title: 'Встретиться с ребятами',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 2070, y: -200 },
                className: 'custom-node',
            },
            {
                id: '244',
                type: 'custom',
                data: {
                    idTo: 244,
                    title: 'Поехать на работу',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 2095, y: 0 },
                className: 'custom-node',
            },
            {
                id: '254',
                type: 'custom',
                data: {
                    idTo: 254,
                    title: 'Встретиться с ребятами',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 2070, y: 200 },
                className: 'custom-node',
            },
            {
                id: '2341',
                type: 'custom',
                data: {
                    idTo: 2341,
                    title: 'Поставить напоминание',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 2470, y: -250 },
                className: 'custom-node',
            },
            {
                id: '2342',
                type: 'custom',
                data: {
                    idTo: 2342,
                    title: 'Подумать',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 2545, y: -150 },
                className: 'custom-node',
            },
            {
                id: '255',
                type: 'custom',
                data: {
                    idTo: 255,
                    title: 'Поехать на работу',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                    onClick: handleClick,
                },
                position: { x: 2500, y: 200 },
                className: 'custom-node',
            },
            {
                id: '26-1',
                type: 'custom',
                data: {
                    idTo: 26,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                },
                position: { x: 2900, y: -200 },
                className: 'custom-node',
            },
            {
                id: '26-2',
                type: 'custom',
                data: {
                    idTo: 26,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                },
                position: { x: 2900, y: -100 },
                className: 'custom-node',
            },
            {
                id: '26-3',
                type: 'custom',
                data: {
                    idTo: 26,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                },
                position: { x: 2900, y: 0 },
                className: 'custom-node',
            },
            {
                id: '26-4',
                type: 'custom',
                data: {
                    idTo: 26,
                    title: 'Конец. . .?',
                    target: Position.Left,
                    source: Position.Right,
                    personId: 2,
                },
                position: { x: 2900, y: 100 },
                className: 'custom-node',
            },
        ])

        setEdges([
            {
                id: 'polya-e0-2',
                source: '0',
                type: 'default',
                target: '2',
                animated: (currentVideo === 0),
                style: { stroke: '#00aedd', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2-21',
                source: '2',
                type: 'default',
                target: '21',
                animated: (currentVideo === 2),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2-22',
                source: '2',
                type: 'default',
                target: '22',
                animated: (currentVideo === 2),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e21-2-p',
                source: '21',
                type: 'default',
                target: '2-p',
                animated: (currentVideo === 21),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e22-2-p',
                source: '22',
                type: 'default',
                target: '2-p',
                animated: (currentVideo === 22),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2-p-23',
                source: '2-p',
                type: 'default',
                target: '23',
                animated: ((currentVideo === 21) || (currentVideo === 22)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2-p-24',
                source: '2-p',
                type: 'default',
                target: '24',
                animated: ((currentVideo === 21) || (currentVideo === 22)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2-p-25',
                source: '2-p',
                type: 'default',
                target: '25',
                animated: ((currentVideo === 21) || (currentVideo === 22)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e23-233',
                source: '23',
                type: 'default',
                target: '233',
                animated: ((currentVideo === 23)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e24-243',
                source: '24',
                type: 'default',
                target: '243',
                animated: ((currentVideo === 24)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e25-253',
                source: '25',
                type: 'default',
                target: '253',
                animated: ((currentVideo === 25)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e233-2331',
                source: '233',
                type: 'default',
                target: '2331',
                animated: ((currentVideo === 233)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e233-2332',
                source: '233',
                type: 'default',
                target: '2332',
                animated: ((currentVideo === 233)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e243-2431',
                source: '243',
                type: 'default',
                target: '2431',
                animated: ((currentVideo === 243)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e243-2432',
                source: '243',
                type: 'default',
                target: '2432',
                animated: ((currentVideo === 243)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e253-2531',
                source: '253',
                type: 'default',
                target: '2531',
                animated: ((currentVideo === 253)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e253-2532',
                source: '253',
                type: 'default',
                target: '2532',
                animated: ((currentVideo === 253)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2331-234',
                source: '2331',
                type: 'default',
                target: '234',
                animated: ((currentVideo === 2331)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2332-234',
                source: '2332',
                type: 'default',
                target: '234',
                animated: ((currentVideo === 2332)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2431-244',
                source: '2431',
                type: 'default',
                target: '244',
                animated: ((currentVideo === 2431)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2432-244',
                source: '2432',
                type: 'default',
                target: '244',
                animated: ((currentVideo === 2432)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2531-254',
                source: '2531',
                type: 'default',
                target: '254',
                animated: ((currentVideo === 2531)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2532-254',
                source: '2532',
                type: 'default',
                target: '254',
                animated: ((currentVideo === 2532)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e234-2341',
                source: '234',
                type: 'default',
                target: '2341',
                animated: ((currentVideo === 234)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e234-2342',
                source: '234',
                type: 'default',
                target: '2342',
                animated: ((currentVideo === 234)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e254-255',
                source: '254',
                type: 'default',
                target: '255',
                animated: ((currentVideo === 254)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2341-26-1',
                source: '2341',
                type: 'default',
                target: '26-1',
                animated: ((currentVideo === 2341)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e2342-26-2',
                source: '2342',
                type: 'default',
                target: '26-2',
                animated: ((currentVideo === 2342)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e244-26-3',
                source: '244',
                type: 'default',
                target: '26-3',
                animated: ((currentVideo === 244)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
                label: ''
            },
            {
                id: 'polya-e255-26-4',
                source: '255',
                type: 'default',
                target: '26-4',
                animated: ((currentVideo === 255)),
                style: { stroke: '#4a017d', strokeWidth: 2 },
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