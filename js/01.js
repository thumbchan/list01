window.onload=function(){
	var btn_l=document.getElementById("btn-l");
	var btn_c=document.getElementById("btn-c");
	var imgs=document.getElementsByTagName("img");
	
	btn_l.onclick=function(){
		btn_l.className="btn-list-on";
		btn_c.className="btn-card-off";
		
		for(var i=0;i<imgs.length;i++){
			imgs[i].src="img/small.jpg";
			imgs[i].parentNode.className+="small";
		}
	}
	
	btn_c.onclick=function(){
		btn_l.className="btn-list-off";
		btn_c.className="btn-card-on";
		
		for(var j=0;j<imgs.length;j++){
			imgs[j].src="img/big.jpg";
			imgs[j].parentNode.className="a-img";
		}
	}
}
