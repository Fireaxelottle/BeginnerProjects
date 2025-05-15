import React from 'react'

const Pagenation = ({postsPerPage  ,totalPosts , setCurrentPage}) => {
    const pageNumbers = [];
   
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
          pageNumbers.push(i);
        }
        
   
  return (
    <nav>
      <ul className='pagenation'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => setCurrentPage(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagenation
