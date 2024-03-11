import prismaDb from "@/lib/prismadb";
import { ProductForm } from "./components/product-form";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await prismaDb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await prismaDb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  const sizes = await prismaDb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
