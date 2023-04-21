import Featured from '@/component/featured/featured'
import Header from '@/component/header/header'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/product'

const HomePage = ({ product }) => {
  console.log(product)
  return (
    <div>
      <Header />
      <Featured />
    </div>
  )
}

export default HomePage

export const getServerSideProps = async () => {
  const featuredProductId = '6440f9dc460a87c452a12365';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId)
  return {
    props: { product: JSON.parse(JSON.stringify(product)) }
  }
}
