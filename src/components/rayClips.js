/**
 * SunSVG component to house SVG
*/

import React from "react"


const SunSVG = ( props ) => {

    const parentWidth = props.parent_width
    const parentHeight = props.parent_height
    const parentWidthHalf = Math.floor(parentWidth/2)
    const rayClipModifier = Math.floor(75)
    const rayClipModifierHalf = Math.floor(rayClipModifier/2)
    const rayClipModifierBase = Math.floor(rayClipModifier/16)
    const degreeStart = 270
    const degreeModifier = 10
    const capPath = parentWidthHalf * -1
    
    return (
        <>
        <React.Fragment key={'rayClipFragment'}>
            <clipPath id={'rayClip'}>
                {[...Array(20)].map((key, index) => {

                    return (

                    <path
                        key={'sunRay_' + index}
                        transform={'rotate(' + (degreeStart + (degreeModifier*index)) + ' ' + parentWidthHalf + ' ' + parentHeight +')'}
                        d={
                            'M' + (parentWidthHalf - rayClipModifierBase) + ' ' + parentHeight + 
                            ' L' + (parentWidthHalf - rayClipModifierHalf) + ' ' + capPath + ' ' + 
                            ' H' + (parentWidthHalf + rayClipModifierHalf) + 
                            ' L' + (parentWidthHalf + rayClipModifierBase) + ' ' + parentHeight + 
                            ' H' + (parentWidthHalf - rayClipModifierBase) +
                            ' Z'
                            }
                    ></path>
                        
                    )

                })}
            </clipPath>
                       
            </React.Fragment>
        </>
    )
}

export default SunSVG
