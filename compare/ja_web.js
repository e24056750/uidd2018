var img2 = document.getElementById("a2")

button1.onclick=function(){
		alert("a1="+a1.height+" "+a1.width+" a2=  "+ a2.height+" "+ a2.width);
}
button2.onclick=function(){
		a1.style.height=100+"px";
		a1.style.width=100+"px";
		a2.style.height=100+"px";
		a2.style.width=100+"px";
		
		alert("a1="+a1.height+" "+a1.width+" a2=  "+ a2.height+" "+ a2.width);
}
button3.onclick=function(){
		var c1= document.getElementById("canvas");
		var ctx1=c1.getContext('2d');
		var img1 = document.getElementById("a1")
		ctx1.drawImage(img1,0,0);
		var p1 = ctx1.getImageData(0,0,100,100);
		//var p2 = img2.getImageData(0,0,100,100);
		
		alert("p1="+p1.data[2]);
}

