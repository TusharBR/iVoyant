import {createContext, ReactNode, useState} from 'react'

interface apitype{"products": objtype[]}
interface objtype{
  "productId": string,
  "productName":string,
  "productPrice":number
}
interface valuetype{ "products": objtype[],before: objtype[]; 
  after: (value: objtype[]) => void;}

const Cartcontext=createContext<valuetype>({"products": [
          {
            "productId": "",
            "productName": "",
            "productPrice": 0
          }],before:[{
            "productId": "string",
            "productName":"string",
            "productPrice":0
          }],after:()=>{}})
const Cart=(props:{children:ReactNode})=>{
    const api:apitype={
        "products": [
          {
            "productId": "P001",
            "productName": "Wireless Headphones",
            "productPrice": 79.99
          },
          {
            "productId": "P002",
            "productName": "Smartphone Case",
            "productPrice": 19.99
          },
          {
            "productId": "P003",
            "productName": "Portable Charger",
            "productPrice": 29.99
          },
          {
            "productId": "P004",
            "productName": "Bluetooth Speaker",
            "productPrice": 45.50
          },
          {
            "productId": "P005",
            "productName": "Gaming Mouse",
            "productPrice": 59.00
          },
          {
            "productId": "P006",
            "productName": "4K HDMI Cable",
            "productPrice": 12.99
          },
          {
            "productId": "P007",
            "productName": "Noise Cancelling Earbuds",
            "productPrice": 99.99
          },
          {
            "productId": "P008",
            "productName": "Fitness Tracker",
            "productPrice": 149.99
          },
          {
            "productId": "P009",
            "productName": "LED Desk Lamp",
            "productPrice": 25.00
          },
          {
            "productId": "P010",
            "productName": "USB-C Hub",
            "productPrice": 34.95
          }
        ]
      }
      
      
      const [before, after] = useState<objtype[]>([]);
     
    
    return(
     
        <Cartcontext.Provider value={{products: api.products,before,after}}>
            {props.children}
        </Cartcontext.Provider>
    )
}
export default Cart
export {Cartcontext}