import ProductTable from './_components/Table'

const ProductManagement =async () => {
  return (
  <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
  <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
    <h2 className='px-2 mx-auto text-3xl mb-5 font-bold dark:text-white'>Products Management</h2>
    <ProductTable />
   </div>
</section>
   
  )
}

export default ProductManagement
