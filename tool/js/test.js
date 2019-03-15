var utl="http://4j1ade7.hn3.mofasuidao.cn/";
var image='../img/';
var sellerid='846b39f40a2447cba17731a73645b8dc';
var products={};
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTAwMzIxMTQyNDksInBheWxvYWQiOiJ7XCJpZFwiOlwiYjQ5ZTJiOTIzMDk3NDc3ODk3YjkxMjhmNzMyN2I5NzFcIixcInVzZXJuYW1lXCI6XCLlpKfnjotcIixcInBhc3N3b3JkXCI6XCIxMTExMTFcIixcIm9wZW5pZFwiOlwiMTIyXCIsXCJjcmVhdGVUaW1lXCI6MTU0OTk3MDcxODAwMCxcInVwZGF0ZVRpbWVcIjoxNTQ5OTcwNzE4MDAwLFwicGhvbmVcIjpcIjExMTExMVwiLFwicm9sZVwiOjF9In0.dwbZWRN3ieU6KNwS2yk5LrW-PoQ6_QyzmkRywnEKFQE";

document.write(`<title class="i18n" name="title"></title>
       <meta id="i18n_pagename" content="index-common">
       <meta name="viewport" content="width=device-width">
        <meta name="keywords" content=""/>
        <meta name="description" content=""/>`);

//去order页面
function toCar() {
    computerProducts();
    $.ajax({
        type: "POST",
        url: utl+"queryTotalAmount",
        dateType: 'json',
        headers: {
            token,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            products: products,
        },
        success: function (result) {
           var a= JSON.parse(result);
            localStorage.setItem('totalPrice',a.productPrice);

            },
        error: function (e) {
        }
    });
    location.href='car.html';
}
//计算总价的id
function computerProducts() {
    var a='';
    var b='';
    for(var i=0;i<order.length;i++){
        if(order[i].count){
            a=order[i].productId;
            b=order[i].count;
            products[`${a}`]=b;
        }
    }
    products=JSON.stringify(products);
    localStorage.setItem('products',products);
}
