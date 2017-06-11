var el = document.querySelectorAll(".more");
var els= document.querySelectorAll("li");

var reset=document.querySelector(".left-btn");
var cum=document.querySelector(".right-btn");

reset.onclick=function(){
	for(var i in els){
		els[i].className=""
	}
	for(var i in el){
		el[i].className=""
	}
}


for(var i in el){
	el[i].onclick=function(){
		var clas=this.className;
		if(clas.indexOf("bg")!=-1){
			this.className="";
			this.querySelector("i").className="bgs";
		}else{
			this.className="bg";
			this.querySelector("i").className="bgs2";
			var txt = this.parentNode.innerText.slice(0,-1);
			console.log(txt)
		}
	}
}

for(var i in els){
	els[i].onclick=function(){
		var cla=this.className;
		var bg1 = document.querySelectorAll(".bg1");
		if(cla.indexOf("bg1")!=-1){
			this.className="";
		}else{			
				for(var i in els){
					els[i].className=""
				}
				this.classList.add("bg1");	
				var txt1 = this.innerText;
				console.log(txt1)
		}
	}
}








