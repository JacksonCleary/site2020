import React, {useState, useEffect, useRef} from "react"
import Modal from 'react-modal';

import ModalImg from './modalImg'

const customStyles = {
    overlay: {
        zIndex                : '99',
        backgroundColor       : 'rgba(50, 50, 50, 0.75)'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)',
        height                : '90%',
        width                 : '100%',
        maxWidth              : '80%',
        background            : 'none',
        border                : 'none'
    }
}

Modal.setAppElement('#___gatsby');

const DanielModal = (props) => { 

    const myRef = useRef(null)
    const scrollToRef = (ref) => ref.current !== null ? ref.current.scrollTo(0, 0) : null
    const executeScroll = (myRef) => scrollToRef(myRef) 

    const makeModalObject = (path,currentIndex) => {
        
        let imgArr = props.currentImageArr
        let imgArrIndex = currentIndex !== undefined ? currentIndex : props.currentImageArrIndex
        let modalSrc = setNavData(imgArr,imgArrIndex)
        let prevModalSrc = modalSrc.previous
        let nextModalSrc = modalSrc.next

        let newObj = {
            imgArr: imgArr,
            imgArrIndex: imgArrIndex,
            modalSrc: modalSrc,
            prevModalSrc: prevModalSrc,
            nextModalSrc: nextModalSrc,
            path: path ? path : props.selectedImagePath,
        }

        return newObj
        
    }

    const setNavData = (imgArr,imgArrIndex) => {

        let len = imgArr.length
        let modalSrc = {}
        modalSrc.previous = {}
        modalSrc.next = {}

        // previous
        if ( imgArr[imgArrIndex-1] ) {
            modalSrc.previous.active = true
            modalSrc.previous.src = imgArr[imgArrIndex-1]
            modalSrc.previous.ind = imgArrIndex-1
        }
        else if( imgArr[len-1] !== imgArr[imgArrIndex] ) {
            modalSrc.previous.active = true
            modalSrc.previous.src = imgArr[len-1]
            modalSrc.previous.ind = len-1
        }

        // next
        if ( imgArr[imgArrIndex+1] ) {
            modalSrc.next.active = true
            modalSrc.next.src = imgArr[imgArrIndex+1]
            modalSrc.next.ind = imgArrIndex+1
        }
        else if( len > 1 ) {
            modalSrc.next.active = true
            modalSrc.next.src = imgArr[0]
            modalSrc.next.ind = 0
        }
        return modalSrc

    }

    const [modalObj, setModalObj] = useState(() => {
        const initialState = makeModalObject();
        return initialState;
    });

    const processParentPropBind = (path,currentIndex) => {
        let newObj = makeModalObject( path, currentIndex )
        setModalObj(newObj)
    }

    useEffect(() => {
        props.bindSetSrc(
            modalObj.path,
            modalObj.imgArr, 
            modalObj.imgArrIndex
        )
    }, [modalObj]);

    const handleUserKeyPress = (event) => {
        
        const { keyCode } = event;
        if (keyCode === 37 ) {
            if ( modalObj.prevModalSrc.active === true ) {
                processParentPropBind(
                    modalObj.prevModalSrc.src.childImageSharp.fluid.src,
                    modalObj.prevModalSrc.ind
                )
            }
        }
        if (keyCode === 39 ) {
            if ( modalObj.nextModalSrc.active === true ) {
                processParentPropBind(
                    modalObj.nextModalSrc.src.childImageSharp.fluid.src,
                    modalObj.nextModalSrc.ind
                )
            }
        }

    }
    
    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);    

    useEffect(() => {
       executeScroll(myRef)
    }, [props.imgSrc])


    const displayModal = () => {

        let prev = () => {
            return modalObj.prevModalSrc.active ? 
                                <button
                                    className="projectNav projectNavPrevious"

                                    onClick={ () => {
                                        processParentPropBind(
                                            modalObj.prevModalSrc.src.childImageSharp.fluid.src,
                                            modalObj.prevModalSrc.ind
                                        )
                                    } }
                                ><span>Previous</span></button> 
                                : ''
        }
        let next = () => {
            return modalObj.nextModalSrc.active ? 
                                <button
                                    className="projectNav projectNavNext"
                                    onClick={ () => { 
                                        processParentPropBind(
                                            modalObj.nextModalSrc.src.childImageSharp.fluid.src,
                                            modalObj.nextModalSrc.ind
                                        )
                                    } }
                                ><span>Next</span></button> 
                                : ''
        }
       
        return (
            <Modal
                key="projectsModalWindow"
                isOpen={props.modalIsOpen}
                onRequestClose={props.onRequestClose}
                style={customStyles}
                contentLabel="Projects Modal"
                id="projectsModal"
                >

                <div ref={myRef} className="projectsModalImgContainer">
                    <ModalImg 
                        imgSrc={props.selectedImagePath}
                        eventCallback={handleUserKeyPress}
                    />
                </div>
                {prev()}
                {next()}
            </Modal>
        )
    }

    return (
        <>
            {displayModal()}
        </>
    )
}

export default DanielModal