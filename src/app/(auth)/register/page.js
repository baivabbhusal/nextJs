import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex justify-center'>
        <form action=''>
            <label className='block'>Name</label>
             <input type="text" placeholder="Enter a name" className='border w-full  mx-2 my-1 rounded' />
             <label className='block'>Email</label>
             <input type="email" placeholder="Enter a email" className='border w-full mx-2 my-1 rounded' />
            <label className='block'>Password</label>
             <input type="password" placeholder="Enter a password" className='border w-full mx-2 my-1 rounded' />
            <label className='block'>Confirm Password</label>
             <input type="password" placeholder="Confirm a password"  className='border w-full mx-2 my-1 rounded'/>
             

        </form>


    </div>
  )
}

export default RegisterPage