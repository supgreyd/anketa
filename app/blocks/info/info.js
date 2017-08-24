
let obj = document.getElementById("name");
let el = obj.value;

obj.addEventListener("blur", function(){
	el = this.value
})



function fio() {

	let arr = el.split(' ')
	arr[1] = arr[1][0] + '.'
	arr[2] = arr[2][0] + '.'
	let width = window.innerWidth;
	if( width < 500){
		obj.value=arr.join(" ");
	}
	else if(width > 500){
		obj.value=el;
	}
}

(function(){

fio()

})()

window.onresize = fio


