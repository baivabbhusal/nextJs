"use client"
const ProductByIdError = ({error}) => {
  return (
    <div className="text-red-500 flex justify-center items-center">{error.message}</div>
  )
}

export default ProductByIdError