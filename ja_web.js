var start_on = document.getElementById("start");
var river2_on = document.getElementById("river");
var ship = document.getElementById("ship");
var page2 = document.getElementById("page2");
var click = document.getElementById("click");
var count = document.getElementById("count");
var page3 = document.getElementById("page3");
Number(count.innerHTML);
count.innerHTML = 0;
var second = document.getElementById("second");
second.innerHTML = 10;
var a = 0;
var change = 0;
var food1 = document.getElementById("noodle1");
var food2 = document.getElementById("noodle2");
var food3 = document.getElementById("sushi1");
var food4 = document.getElementById("sushi2");
var money1 = document.getElementById("money1");
var money2 = document.getElementById("money2");
var money_count = 0;
Number(money1.innerHTML);
var coins = new Array(5);
coins[0]=document.getElementById("coin1");
coins[1]=document.getElementById("coin2");
coins[2]=document.getElementById("coin3");
coins[3]=document.getElementById("coin4");
coins[4]=document.getElementById("coin5");

food1.onclick=function(){
	if(money_count>=25){
		alert("便宜料多的海產麵，只要55元就可以飽餐一頓!賺");money_count=money_count-25;
	}else {alert("敢吃霸王餐!!");}
}
food2.onclick=function(){
	if(money_count>=25){
		alert("好吃好吃");money_count=money_count-25;
	}else {alert("四郎!!踢她出去");}
}
food3.onclick=function(){
	if(money_count>=25){
		alert("挖~這生魚片也太新鮮了吧owo!!");money_count=money_count-25;
	}else {alert("來人啊把他抬出去!!");}
}
food4.onclick=function(){
	if(money_count>=25){
		alert("大鮪堂生魚片握壽司一級棒!!> <");money_count=money_count-25;
	}else {alert("我們這兒不歡迎窮光蛋!!");}
}

start_on.onmouseover =function() {
	start_on.src="start_b.png";
}
start_on.onmouseout =function() {
	start_on.src="start_w.png";
}
start_on.onclick =function() {
	river2_on.src="river2.png";
	ship.style.display="none";
	page2.style.display = "block";
	click.style.display = "block";
	count.style.display = "block";
	second.style.display = "block";
	second2.style.display = "block";
	word.style.display = "block";
	var x=0;
	if(a==0) {
		var t2 = setInterval(move2,1000);
		function move2() {
			second.innerHTML -=1;
			if (second.innerHTML<0) {change="2";	
		coins[0].style.top = -300+"px";
		coins[1].style.top = -300+"px";
		coins[2].style.top = -300+"px";
		coins[3].style.top = -300+"px";
		coins[4].style.top = -300+"px";}
			a = 1;}}

	start_on.onclick =function() {
		x++;
		var pos1 = 1200;
		var pos2 = 1200;
		var pos3 = 1200;
		var pos4 = 1200;
		var pos5 = 1200;
		var t = setInterval(move,1);
		var down1=0;
		var down2=0;
		var down3=0;
		var down4=0;
		var down5=0;
		count.innerHTML ++;
		money_count++;

		function move() {

			if(x==1 && pos1==1200 &&down1==0) {
				down1=1;
			} else if(x==2 && pos2==1200&&down2==0) {
				down2=1;
			} else if(x==3 && pos3==1200&&down3==0) {
				down3=1;
			} else if(x==4 && pos4==1200&&down4==0) {
				down4=1;
			} else if(x==5 && pos5==1200&&down5==0) {
				down5=1;
			}

			if(down1==1) {
				if(pos1<-200) {down1=0;pos1=1200;}
				pos1 -= 10;
				coins[0].style.display = "block";
				coins[0].style.top = pos1+"px";
			}
			if(down2==1) {
				if(pos2<-200) {down2=0;pos2=1200;}
				pos2 -= 10;
				coins[1].style.display = "block";
				coins[1].style.top = pos2+"px";
			}
			if(down3==1) {
				if(pos3<-200) {down3=0;pos3=1200;}
				pos3 -= 10;
				coins[2].style.display = "block";
				coins[2].style.top = pos3+"px";
			}
			if(down4==1) {
				if(pos4<-200) {down4=0;pos4=1200;}
				pos4 -= 10;
				coins[3].style.display = "block";
				coins[3].style.top = pos4+"px";
			}
			if(down5==1) {
				if(pos5<-200) {down5=0;pos5=1200;}
				pos5 -= 10;
				coins[4].style.display = "block";
				coins[4].style.top = pos5+"px";
			}

			if(x>5) {x=0;}

		}

	}
}
var changepage = setInterval(changepage, 1);
var start_drop = 0;
function changepage() {
	if (change == "2") {
		change=1;
	
	}
	if (change == "1") {
		river.style.display = "none";
		click.style.display = "none";
		count.style.display = "none";
		second.style.display = "none";
		second2.style.display = "none";
		word.style.display = "none";
		start_on.style.display = "none";
		page3.style.display = "block";
		food1.style.display = "block";
		food2.style.display = "block";
		food3.style.display = "block";
		food4.style.display = "block";
		money1.style.display = "block";
		money2.style.display = "block";
		money1.innerHTML = money_count;
		start_drop++;
		var x = 0;
		if (start_drop == "1") {
			var drop_money = money_count;
			var pos1 = -200;
			var pos2 = -220;
			var pos3 = -240;
			var pos4 = -260;
			var pos5 = -280;
			var t3 = setInterval(move3, 1);
			var down1 = 0;
			var down2 = 0;
			var down3 = 0;
			var down4 = 0;
			var down5 = 0;
			function
			move3()
			{
				if (drop_money > 0) {
					x++;
					if (x > 5) {
						x = 1;
					}

					if (x == 1 && pos1 == -200 && down1 == 0) {
						down1 = 1;
						drop_money--;
					} else if (x == 2 && pos2 == -220 && down2 == 0) {
						down2 = 1;
						drop_money--;
					} else if (x == 3 && pos3 == -240 && down3 == 0) {
						down3 = 1;
						drop_money--;
					} else if (x == 4 && pos4 == -260 && down4 == 0) {
						down4 = 1;
						drop_money--;
					} else if (x == 5 && pos5 == -280 && down5 == 0) {
						down5 = 1;
						drop_money--;
					}
				}
				if (down1 == 1) {

					pos1 += 3;
					coins[0].style.display = "block";
					coins[0].style.top = pos1 + "px";
					if (pos1 > 3000) {
						down1 = 0;
						pos1 = -200;
						coins[0].style.display = "none";
					}
				}
				if (down2 == 1) {

					pos2 += 5;
					coins[1].style.display = "block";
					coins[1].style.left = 1500 + "px";
					coins[1].style.top = pos2 + "px";
					if (pos2 > 3000) {
						down2 = 0;
						pos2 = -220;
						coins[1].style.display = "none";
					}
				}
				if (down3 == 1) {

					pos3 += 7;
					coins[2].style.display = "block";
					coins[2].style.left = 4000 + "px";
					coins[2].style.top = pos3 + "px";
					if (pos3 > 3000) {
						down3 = 0;
						pos3 = -240;
						coins[2].style.display = "none";
					}
				}
				if (down4 == 1) {

					pos4 += 4;
					coins[3].style.display = "block";
					coins[3].style.left = 3400 + "px";
					coins[3].style.top = pos4 + "px";
					if (pos4 > 3000) {
						down4 = 0;
						pos4 = -260;
						coins[3].style.display = "none";
					}
				}
				if (down5 == 1) {

					pos5 += 8;
					coins[4].style.display = "block";
					coins[4].style.left = 2800 + "px";
					coins[4].style.top = pos5 + "px";
					if (pos5 > 3000) {
						down5 = 0;
						pos5 = -280;
						coins[4].style.display = "none";
					}
				}

			}
		}
	}
}