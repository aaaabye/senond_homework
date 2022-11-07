const name=window.opener['name'];


//侧边导航条
document.querySelector("#home").onclick = function () {
    document.querySelector(".nav").style.width = "250px";
    document.querySelector(".nav span").style.display = "block";
    document.querySelector(".nav img").style.display = "inline-block";
    document.querySelector(".addNote").style.display="inline-block";
    document.querySelector(".delNote").style.display="inline-block";
    document.querySelector(".noteList").style.display="block";
}

document.querySelector(".nav img").onclick = function () {
    document.querySelector(".nav").style.width = "0px";
    document.querySelector(".nav span").style.display = "none";
    document.querySelector(".nav img").style.display = "none";
    document.querySelector(".addNote").style.display="none";
    document.querySelector(".delNote").style.display="none";
    document.querySelector(".noteList").style.display="none";
}

// 鼠标移动到textarea上改变边框宽度
function changeWidth(x) {
    x.borderWidth = '5px';
}

function backChange(x) {
    x.borderWidth = '3px';
}

//定义要添加的html代码
const same = '<div class="content"><div class="input"  onclick="edit(this.parentNode.children[0])" onmouseover="changeWidth(this.style)" onmouseout="backChange(this.style)" contenteditable="false"></div><img src="./picture/up.png" alt="" class="up" title="向上移" onclick="moveUp(this.parentNode)"><img src="./picture/down.png" alt="" class="down" title="向下移" onclick="moveDown(this.parentNode)"><img src="./picture/up_down.png" alt="" class="up_jia" title="向上加" onclick="addUp(this.parentNode)"><img src="./picture/down_jia.png" alt="" class="down_jia" title="向下加" onclick="addDown(this.parentNode)"><img src="./picture/minus.png" alt="" class="minus" title="删除" onclick="deleteAll(this.parentNode)"><img src="./picture/view.png" alt="" class="view" title="预览" onclick="view(this.parentNode.children[0])"><img src="./picture/update.png" alt="" class="update" title="修改" onclick="update(this.parentNode.children[0])"></div>';

//输入框序号
number();
function number() {
    let boxs = document.querySelectorAll(".content");
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].onclick = function () {
            let d = new Date();
            let time = d.toLocaleString();
            for (let j = 0; j < boxs.length; j++) {
                if (this == boxs[j]) {
                    document.getElementById("showNum").innerHTML = "<span>笔记属性：</span><br><br><span>更新时间：" + time + "</span><br><br><span id='name'>作者：</span><br><br><span>单元格属性:<span><br><span>编号：</span>" + j;
                    console.log(name);
                    document.getElementById("name").innerText="作者："+name;
                }
            }
        }
    }
}

//向上移
function moveUp(x) {
    let temp = x.children[0].innerHTML;
    x.children[0].innerHTML = x.previousSibling.children[0].innerHTML;
    x.previousSibling.children[0].innerHTML = temp;
}

//向下移
function moveDown(x) {
    let temp = x.children[0].innerHTML;
    x.children[0].innerHTML = x.nextSibling.children[0].innerHTML;
    x.nextSibling.children[0].innerHTML = temp;
}

//向上加
function addUp(node) {
    node.insertAdjacentHTML('beforeBegin', same);
    number();
    edit();
}

//向下加
function addDown(node) {
    node.insertAdjacentHTML('afterend', same);
    number();
    edit();
}

//删除
function deleteAll(node) {
    node.remove();
    number();
}

//选中编辑
function edit(x) {
    console.log(x);
    x.setAttribute('contenteditable', 'true');
}

//预览
function view(x){
    x.innerHTML=marked.parse(x.innerText);
}

//修改
function update(x){
    const turndownService = new TurndownService();
    x.innerText = turndownService.turndown(x.innerHTML);
}

//使用说明
function kan(){
    document.querySelector(".explanation").style.display='block';
}

function chadiao(){
    document.querySelector(".explanation").style.display='none';
}

//新增笔记本
function addBook(){
    let nodeli=document.createElement("li");
    let nodetext=document.createTextNode("新笔记本");
    nodeli.appendChild(nodetext);
    document.getElementById("list").appendChild(nodeli);
    console.log("你好");
}

//删除笔记本
function delBook(){
    let a=document.getElementById("list");
    a.lastElementChild.remove();
    console.log("我好");
}

//提示
function tishi(){
    alert("右下角见使用说明");
}
tishi();





