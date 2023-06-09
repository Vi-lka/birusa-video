import { useStore } from '@/utils/Store';
import { hasCookie } from 'cookies-next';
import React, { useEffect } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

export type CustomNodeData = {
    idTo: number;
    title: string;
    target: Position;
    source: Position;
    personId: number;
    onClick: (index: number, indexPer: number) => void | undefined;
}

function CustomNode({ data }: NodeProps<CustomNodeData>) {

    const { currentVideo } = useStore()

    const [color, setColor] = React.useState<string>('')
    const [gradient, setGradient] = React.useState<string>('')

    useEffect(() => {
        switch (data.personId) {
            // Поля
            case 1:
                setColor('#80c41c')
                setGradient(`from-birusa-green via-[#81c41ccc] to-stone-100`)
                break;
            // Ян
            case 2:
                setColor('#4a017d')
                setGradient(`from-birusa-violet via-[#49017dcc] to-stone-100`)
                break;
            // Ника
            case 3:
                setColor('#f41e6b')
                setGradient(`from-birusa-pink via-[#f41e6ccc] to-stone-100`)
                break;

            default:
                setColor('#0083ad')
                setGradient(`from-birusa-blue via-birusa-blue-semilight to-stone-100`)
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div
                className={`wrapper flex selected before:bg-[conic-gradient(var(--tw-gradient-stops))] p-[4px] relative overflow-hidden w-fit h-fit rounded-full ` + (currentVideo === data.idTo ? gradient : '')}
                style={{ cursor: (data.onClick !== undefined) ? 'pointer' : 'auto' }}
                onClick={() => { (data.onClick !== undefined) && data.onClick(data.idTo, data.personId) }}
            >
                <div className="w-fit h-fit py-4 px-6 border-0 rounded-full" style={{ background: color }}>
                    <h4 className="title-button text-white font-MNWide font-[400] text-lg antialiased md:subpixel-antialiased">
                        {data.title}
                    </h4>
                    {/* <h4 className="title-button absolute text-black bg-white font-MNWide font-[400] text-lg antialiased md:subpixel-antialiased">
                        {data.idTo}
                    </h4> */}
                </div>
                <Handle type="target" position={data.target} style={{ background: color }} />
                <Handle type="source" position={data.source} style={{ background: color }} />
            </div>
        </>
    )
}

export default React.memo(CustomNode)