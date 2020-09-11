/**
 * maskSVG component to house SVG
*/

import React, { useState } from "react"

import daniel from "../../content/assets/daniel.jpg"
import RepeatClipPathSocial from "./repeatClipPathSocial"
import RepeatClipPathBG from "./repeatClipPathSocial"
import RepeatRect from "./repeatRect"

const MaskSVG = ( props ) => {

    const [loaded, setLoaded] = useState(false);
  
    const textArray = props.announcement_text 
    const parentWidth = props.parent_width
    const parentHeight = props.parent_height
    const social = props.social

    const tL = 0
    const tR = parentWidth
    const bL = tL + parentHeight
    const bR = parentWidth + parentHeight
    const bLMoveH = bL - 30
    const imgClipXModifier = 30
    const imgClipXStartBottom = ( parentWidth - parentHeight - imgClipXModifier ) - Math.floor( parentHeight / 2 )
    const imgClipXStartTop = imgClipXStartBottom + imgClipXModifier
    const imgClipXEndTop = imgClipXStartTop + imgClipXStartTop - imgClipXModifier
    const imgClipXEndBottom = imgClipXEndTop - imgClipXModifier
    const imgW = 500
    const imgH = 500

    return (
        <div>
            <svg
                id="heroSVG"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                width={parentWidth}
                height={parentHeight}
                viewBox={'0 0 ' + parentWidth + ' ' + parentHeight}
                className={`${loaded ? "animate" : ""}`}
            >
                <defs>
                    <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                        __html:
                            "\n\t\t\n\t\t\tsvg { font-family: Montserrat, Arial, Helvetica, sans-serif; }\n\t\t\t#text-mask { font-weight: bold; }\n\t\t\t#text-mask text { fill: #ffffff; font-size: 72px; stroke: #ffffff; stroke-width: 3 }\n\t\t\t\n\t\t",
                        }}
                    />

                    <mask
                        id="background-mask"
                        maskUnits="objectBoundingBox"
                        width={parentWidth/2}
                        height={parentHeight}
                    >
                        <rect
                            clipPath="url(#backgroundClip)"
                            fill="url(#sunrisePattern)"
                            x="0"
                            y="0"
                            width={parentWidth/2}
                            height={parentHeight}
                        >
                        </rect>
                    </mask>

                    <mask
                        id="text-mask"
                        maskUnits="objectBoundingBox"
                        width="100%"
                        height="100%"
                    >
                        <text dy="1.4em">Hello</text>
                        <text dy="2.4em">There!</text>
                    </mask>

                    <pattern 
                        id="sunrisePattern"
                        width="0.09" 
                        height="0.058" 
                        patternUnits="objectBoundingBox">
                        <path fill="white" d="M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z"></path>
                    </pattern>

                    <clipPath id="backgroundClip">
                        <path
                            d={'M0 ' + parentHeight + ' H' + imgClipXStartBottom + ' L' + imgClipXStartTop + ' 0 H 0 V' + parentHeight }
                        ></path>
                    </clipPath>
                    
                    <clipPath id="middleClip">
<path 
    style={{transform:'translateY(' + imgH/2 + 'px)'}}
    d={'M0 0' + 'H' + imgClipXModifier + ' L' + imgW + ' ' + imgH + ' H0' + ' Z'} 
/>
                    </clipPath>

                    <RepeatClipPathBG
                        parent_width={parentWidth}
                        parent_height={parentHeight}
                        starting_point={imgClipXEndBottom}
                        modifier={imgClipXModifier}
                    ></RepeatClipPathBG>
                        
                    <RepeatClipPathSocial
                        parent_width={parentWidth}
                        parent_height={parentHeight}
                        social={social}
                        starting_point={imgClipXEndBottom}
                        modifier={imgClipXModifier}
                    ></RepeatClipPathSocial>


                
                </defs>
                
                <circle
                    id="circleFill"
                    cx={150}
                    cy={150}
                    r={0}
                    stroke="black"
                    strokeWidth={0}
                    fill="white"
                    mask="url(#background-mask)"
                />

                <rect
                    width={500}
                    height={200}
                    mask="url(#text-mask)"
                    style={{
                        fill: "#F93F32",
                        strokeWidth: 3,
                        stroke: "rgb(0, 0, 0)",
                    }}
                />

                <image 
                    clipPath="url(#middleClip)" 
                    height={imgH} width={imgW} 
                    x="0" y="50%"
                    style={{transform:'translateY(-' + imgH/2 + 'px)'}}
                    xlinkHref={daniel} 
                    onLoad={() => setLoaded(true)}
                />

            
                <animate 
                    id="circleFillAnimation" 
                    xlinkHref="#circleFill" 
                    attributeName="r" 
                    values="10;100" 
                    dur="1.25s"
                    begin="1.25s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.1 0.8 0.97 0.81"
                    keyTimes="0;1">
                </animate>

                <RepeatRect
                    parent_width={parentWidth}
                    parent_height={parentHeight}
                    social={social}
                    starting_point={imgClipXEndBottom}
                    modifier={imgClipXModifier}
                ></RepeatRect>

                

            </svg>

        </div>
    )
}

export default MaskSVG
