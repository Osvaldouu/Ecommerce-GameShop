const products = [
    {
        id:1,
        name: "Resident Evil 4",
        price: "$10.000",
        img:"https://i5.walmartimages.com/asr/6e60e4e9-1f9a-4b03-a1a4-aa6bc5503b43.22cd9632a989495b7fa1f1bb2ca96946.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category: "playStation",
        stock: 10,
    },
    {
        id:2,
        name: "Hogwarts Legacy",
        price: "$10.000",
        img:"https://i5.walmartimages.com/asr/1ff0a2b1-90f8-4341-af58-606417b79ec5.9b8f7acaf503e0e60e138f6fe946f3cd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category: "playStation",
        stock: 10,
    },
    {
        id:3,
        name: "Assassin's Creed Mirage",
        price: "$10.000",
        img:"https://i5.walmartimages.com/asr/ae6777c8-7aec-41d9-8d3e-6e2f6e542987.d479ee48c537760695cfaf57760e9aea.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category: "playStation",
        stock: 10,
    }
]

export const getproduct = ()=> {
     return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve (products)
        }, 500);
     })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout (()=>{
            resolve (products.find(prod => prod.id ===productId))
        }, 500)
    })
}

export const getProductCategories = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = products.map((product) => product.category);
        resolve(categories);
      }, 500);
    });
  };


