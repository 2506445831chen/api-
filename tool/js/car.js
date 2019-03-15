var order=[];
var content='';
var totalPrice=0;
var allCount=0;
var total=0;
var image = '../img/';
//获得 存储数据
getData();
function getData() {
   content=localStorage.getItem('remark');
    allCount=localStorage.getItem('allCount');
    totalPrice=localStorage.getItem('totalPrice');
    total=localStorage.getItem('total');
    order=localStorage.getItem('order');
    order=JSON.parse(order);
}
orderList();
function orderList() {
    $('.details .box').remove();
    for(var i=0;i<order.length;i++){
        if(order[i].count){
            $('.details').append(`
      <div class='box'>
            <div class='image'><img src="${image}${order[i].productIcon}"></div>
            <div class='words'>
                <div class='span'>${order[i].productName}</div>
                <div class="num">x <div class="count">${order[i].count}</div></div>
            </div>
            <div class='price'> <span class="i18n" name="Symbol"></span>
                <div class='price-num'>${order[i].productPrice}</div>
            </div>
        </div>
    `)
        }
    }
    $('.bottom div').remove();
    $('.bottom').append(`
    <div class='bottomleft'>
        <div class='bottom-span i18n' name="Total">总计：</div>
        <div class="bottom-money i18n" name="Symbol"></div>
        <div class='bottom-num'>${total}</div>
        <div class='bottom-notes' ></div>
    </div>
    <div class="button i18n" name="Confirm the order" onclick='sureOrder()'>确认下单</div>
    `);
}
remarksContent();
function remarksContent() {
    $('.remarks div').remove();
    if(content){
        $('.remarks').append(`
      <div class='remarks-left i18n' name="remarks">备注</div>
        <div class='remarks-right'>${content}</div>
        </div>
    `)
    }else {
        $('.remarks').append(`
      <div class='remarks-left i18n' name="remarks">备注</div>
        <div class='remarks-right i18n' name="Please enter the requirements of taste, preference, etc." >请输入口味、偏好等要求<div class='iconfont icon-jiantou'></div>
        </div>
    `)
    }

}
//去支付页面
function sureOrder() {
    if(total==0){
        alert('请添加商品');
        return
    }
    location.href='payment.html';
}
//去购物页
function toCategory() {
    location.href='category.html';
}
//食堂外卖的选择动画
function checkedBox(active) {
    if(active==1){
        $('.active1').addClass('active');
        $('.active2').removeClass('active');

    }else if(active==2){
        $('.active2').addClass('active');
        $('.active1').removeClass('active');
    }
}
