"use client";

import ProductDetail from "component/Product/ProductDetail";
import React, { useEffect } from "react";
import { currentSearchProduct } from "store/searchClothes";
import { useAppDispatch } from "store/hooks";

const searchCurrentProduct = ({ params }: any) => {
  const productId: string | undefined = params ? params.productId : undefined;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId !== undefined){
      dispatch(currentSearchProduct(productId));
    }
  }, [productId]);

  return (
    <div className='wrap'>
      <ProductDetail staticProduct={undefined} />
    </div>
  );
};

export default searchCurrentProduct;
