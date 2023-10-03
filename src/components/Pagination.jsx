import React from 'react'

const Pagination = ({totalProduct,productParPage,setCurrentPage}) => {

const pages = [];
for(let i=1; i<=Math.ceil(totalProduct/productParPage); i++){
    pages.push(i);
}
  return (
    <div >
        {pages.map((page,index)=>{
            return <button className='mx-4 bg-gray-300 text-cyan-800 px-4' key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
        })}
    </div>
  )
}

export default Pagination