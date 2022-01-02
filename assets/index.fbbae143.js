import{j as v,r as d,a as N,b}from"./vendor.55bccd60.js";const x=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};x();const e=v.exports.jsx,i=v.exports.jsxs,u=v.exports.Fragment,_=({program:s={}})=>{const{mission_name:a,flight_number:t,links:{mission_patch_small:c},mission_id:n=[],launch_year:r,launch_success:o,rocket:{first_stage:{cores:p=[]}={}}={}}=s;return i("div",{className:"p-container",children:[e("div",{className:"image",children:e("img",{src:c,alt:a})}),e("h3",{className:"title",children:`${a} #${t}`}),e("h4",{children:"Mission Ids:"}),n.length>0&&e("ul",{variant:"flush",children:n.map(m=>e("li",{children:m},m))}),e("table",{children:i("tbody",{children:[i("tr",{children:[e("th",{className:"row",children:"Launch Year:"}),e("td",{className:"row",children:`${r}`})]}),i("tr",{children:[e("th",{className:"row",children:"Successful Launch:"}),e("td",{className:"row",children:`${o?"Yes":"No"}`})]}),i("tr",{children:[e("th",{className:"row",children:"Successful Landing:"}),e("td",{className:"row",children:`${p[0].land_success?"Yes":"No"}`})]})]})})]})};const $=({launchPrograms:s=[],error:a})=>e(u,{children:a?e("h2",{className:"lp-container",children:"Something went wrong....!"}):e("div",{children:s.length>0?e("div",{className:"lp-container",children:s.map(t=>e(_,{program:t},t.mission_name))}):e("h2",{className:"lp-container",children:"Oops.... Data not found!"})})});const w=["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],C=({onChangeYear:s,changedYear:a})=>i(u,{children:[e("div",{className:"years-header",children:e("h4",{children:"Launch Year"})}),e("div",{className:"years-filter",children:w.map(t=>e("input",{type:"button",value:t,className:a===t?"filter-btn btn-active":"filter-btn",onClick:c=>s(c)},t))})]}),F=["True","False"],Y=({onChangeLaunchStatus:s,launchStatus:a})=>i(u,{children:[e("div",{className:"years-header",children:e("h4",{children:"Successful Launch"})}),e("div",{className:"years-filter",children:F.map(t=>e("input",{type:"button",value:t,className:a===t?"filter-btn btn-active":"filter-btn",onClick:c=>s(c)},t))})]}),E=["True","False"],O=({onChangeLandingStatus:s,landingStatus:a})=>i(u,{children:[e("div",{className:"years-header",children:e("h4",{children:"Successful Landing"})}),e("div",{className:"years-filter",children:E.map(t=>e("input",{type:"button",value:t,className:a===t?"filter-btn btn-active":"filter-btn",onClick:c=>s(c)},t))})]}),j=({onChangeYear:s,onChangeLaunchStatus:a,onChangeLandingStatus:t,changedYear:c,launchStatus:n,landingStatus:r})=>i("div",{children:[e(C,{onChangeYear:s,changedYear:c}),e(Y,{onChangeLaunchStatus:a,launchStatus:n}),e(O,{onChangeLandingStatus:t,landingStatus:r})]});const y="https://api.spaceXdata.com/v3/launches?limit=100",A=()=>{const[s,a]=d.exports.useState([]),[t,c]=d.exports.useState(""),[n,r]=d.exports.useState(""),[o,p]=d.exports.useState(""),[m,h]=d.exports.useState(!1),[S,L]=d.exports.useState(!1);return d.exports.useEffect(()=>{h(!0),(async()=>await N.get(y).then(f=>{a(f.data),h(!1)}).catch(f=>{throw L(!0),h(!1),f}))()},[]),d.exports.useEffect(()=>{let l="";t&&(l=`&launch_year=${t}`),n!==""&&(l=`${l}&launch_success=${n.toLocaleLowerCase()}`),o&&(l=`${l}&land_success=${o.toLocaleLowerCase()}`),h(!0),(async()=>await N.get(`${y}${l}`).then(g=>{a(g.data),h(!1)}).catch(g=>{throw L(!0),h(!1),g}))()},[t,n,o]),i(u,{children:[e("header",{children:e("h1",{children:"SpaceX Launch Programs"})}),i("div",{className:"container",children:[e("div",{className:"filters",children:e(j,{onChangeYear:l=>{c(l.target.value)},onChangeLaunchStatus:l=>{r(l.target.value)},onChangeLandingStatus:l=>{p(l.target.value)},changedYear:t,launchStatus:n,landingStatus:o})}),e("div",{className:"content",children:m?e("h3",{children:"Loading..."}):e($,{launchPrograms:s,error:S})})]}),e("footer",{children:i("span",{children:["Developed by: ",e("strong",{children:"Nandkumar Gangai"})]})})]})},D=document.getElementById("react-app");b.exports.render(e(A,{}),D);