// import dummyData from '@/db/sample-data'
import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'


const HomePage = async () => {
  const latestProducts = await getLatestProducts()
  return <>
    {/* <ProductList data={dummyData.products} title='Newest Arrivals' limit={4} /> */}
    <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
  </>
}
export default HomePage