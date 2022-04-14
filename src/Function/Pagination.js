import React from 'react';

const Pagination = (props) => {
    const {page, totalPages, onUpClick, onDownClick} = props;
    return (
        <div className="pagination-container">
            <button  className='volta' onClick={onUpClick}> <div>←</div></button>
            <div className='couter'> {page} de {totalPages} </div>
            <button  className='avanca' onClick={onDownClick}><div>→</div></button>
        </div>
    );
};

export default Pagination;