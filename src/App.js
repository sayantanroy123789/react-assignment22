import logo from './logo.svg';
import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './Components/Header';
const Card=()=>{
  
  const [fake,setFake]=useState([]);
  console.log(fake);
  useEffect(()=>{
    fakestore();
  },[])

  const fakestore=async()=>{
    const responce=await fetch("https://fakestoreapi.com/products");
    // console.log(responce)
    const jsonData=await responce.json();
    // console.log(jsonData)
    setFake(jsonData);
  }
  
  return(
      <>
      <Header />
      <div className="container">
        {fake.map((values)=>{
          return(
            <>
              <div className="box">
              <div className="content">
              <img src={values.image} />
                  <h4>{values.title}</h4>
                  <h4>price:{values.price}</h4> 
                 <div className='btn'><button>checkout</button></div> 
              </div>
              
          </div>
          
            </>
          )
        })}
        
          
          
          

      </div>
      </>
  )
}
export default Card;
