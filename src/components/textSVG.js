/**
 * TextSVG component to house SVG
*/

import React, {useState, useEffect } from "react"

const TextSVG = ( props ) => {

    const [loaded, setLoaded] = useState(false);
    const parentWidth = Math.floor(props.parent_width)
    const parentHeight = Math.floor(props.parent_height)
    const centerX = Math.floor(parentWidth / 2)
    const centerY = Math.floor(parentHeight / 2)
    const textWidth = 400
    const textHeight = 300
    const textOffsetX = textWidth / 2
    const textOffsetY = textHeight / 2
    const centeredTextX = centerX - textOffsetX
    const centeredTextY = centerY - textOffsetY
    const text = "Hello There!"
    const textArr = text.split("")

    useEffect(function(){
        setLoaded(true)
    },[])

    return (
        <>
        <div id="textSVGContainer">
            <svg
                id="textSVG"
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
                <path 
                    id="curve" 
                    d={"M 46 149 A 200 65 4 0 1 381 184"}
                    transform={"translate(" + centeredTextX + ", " + centeredTextY + ")"}
                />

                <path 
                    id="curveLine" 
                    d={"M 12 168 A 200 60 4 0 1 346 168"}
                    transform={"translate(" + centeredTextX + ", " + ( centeredTextY +13 ) + ")"}
                    strokeWidth={5}
                />

                {
                    textArr.map((val, index) => {
                        let spacingModifer = 29
                        let spacing = index===0 ? 1 : 1 + (index * spacingModifer)
                        return (
                            <React.Fragment key={"SVGTextFragment_" + index}>
                                <text 
                                    key={"textAreaBack_" + index}
                                    className="textBack"
                                    dominantBaseline="middle" 
                                    textAnchor="middle"
                                    width={textWidth} 
                                    height={textHeight}
                                    dx={spacing}
                                >
                                    <textPath xlinkHref="#curve">
                                        { val }
                                    </textPath>
                                </text>
                                <text 
                                    key={"textAreaFront_" + index}
                                    className="textFront"
                                    dominantBaseline="middle" 
                                    textAnchor="middle"
                                    width={textWidth} 
                                    height={textHeight}
                                    dx={spacing + (index * 0.65)}
                                >
                                    <textPath xlinkHref="#curve">
                                        { val }
                                    </textPath>
                                </text>
                            </React.Fragment>
                        )
                    })

                }
            </svg>
        </div>

        </>
        
    )
}

export default TextSVG
