let form = document.querySelector("form");

let str = "https://localhost:8080/"
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	if (form.name.value && !form.year.value) {
		document.querySelector("#url").innerText=`${str}?name=${form.name.value}`;
	} else if (!form.name.value && form.year.value) {
		document.querySelector("#url").innerText=`${str}?year=${form.year.value}`;
	} else{
		document.querySelector("#url").innerText=`${str}?name=${form.name.value}&year${form.year.value}`;
	}
	form.reset();
});