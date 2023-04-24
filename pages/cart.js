import Header from '@/component/header/header'
import * as S from '../styles/cart.style'
import Center from '@/component/center/center'
import Button from '@/component/button/button'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/component/cartcontext/cartcontext'
import axios from 'axios'
import Table from '@/component/table/table'
import { ProductImageBox, ProductInfoCell } from '@/component/table/table.style'
import Input from '@/component/input/input'

const Cart = () => {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');


  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then(response => {
        setProducts(response.data);
      })
    } else {
      setProducts([])
    }
  }, [cartProducts])

  const addMoreProduct = (productId) => {
    addProduct(productId)
  }
  const removeMoreProduct = (productId) => {
    removeProduct(productId)
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  const goToPayment = async () => {
    const response = await axios.post('/api/checkout', {
      name, email, city, postalCode, streetAddress, country,
      cartProducts,
    })
    if (response.data.url) {
      window.location = response.data.url
    }
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
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </S.Box>
          {!!cartProducts?.length && (
            <S.Box>
              <h2>Order information</h2>
              <Input type='text'
                placeholder='Name'
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)} />
              <Input type='text'
                placeholder='Email'
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)} />
              <S.CityHolder>
                <Input type='text'
                  placeholder='City'
                  value={city}
                  name='city'
                  onChange={(e) => setCity(e.target.value)} />
                <Input type='text'
                  placeholder='Postal Code'
                  value={postalCode}
                  name='postalCode'
                  onChange={(e) => setPostalCode(e.target.value)} />
              </S.CityHolder>
              <Input type='text'
                placeholder='Street Adress'
                value={streetAddress}
                name='streetAddress'
                onChange={(e) => setStreetAddress(e.target.value)} />
              <Input type='text'
                placeholder='Country'
                value={country}
                name='country'
                onChange={(e) => setCountry(e.target.value)} />
              <Button black block onClick={goToPayment}>Continue to checkout</Button>
            </S.Box>
          )}
        </S.CollumsWrapper>
      </Center>
    </>
  )
}

export default Cart
