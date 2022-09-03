const Card=({data=[]})=>{
    return (
        <div style={{"display":"grid", "width": "80%", "gap": "20px","margin":"auto", "gridTemplateColumns": "repeat(2,1fr)" }} data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div style={{"display":"grid", "width": "100%", "gridTemplateColumns": "repeat(1,2fr)", "border": "2px solid black" }} data-testid="superhero-list">
                        { <div>
                            <h1>Hero Name: {item.Name}</h1>
                            <h2>Height: {item.Height}</h2>
                            <h2>Weight: {item.Weight}</h2>
                            <h2>Power Level: {item.Power}</h2>
                          </div>}
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
