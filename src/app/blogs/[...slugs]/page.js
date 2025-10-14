import React from 'react'

const BlogDetails = async ({params}) => {
    const slugs=(await params).slugs;
  return (
    <div>
        <h1 className='text-5xl'>Blogs Details</h1>
      <ul>
        <li>{slugs[0]}</li>
        <li>{slugs[1]}</li>
        <li>{slugs[2]}</li>
      </ul>
    </div>
  )
}

export default BlogDetails
