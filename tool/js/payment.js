var order=[];
var products={};
var totalPrice=0;
var allCount=0;
var buyerName='1001';
var total=0;
getData();
allcount();
//存储数据的获取
function getData() {
    allCount=localStorage.getItem('allCount');
    totalPrice=localStorage.getItem('totalPrice');
    order=localStorage.getItem('order');
    order=JSON.parse(order);
    total=localStorage.getItem('total');

    products=localStorage.getItem('products');
}

function allcount() {
    $('#allCount').append(`
      <div class='num'>${total}</div>
    `)
}

function payOrder() {
    $.ajax({
        type: "POST",
        url: utl+"createOrder",
        dateType: 'json',
        headers: {
            token,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            buyerName: buyerName,
            buyerPhone: '',
            buyerAddress: '',
            buyerOpenid: "",
            sellerId: sellerid,
            orderAmount: totalPrice,
            products: products
        },
        success: function (result) {
           localStorage.setItem('backId',result);

        },
        error: function () {
            //
        }
    });
    tobackId()
}

//去order页面
function toBackCar() {
    location.href='car.html'
}
//去完成后的信息界面
function tobackId() {
    location.href='underLine.html'
}
//点击
function activeClick(e) {
    if(e==1){
        $('.payright').removeClass('active');
        $('.payleft').addClass('active');
        $('.active1').removeClass('active');
        $('.active2').addClass('active');
    }else if(e==2){
        $('.payleft').removeClass('active');
        $('.payright').addClass('active');
        $('.active2').removeClass('active');
        $('.active1').addClass('active');
    }
}