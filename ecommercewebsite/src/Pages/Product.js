import React, { useContext } from 'react'
import{Shopcontext} from'../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Bredcrum from '../Components/Bredcurm/Bredcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
function Product() {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  // Check if product is not available yet
  if (!product) {
    return <div>Loading...</div>; // Or render a loading indicator
  }
  return (
    <div>
      <Bredcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description></Description>
      <RelatedProduct></RelatedProduct>
    </div>
  )
}

export default Product
