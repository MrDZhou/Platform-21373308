window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    });
    document.onkeydown=function(e){
        var key=window.event?e.keyCode:e.which;
        if(key==13){
            search();
        }
    }
    
}
function search() {
    var se=document.getElementsByTagName("input")[0].value;
    // TODO: 搜索触发后的行为
    if(se==''){
        window.alert("请输入搜索内容");
    }
    else {
        window.open(`http://wwww.baidu.com`,'_blank');
        window.alert(document.getElementsByTagName("input")[0].value);
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    var username = Kernal.getUserName();
    username=username.split("<")[0];
    var content = `<div id="user" style:"type='text/css'">\
                        <span id="user-img">\
                            <img src="img/user.jpg">\
                        </span>\
                        <span id="name">${username}</span>\
                    </div>`;
                  //  document.getElementById('top-right').innerHTML = "";
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}