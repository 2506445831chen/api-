var remark = '';
remarkwords();

function information() {
    localStorage.setItem('remark', remark);
    toCar();
}

//数字写入
function remarkwords() {
    var remarknumber = 0;
    remark = $('#input').val();
    remarknumber=remark.length-4;
    $('.content .count').remove();
    $('.content').append(`
    <div class='count'>${remarknumber}/50</div>
    `)
}
function toCar() {
    location.href='car.html';
}

