import React from "react";
// import Directory from "../directory/directory.component";
import "./menu-item.styles.scss"
import {withRouter} from "react-router-dom";

const MenuItem = ({title, imageUrl, size,history, match, linkedUrl}) => (
    <div className = {` ${size} menu-item`} onClick = { () => history.push(`${match.url}${linkedUrl}`)}>
            <div className ="background-image" style={{ 
                 backgroundImage: `url(${imageUrl})` 
                    }}
                    />
                <div className = "content">
                    <h1 className = "title">{title.toUpperCase()}</h1>
                    <span className = "subtitle">BUY HERE </span> 
                </div>
            </div>
)

export default withRouter(MenuItem);