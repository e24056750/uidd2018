
button1.onclick=function(){
		alert("a1="+a1.height+" "+a1.width+" a2=  "+ a2.height+" "+ a2.width);
}
button2.onclick=function(){
		a1.style.height=100+"px";
		a1.style.width=100+"px";
		a2.style.height=100+"px";
		a2.style.width=100+"px";
		a3.style.height=100+"px";
		a3.style.width=100+"px";
		alert("a1="+a1.height+" "+a1.width+" a2=  "+ a2.height+" "+ a2.width);
}
button3.onclick=function(){
		//p1資料處理
		var c1= document.getElementById("canvas");
		var ctx1=c1.getContext('2d');
		var img1 = document.getElementById("a1")
		ctx1.drawImage(img1,0,0);
		var p1 = ctx1.getImageData(0,0,100,100);
		//p2資料處理
		var c2= document.getElementById("canvas");
		var ctx2=c2.getContext('2d');
		var img2 = document.getElementById("a2")
		ctx2.drawImage(img2,0,0);
		var p2 = ctx2.getImageData(0,0,100,100);
		//p3資料處理
		var c3= document.getElementById("canvas");
		var ctx3=c3.getContext('2d');
		var img3 = document.getElementById("a3")
		ctx3.drawImage(img3,0,0);
		var p3 = ctx3.getImageData(0,0,100,100);
		//開始比對
		var count =0;
		for(var i=0;i<40000;i++){
			if( p2.data[i]>p1.data[i]-30 && p2.data[i]<p1.data[i]+30){
				count++;
			}
		}
		///測試
		var count_test =0;
				for(var i=0;i<40000;i++){
			if( p3.data[i]>p1.data[i]-30 && p3.data[i]<p1.data[i]+30){
				count_test++;
			}
		}
		///

		alert(" count ="+count+" 相似度= "+ count/400 +"%");
		alert(" count_test ="+count_test+" 相似度= "+ count_test/400 +"%");
}

