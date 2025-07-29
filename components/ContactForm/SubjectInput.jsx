import React from 'react'

const SubjectInput = ({inputType,onchange,value}) => {
  console.log(value)
  return (
    <div>
      <input type={inputType} 
      placeholder='Add Your Subject Here..'
      value={value}
      onChange={(e)=>onchange(e.target.value) }
    
      />
    </div>
  )
}

export default SubjectInput
