import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../types/interfaces";
import { localStorageKey } from "../services/storage/key";

const ProductPage: React.FC = () => {
  const [data, setData] = useState<{ products: IProduct[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setData(data);
        localStorage.setItem(
          localStorageKey.Products,
          JSON.stringify(data.products)
        );
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message="Server Error" />;
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen p-4">
      {data &&
        data.products.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductPage;
