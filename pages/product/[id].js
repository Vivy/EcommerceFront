import Center from '@/component/center/center';
import Header from '@/component/header/header';
import { Title } from '@/component/title/title.style';
import WhiteBox from '@/component/whitebox';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product';
import styled from 'styled-components';

export const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`
const ProductPage = ({ product }) => {
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            image
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
};

export default ProductPage;

export const getServerSideProps = async (context) => {
  await mongooseConnect();
  const { id } = context.query
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
};
