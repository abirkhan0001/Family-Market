// import React from 'react'



// const getPages = (current, total) =>{
//     const pages  = [];
//     if(total <= 5){
//     for (let i = 1; i<= total; i++){
//         pages.push(i)
//     }
    
//     }else {
//         if(current <= 3) {
//             pages.push(1,2,3,'...', total)
//         }
//     }
// }

// const Pagination = ({page, pageHandler, dynamicPage}) => {
//   return (
//     <div className='mt-10 space-x-4'>
//       <button disabled={page === 1} className={`${page === 1 ? "bg-red-200": "bg-red-500"} text-white px-3 py-1 rounded-md cursor-pointer`}>Prev</button>
      
//       <button disabled={page === dynamicPage} className={`${page === dynamicPage ? "bg-red-400": "bg-red-500"} text-white px-3 py-1 rounded-md cursor-pointer`}>Next</button>
//     </div>
//   )
// }

// export default Pagination

import React from "react";

const getPages = (current, total) => {
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }

  return pages;
};

const Pagination = ({ page, dynamicPage, pageHandler }) => {
  const pages = getPages(page, dynamicPage);

  return (
    <div className="mt-10 flex items-center gap-3">

      {/* Prev Button */}
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 rounded-md text-white 
          ${page === 1 ? "bg-red-200" : "bg-red-500"}`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pages.map((p, i) => (
          <button
            key={i}
            onClick={() => typeof p === "number" && pageHandler(p)}
            className={`px-3 py-1 rounded-md cursor-pointer font-bold
              ${p === page ? "bg-red-600 text-white" : "bg-gray-200"}`}
            disabled={p === "..."}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === dynamicPage}
        className={`px-3 py-1 rounded-md text-white 
          ${page === dynamicPage ? "bg-red-200" : "bg-red-500"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
