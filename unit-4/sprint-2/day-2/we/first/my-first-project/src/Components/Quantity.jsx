import Button from "./Button"
function Quantity({
    qty,
    decrementCount,
    incrementCount
}){
    return (
        <div style={{
            display:"flex",
            textAlign:"center",
            justifyContent:"center",
            gap:"1rem",
            height:"20px"
        }}>
            <Button disabled={qty===0} onClick={decrementCount}>-</Button>
            <div style={{display:"flex",alignItems:"center"}}>
                <h4>{qty}</h4>
            </div>
            <Button onClick={incrementCount}>+</Button>
        </div>
       
    )
}
export default Quantity