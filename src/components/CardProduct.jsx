import './CardProduct.css'
import './Header.css'

function cardProduct({ model, price, imgSrc }) {

    // TWO WAYS to do the same thing

    // function buyBike() {
    //     console.log('buying bike')
    // }

    // const buyBike = () => {
    //     console.log('buying bike')
    // }

    return (
        <>
            <div className='product'>
                <ul>
                    <li>
                        <a href="#bicycles">
                        <img src={imgSrc} alt="Bike" />
                        <h3 className='model'>{model}</h3>
                        <span className='price'>$ {price}</span>
                        </a>
                    </li>
                </ul>
                </div>

                {/* <input type="text" placeholder='Type here' onChange={(e) => keyPress(e)}/>
                <button onClick={() => buyBike()}>Buy</button> */}

        </>
    )
}

export default cardProduct