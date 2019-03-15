
var order=[];
var content='';
var totalPrice=0;
var allCount=0;
var backId=localStorage.getItem('backId');
//获得 存储数据
getData();
function getData() {
    content=localStorage.getItem('remark');
    allCount=localStorage.getItem('allCount');
    totalPrice=localStorage.getItem('totalPrice');
    order=localStorage.getItem('order');
    order=JSON.parse(order);
}
payOrder();
//页面的铺设
function payOrder() {
    $('.payshow div').remove();
    $('.payshow').append(`
      <div class='icon'>
            <div class='iconfont i18n' name="Order number">订单号</div>
            <div>: 0007</div>
        </div>
    `);
    $('.boxorder div').remove();
    $('.boxorder').append(`
        <div class='shopname i18n' name="shop">面馆（万国城店）</div>
    `);
    for(var i=0;i<order.length;i++){
        if(order[i].count){
        $('.boxorder').append(`
    
            <div class='orderinformation' >
                <div class="name">${order[i].productName}</div>
                <div class='share'>X ${order[i].count}</div>
                <div class='price'><span class="i18n" name="Symbol"></span> ${order[i].productPrice}</div>
            </div>
    `);
        }
    }
    $('.boxorder').append(`
    <div class='count i18n' name="Total sum"><span class="i18n" name="Total sum">总金额</span>
        <div class='num'><span class="i18n" name="Symbol"></span>${totalPrice}</div>
    </div>
    <div class='paycount'> <span class="i18n" name="Actual payment">实付额</span>
        <div class='num'><span class="i18n" name="Symbol"></span>${totalPrice}</div>
    </div>
    `);
    $('.consumption').append(`
        <div class='payway'> <span class="i18n" name="Payment method">支付方式</span>
            <div class="num i18n" name="Cash payment">现金支付</div>
        </div>
        <div class='time'> <span class="i18n" name="Order time">下单时间</span>
            <div class="num">2019-7-11</div>
        </div>
        <div class='ordernumber'> <span class="i18n" name="Order number">订单编号</span>
            <div class="num">0007</div>
        </div>
    `);
};

//去首页
function toCategory(){
    location.href='category.html';
}
