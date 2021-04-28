import './Gold-shop.css'
import goldImage1200 from './1200g-300px.jpg'
// import goldImage575 from './575g-300px.jpg'
// import goldImage275 from './275g-300px.jpg'
import { useState, useEffect } from 'react'


/**
 * @module gold/gold-shop
 */


/**
 * Reindeniza a página Gold
 * @param {object} props.gold-shop
 *
 */

function GoldShop() {

    const [offers, setOffers] = useState([
        {
            title: '',
            value: 0,
            picture: {},
            price: 0,
            bonus: '%'
        }
    ])

    const fillOffersTable = () => {
        if (!offers) {
            return
        }

        let trows = []
        let i = 0

        offers.forEach(element => {
            trows.push(
                <tr className="offer" key={i}>
                    <td className="description">
                        <img src={goldImage1200} alt="Diversas barras de ouro" />
                        <br />{element.title}<br />{element.value}G
                    </td>
                    <td className="value">{element.price}</td>
                    <td className="bonus">{element.bonus}</td>
                    <td className="to-buy">
                        <a className="btn btn-primary btn-lg" href="/" role="button" target="_blank" rel="external">
                            Buy<i className="fas fa-external-link-alt"></i>
                        </a>
                    </td>
                </tr>
            )
            i++
        })

        return <>{trows}</>
    }

    useEffect(() => {
        fetch('http://localhost:5000/goldOffers').then(res => res.json()).then(data => {
            if(!data) {
                return
            } else {
                setOffers(data.offerArray)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

	return (
		<>
			<div className="card-title">
                <h2 className="display-6">Gold Store</h2>
            </div>
            <hr />
            <div className="card-content">
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Bonus</th>
                            <th className="to-buy"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {fillOffersTable()}
                    </tbody>
                </table>
            </div>
		</>
	);
}

export default GoldShop;
