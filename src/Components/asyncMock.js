const products = [
    {
        id: '1',
        name: 'Guitarra Eléctrica Eko S-300 Black',
        price: 250,
        category: 'guitarras',
        img: 'https://d16sbudc8fi0mo.cloudfront.net/media/catalog/product/cache/6c2b7624f329ea380c139b172ea58079/2/0/201632.jpg',
        stock: 20 ,
        description: 'De la clásica forma de stratocaster, esta s 300 tiene configuración S/S/S, dos tonos, uno de volumen y selector de 5 posiciones. Cuerpo de tilo, mástil de arce, diapasón de Roupanà sudamericano de 22 trastes. Precio calidad, lejos la mejor alternativa.'

    },

    { id: '2', name: 'Bateria Electronica Carlsbro CSD-100k', price: 310, category: 'baterias', img: 'https://i.linio.com/p/e280742baf18f8698bc2b325855b5cc9-product.webp', stock: 10 , description: 'Batería electrónica de 7 piezas. Perfecta para bateristas más jóvenes y principiantes. Compacto y fácil de transportar, ideal también para ahorrar espacio en el estudio o en casa',},
    { id: '3', name: 'Bajo eléctrico Ibanez IJSR190U - Black', price: 250, category: 'bajos', img: 'https://audiomusicacl.vtexassets.com/arquivos/ids/167436-800-auto?v=637801427871700000&width=800&height=auto&aspect=true', stock: 25 , description: 'Este pack está diseñado para el bajista que quiere comenzar de la mejor forma con el aprendizaje de este instrumento. '}

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}