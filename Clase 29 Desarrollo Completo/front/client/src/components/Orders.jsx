import React, { useEffect, useState } from 'react';
import OrdersAPI from '../api/orders/orders.api.js';


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    OrdersAPI.getOrders()
    .then((response) => {
      console.log(response);
      if (response.error) {
        setOrders(null);
      } else {
        setOrders(response.payload);
      }
    })
  }, []);
  return (
    <>
      {
        orders && orders.length 
          ? orders.map(order => {
              return (
                <div key={order.order_number}>
                  <h3>Order No. {order.order_number}</h3>
                  <ul>
                    <li>Status: {order.status}</li>
                    <li>Price: {order.total_price}</li>
                  </ul>
                </div>
              )
            })
          : orders === null 
            ? (<h1>Hubo un error</h1>)
            : <h2>Loading...</h2>
      }
    </>
  )
}

export default Orders