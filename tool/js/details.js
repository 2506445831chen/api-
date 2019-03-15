var order=[];
var image='../img/';
var totalPrice=0;
var allCount=0;
var id='';
var item='';
var total=0;
//存储数据的获取
getData();
function getData() {
    order=localStorage.getItem('order');
    order=JSON.parse(order);
    id=localStorage.getItem('id');
    allCount=localStorage.getItem('allCount');
    totalPrice=localStorage.getItem('totalPrice');
    total=localStorage.getItem('total');

}
details();
//把内容放到页面中去
function details() {
    var num=0;
    $(' body div').remove();
    for(var i=0;i<order.length;i++){
        if(order[i].productId==id){
            item=order[i];
            if(item.count){
                num=item.count;
            }
        }
    }
    $(' body').append(`
    <div class="top">
    <div class='title'>
        <div class="iconfont icon-jiantou" onclick="toCategory()"></div>${item.productName}</div>
</div>
<div class='content'>
    <div class='image'><img src='${image}${item.productIcon}'></div>
    <div class='information'>
        <div class='h1'>${item.productName}</div>
        <div class='p'>${item.productDescription}</div>
    </div>
    <div class='count-box'>
        <div class='price'><span class="i18n" name="Symbol"></span>
            <div class='span'>${item.productPrice}</div>
        </div>
        <div class='box-icon'>
            <div class='iconfont icon-jianhao' onclick='reduceCar("${item.productId}")'></div>
            <div class='num'>${num}</div>
            <div class='iconfont icon-jiahao'  onclick='addCar("${item.productId}")'></div>
        </div>
    </div>
</div>
<div class="car-bottom">
    <div class='iconfont icon-gouwuche' onclick="showCar()">
        <div class='count'>${allCount}</div>
    </div>
    <div class='bottom_price'> <span class="i18n" name="Symbol"></span>
        <div class='price_number'>${total}</div>
    </div>
    <div class='payment i18n' name="tocar" onclick="toCar()">选好了</div>
</div>
    `);
    if(allCount==0){
        $('.count').attr('style','display:none');
        $('.price_number').html(`${total}`)
    }else {
        $('.count').attr('style','');
        $('.count').html(`${allCount}`);
        $('.price_number').html(`${total}`)
    }
    execI18n();
}

//添加购物车商品
function addCar(ids) {
    for(var i=0;i<order.length;i++){
        if(order[i].productId==ids){
            if(!order[i].count){
                order[i].count=1;
            }else {
                order[i].count+=1;
            }
        }
    }
    computer();
}
//减去购物车的商品
function reduceCar(ids) {
    for(var i=0;i<order.length;i++){
        if(order[i].productId==ids){
            if(order[i].count==1){
                order[i].count='';
            }else if(order[i].count){
                order[i].count-=1;
            }else {
                return
            }
        }
    }
    computer();
}
//计算总值
function computer() {
    allCount=0;
    totalPrice=0;
    for(var i=0;i<order.length;i++){
        if(order[i].count){
            allCount=order[i].count+allCount;
            totalPrice+=(order[i].count*order[i].productPrice*100)/100;
        }
    }
    total=totalPrice;
    savedata();
    details();
    bottomCar();
}
//保存数据
function savedata() {
    order=JSON.stringify(order);
    localStorage.setItem('order',order);
    order = JSON.parse(order);
    localStorage.setItem('allCount',allCount);
    localStorage.setItem('total',total);
}

//去购物页
function toCategory() {
    location.href='category.html';
}
//恢复正常页面
function toNormal() {
    $('.bottomCar').attr('style','display:none');
    $('.screen').attr('style','display:none');
}
//清空所选
function deleteOrder() {
    for (var i = 0; i < order.length; i++) {
        if (order[i].count) {
            order[i].count='';
        }
    }
    savedata();
    bottomCar();
    details();
    computer();
    cancel();
    toNormal();
}
//出现清空页
function showCar() {
    if(allCount==0){
    }else {
        $('.bottomCar').attr('style', '');
        $('.screen').attr('style', '');
        bottomCar()
    }
}
//底部购物车
function bottomCar() {
    $('.bottomCar .licar').remove();
    for (var i = 0; i < order.length; i++) {
        if (order[i].count) {
            $('.boxlicar').append(`
      <div class="licar">
        <div class="name">${order[i].productName}</div>
        <div class="span_center">
        <span class="i18n" name="Symbol">￥</span>
        <span>${order[i].productPrice} </span>
        </div>
        <div class='bottom_icon'>
            <div class="reduceshow">
                <div class="iconfont icon-jianhao" onclick='reduceCar("${order[i].productId}")'></div>
                <div class='word'>${order[i].count}</div>
            </div>
            <div class="iconfont icon-jiahao" onclick='addCar("${order[i].productId}")'></div>
        </div>
    </div>
   `)
        }
    }
}
//是否删除的弹出框
function oderAlertBox() {
    $('.deleteScreen').attr('style','');

}
//取消弹框
function cancel() {
    $('.deleteScreen').attr('style','display:none');
}
