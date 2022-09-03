import { useState } from "react"
import CartItem from "./CartItem";
import Total from "./Total"
const initData = [
    {id:1,product_name:"Noodles",price:30,qty:1},
    {id:2,product_name:"Chicken",price:100,qty:1},
    {id:3,product_name:"Burger",price:320,qty:1}
];
function calculateTotal(prouducts){
  return  prouducts.reduce((sum,ele)=>sum+ (ele.qty *ele.price),0)
}

function CartContainer(){
    const [data,setData]=useState(initData)
    //data
    //eventhandler
    const handleChangeQty=(id,amount)=>{
        let updatedData = data.map(item =>{
            if(item.id ===id){
                //override
                return {
                    ...item,
                    qty : item.qty + amount
            }
            }
            else{
                return item
            }
        });
        setData(updatedData)
    }
    return (
        <div style={{border:"1px solid tomato",width:"40%",margin:"auto"}}>
            {/* Body */}
            {
                data.map(item=>
                    <CartItem
                        key={item.id}
                        id={item.id}
                        label={item.product_name}
                        qty={item.qty}
                        price={item.price}
                        handleChangeQty={handleChangeQty}
                    />
                )
            }
            <Total total={calculateTotal(data)}/>
        </div>
    )
}
export default CartContainer
