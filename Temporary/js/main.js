let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World！';
//document.querySelector('img').onclick = function(){
//	alert('别戳我，我怕疼！')
//}
var myImage = document.querySelector('img');
 myImage.onclick = function(){
 	var mySrc = myImage.getAttribute('src');
 	if(mySrc === 'img/伊芙琳.jpg'){
 		myImage.setAttribute('src','img/阿卡丽.jpg');
 	}else{
 		myImage.setAttribute('src','img/伊芙琳.jpg');
 	}
 }
 
 var myButton = document.querySelector('button');
function setUserName(){
	//prompt与 alert() 类似会弹出一个对话框。但是这里需要用户输入数据
	var myName =  prompt('请输入你的名字。');
	if(!myName || myName === null){
		setUserName();
	}else{
		//localStorage API ，它可以将数据存储在浏览器中供后续获取
		localStorage.setItem('name',myName);
		myHeading.textContent = 'Mozilla 酷毙了，' + myName;
	}
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
