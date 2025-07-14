import ProductList from "@/components/ui/shared/product/product-list";
import sampleData from "@/db/sample-data";


const Homepage = () => {
  return (  <>
              <ProductList 
                data={sampleData.products} 
                title="Newets Arrivals" 
                limit={4}/>
    </>);
}
 
export default Homepage;