import React from 'react'
import NameInput from './NameInput'
import EmailInput from './EmailInput'
import SubjectInput from './SubjectInput'
import MessageInput from './MessageInput'
import SendMessage from './SendMessage'
import './ContactForm.css'

const ContactForm = () => {
const[name,setName]=React.useState()
const[email,setEmail]=React.useState()
const[subject,setSubject]=React.useState()
const[message,setMessage]=React.useState()


function clearForm(){
  setName('')
    setEmail('')
    setSubject('')
    setMessage('')
}


function validation(){
  console.log(name)
 if (!name||!name.trim()) {
      alert('Please enter your name');
      return false;
    }
    if(!email || !email.trim()) {
      alert('Please enter your email');
      return false;
    }
    if(!subject || !subject.trim()) {
      alert('Please enter a subject');
      return false;
    }
    if(!message || !message.trim()) {
      alert('Please enter a message');
      return false;
    }
    clearForm();
    return true;
}



  function handleContactForm(event) {
    event.preventDefault();
    if (!validation()) {
      return;
    }

    alert("From Submitted Successfully!");
    console.log(name,'name',email,'email',subject,'subject',message,'message' );

    const payload={name,email,subject,message }
    console.log(payload)
    localStorage.setItem('contactForm', JSON.stringify(payload));
    
  }

  return (
    <div className='ContactContainer'>
      <form className='formContainer' onSubmit={handleContactForm}>
        <NameInput inputType='text'onchange={setName} value={name}/>
        <EmailInput inputType='email' onchange={setEmail} value={email}/>
        <SubjectInput inputType='text' onchange={setSubject} value={subject}/>
        <MessageInput onchange={setMessage} value={message}/>
        <SendMessage inputType='Submit'/>

      </form>
    </div>
  )
}

export default ContactForm
