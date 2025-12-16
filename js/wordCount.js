function wordCount(){
	const allWords=document.body.innerText;
	const removeSpace=allWords.trim();
	const total=(removeSpace==="")?0:removeSpace.split(/\s+/).length;
	
	const advertisment=document.querySelector(".advert");
	
	if(advertisment){
		const newDiv=document.createElement("div");
		newDiv.textContent=`Total Words on Page: ${total}`;
		newDiv.style.marginBottom="20px";
		newDiv.style.padding="10px";
		newDiv.style.border="1px solid black";
		newDiv.style.fontWeight="bold";
		newDiv.style.backgroundColor="white";
		advertisment.parentNode.insertBefore(newDiv, advertisment);
	}
}

document.addEventListener("DOMContentLoaded", (e)=>{
	wordCount();
});