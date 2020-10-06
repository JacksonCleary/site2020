/**
 * ContentForm component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Field, Control, Label, Input, Textarea, Help, Checkbox } from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Morse from './utility/morse'

Checkbox.defaultProps = {
    checked: false
};
  

class ContentForm extends React.Component {

    state = {
        disabled: true,
        theName: {
            type:'text',
            val: '',
            valid: false,
            touched: false
        },
        theEmail: {
            type:'email',
            val: '',
            valid: false,
            touched: false
        },
        theMessage: {
            type:'textarea',
            val: '',
            valid: false,
            touched: false
        },
        morse: {
            keys: Morse.morseKeys,
            entries: Morse.morseEntries,
            checked: false
        },
    }

    handleMorseInputChange = () => {
        var morseStateInstance = {...this.state.morse}
        morseStateInstance.checked = !this.state.morse.checked
        this.setState({
            morse: morseStateInstance
        }, () => {
            this.processMorseInputChange(false)
        })
    }

    processMorseInputChange = (typing) => {
        const messageStateInstance = {...this.state.theMessage}
        
        messageStateInstance.val = this.renderMorseEnglish( messageStateInstance.val, typing )

        this.setState({
            theMessage: messageStateInstance
        })

    }

    renderMorseEnglish = (text, typing) => {

        const morse = this.state.morse
        const checked = morse.checked
        let morseStringSeparator
        let textArr
        if ( typing ) {
            textArr = text.split(' ')
            morseStringSeparator = ' '
        }
        else {
            
            textArr = checked ? text.split('') : text.split(' ')
            morseStringSeparator = checked ? ' ' : ''
        }
        
        textArr.forEach(function(letter, index) {
            if ( checked ) {
                if ( typing ) {
                    textArr[index] = (morse.entries[letter.toLowerCase()]) ? morse.entries[letter.toLowerCase()] + ' ' : letter
                }
                else {
                    textArr[index] = (morse.entries[letter.toLowerCase()]) ? morse.entries[letter.toLowerCase()] : letter
                }
            }
            else {
                textArr[index] = (morse.keys[letter.toLowerCase()]) ? morse.keys[letter.toLowerCase()] : letter
            }
        })

        return textArr.join(morseStringSeparator)
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        const type = target.type

        this.processInputChange( name, type, value )
        
    }

    processInputChange = ( name, type, value ) => {

        let isValidated = false
        
        if ( type === 'text' ) {
            isValidated = this.validateText(value)
        }
        else if ( type === 'email' ){
            isValidated = this.validateEmail(value)
        }
        else if ( type === 'textarea' ) {
            isValidated = this.validateText(value)
        }
        this.setInputChange(name, type, value, isValidated)

    }

    setInputChange = (name, type, value, valid) => {
        
        let newStateMessage = {
            type:type,
            val: value,
            valid: valid,
            touched: true
        }
        // set new input state
        this.setState({
          [name]: newStateMessage,
        }, () => {
            // wait for validation on input change before checking if form is valid
            this.setState({
                disabled: this.isFormValid() ? false : true
            }, () => {
                if ( this.state.morse.checked && type === 'textarea' ) {
                    this.processMorseInputChange(true)
                }
            })
        })
       

        
        
    }

    validateText = (val) => {
        if (val !== '')
        {
            return true
        }
        else {
            return false
        }
    }

    validateEmail = (val) => {
        // let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (reg.test(val))
        {
            return true
        }
        else {
            return false
        }
    }

    isFormValid = () => {
        return ( this.state.theName.valid && this.state.theEmail.valid && this.state.theMessage.valid )
    }
  
    render() {
        return (
            
            <div>
                <form>
                    <Field>
                        <Label>Name</Label>
                        <Control>
                            <Input 
                                type="text"
                                name="theName"
                                placeholder="Your Name Goes Here" 
                                value={this.state.theName.val}
                                onChange={this.handleInputChange}    
                            />
                        </Control>
                        { !this.state.theName.valid && this.state.theName.touched &&
                            <Help color="danger">This field is required :(</Help>
                        }
                    </Field>
                    
                    <Field>
                        <Label>Email</Label>
                        <Control>
                            <Input 
                                color="success" 
                                type="email" 
                                name="theEmail"
                                placeholder="hello@something.lol" 
                                value={this.state.theEmail.val}
                                onChange={this.handleInputChange}  
                            />
                        </Control>
                        { !this.state.theEmail.valid && this.state.theEmail.touched &&
                            <Help color="danger">This email is invalid :(</Help>
                        }
                    </Field>
                    
                    <Field className="relative">
                        <div>
                            <Control id="morseToggle">
                                <Label>Morse Code</Label>
                                <input
                                    type="checkbox" 
                                    name="morse"
                                    checked={this.state.morse.checked}
                                    onChange={this.handleMorseInputChange}  
                                />
                            </Control>
                        </div>
                        <Label>Message</Label>
                        <Control>
                            <Textarea 
                                name="theMessage"
                                placeholder="Your Message" 
                                value={this.state.theMessage.val}
                                onChange={this.handleInputChange}  
                            />
                        </Control>
                        { !this.state.theMessage.valid && this.state.theMessage.touched &&
                            <Help color="danger">This field is required :(</Help>
                        }
                    </Field>

                    <Field kind="group">
                        <Control>
                            <Button 
                                type="submit"
                                disabled={this.state.disabled}
                            >Submit</Button>
                        </Control>
                    </Field>
                </form>
            </div>
        )
    }

}

export default ContentForm
