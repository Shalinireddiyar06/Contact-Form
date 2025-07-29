import React from 'react'

const SendMessage = ({ inputType, onchange,value }) => {
  return (
    <div>
      <input type={inputType}
        placeholder='Send Message..'
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
    </div>
  )
}

export default SendMessage
