import Card from "../Card/card"
export default function Portfolio(props) {

    console.log(props)
    return (
        <>

            <div className="p-4" style={{padding:"3%"}} >
                <h1>Portfolio</h1>
                <div className="row cols-3 container" style={{textAlign:"center",justifyContent:"center",margin:"auto"}}>
                    <Card className="col " name="WEB DESIGN" />
                    <Card className="col" name="MOBIKE DESIGN" />
                    <Card className="col" name="LOGO DESIGN" />
                    <Card className="col" name="WEB APPLICATION DEVELOPMENT" />
                    <Card className="col" name="MOBILE APPLICATION DEVELOPMENT" />
                    <Card className="col" name="PWA DEVELOPMENT" />
                </div>
            </div>
        </>
    )


}

