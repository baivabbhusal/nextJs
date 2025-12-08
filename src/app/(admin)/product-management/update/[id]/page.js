import { getProductById } from "@/api/products";
import ProductForm from "../../_components/Form";

const UpdateProduct =async ({params}) => {
  const id=(await params).id;
  const response=await getProductById(id);
  const product=response.data;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update product
        </h2>
        <ProductForm product={product} isUpdating={true}/>

      </div>
    </section>
  );
};

export default UpdateProduct;
