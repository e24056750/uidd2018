var start_on = document.getElementById("start");
var river2_on = document.getElementById("river");
var ship = document.getElementById("ship");
var page2 = document.getElementById("page2");
var click = document.getElementById("click");
var count = document.getElementById("count");
var page3 = document.getElementById("page3");
var login =document.getElementById("login");
var hi1 =document.getElementById("home");
var hi2 =document.getElementById("attraction");
var hi3 =document.getElementById("food");
var hi4 =document.getElementById("contact");
var logo =document.getElementById("logo");
logo.onclick=function(){
		alert("歡迎來到府城五條港遊戲區，請點擊遊戲開始，並藉由在10秒內賺到的錢購買想吃的食物");
}
logo.onmouseover=function(){
	logo.style.width=16+"vw";
	logo.style.height=19+"vh";	
}
logo.onmouseout =function() {
	logo.style.width=15+"vw";
	logo.style.height=18+"vh";
}
var money =document.getElementById("money2");
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
var click_word = document.getElementById("click");
click_word.onclick=function(){
		alert("要點start才可以拿到錢哦~~");
}
var money1 = document.getElementById("money1");
var money2 = document.getElementById("money2");
money2.onclick=function(){
		alert("仔細看看掉下來的硬幣   是不是跟你賺的一樣多呢!?");
}
money2.onmouseover=function(){
	money2.style.top=19.5+"%";
}
money2.onmouseout =function() {
	
	money2.style.top=20+"%";
}
var money_count = 0;
Number(money1.innerHTML);
var coins = new Array(5);
coins[0]=document.getElementById("coin1");
coins[1]=document.getElementById("coin2");
coins[2]=document.getElementById("coin3");
coins[3]=document.getElementById("coin4");
coins[4]=document.getElementById("coin5");
var icon_time=0;
icon.onclick=function(){
	
		if(icon_time==0){alert("我只是個圖案");}
		else if(icon_time==1){alert("幹嘛一直點我= =");}
		else if(icon_time==2){alert("可惡我要生氣惹╰（‵□′）╯!!");}
		else if(icon_time==3){alert("我不理你了");}
		icon_time++;
		if(icon_time==6){alert("沒被打過?");}
		if(icon_time==6){alert("可惡我要把你頁面關掉");}
		if(icon_time==6){alert(".");}
		if(icon_time==6){alert("...");}	
		if(icon_time==6){alert(".......");}
		if(icon_time==6){alert("乾我不會關= =");}
}
icon.onmouseover=function(){
	icon.style.width=19+"vw";
	icon.style.height=19+"vh";	
}
icon.onmouseout =function() {
	icon.style.width=18+"vw";
	icon.style.height=18+"vh";
}
weather.onclick=function(){
		alert("今天天氣真好啊~~");
		alert("不要惹FB IG TWITTER連結三兄弟哦");
}
weather.onmouseover=function(){
	weather.style.width=10+"vw";
	weather.style.height=12+"vh";	
}
weather.onmouseout =function() {
	weather.style.width=9+"vw";
	weather.style.height=11+"vh";
}
login.onclick=function(){
		alert("你要login甚麼??   0.0");
}
login.onmouseover=function(){
	login.style.width=8+"vw";
	login.style.height=8+"vh";	
}
login.onmouseout =function() {
	login.style.width=7+"vw";
	login.style.height=7+"vh";
}
hi1.onclick=function(){
		alert("嗨");
}
hi1.onmouseover=function(){
	hi1.style.width=8+"vw";
	hi1.style.height=8+"vh";	
}
hi1.onmouseout =function() {
	hi1.style.width=7+"vw";
	hi1.style.height=7+"vh";
}
hi2.onclick=function(){
		alert("嗨嗨");
}
hi2.onmouseover=function(){
	hi2.style.width=11+"vw";
	hi2.style.height=8+"vh";	
}
hi2.onmouseout =function() {
	hi2.style.width=10+"vw";
	hi2.style.height=7+"vh";
}
hi3.onclick=function(){
		alert("嗨嗨嗨");
}
hi3.onmouseover=function(){
	hi3.style.width=8+"vw";
	hi3.style.height=8+"vh";	
}
hi3.onmouseout =function() {
	hi3.style.width=7+"vw";
	hi3.style.height=7+"vh";
}
hi4.onclick=function(){
		alert("嗨嗨嗨嗨");
}
hi4.onmouseover=function(){
	hi4.style.width=10+"vw";
	hi4.style.height=8+"vh";	
}
hi4.onmouseout =function() {
	hi4.style.width=9+"vw";
	hi4.style.height=7+"vh";
}
page1.onclick=function(){
		alert("五條港是昔日清朝時存在於今臺南市中西區裡的五條商用港道，由北到南分別是新港墘港、佛頭港、南勢港（或稱北勢港)、南河港與安海港。是當時非常繁榮的地方哦");
}
page1.onmouseover=function(){
	page1.style.width=21+"vw";
	page1.style.height=15+"vh";	
}
page1.onmouseout =function() {
	page1.style.width=20+"vw";
	page1.style.height=14+"vh";
}
page2.onclick=function(){
		alert("臺南水仙宮位於臺南市中西區，是中華民國直轄市定古蹟，也是昔日臺灣府城七寺八廟之一。廟內主祀水仙尊王，即「一帝兩王二大夫」的大禹、寒奡、項羽、伍子胥和屈原。");
}
page2.onmouseover=function(){
	page2.style.width=21+"vw";
	page2.style.height=15+"vh";	
}
page2.onmouseout =function() {
	page2.style.width=20+"vw";
	page2.style.height=14+"vh";
}
page3.onclick=function(){
		alert("水仙宮市場名字的由來乃係因為它是以水仙宮廟為中心，並且水仙宮廟乃被政府列為三級古蹟，是在地人相當有名且規模相當大的一間宮廟。");
}
page3.onmouseover=function(){
	page3.style.width=21+"vw";
	page3.style.height=17+"vh";	
}
page3.onmouseout =function() {
	page3.style.width=20+"vw";
	page3.style.height=16+"vh";
}
food1.onclick=function(){
	if(money_count>=25){
		alert("便宜料多的海產麵，只要55元就可以飽餐一頓!賺");money_count=money_count-25;
	}else {alert("敢吃霸王餐!!");}
}
food1.onmouseover=function(){
	food1.style.width=21+"vw";
	food1.style.height=31+"vh";	
}
food1.onmouseout =function() {
	food1.style.width=20+"vw";
	food1.style.height=30+"vh";
}
food2.onclick=function(){
	if(money_count>=25){
		alert("好吃好吃(￣﹁￣)");money_count=money_count-25;
	}else {alert("四郎!!踢她出去╰（‵□′）╯");}
}
food2.onmouseover=function(){
	food2.style.width=21+"vw";
	food2.style.height=14+"vh";	
}
food2.onmouseout =function() {
	food2.style.width=20+"vw";
	food2.style.height=13+"vh";
}
food3.onclick=function(){
	if(money_count>=25){
		alert("挖~這生魚片也太新鮮了吧owo!!");money_count=money_count-25;
	}else {alert("來人啊把他抬出去!!＝　＝╬ ");}
}
food3.onmouseover=function(){
	food3.style.width=21+"vw";
	food3.style.height=31+"vh";	
}
food3.onmouseout =function() {
	food3.style.width=20+"vw";
	food3.style.height=30+"vh";
}
food4.onclick=function(){
	if(money_count>=25){
		alert("大鮪堂生魚片握壽司一級棒!!> <");money_count=money_count-25;
	}else {alert("我們這兒不歡迎窮光蛋!!<(￣ ﹌ ￣)>");}
}
food4.onmouseover=function(){
	food4.style.width=21+"vw";
	food4.style.height=14+"vh";	
}
food4.onmouseout =function() {
	food4.style.width=20+"vw";
	food4.style.height=13+"vh";
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
		coins[0].style.top = -10+"%";
		coins[1].style.top = -10+"%";
		coins[2].style.top = -10+"%";
		coins[3].style.top = -10+"%";
		coins[4].style.top = -10+"%";}
			a = 1;}}

	start_on.onclick =function() {
		x++;
		var pos1 = 51;
		var pos2 = 51;
		var pos3 = 51;
		var pos4 = 51;
		var pos5 = 51;
		var t = setInterval(move,1);
		var down1=0;
		var down2=0;
		var down3=0;
		var down4=0;
		var down5=0;
		count.innerHTML ++;
		money_count++;

		function move() {

			if(x==1 && pos1==51 &&down1==0) {
				down1=1;
			} else if(x==2 && pos2==51&&down2==0) {
				down2=1;
			} else if(x==3 && pos3==51&&down3==0) {
				down3=1;
			} else if(x==4 && pos4==51&&down4==0) {
				down4=1;
			} else if(x==5 && pos5==51&&down5==0) {
				down5=1;
			}

			if(down1==1) {
				if(pos1<-10) {down1=0;pos1=51;}
				pos1 -= 0.3;
				coins[0].style.display = "block";
				coins[0].style.top = pos1+"%";
			}
			if(down2==1) {
				if(pos2<-10) {down2=0;pos2=51;}
				pos2 -= 0.3;
				coins[1].style.display = "block";
				coins[1].style.top = pos2+"%";
			}
			if(down3==1) {
				if(pos3<-10) {down3=0;pos3=51;}
				pos3 -= 0.3;
				coins[2].style.display = "block";
				coins[2].style.top = pos3+"%";
			}
			if(down4==1) {
				if(pos4<-10) {down4=0;pos4=51;}
				pos4 -= 0.3;
				coins[3].style.display = "block";
				coins[3].style.top = pos4+"%";
			}
			if(down5==1) {
				if(pos5<-10) {down5=0;pos5=51;}
				pos5 -= 0.3;
				coins[4].style.display = "block";
				coins[4].style.top = pos5+"%";
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
			var pos1 = -10;
			var pos2 = -11;
			var pos3 = -14;
			var pos4 = -18;
			var pos5 = -13;
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

					if (x == 1 && pos1 == -10 && down1 == 0) {
						down1 = 1;
						drop_money--;
					} else if (x == 2 && pos2 == -11 && down2 == 0) {
						down2 = 1;
						drop_money--;
					} else if (x == 3 && pos3 == -14 && down3 == 0) {
						down3 = 1;
						drop_money--;
					} else if (x == 4 && pos4 == -18 && down4 == 0) {
						down4 = 1;
						drop_money--;
					} else if (x == 5 && pos5 == -13 && down5 == 0) {
						down5 = 1;
						drop_money--;
					}
				}
				if (down1 == 1) {

					pos1 += 0.3;
					coins[0].style.display = "block";
					coins[0].style.left = 20+"%";
					coins[0].style.top = pos1 + "vh";
					if (pos1 > 100) {
						down1 = 0;
						pos1 = -10;
						coins[0].style.display = "none";
					}
				}
				if (down2 == 1) {

					pos2 += 0.2;
					coins[1].style.display = "block";
					coins[1].style.left = 40+ "%";
					coins[1].style.top = pos2 + "vh";
					if (pos2 > 100) {
						down2 = 0;
						pos2 = -11;
						coins[1].style.display = "none";
					}
				}
				if (down3 == 1) {

					pos3 += 0.4;
					coins[2].style.display = "block";
					coins[2].style.left =77+ "%";
					coins[2].style.top = pos3 + "vh";
					if (pos3 > 100) {
						down3 = 0;
						pos3 = -14;
						coins[2].style.display = "none";
					}
				}
				if (down4 == 1) {

					pos4 += 0.2;
					coins[3].style.display = "block";
					coins[3].style.left = 60+ "%";
					coins[3].style.top = pos4 + "vh";
					if (pos4 > 100) {
						down4 = 0;
						pos4 = -18;
						coins[3].style.display = "none";
					}
				}
				if (down5 == 1) {

					pos5 += 0.3;
					coins[4].style.display = "block";
					coins[4].style.left = 90+ "%";
					coins[4].style.top = pos5 + "vh";
					if (pos5 > 100) {
						down5 = 0;
						pos5 = -13;
						coins[4].style.display = "none";
					}
				}

			}
		}
	}
}