import{j as s,L as j,r as l,u as _,a as y}from"./index-DfBMO-U5.js";import{C}from"./Cart-DkfaYJ78.js";const E=({total:e,perPage:a,currentPage:t,onPageChange:n})=>{const r=[],c=Math.ceil(e/a);for(let o=1;o<=Math.ceil(e/a);o++)r.push(o);const i=()=>{t>1&&n(t-1)},g=()=>{t<c&&n(t+1)};return s.jsxs("div",{className:"pagination",children:[s.jsx("button",{className:`slider__button ${t===1?"swiper-button-disabled":""}`,onClick:i,disabled:t===1,children:"<"}),s.jsx("ul",{className:"pagination__list",children:r.map(o=>s.jsx("li",{className:`page-item ${t===o?"active":""}`,children:s.jsx(j,{"data-cy":"pageLink",to:`?page=${o}&perPage=${a}`,className:"page-link",onClick:()=>n(o),children:o})},o))}),s.jsx("button",{className:`slider__button ${t===c?"swiper-button-disabled":""}`,onClick:g,disabled:t===c,children:">"})]})};function N(e){const[a,t]=l.useState(1),[n,r]=l.useState(16),c=Math.ceil(e.length/n),i=(a-1)*n;return{currentItems:e.slice(i,i+n),currentPage:a,totalPages:c,pageSize:n,setPageSize:r,paginate:d=>{d>0&&d<=c&&t(d)}}}const p="/api",u=e=>{if(!e.ok)throw new Error(`${e.status} ${e.statusText}}`);return e.json()},L={get(e){return fetch(p+e,{method:"GET"}).then(u)},delete(e){return fetch(p+e,{method:"DELETE"}).then(u)}};function S(e){return L.get("/products.json").then(a=>a.filter(t=>t.category===e))}const $=()=>{const a=_().pathname.toLowerCase().split("/").pop()||"",[t,n]=l.useState([]),[r,c]=l.useState(!0),[i,g]=l.useState("");l.useEffect(()=>{const h=setTimeout(()=>{S(a).then(n).catch(()=>{g("Error fetching products")}).finally(()=>{c(!1)})},1e3);return()=>{clearTimeout(h)}},[a]);const{currentItems:o,currentPage:d,pageSize:m,paginate:x}=N(t),f=a.charAt(0).toUpperCase()+a.slice(1).toLowerCase();return s.jsxs("section",{className:"category-page",children:[i&&s.jsx("p",{className:"error",children:i}),r&&s.jsx(y,{}),s.jsxs("h1",{className:"category-page__title",children:[f," Page"]}),s.jsxs("span",{className:"category-page__models-count",children:[t.length," models"]}),s.jsx("div",{className:"category-page__products",children:o.map(h=>s.jsx(C,{product:h},h.id))}),s.jsx(E,{total:t==null?void 0:t.length,perPage:m,currentPage:d,onPageChange:x})]})};export{$ as C};