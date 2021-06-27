import React from "react";

import CollectionPreview from "../../component/collection-preview/collection-preview.component"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop-selector"

const ShopPage = ({collections}) => (
            <div className="shop-page">
                {collections.map(({id, ...otherSectionProps}) => (
                    <CollectionPreview key={id} {...otherSectionProps}/>
                ))}
            </div>
        )

const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollections
})
export default connect(mapStateToProps)(ShopPage);