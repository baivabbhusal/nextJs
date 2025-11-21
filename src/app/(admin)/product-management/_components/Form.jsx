"use client"
import { createProduct } from '@/api/products';
import Button from '@/components/Button';
import  {useForm} from 'react-hook-form';

const ProductForm = () => {
        const {register,handleSubmit,formState:{errors}}=useForm();
        const authToken=localStorage.getItem("authToken");
        function prepareData(data){
          const formData=new FormData();
          formData.append("name",data.name);
          formData.append("brand",data.brand);
          formData.append("price",data.price);
          formData.append("category",data.category);
          formData.append("stock",data.stock >>1);

          if(data.description) formData.append("description",data.description);
          return formData;


        }
        function submitForm(data){
          const input=prepareData(data);
          createProduct(input,authToken)
          .then((response)=>console.log(response))
          .catch((error)=>console.log(error))
        }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              {...register("name", {
                required: "Product name is required.",
              })}
            />
            <p className="text-red-500 mt-2">{errors.name?.message}</p>
          </div>
          <div className="w-full">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Product brand"
              {...register("brand", {
                required: "Enter a brand name.",
              })}
            />
            <p className="text-red-500 mt-2">{errors.brand?.message}</p>
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="2999"
              {...register("price", {
                required: "Please enter a price.",
              })}
            />
            <p className="text-red-500 mt-2">{errors.price?.message}</p>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              {...register("category", {
                required: "Product category is required.",
              })}
            >
              <option value="">Select category</option>
              <option value="Paint">Paint</option>
              <option value="T-shirt">T-Shirt</option>
              <option value="Hoodie">Hoodie</option>
              <option value="Underwear">Underwear</option>
              <option value="Coat">Coat</option>
              <option value="Traditional">Traditional</option>
            </select>
            <p className="text-red-500 mt-2">{errors.category?.message}</p>
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={200}
              {...register("stock")}
            />
          </div>




            <div className='sm:col-span-2'>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
              {...register("description")}
            />
            </div>

                      <div className="sm:col-span-2 pb-2">
             <label               
             htmlFor="images"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Images</label>
            <div className="flex items-center justify-center w-full ">
              <label
                htmlFor="images"
                className="flex flex-col items-center justify-center w-full h-40 
                bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 border-solid rounded-xl rounded-base cursor-pointer hover:bg-neutral-tertiary-medium"
              >
                <div className="flex flex-col items-center justify-center text-body pt-5 ">
                  <svg
                    className="w-8 h-8 mb-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="images" type="file" className="hidden" />
              </label>
            </div>

          </div>
        </div>
        <Button 
        type="submit"
        label={"Add Product"} 
        className="items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary/70"/>
      </form>
    </div>
  );
}
export default ProductForm
