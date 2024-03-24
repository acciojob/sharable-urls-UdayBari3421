let form = document.querySelector("form");

let str = "https://localhost:8080/"
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	document.querySelector("#url").innerText=`${str}?name=${form.name.value}&year${form.year.value}`;
	form.reset();
});