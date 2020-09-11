/**
 * RepeatClipPathBG component to house repeating clipped shapes
*/

import React, {useEffect} from "react"

const RepeatClipPathBG = ( props ) => {

    const parentHeight = props.parent_height
    const startingPoint = props.starting_point
    const clipXModifier = props.modifier
    useEffect(() => {
        // console.log(props.social)
    })

    return (
        <>
            {props.social.colors.map((key, index) => {
                const loopStartingPoint = startingPoint + ( clipXModifier * index )
                return (
                    <React.Fragment key={key}>
                        <clipPath id={'repeatClip_' + key}>
<path 
    d={'M' + loopStartingPoint + ' ' + parentHeight + ' L' + (loopStartingPoint + clipXModifier) + ' 0 H' + (clipXModifier*2 + loopStartingPoint) + ' L' + (loopStartingPoint + clipXModifier) + ' ' + parentHeight + ' H' + loopStartingPoint + ' Z' }
/>
                        </clipPath>
                       
                    </React.Fragment>
                )

            })}
            
        </>
       
    )
}

export default RepeatClipPathBG
