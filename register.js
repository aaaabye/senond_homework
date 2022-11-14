document.querySelector(".register").addEventListener("click", change);
function change() {
    let x = document.querySelector(".push");
    // x.insertAdjacentHTML('beforeBegin', add);
    document.querySelector(".three").style.display = "block";
    document.querySelector(".title span").innerText = "注册";
    document.querySelector(".id").value = "";
    document.querySelector(".password").value = "";
    x.children[1].addEventListener("click", back);
    x.children[1].removeEventListener("click", change);
}

function back() {
    let x1 = document.querySelector(".id").value;
    let x2 = document.querySelector(".password").value;
    let x3 = document.querySelector(".name").value;


    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    let requestOptions = {
        method: "post",
        headers: myHeaders,
        redirect: "follow",
    }
    const userdata = {
        id: x1,
        password: x2,
        name: x3,
    };
    requestOptions.body = JSON.stringify(userdata);
    fetch(`${"https://db-api.amarea.cn"}/${"users"}`, requestOptions)
        .then(response => response.json())
        .then(data => alert("注册成功"))
        .catch(err => console.log(err));


    document.querySelector(".title span").innerText = "登录";
    document.querySelector(".register").
        addEventListener("click", change);
    document.querySelector(".three").style.display = "none";
    document.querySelector(".id").value = "";
    document.querySelector(".password").value = "";
    document.querySelector(".register").removeEventListener("click", back);
}

function join() {
    let x1 = document.querySelector(".id").value;
    let x2=document.querySelector(".password").value;

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    let requestOptions = { 
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };
    fetch(`${"https://db-api.amarea.cn"}/${"users"}/${x1}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            // console.log(data.password);
            if (data.id == x1 && data.password == x2) {   // 验证是否存在该用户return data
            alert("登录成功");
            alert("欢迎"+data.name+"使用笔记本");
            console.log(data.name);
            // window['name'] = data.name;
            // window.open("./index.html");
            window.sessionStorage.setItem("name",data.name);
            location.replace("./index.html");
            } else {
                // throw new Error("用户名不存在")
                alert("用户名不存在或密码错误");
            }
        })
      

}
