const INITIAL_STATE = {
    sections:[
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkedUrl: "hats"
          },
          {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkedUrl: ""
          },
          {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkedUrl: ""
          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkedUrl: ""
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkedUrl: ""
          }
     ]
}


const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
    default:
        return state
    }
}

export default directoryReducer