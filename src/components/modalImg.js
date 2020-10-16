import React, {useState} from "react"
import Loader from './loader'

const ModalImg = (props) => { 

    const [loaded, setLoaded] = useState(false)

    return (
        <>
            <img 
                style={{width: '100%'}} 
                src={props.imgSrc} 
                alt="" 
                onLoad={() => setLoaded(true)}
            />

            { !loaded ? 
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem'
                }}>
                    <Loader />
                </div>
            : null }
        </>
    )
}

export default ModalImg