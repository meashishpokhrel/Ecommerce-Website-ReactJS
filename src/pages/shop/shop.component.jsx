import React from "react";

import { Route } from "react-router-dom";
import {firestore, convertCollecSnapToMap} from "../../firebase/firebase.utils"
import CollectionOverview from "../../component/collection-overview/collection-overview.component"
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux"
import { updateCollection } from "../../redux/shop/shop-action";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;


    componentDidMount(){
        const {updateCollection}= this.props
        const collectionRef = firestore.collection("collections")
        
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollecSnapToMap(snapshot);
            updateCollection(collectionMap);
        })
    }
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

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})


export default connect (null,mapDispatchToProps)(ShopPage);