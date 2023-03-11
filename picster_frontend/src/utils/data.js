export const categories = [
  {
    name: 'animals',
    image: 'https://i.pinimg.com/564x/82/97/de/8297dee2d3f3e92a18cca6191d35938d.jpg',
  },
  {
    name: 'art',
    image: 'https://i.pinimg.com/564x/62/08/bb/6208bb8458e92226744772b5c2a8e60e.jpg',
  },
  {
    name: 'beach',
    image: 'https://i.pinimg.com/564x/27/fc/ab/27fcab30ec27cc1a0742dd4dd8081c66.jpg',
  },
  {
    name: 'cars',
    image: 'https://i.pinimg.com/564x/b9/28/50/b92850f4a4347409a505f957a75059aa.jpg',
  },
  {
    name: 'fashion',
    image: 'https://i.pinimg.com/564x/72/d3/c3/72d3c34d9403590559aa90c8baa2193f.jpg',
  },
  {
    name: 'fitness',
    image: 'https://i.pinimg.com/564x/45/7e/b5/457eb5c076e135c6e8c64d7eb3675970.jpg',
  },
  {
    name: 'food',
    image: 'https://i.pinimg.com/564x/68/4b/b4/684bb4bc6b1bb645e0d0fa7d62171d93.jpg',
  },
  {
    name: 'nature',
    image: 'https://i.pinimg.com/564x/d2/ab/ba/d2abbacebd30efb029a506054887ab14.jpg',
  },
  {
    name: 'photography',
    image: 'https://i.pinimg.com/564x/49/12/25/491225ecc107752165191e10d3fc4eec.jpg',
  },
  {
    name: 'poems',
    image: 'https://i.pinimg.com/564x/83/dc/8e/83dc8e8fd3ad50f65db8b1b6d918f3c6.jpg',
  },
  {
    name: 'quotes',
    image: 'https://i.pinimg.com/564x/23/fe/c9/23fec96502f60f16ae841d87206cb088.jpg',
  },
  {
    name: 'space',
    image: 'https://i.pinimg.com/564x/8c/24/7f/8c247fbf0059d5877645138543a0cc71.jpg',
  },
  {
    name: 'sports',
    image: 'https://i.pinimg.com/564x/6f/d8/56/6fd856ad778fad4d2d3c5f4b33490695.jpg',
  },
  {
    name: 'superhero',
    image: 'https://i.pinimg.com/564x/59/fd/cb/59fdcb2db1353d67d51800e50994ad36.jpg',
  },
  {
    name: 'technology',
    image: 'https://i.pinimg.com/564x/e7/b1/e2/e7b1e231979b4603ff0489f372998e74.jpg',
  },
  {
    name: 'travel',
    image: 'https://i.pinimg.com/564x/d7/ef/31/d7ef31b087b5af87c34ecd1a652d42ac.jpg',
  },
  {
    name: 'wallpaper',
    image: 'https://i.pinimg.com/564x/8f/20/30/8f2030245aa0c71a86bc47362f5ef79c.jpg',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/564x/92/0e/bb/920ebb9715dbfbdaf3141231a9b89e72.jpg',
  },
];

export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query;
}

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
            asset->{
                url
            }
        },
        _id,
        destination,
        postedBy->{
            _id,
            userName,
            image
        },
        save[]{
            _key,
            postedBy->{
                _id,
                userName,
                image
            },
        },
    }`;

    return query;
}

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc){
    image {
        asset->{
            url
        }
    },
    _id,
    destination,
    postedBy->{
        _id,
        userName,
        image
    },
    save[]{
        _key,
        postedBy->{
            _id,
            userName,
            image
        },
    },
}`;

export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;

    return query;
};
  
export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;

    return query;
};

export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    
    return query;
};
  
export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;

    return query;
};