import React from 'react'
import "./pagination.scss"

const Pagination = ({dataPerPage, totalData, currentPage, paginate, }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++){
        pageNumbers.push(i);
    }
    const currentPageStyle = (number) => {
        if(number === currentPage){
            return{
                backgroundColor: "lightblue"
            }
        }
    }
    return (
        <div className="pagination">
            {
                pageNumbers.map(number => (
                    <div 
                        className="pagination__item"
                        style={currentPageStyle(number)}
                        key={number} 
                        onClick={paginate.bind(this, number)}>
                        {number}
                    </div>
                ))
            }
        </div>
    )
}

export default Pagination;