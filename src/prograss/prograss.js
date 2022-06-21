export default function Progress(props) {

    console.log(props)
    return (
        <>
            <div className="row">
                <label style={{ paddingRight: "1%" }} className="col-4"> {props.name}</label >
                <progress id="skill" value={props.value}  max="100" className="col-8 "
                    style={{ height: "25px", verticalAlign: "middle",width:"200px" }}
                > {props.value} </progress>
                <br />
            </div>
           
        </>
    )


}

