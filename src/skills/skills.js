import React from "react";
import "./skills.css";
import Progress from "../prograss/prograss";
const Skills = () => {
    return (
        <div className="divstyle text-light ">
            <h1>Skills</h1>
            <p style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed dictum tellus velit, vel finibus mauris ultrices ut.
                Suspendisse potenti. Maecenas luctus odio ut gravida pretium.
                Nulla varius consequat enim at fermentum. Nam a risus auctor, pellentesque augue ac, euismod orci.
                Cras ullamcorper elit molestie nulla convallis eleifend. In congue ultricies nisl sed sodales.
                Quisque id commodo ligula, in pretium ex. Morbi eleifend volutpat commodo. Cras eget suscipit magna.
                Maecenas tempor leo eu efficitur congue.
                Donec cursus, lorem in fringilla interdum, velit nibh dictum magna, ut rhoncus ex quam quis nisi.
            </p>
            <div className="row">
                <div className="col-6" style={{ marginTop: "2%" }}>
                    <h5>My Focus</h5>
                    <hr />
                    <h6>UI/UX Design</h6>
                    <h6>Rasponsive Design</h6>
                    <h6>Web Design</h6>
                    <h6>Mobile App Design</h6>

                </div>
                <div className="col-6">
                    <Progress name="HTML" value="90" className="bg-success" />
                    <Progress name="CSS" value="50" className="bg-waring" />
                    <Progress name="JS" value="60" className="bg-danger" />
                    <Progress name="React" value="80" className="bg-success" />
                    <Progress name="HTML" value="90" className="bg-info" />
                    <Progress name="CSS" value="50" className="bg-success" />
                    <Progress name="JS" value="60" className="bg-waring" />
                    <Progress name="React" value="100" className="bg-danger" />
                </div>
            </div>
        </div>)
}
export default Skills;