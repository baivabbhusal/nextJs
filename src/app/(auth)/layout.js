import React from 'react'

const layout = ({children}) => {
  return (
<html>
    <body>
            <div>
        <h2 className='text-2xl text-amber-200 bg-green-300 text-center'>Welcome to Dokan</h2>
    </div>
    {children}
    </body>
</html>
  )
}

export default layout