import Featured from '@/component/featured/featured'
import Header from '@/component/header/header'
import NewProducts from '@/component/newproducts/newproducts'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/product'

const HomePage = ({ featuredProduct, newProducts }) => {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  )
}

export default HomePage

export const getServerSideProps = async () => {
  const featuredProductId = '6440f9dc460a87c452a12365';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 })
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  }
}
