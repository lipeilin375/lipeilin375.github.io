document.onkeydown = function () {
    var e = window.event || arguments[0];
    //屏蔽F12  
    if (e.keyCode == 123) {
        return false;
        //屏蔽Ctrl+Shift+I  
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
        return false;
        //屏蔽Shift+F10  
    } else if ((e.shiftKey) && (e.keyCode == 121)) {
        return false;
    }
};
//屏蔽右键单击  
document.oncontextmenu = function () {
    return false;
}

function NewWin(url) {
    window.open(url);
    console.log("Open New Window by JS Moment -> " + url);
}


function CopyContent(content) {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("复制成功");
    console.log("Visitor Copy QQ Account Number -> " + content);
}