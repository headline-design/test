(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{222:function(e,t,a){},258:function(e,t){},260:function(e,t){},270:function(e,t){},272:function(e,t){},299:function(e,t){},301:function(e,t){},302:function(e,t){},307:function(e,t){},309:function(e,t){},315:function(e,t){},317:function(e,t){},336:function(e,t){},348:function(e,t){},351:function(e,t){},354:function(e,t,a){},414:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(40),i=a.n(s),c=(a(222),a(79)),o=a(80),r=a(81),u=a(216),x=a(215),d=(a(223),a(66)),b=(a(354),a(128)),h=(a(355),[{value:163650,label:"ARCC"},{value:265122,label:"OBA"},{value:312769,label:"USDt"},{value:438828,label:"USD-MESE"},{value:438831,label:"MESX"},{value:438832,label:"M-MSFT"},{value:438833,label:"M-AMZN"},{value:438836,label:"M-TWTR"},{value:438837,label:"M-NFLX"},{value:438838,label:"M-GOOGL"},{value:438839,label:"M-AAPL"},{value:438840,label:"M-TSLA"},{value:900843,label:"CLOUT"},{value:2350276,label:"DIA"},{value:2512768,label:"xPROPS"},{value:2513338,label:"xPROPS"},{value:2513746,label:"xPROPS"},{value:2514157,label:"xPROPS"},{value:2725935,label:"RST"},{value:2751733,label:"RIO"},{value:2757561,label:"rUSD"},{value:2836760,label:"RHO 1"},{value:2838934,label:"VAL 1"},{value:6547014,label:"MCAU"},{value:6587142,label:"MCAG"},{value:27165954,label:"Planets"},{value:31566704,label:"USDC"},{value:83209012,label:"EURe"},{value:84507107,label:"QCAD"},{value:112866019,label:"BRZ"},{value:125584116,label:"CPR"},{value:127494380,label:"SITS"},{value:135464366,label:"xPROPS"},{value:137594422,label:"HDL"},{value:142838028,label:"FAME"},{value:143787817,label:"Spud"},{value:181380658,label:"GEO"},{value:197112469,label:"PUPO"},{value:213345970,label:"EXIT"},{value:226701642,label:"YLDY"},{value:227826774,label:"EURS"},{value:230946361,label:"GEMS"},{value:231880341,label:"lmx"}]),y=a(416),j=a(417),p=a(209),v=a(420),w=a(421),D=a(418),f=a(27),O=a(419),g=a(217),m=a(6),A="https://algoexplorerapi.io/idx2/v2/accounts/",S=h,C="https://algoexplorer.io/tx/",I="Status: Not Connected",M="",N=d.a.init(),P=[{value:"Algorand",label:"Algorand"},{value:"ASA",label:"Verified ASA"},{value:"ASAindex",label:"ASA from Index Number"}],T=function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateBalance=function(){var e=A+M;fetch(e).then((function(e){return e.json()})).then((function(e){var t=". Balance: "+JSON.stringify(e.account.amount/1e6)+" Algos";n.setState({balance:t})})).catch((function(){alert("Error occured  "+e)})),n.updateTransactions()},n.updateTransactions=function(){var e=A+M+"/transactions?limit=5";fetch(e).then((function(e){return e.json()})).then((function(e){for(var t=e.transactions,a=[],l=0;l<t.length;l++)a.push(t[l].id);n.setState({myTransactions:a}),n.setState({tableVis:"block"})})).catch((function(){alert("Error occured  "+e)}))},n.updateConnection=function(){n.setState({con_status_text:I,address:M})},n.recipientChangeHandler=function(e){n.setState({recipient:e.target.value})},n.amountChangeHandler=function(e){n.setState({amount:e.target.value})},n.noteChangeHandler=function(e){n.setState({note:e.target.value})},n.asaIndexChangeHandler=function(e){n.setState({asaNumb:e.target.value})},n.asaChangeHandler=function(e){switch(n.setState({asa:e.value}),e.value){case"Algorand":n.setState({asaNumbVis:"none",asaIndVis:"none"});break;case"ASA":n.setState({asaNumbVis:"block",asaIndVis:"none"});break;case"ASAindex":n.setState({asaNumbVis:"none",asaIndVis:"block"})}},n.asaNumbChangeHandler=function(e){n.setState({asaNumb:e.value})},n.state={asaIndVis:"none",myTransactions:["1"],tableVis:"none",balance:"",asaNumbVis:"none",asa:"Algorand",asaNumb:"",txID:"",amount:1,note:"",recipient:"",con_status_text:I,address:M,series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}],options:{chart:{type:"candlestick",height:350},title:{text:"Demo Chart",align:"center"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{align:"center",children:[Object(m.jsx)(y.a,{children:"Pipeline UI Demo"}),Object(m.jsx)(j.a,{size:"large",onClick:function(){I="Attempting to connect...",e.updateConnection(),d.a.connect(N).then((function(t){I="Status: Connected",M=t,e.updateConnection(),e.updateBalance()}))},children:"Connect to MyAlgo"}),Object(m.jsx)(p.a,{bg:"blue",color:"white",maxWidth:"500px",children:this.state.con_status_text+this.state.balance}),Object(m.jsx)(v.a,{maxWidth:"500px",address:this.state.address,textLabels:!0}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{display:this.state.tableVis},children:[Object(m.jsxs)(w.a,{id:"transTable",style:{textAlign:"center"},children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{style:{textAlign:"center"},children:Object(m.jsx)("th",{style:{textAlign:"center"},children:"My Latest Transactions"})})}),Object(m.jsxs)("tbody",{children:[this.state.myTransactions.map((function(e){return Object(m.jsx)("tr",{children:Object(m.jsx)("td",{style:{textAlign:"center"},children:Object(m.jsx)(D.a,{target:"_blank",href:C+e,children:e})})})})),Object(m.jsx)("tr",{})]})]}),Object(m.jsx)(f.a,{color:"red",size:"350px",onClick:function(){e.updateBalance()},children:"Refresh"})]}),Object(m.jsx)(O.a,{label:"Select your asset:"}),Object(m.jsx)("div",{style:{maxWidth:"500px"},children:Object(m.jsx)(b.a,{style:{maxWidth:"350px"},defaultValue:this.state.value,onChange:this.asaChangeHandler,options:P})}),Object(m.jsxs)("div",{style:{maxWidth:"500px",display:this.state.asaNumbVis},children:[Object(m.jsx)(O.a,{label:"Verified ASA's:",required:!0}),Object(m.jsx)(b.a,Object(c.a)({defaultValue:this.state.value,onChange:this.asaChangeHandler,options:S},"onChange",this.asaNumbChangeHandler))]}),Object(m.jsxs)("div",{style:{maxWidth:"500px",display:this.state.asaIndVis},children:[Object(m.jsx)(O.a,{label:"ASA Index Number:",style:{maxWidth:"500px"},children:Object(m.jsx)(g.a,{style:{maxWidth:"500px"},type:"text",required:!0,placeholder:"",onChange:this.asaIndexChangeHandler})}),Object(m.jsx)("br",{})]}),Object(m.jsx)(O.a,{label:"Recipient Address",style:{maxWidth:"500px"},children:Object(m.jsx)(g.a,{style:{maxWidth:"500px"},type:"text",required:!0,placeholder:"",onChange:this.recipientChangeHandler})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{style:{maxWidth:"500px"},label:"Amount (in micro Algos)",children:Object(m.jsx)(g.a,{style:{maxWidth:"500px"},type:"number",required:!0,placeholder:"",onChange:this.amountChangeHandler})}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{style:{maxWidth:"500px"},label:"Note",children:Object(m.jsx)(g.a,{style:{maxWidth:"500px"},type:"text",required:!0,placeholder:"",selectOnChange:this.noteChangeHandler})}),Object(m.jsx)("br",{}),Object(m.jsx)(f.a,{color:"blue",size:"large",onClick:function(){"Algorand"==e.state.asa?(d.a.send(e.state.recipient,parseInt(e.state.amount),e.state.note,M,N).then((function(e){"undefined"!==typeof e&&(e=C+e.slice(1,-1),window.confirm("Check out your transaction on Algo Explorer (refresh page if 404) . Cancel to stay here ")&&(window.location.href=e))})),e.updateBalance()):(d.a.sendASA(e.state.recipient,parseInt(e.state.amount),e.state.note,M,N,parseInt(e.state.asaNumb)).then((function(e){"undefined"!==typeof e&&(e=C+e.slice(1,-1),window.confirm("Check out your transaction on Algo Explorer (refresh page if 404) . Cancel to stay here ")&&(window.location.href=e))})),e.updateBalance())},children:"Send"}),Object(m.jsx)("br",{}),Object(m.jsx)(p.a,{bg:"red",color:"white",maxWidth:"500px",children:"The function of this app is to demonstrate the ability to make a connection to MyAlgo via a custom class, execute various transaction and return data to multiple React components."})]})}}]),a}(n.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,422)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),l(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),V()}},[[414,1,2]]]);
//# sourceMappingURL=main.3b71f7a5.chunk.js.map