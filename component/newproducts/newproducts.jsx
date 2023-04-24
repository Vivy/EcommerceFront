import Center from '../center/center';
import ProductBox from '../productbox/productbox';
import * as S from './newproducts.style';

const NewProducts = ({ products }) => {
  return (
    <Center>
      <h2>New Arrivals</h2>
      <S.NewProducts>
        {products.map((product) => (
          <ProductBox {...product} key={product._id} />
        ))}
      </S.NewProducts>
    </Center>
  );
};

export default NewProducts;
