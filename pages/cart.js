import Header from '@/component/header/header'
import * as S from '../styles/cart.style'
import Center from '@/component/center/center'
import Button from '@/component/button/button'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/component/cartcontext/cartcontext'
import axios from 'axios'
import Table from '@/component/table/table'
import { ProductImageBox, ProductInfoCell } from '@/component/table/table.style'

const Cart = () => {
  const { cartProducts, addProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then(response => {
        setProducts(response.data);
      })
    }
  }, [cartProducts])

  const addMoreProduct = (productId) => {
    addProduct(productId)
  }
  const removeMoreProduct = (productId) => {

  }

  return (
    <>
      <Header />
      <Center>
        <S.CollumsWrapper>
          <S.Box>
            <h2>Cart</h2>
            {!cartProducts?.length && (
              <div>Your cart is empty</div>
            )}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src='' alt='item image' />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => removeMoreProduct(product._id)}>-</Button>
                        <S.QuantityLabel>
                          {cartProducts.filter(id => id === product._id).length}
                        </S.QuantityLabel>
                        <Button onClick={() => addMoreProduct(product._id)}>+</Button>
                      </td>
                      <td>
                        ${cartProducts.filter(id => id === product._id).length * product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </S.Box>
          {!!cartProducts?.length && (
            <S.Box>
              <h2>Order information</h2>
              <input type='text' placeholder='Address' />
              <input type='text' placeholder='Address2' />
              <Button black block >Continue to checkout</Button>
            </S.Box>
          )}
        </S.CollumsWrapper>
      </Center>
    </>
  )
}

export default Cart
