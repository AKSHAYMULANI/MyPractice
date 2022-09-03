

function Button({onClick,children,disabled}){
    return (
        <button 
        style={{padding:".6rem",border:0,borderWidht:0,fontWeight:"bold",
        backgroundColor:"tomato",
        color:"white",
        fontSize:"18px",
        display:"flex",
        alignItems:"center"
    }}
        onClick={onClick}
        disabled={disabled}> 
        {children}  
         </button>
    )
}
export default Button 