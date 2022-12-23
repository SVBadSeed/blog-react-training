import React from 'react'
import PaginationItem from "./PaginationItem"
import './Pagination.scss'

const Pagination = () => {

    const paginationItems = [
        {
            page: 1,
            id: 1,
            active: false
        },
        {
            page: 2,
            id: 2,
            active: true
        },
        {
            page: 3,
            id: 3,
            active: false
        }
    ]

    return (
        <ul className="pagination">
            <li className="pagination__item">
                <a className="pagination__link" href="#">&lt;</a>
            </li>
            <li className="pagination__container">
                {paginationItems.map(items => (
                    <PaginationItem key={items.id} items={items}/>
                ))}
            </li>
            <li className="pagination__item">
                <a className="pagination__link" href="#">&gt;</a>
            </li>
        </ul>
    )
}

export default Pagination