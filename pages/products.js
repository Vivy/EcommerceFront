import Header from '@/component/header/header'
import * as S from '../styles/products.style'
import Center from '@/component/center/center'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/product'
import ProductsGrid from '@/component/productsgrid/productsgrid'

const Products = ({ products }) => {
  return (
    <>
      <Header />
      <Center>
        <S.Title>All products</S.Title>
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
