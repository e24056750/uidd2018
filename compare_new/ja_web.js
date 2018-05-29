var a=0
//<!-- JavaScript part -->

function readURL(input){
  if(input.files && input.files[0]){
    var imageTagID = input.getAttribute("targetID");
    var reader = new FileReader();
    reader.onload = function (e) {
       var img = document.getElementById(imageTagID);
      img.setAttribute("src", e.target.result);
     img.style.height=100+'px';
	 img.style.width=100+'px';
    }
    reader.readAsDataURL(input.files[0]);
  }
}
button4.onclick=function(){
		a3.style.display="none";
		a2.style.display="block";
		a=3;
}



button1.onclick=function(){
		a3.style.display="none";
		a2.style.display="block";
		a=1;
}
button2.onclick=function(){
		a2.style.display="none";
		a3.style.display="block";
		a=2;
}
button3.onclick=function(){
		//p1資料處理
		var c1= document.getElementById("canvas");
		var ctx1=c1.getContext('2d');
		var img1 = document.getElementById("a1")
		ctx1.drawImage(img1,0,0);
		var p1 = ctx1.getImageData(0,0,100,100);
		if(a==1){
		//p2資料處理
		var c2= document.getElementById("canvas");
		var ctx2=c2.getContext('2d');
		var img2 = document.getElementById("a2")
		ctx2.drawImage(img2,0,0);
		var p2 = ctx2.getImageData(0,0,100,100);
				var count =0;
		for(var i=0;i<40000;){
			if( p2.data[i]>p1.data[i]-10&& p2.data[i]<p1.data[i]+10){
				count++;
			}
						if( p2.data[i+1]>p1.data[i+1]-10 && p2.data[i+1]<p1.data[i+1]+10){
				count++;
			}
						if( p2.data[i+2]>p1.data[i+2]-10 && p2.data[i+2]<p1.data[i+2]+10){
				count++;
			}
      i=i+4;
		}
		alert("x count ="+count+" 相似度= "+ count/400 +"%");
		}
		//p3資料處理
		if(a==2){
		var c3= document.getElementById("canvas");
		var ctx3=c3.getContext('2d');
		var img3 = document.getElementById("a3")
		ctx3.drawImage(img3,0,0);
		var p3 = ctx3.getImageData(0,0,100,100);
			///測試
		var count_test =0;
				for(var i=0;i<40000;){
				if( p3.data[i]>p1.data[i]-10 && p3.data[i]<p1.data[i]+10){
				count_test++;
			}				if( p3.data[i+1]>p1.data[i+1]-10 && p3.data[i+1]<p1.data[i+1]+10){
				count_test++;
			}				if( p3.data[i+2]>p1.data[i+2]-10 && p3.data[i+2]<p1.data[i+2]+10){
				count_test++;
			}i=i+4;
		}		
		
		alert(" count_test ="+count_test+" 相似度= "+ count_test/400 +"%");
		}
		//開始比對
		if(a==3){
		var c3= document.getElementById("canvas");
		var ctx3=c3.getContext('2d');
		var img3 = document.getElementById(imageTagID);
		ctx3.drawImage(img3,0,0);
		var p3 = ctx3.getImageData(0,0,100,100);
			///測試
		var count_test =0;
				for(var i=0;i<40000;){
				if( p3.data[i]>p1.data[i]-10 && p3.data[i]<p1.data[i]+10){
				count_test++;
			}				if( p3.data[i+1]>p1.data[i+1]-10 && p3.data[i+1]<p1.data[i+1]+10){
				count_test++;
			}				if( p3.data[i+2]>p1.data[i+2]-10 && p3.data[i+2]<p1.data[i+2]+10){
				count_test++;
			}i=i+4;
		}		
		
		alert("xx count_test ="+count_test+" 相似度= "+ count_test/400 +"%");
		}

	
		
		
}

