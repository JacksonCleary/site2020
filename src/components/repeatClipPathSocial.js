/**
 * RepeatClipPathSocial component to house repeating clipped shapes
*/

import React, {useEffect} from "react"

const RepeatClipPathSocial = ( props ) => {

    const startingPoint = props.starting_point
    const clipXModifier = props.modifier
    useEffect(() => {})

    return (
        <>
        <React.Fragment key={'clipBG'}>
            <clipPath id={'clipBG'}>
                {[...Array(5)].map((key, index) => {
                    const loopStartingPoint = startingPoint + ( clipXModifier * index )
                    return (
                        <path 
                            d={'M0 0'}
                        />
                        
                    )

                })}
                </clipPath>
                       
            </React.Fragment>
        </>
       
    )
}

export default RepeatClipPathSocial
