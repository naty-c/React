import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import './Products.css'
import '../App.css'

function Products() {
    const productsOriginal = [
        {
            id: 0, model: 'Magic Might', price: 2499, category: 'A',
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',
        },
        {
            id: 1, model: 'Nimbus Stark', price: 4999, category: 'A',
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg',
        },
        {
            id: 2, model: 'Nebula Cosmic', price: 3999, category: 'C',
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',
        }
    ]

    const [products, setProducts] = useState(productsOriginal)
    const [filter, setFilter] = useState('All')

    function changeCategory(category) {
        setFilter(category)
    }

    useEffect(() => {
        if (filter === 'All') {
            setProducts(productsOriginal)
        } else {
            const productsFiltered = productsOriginal.filter(bike => bike.category === filter)
            setProducts(productsFiltered)
        }
    }, [filter])

    return (
        <>
        
        <div className='bicycles'>
        <h2 className='container'>choose yours<span>.</span></h2>
            <div className='filters'>
                
                <button className='btn-all' onClick={() => changeCategory('All')}>Show All</button>
                <button onClick={() => changeCategory('A')}>Category A</button>
                <button onClick={() => changeCategory('B')}>Category B</button>
                <button onClick={() => changeCategory('C')}>Category C</button>
                
            </div>
            <span className='category'>Category Applied: {filter}</span>
        </div>

            <ul className='product-list'>
             {products.map(bike =>
                <CardProduct key={bike.id} model={bike.model} price={bike.price} imgSrc={bike.imgSrc} />
            )}
            </ul>

        </>
    )
}

export default Products