export default function Card(props) {

    console.log(props)
    return (
        <>
            <div className="card bg-dark text-light" 
            style={{width:"320px",margin:"2%",textAlign:"center"}}>
                
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <hr/>
                        <img src="https://fakeimg.pl/250x100/" className="card-img" alt="..."/>
                    </div>
            </div>

        </>
    )


}

