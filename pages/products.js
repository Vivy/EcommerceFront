import Header from '@/component/header/header'
import Center from '@/component/center/center'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/product'
import ProductsGrid from '@/component/productsgrid/productsgrid'
import Title from '@/component/title/title'

const Products = ({ products }) => {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  )
}

export default Products

export const getServerSideProps = async () => {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { '_id': -1 } })
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}
