import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollecSnapToMap
} from '../../firebase/firebase.utils.js';

import { updateCollection } from '../../redux/shop/shop-action';

import WithSpinner from '../../component/with-spinner/with-spinner.component';

import CollectionsOverview from  '../../component/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollecSnapToMap(snapshot);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionsMap =>
    dispatch(updateCollection(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);