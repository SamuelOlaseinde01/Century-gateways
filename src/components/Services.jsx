import React from "react";
import Database from "./Database";

export default function Services(props) {
    const [state, setState] = React.useState(Database)

    const data = state.map(item => {
     return(
        <div className="box" key={item.name}>
                <h2 style={{textDecoration: "underline", marginBottom: "3px"}}>{item.name}</h2>
                <span>
                    {item.p ? <li>{item.p}</li> : null}
                    {item.h ? <li>{item.h}</li> : null}
                    {item.b ? <li>{item.b}</li> : null}
                    {item.q ? <li>{item.q}</li> : null}
                    {item.w ? <li>{item.w}</li> : null}
                    {item.j ? <li>{item.j}</li> : null}
                    {item.k ? <li>{item.k}</li> : null}
                    {item.g ? <li>{item.g}</li> : null}
                </span>
        </div>
    )})

    return(
        <div className={props.hamburgerState ? "services inner" : "services"}>
            <div className="container-box">{data}</div>
        </div>
    )
}