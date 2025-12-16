//for the tile matching game
window.firstMatchFound=false;
var A=shuffle();
var paircount=0;

function tog_class(id, cl){
	var elem=document.getElementById(id);
	if(elem.classList.contains(cl)===true){
		elem.classList.remove(cl);
	} else {
		elem.classList.add(cl);
	}
}

function add_class(id, cl){
	var elem=document.getElementById(id);
	if(elem.classList.contains(cl)===false){
		elem.classList.add(cl);
	}
}

function rem_class(id,cl){
	var elem=document.getElementById(id);
	if(elem.classList.contains(cl)===true){
		elem.classList.remove(cl);
	}
}

function tog_elem(i, elem){
	document.getElementById("tile_"+i).onclick=function(){
		tog_class("tile_"+i, "tile_open");
		setTimeout(function(){
			tog_class("tile_icon_"+i, "fa-"+elem);
		},0);
	};
}

function add_elem(i, tileData){
	document.getElementById("tile_"+i).onclick=function(){
		if(window.firstMatchFound===true){
			return;
		}
		window.opentile=i;
		add_class("tile_"+i,"tile_open");
		add_class("tile_icon_"+i,"fa-"+tileData.type);
		
		if(window.tilecount==1){
				if(i!=window.lasttile&&window.A[i].type==window.A[window.lasttile].type){
				var match=window.A[i].value;
				document.getElementById("matched").textContent="You saved! You discount is: "+match+"%!";
				var first=document.getElementById("tile_"+i);
				var second=document.getElementById("tile_"+window.lasttile);
				
				//first.classList.add("tile_closed");
				//second.classList.add("tile_closed");
				
				//first.onclick="";
				//second.onclick="";
				
				window.paircount++;
				//if(window.paircount==8){
					if(window.paircount==1){
						window.firstMatchFound=true;
					add_class("overlay_win", "overlay_win_open");
				}
			}else{
				rem_delay(window.opentile,window.lasttile);
			}
			
			window.tilecount=0;
		}else{
			window.lasttile=i;
			window.tilecount++;
		}
	};
}

function rem_select(i){
	rem_class("tile_"+i, "tile_open");
	rem_class("tile_icon_"+i, "fa-eye");
	rem_class("tile_icon_"+i, "fa-star");
	rem_class("tile_icon_"+i, "fa-heart");
	rem_class("tile_icon_"+i, "fa-diamond");
}

function rem_delay(first, second){
	setTimeout(function(){
		rem_select(first);
		rem_select(second);
	},1000);
}

function shuffle(){
	var j;
	var t;
	
	var A=[
		{type:"eye",value:5},
		{type:"eye",value:5},
		{type:"eye",value:5},
		{type:"eye",value:5},
		{type:"star",value:10},
		{type:"star",value:10},
		{type:"star",value:10},
		{type:"star",value:10},
		{type:"heart", value:15},
		{type:"heart", value:15},
		{type:"heart", value:15},
		{type:"heart", value:15},
		{type:"diamond",value:20},
		{type:"diamond",value:20},
		{type:"diamond",value:20},
		{type:"diamond",value:20},
	];
	
	for(let i=0;i<16;i++){
		j=Math.floor(Math.random()*(i+1));
		t=A[i];
		A[i]=A[j];
		A[j]=t;
	}
	console.log(A);
	return A;
}

/*function reset_tiles(){
	for(let i=0;i<16;i++){
		rem_select(i);
		add_elem(i,window.A[i]);
		rem_class("tile_"+i,"tile_closed");
	}
}

function reset(){
	window.firstMatchFound=false;
	window.A=shuffle();
	window.paircount=0;
	window.tilecount=0;
	window.lasttile=null;
	window.opentile=null;
	
	reset_tiles();
	
	rem_class("overlay_win", "overlay_win_open");
}*/
		
var A=shuffle();
var paircount=0;
var tilecount=0;
var lasttile=null;
var opentile=null;

for(let i=0;i<16;i++){
	add_elem(i,A[i]);
}
	
/*document.getElementById("overlay_win").onclick=function(){
	reset();
}*/


