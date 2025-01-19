// import products from '../../../public/api/products.json';
// import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Dropdown } from '../../components/Shared/Dropdown/Dropdown';
//
// export const filteredPrices = () => {
//   return products.filter(product => product.fullPrice > product.price);
// };
//
// export const filteredYear = () => {
//   return products.filter(product => product.year >= 2022);
// };
//
// export const PostFilter = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortContent = ['Newest', 'Cheapest', 'age', 'title', 'price'];
//   const pageContent = ['4', '8', '16', 'all'];
//   const query = searchParams.get('query') || '';
//   const productId = +(searchParams.get('productId') || 0);
//
//   function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const params = new URLSearchParams(searchParams);
//
//     params.set('query', event.target.value);
//
//     setSearchParams(params);
//   }
//
//   function handleProductChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const params = new URLSearchParams(searchParams);
//
//     params.set('productId', event.target.value);
//
//     setSearchParams(params);
//   }
//
//   return (
//     <div>
//       <span>?sort={query}</span>
//       <input type="text" onChange={handleQueryChange} />
//
//       <div className="dropdown">
//         <div className="dropdown__group dropdown__group--sort">
//           <label className="dropdown__label" htmlFor="dropdown-sort">
//             Sort by
//           </label>
//           <div className="dropdown__select" id="dropdown-sort">
//             {sortContent.map((item, index) => (
//               <span key={index} className="dropdown__option">
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="dropdown__group dropdown__group--items-on-page">
//           <label className="dropdown__label" htmlFor="dropdown-page">
//             Items on page
//           </label>
//           <div
//             className="dropdown__select"
//             id="dropdown-page"
//             onChange={handleProductChange}
//           >
//             {pageContent.map((item, index) => (
//               <span key={index} className="dropdown__option">
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
