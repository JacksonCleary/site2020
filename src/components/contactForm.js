/**
 * ContentForm component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Field, Control, Label, Input, Textarea, Help } from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Loading from './loader'


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
        thankYouMessage: '',
        showLoading: false
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

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('sending')
        this.setState({
            showLoading: true,
            disabled: true
        })
        var name = this.state.theName.val
        var email = this.state.theEmail.val
        var message = this.state.theMessage.val
        var params = 'formName=' + name + '&formEmail=' + email + '&formComment=' + message

        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://jacksonweb.dev/mail.php', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = () => { //Call a function when the state changes.
            this.setState({thankYouMessage: ''})
            this.setState({
                showLoading: false,
                disabled: false
            })
            if (xhr.readyState == 4 && xhr.status == 200) {
                this.setState({thankYouMessage: 'Thanks! I\'ll be in touch.'})
            } else {
                this.setState({thankYouMessage: 'Sorry, something went wrong. Please reach me through LinkedIn!'})
            }
        }

        xhr.send(params)
    }
  
    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit} method="POST">
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
                    
                    { this.state.showLoading ? <Loading /> : null }
                </form>
                <p>{this.state.thankYouMessage}</p>
            </div>
        )
    }

}

export default ContentForm
