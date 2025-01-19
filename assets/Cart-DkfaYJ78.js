import{j as a,r,L as d}from"./index-DfBMO-U5.js";const n=({children:s,className:e,...c})=>a.jsx("button",{className:e,...c,children:s}),t="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.62852%201.63142C10.1584%201.41184%2010.7264%201.29883%2011.3%201.29883C11.8737%201.29883%2012.4416%201.41184%2012.9716%201.63142C13.5015%201.85099%2013.983%202.17282%2014.3885%202.57852C14.7941%202.98398%2015.1158%203.46537%2015.3353%203.99519C15.5549%204.52511%2015.6679%205.0931%2015.6679%205.66671C15.6679%206.24032%2015.5549%206.80831%2015.3353%207.33824C15.1158%207.86811%2014.794%208.34953%2014.3884%208.75502C14.3883%208.75506%2014.3884%208.75498%2014.3884%208.75502L8.49502%2014.6484C8.22165%2014.9217%207.77844%2014.9217%207.50507%2014.6484L1.61174%208.75502C0.792668%207.93595%200.33252%206.82505%200.33252%205.66671C0.33252%204.50837%200.792668%203.39747%201.61174%202.5784C2.43081%201.75933%203.54171%201.29918%204.70005%201.29918C5.85839%201.29918%206.96928%201.75933%207.78835%202.5784L8.00005%202.7901L8.21162%202.57852C8.21158%202.57856%208.21166%202.57848%208.21162%202.57852C8.61711%202.17288%209.09865%201.85097%209.62852%201.63142ZM13.3983%203.56824C13.1228%203.29261%2012.7957%203.07396%2012.4357%202.92479C12.0756%202.77561%2011.6898%202.69883%2011.3%202.69883C10.9103%202.69883%2010.5245%202.77561%2010.1644%202.92479C9.80441%203.07396%209.4773%203.29261%209.2018%203.56824L8.49502%204.27502C8.22165%204.54839%207.77844%204.54839%207.50507%204.27502L6.7984%203.56835C6.24189%203.01183%205.48708%202.69918%204.70005%202.69918C3.91301%202.69918%203.15821%203.01183%202.60169%203.56835C2.04517%204.12487%201.73252%204.87967%201.73252%205.66671C1.73252%206.45375%202.04517%207.20855%202.60169%207.76507L8.00005%2013.1634L13.3984%207.76507C13.674%207.48957%2013.8928%207.16235%2014.042%206.80233C14.1911%206.4423%2014.2679%206.05642%2014.2679%205.66671C14.2679%205.27701%2014.1911%204.89112%2014.042%204.5311C13.8928%204.17107%2013.6739%203.84374%2013.3983%203.56824Z'%20fill='%23313237'/%3e%3c/svg%3e",m=({product:s})=>{const[e,c]=r.useState(!1);function l(){c(i=>!i)}return a.jsx("article",{className:"card",children:a.jsxs("div",{className:"card__content",children:[a.jsx("img",{className:"card__image-pick card__image",src:s.image,alt:"mobile"}),a.jsxs("div",{className:"card__info",children:[a.jsx("h3",{className:"card__info-title",children:a.jsx(d,{to:`/${s.category}/${s.id}`,children:s.name})}),a.jsxs("p",{className:"card__info-price",children:[a.jsxs("span",{className:"card__info-price-discount",children:["$",s.price]}),a.jsxs("span",{className:"card__info-price-fullprice",children:["$",s.fullPrice]})]})]}),a.jsx("span",{className:"card__separator"}),a.jsxs("div",{className:"card__details",children:[a.jsxs("p",{className:"card__detail",children:[a.jsx("span",{className:"card__detail-label",children:"Screen"}),a.jsx("span",{className:"card__detail-value",children:s.screen})]}),a.jsxs("p",{className:"card__detail",children:[a.jsx("span",{className:"card__detail-label",children:"Capacity"}),a.jsx("span",{className:"card__detail-value",children:s.capacity})]}),a.jsxs("p",{className:"card__detail",children:[a.jsx("span",{className:"card__detail-label",children:"RAM"}),a.jsx("span",{className:"card__detail-value",children:s.ram})]})]}),a.jsxs("div",{className:"card__actions",children:[a.jsx(n,{className:`button ${e?"card__button--active":"card__button"}`,onClick:l,children:"Add to cart"}),a.jsx("div",{className:"card__favorite",children:a.jsx("img",{className:"card__favorite-icon",src:t,alt:"like"})})]})]})})};export{m as C};