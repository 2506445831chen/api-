
var searchlist='';
var productName='';
//去购物页
function toCategory() {
    location.href='category.html';
}

//搜索内容
function searchAll() {
    productName=$('.input').val();
   if(productName){
       searchlist=[1,2]
   }
    searchList();
}
//页面布局
function searchList() {
    $('.heat').remove();
    $('.list .li').remove();
    if(searchlist.length!==0){
        $('.noresult').attr('style','display:none');
        $('.list').append(` 
         <div class="li" onclick="todetails('0bebba5d711944bdaeee082246aa40e3')">扬州拉面</div>
        <div class="li"  onclick="todetails('0bebba5d711944bdaeee082246aa40e3')">打撸面</div>
        `);
    }else {
        $('.noresult').attr('style','');
    }
    clearValue()
}
//清空搜索
function clearValue() {
    $('.input').val('');
    $('.icon-guanbi').attr('style','background: #FCFCFC;');
    $('.icon-guanbi').attr('onclick','');
}
//跳转详情页
function todetails(id) {
    localStorage.setItem('id',id);
    location.href='details.html';
}
//出现删除
function searchwords() {
    $('.icon-guanbi').attr('style','');
    $('.icon-guanbi').attr('onclick','clearValue()');
}