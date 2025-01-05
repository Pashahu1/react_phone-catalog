import{j as e,L as x,r as d,u as g,N as h,a as f}from"./index-C9EK3TRi.js";import{C as j}from"./Cart-8Lp5QBqz.js";const C=({total:n,perPage:r,currentPage:a,onPageChange:s})=>{const o=[],c=Math.ceil(n/r);for(let t=1;t<=Math.ceil(n/r);t++)o.push(t);const l=()=>{a>1&&s(a-1)},p=()=>{a<c&&s(a+1)};return e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:`slider__button ${a===1?"swiper-button-disabled":""}`,onClick:l,disabled:a===1,children:"<"}),e.jsx("ul",{className:"pagination__list",children:o.map(t=>e.jsx("li",{className:`page-item ${a===t?"active":""}`,children:e.jsx(x,{"data-cy":"pageLink",to:`?page=${t}&perPage=${r}`,className:"page-link",onClick:()=>s(t),children:t})},t))}),e.jsx("button",{className:`slider__button ${a===c?"swiper-button-disabled":""}`,onClick:p,disabled:a===c,children:">"})]})};function _(n){const[r,a]=d.useState(!0),[s,o]=d.useState([]),[c,l]=d.useState(null);return d.useEffect(()=>{(async()=>{a(!0),l(null);try{const t=await fetch("/api/products.json");if(!t.ok)throw new Error(`Failed to fetch products. Status: ${t.status}`);const u=(await t.json()).filter(m=>m.category.toLowerCase()===n.toLowerCase());o(u)}catch(t){const i=t instanceof Error?t.message:"Unknown error occurred";l(i)}finally{a(!1)}})()},[n]),{loading:r,products:s,error:c}}function N(n){const[r,a]=d.useState(1),[s,o]=d.useState(16),c=Math.ceil(n.length/s),l=(r-1)*s;return{currentItems:n.slice(l,l+s),currentPage:r,totalPages:c,pageSize:s,setPageSize:o,paginate:i=>{i>0&&i<=c&&a(i)}}}const v="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.59087%200.807088C7.83161%200.619846%208.16872%200.619846%208.40946%200.807088L14.4095%205.47375C14.5718%205.60006%2014.6668%205.79426%2014.6668%205.99999V13.3333C14.6668%2013.8638%2014.4561%2014.3725%2014.081%2014.7475C13.706%2015.1226%2013.1973%2015.3333%2012.6668%2015.3333H3.3335C2.80306%2015.3333%202.29436%2015.1226%201.91928%2014.7475C1.54421%2014.3725%201.3335%2013.8638%201.3335%2013.3333V5.99999C1.3335%205.79426%201.42848%205.60006%201.59087%205.47375L7.59087%200.807088ZM2.66683%206.32605V13.3333C2.66683%2013.5101%202.73707%2013.6797%202.86209%2013.8047C2.98712%2013.9298%203.15669%2014%203.3335%2014H12.6668C12.8436%2014%2013.0132%2013.9298%2013.1382%2013.8047C13.2633%2013.6797%2013.3335%2013.5101%2013.3335%2013.3333V6.32605L8.00016%202.1779L2.66683%206.32605Z'%20fill='%23313237'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.3335%208.00001C5.3335%207.63182%205.63197%207.33334%206.00016%207.33334H10.0002C10.3684%207.33334%2010.6668%207.63182%2010.6668%208.00001V14.6667C10.6668%2015.0349%2010.3684%2015.3333%2010.0002%2015.3333C9.63197%2015.3333%209.3335%2015.0349%209.3335%2014.6667V8.66668H6.66683V14.6667C6.66683%2015.0349%206.36835%2015.3333%206.00016%2015.3333C5.63197%2015.3333%205.3335%2015.0349%205.3335%2014.6667V8.00001Z'%20fill='%23313237'/%3e%3c/svg%3e",w=()=>{const n=g();let r="";const a=n.pathname.split("/").filter(s=>s!=="").map((s,o,c)=>(r+=`/${s}`,e.jsxs("div",{className:"crumb",children:[o===0&&e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"crumb__link",to:"/",children:e.jsx("img",{className:"crumb__logo",src:v,alt:"Home"})}),e.jsx("span",{className:"crumb__separator",children:">"})]}),e.jsx(h,{to:r,className:"crumb__link",children:s}),o>0&&o<c.length-1&&e.jsx("span",{className:"crumb__separator",children:">"})]},s)));return e.jsx("div",{className:"breadcrumb",children:a})},y=()=>{const r=g().pathname.split("/").pop()||"",{loading:a,products:s,error:o}=_(r),{currentItems:c,currentPage:l,pageSize:p,paginate:t}=N(s),i=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase();return a?e.jsx(f,{}):o?e.jsxs("div",{className:"category-page__error",children:[e.jsxs("p",{children:["Error: ",o]}),e.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]}):s.length===0?e.jsxs("div",{className:"category-page__empty",children:[e.jsxs("h1",{children:[i," Page"]}),e.jsxs("p",{children:["There are no ",i.toLowerCase()," available yet."]})]}):e.jsxs("section",{className:"category-page",children:[e.jsx(w,{}),e.jsxs("h1",{className:"category-page__title",children:[i," Page"]}),e.jsx("div",{className:"category-page__products",children:c.map(u=>e.jsx(j,{product:u},u.id))}),e.jsx(C,{total:s.length,perPage:p,currentPage:l,onPageChange:t})]})};export{y as C};
