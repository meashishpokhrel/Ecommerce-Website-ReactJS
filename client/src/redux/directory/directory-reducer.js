const INITIAL_STATE = {
    sections:[
        {
            title: 'hoodies',
            imageUrl: 'https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 1,
            linkedUrl: "shop/hoodies"
          },
          {
            title: 'SARee',
            imageUrl: 'https://media.gettyimages.com/photos/indian-girl-picture-id1131283194?k=20&m=1131283194&s=612x612&w=0&h=Cxvl7cvGTh29-6-qztrVfFa7_P4da6ZB4G5c9cvILNw=',
            id: 2,
            linkedUrl: "shop/saree"
          },
          {
            title: 'taxedos',
            imageUrl: 'https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
            id: 3,
            linkedUrl: "shop/taxedos"
          },
          {
            title: 'winter',
            imageUrl: 'https://media.istockphoto.com/photos/its-cold-out-here-i-have-to-cover-up-picture-id960213848?k=20&m=960213848&s=612x612&w=0&h=Z6EQLu5m4YhD_SuktUDdUbjWV8ADllxk0tbdzB4y_Dc=',
            size: 'large',
            id: 4,
            linkedUrl: "shop/winter"
          },
          {
            title: 'summer',
            imageUrl: 'https://media.istockphoto.com/photos/young-stylish-man-hipster-in-trendy-clothes-in-sunglasses-with-a-picture-id1163981677?k=20&m=1163981677&s=612x612&w=0&h=4SVF7A01SzfFDlKH1P0kymlm4YXnoLzFwTV1R9P_TX4=',
            size: 'large',
            id: 5,
            linkedUrl: "shop/summer"
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