import React from "react";

import { Route } from "react-router-dom";

import CollectionOverview from "../../component/collection-overview/collection-overview.component"
import CollectionPage from "../collection/collection.component";


class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    
    render(){
        const {match} = this.props
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            
        </div> 
)
    }
}



export default ShopPage;