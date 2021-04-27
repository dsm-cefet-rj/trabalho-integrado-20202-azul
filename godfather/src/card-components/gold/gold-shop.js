import './Gold-shop.css'
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
            description: '',
            value: 0,
            picture: '',
            price: 0,
            discount: 0
        }
    ])

    const fillOffersTable = () => {
        if (!offers) {
            return
        }

        let trows = []
        let i = 0

        offers.forEach(element => {
            element.price =  element.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

            trows.push(
                <tr className="offer" key={i}>
                    <td className="description">
                        <img src={element.picture} alt="Diversas barras de ouro" />
                        <br />{element.description}<br />{element.value}G
                    </td>
                    <td className="value">{element.price}</td>
                    <td className="bonus">{`${element.discount}%`}</td>
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
        fetch('/api/gold').then(res => res.json()).then(data => {
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
