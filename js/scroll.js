const storyScroll=document.getElementById("story");
let scrollSpeed;
let isScrolling=false;

function scroll(){
	if(!isScrolling){
		isScrolling=true;
		scrollSpeed=setInterval(()=>{
		storyScroll.scrollTop+=1;
		},45);
	} 
 }
 
 function stopScroll(){
	 if(isScrolling){
	clearInterval(scrollSpeed);
	scroll=false;
 }
}
 
 storyScroll.addEventListener("click",()=>{
	 if(isScrolling){
		 stopScroll();
		 isScrolling=false;
	 }else{
		scroll();
	 }
 });
	