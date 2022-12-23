import React from 'react'
import './Pagination.scss'

const PaginationItem = (props) => {

    return (
        <div className='pagination__item'>
            <a className={props.items.active ? 'pagination__link active' : 'pagination__link'}>{props.items.page}</a>
        </div>
    )
}

export default PaginationItem