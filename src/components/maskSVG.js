/**
 * maskSVG component to house SVG
*/

import React, { useEffect } from "react"

const MaskSVG = ( props ) => {
  
    const textArray = props.announcement_text 
    const parentWidth = props.parent_width
    const parentHeight = props.parent_height
    console.log(props);

    const tL = 0
    const tR = parentWidth
    const bL = tL + parentHeight
    const bR = parentWidth + parentHeight
    const bLMoveH = bL - 30

    return (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="masking-test"
            x="0px"
            y="0px"
            width={parentWidth}
            height={parentHeight}
            className="animate"
        >
            <title>Announcement Text</title>
            <defs>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                __html:
                    "\n\t\t\n\t\t\tsvg { font-family: Arial, Helvetica, sans-serif; }\n\t\t\t#text-mask { font-weight: bold; }\n\t\t\t#text-mask text { fill: #ffffff; font-size: 72px; stroke: #ffffff; stroke-width: 3 }\n\t\t\t\n\t\t",
                }}
            />
            <mask
                id="text-mask"
                maskUnits="userSpaceOnUse"
                width="100%"
                height="100%"
            >
                <text dy="1.4em">Hello</text>
                <text dy="2.4em">There!</text>
                <path 
                    d={'M0 ' + bL + ' V' + bLMoveH + ' L' + parentWidth + ' 0 V' + bR + ' H' + bL} 
                    stroke="none"
                    fill="url(#basicPattern)"
                />
                <pattern 
                    id="basicPattern" 
                    x="10" 
                    y="10" 
                    width="40" 
                    height="40"
                    patternUnits="userSpaceOnUse"
                    >
                    <g fillRule="evenodd">
                        <g id="death-star" fill="#fff">
                            <path d="M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z" />
                        </g>
                    </g>
                </pattern>
                
            </mask>
            </defs>
            <rect
            width={500}
            height={200}
            mask="url(#text-mask)"
            style={{
                fill: "rgb(110, 177, 216)",
                strokeWidth: 3,
                stroke: "rgb(0, 0, 0)",
            }}
            />
            
            <circle
                id="circleFill"
                cx={150}
                cy={150}
                r={10}
                stroke="black"
                strokeWidth={0}
                fill="#F93F32"
                mask="url(#text-mask)"
            />
            <animate 
                id="circleFillAnimation" 
                xlinkHref="#circleFill" 
                attributeName="r" 
                values="10;1000" 
                dur="1.25s"
                begin="1.25s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.1 0.8 0.97 0.81"
                keyTimes="0;1">
            </animate>

            

        </svg>
    )
}

export default MaskSVG
