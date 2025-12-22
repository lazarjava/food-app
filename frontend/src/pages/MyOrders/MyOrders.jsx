import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'


const MyOrders = () => {

   const { url, token } = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        if (response.data.success) {
      setData(response.data.data);
    }
   
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders'>
       <h2>My Orders</h2> 
       <div className='container'>
        {data.map((order,index)=>{
              return(
                <div key={index} className='my-orders-order'>
                     <img src={assets.parcel_icon} alt="" />
                     <p>{order.items.map((item,index)=>{
                        if (index === order.items.length-1){
                          return item.name+" x "+item.quantity
                        }
                        else{
                          return item.name+" x "+item.quantity+" "
                        }
                     })}</p>
                     <p>₹{order.amount}.00</p>
                     <p>Items:{order.items.length}</p>
                     <p><span>&#x1F354;</span><b>{order.status}</b></p>  {/* inside &#x25cf;  point chaneg */}
                     <button onClick={fetchOrders}>Track Order</button>
                </div>
              )
        })}
        </div>      
    </div>
  )
}

export default MyOrders
