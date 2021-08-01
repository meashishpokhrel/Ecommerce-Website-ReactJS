import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionUrlParam) => 
    createSelector(
        [selectShopCollections],
        collections => (collections ? collections[collectionUrlParam] : null)

    )
export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key])  : []
)

This is the Portion in Which there has to be somethig in the past theat there is simething that is related to something that reminds me of something in the past 


