import React from "react";


const modal = (props) => {
    return <div className={props.display === true ? 'show': 'hide'}>{props.children}</div>
}

export default modal;
