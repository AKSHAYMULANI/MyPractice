function LabelPrice({label,price}){
    return (
        <div style={{
            display:"flex",
            gap:"5rem",
            fontSize:"18px"
        }}>
            <div>{label}</div>
            <div>₹{price}</div>
        </div>
    )
}
export default LabelPrice