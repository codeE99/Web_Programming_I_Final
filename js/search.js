const searchForm=document.getElementById("formSearch");
const searchBar=document.getElementById("siteSearch");

const siteList={
	"login":"login.html",
	"history":"history.html",
	"discount":"discount.html",
	"contact":"contact.html",
	"faq":"faq.html",
};
searchForm=document.addEventListener("submit", (e)=>{
e.preventDefault();
const input=searchBar.value.trim().toLowerCase();
if(siteList[input]){
	window.location.href=siteList[input];
}
});