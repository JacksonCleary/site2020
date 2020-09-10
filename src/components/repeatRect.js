/**
 * RepeatRect component to house repeating clipped shapes
*/

import React, {useEffect} from "react"

const RepeatRect = ( props ) => {

    const parentHeight = props.parent_height
    const startingPoint = props.starting_point
    const clipXModifier = props.modifier

    return (
        <>
            {props.social.colors.map((key,index) => {
                console.log(index)
                const loopStartingPoint = startingPoint + ( clipXModifier * index )
                return (
                    <React.Fragment key={key}>
                        <rect 
                            clipPath={'url(#repeatClip_' + key + ')'} 
                            height={parentHeight} 
                            width={clipXModifier*2} 
                            x={loopStartingPoint}
                            y={0}
                            fill={'#' + props.social.colors[index]}
                        />
                    </React.Fragment>
                )

            })}
            
        </>
       
    )
}

export default RepeatRect
