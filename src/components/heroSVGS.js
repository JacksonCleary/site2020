/**
 * HeroSVGS component to house SVG
*/

import React, { useState, useEffect } from "react"

import SunSVG from './sunSVG'
import TextSVG from './textSVG'
import EventFunctions from './utility/eventFunctions'

const HeroSVGS = ( props ) => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setSize()
    }, []);

    const handleResize =  EventFunctions.debounce( function(){
        setSize()
    }, 300 )

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const setSize = () => {

        const parentWidth = Math.floor(document.getElementById('sunSVG').clientWidth)
        const parentHeight = Math.floor(document.getElementById('sunSVG').clientHeight)
        setWidth(parentWidth)
        setHeight(parentHeight)

    }
    
    return (
        <>
            <div id="sunSVG">
                <SunSVG
                    parent_width={width}
                    parent_height={height}
                >
                </SunSVG>
                <TextSVG
                    parent_width={width}
                    parent_height={height}
                >
                </TextSVG>
            </div>
            <div id="treesContainer">
                <div id="tree1" className="trees"></div>
                <div id="tree2" className="trees"></div>
                <div id="tree3" className="trees"></div>
                <div id="tree4" className="trees"></div>
                <div id="tree5" className="trees"></div>
            </div>

        </>
        
    )
}

export default HeroSVGS
