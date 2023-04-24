import Header from '@/component/header/header'
import * as S from '../styles/cart.style'
import Center from '@/component/center/center'
import Button from '@/component/button/button'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/component/cartcontext/cartcontext'

const Cart = () => {
  const { cartProducts } = useContext(CartContext)
  const [products, setProducts] = useState([])
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios
    }
  }, [cartProducts])
  return (
    <>
      <Header />
      <Center>
        <S.CollumsWrapper>
          <S.Box>
            {!cartProducts?.length && (
              <div>Your cart is empty</div>
            )}
            {cartProducts?.length > 0 && (
              <>
                <h2>Cart</h2>
                {cartProducts.map(productId => (
                  <div>{productId}</div>
                ))}
              </>
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
