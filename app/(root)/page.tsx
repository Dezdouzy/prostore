import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product-actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

const Homepage = async() => {
  const LatestProducts = await getLatestProducts();
  return (  <>
              <ProductList 
                data={LatestProducts} 
                title="Newets Arrivals" 
                limit={LATEST_PRODUCTS_LIMIT }/>
    </>);
}
 
export default Homepage;