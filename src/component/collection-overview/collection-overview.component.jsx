import React from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection-overview.styles.scss"

import CollectionPreview from "../../component/collection-preview/collection-preview.component"

import { selectShopCollections } from "../../redux/shop/shop-selector"

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherSectionProps}) => (
                    <CollectionPreview key={id} {...otherSectionProps}/>
                ))}
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);