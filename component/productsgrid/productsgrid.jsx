import ProductBox from '../productbox/productbox';
import * as S from './productsgrid.style';

const ProductsGrid = ({ products }) => {
  return (
    <S.ProductGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox {...product} key={product._id} />
        ))}
    </S.ProductGrid>
  );
};

export default ProductsGrid;
