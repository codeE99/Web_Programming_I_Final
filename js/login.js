//login form sign in 
document.addEventListener("DOMContentLoaded",(event)=>{
	const login=document.getElementById("myForm");
		
	if(login){
		login.addEventListener("submit",(e)=>{
		e.preventDefault();
	const inputName=document.getElementById("username");
	const inputPass=document.getElementById("password");
	const name=inputName.value;
	const pass=inputPass.value;
	
	
	if(name==="student" && pass==="Q!W@E#R$"){
		window.location.href="welcome.html";
	}else{
		console.log("Invalid username/password!");
		alert("Invalid username/password! Remember to use your username and password for your RYUG account!");
		inputPass.value="";
	}
	});
	}else{
		console.error("Form not found!");
	}
});

//advertisment word count
function wordCount(){
	const allWords=document.body.innerText;
	const removeSpace=allWords.trim();
	const total=(removeSpace==="")?0:removeSpace.split(/\s+/).length;
	
	const advertisment=document.querySelector(".glowing");
	
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