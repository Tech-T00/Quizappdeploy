import React, {useRef} from 'react'

const Start = ({setUserName}) => {
    const inputRef= useRef()

    const handleClick = () => {
        setUserName(inputRef.current.value)
    };
  return (
    <div className='start'>
        <input type="text" placeholder='enter your name' ref={inputRef} />
        <button type='submit' onClick={handleClick}>start</button>
    </div>
  )
}

export default Start