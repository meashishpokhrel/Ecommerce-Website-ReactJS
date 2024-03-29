import React from "react";

import { Route } from "react-router-dom";
import {firestore, convertCollecSnapToMap} from "../../firebase/firebase.utils"
import CollectionOverview from "../../component/collection-overview/collection-overview.component"
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux"
import { updateCollection } from "../../redux/shop/shop-action";
import WithSpinner from "../../component/with-spinner/with-spinner.component"

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

 class ShopPage extends React.Component {
     state={
         loading: true
     }
    unsubscribeFromSnapshot = null;


    componentDidMount(){
        const {updateCollection}= this.props
        const collectionRef = firestore.collection("collections")
        

        // using simple fetch promise
        // fetch("https://firestore.googleapis.com/v1/projects/ecommerce-website-reactjs/databases/(default)/documents/collections")
        // .then(res => res.json())
        // .then (collections => console.log(collections))

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollecSnapToMap(snapshot);
            updateCollection(collectionMap);
            this.setState({ loading: false })
        })
    }
    render(){
        const {match} = this.props
        const {loading} = this.state 
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} 
                render={props=> (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
            <Route path={`${match.path}/:collectionId`} 
                render={props=>( <CollectionPageWithSpinner isLoading={loading} {...props} />) }/>
            
        </div> 
)
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})


export default connect (null,mapDispatchToProps)(ShopPage);
