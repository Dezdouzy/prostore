
// product-card.tsx
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({product}:{product: Product }) => {
    const imageUrl = product.images?.[0] 
    return   ( 
      <Card className="w-full max-w-sm  ">
        <CardHeader>
            <Link href={`/product/${product.slug}`}>
                <Image 
                    src={imageUrl} 
                    alt={product.name} 
                    width={300} 
                    height={300} 
                    priority={true}
                />
            </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
            <div className="text-xs">{product.brand}</div>
            <Link href={`/products/${product.slug}`}>
                <h2 className="text-sm font-medium">{product.name}</h2>
            </Link>
            <div className="flex-between gap-4">
              <p>{product.rating} Stars</p>
              {product.stock>0 ? (
                <ProductPrice  value={Number(product.price)}/>
              ):(
                // <p className="text-red">Out Of Stock</p>
                <p className='text-destructive'>Out Of Stock</p>

              ) }
            </div>
        </CardContent>  

     </Card> 
    );
}
 
export default ProductCard;