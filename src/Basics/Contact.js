import React from 'react'

function Contact({name,email, imgURL, age}) {
  return (
    <div className='container'>
         <div className='img-container'>
                <img src={imgURL} alt='profile' />
            </div>
            <div className='info-container'>
                <p>Name: {name} </p>
                <p>Email : {email}</p>
                <p> Age : {age}</p>
            </div>
    </div>
  )
}

export default Contact