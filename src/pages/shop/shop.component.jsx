import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../component/collection-overview/collection-overview.component"
import CollectionPage from "../collection/collection.component";
import { selectCollection } from "../../redux/shop/shop-selector";

const ShopPage = ({match}) => (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                
            </div>
)

const mapStateToProps = (state, ownProps) => {
    collections: selectCollection(ownProps.match.params.collectionId)(state)
}
export default connect(mapStateToProps)(ShopPage);