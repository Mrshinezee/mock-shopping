import React, {useState, useEffect} from 'react';
import Card from '../../component/card/Card'
import Hero from '../../component/hero/Hero'
import PropTypes from 'prop-types';
import './Home.scss';

export type CartItemType = {
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image": string,
  "amount": number,
}

const Home: React.FC = () => {
  const [items, setItems] = useState<CartItemType[] | null >(null);

  const getItems = () => {
    return fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
  }


useEffect(() => {
  getItems()
     .then(items => {
      setItems(items)
     });
});
  return (
    <div>
        <Hero/>
        <div className='product-header'>New Products</div>
        <div className ="new-products">
          {items?.map((item) => <div><Card title = {item.title} image={item.image} price={item.price} /></div>)}
        </div>
      </div>
  );
};

Home.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool,
  }),
};

Home.defaultProps = {
  auth: {},
};

export default Home;
