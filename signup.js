var hover=document.querySelectorAll(".hover");
var radio=document.querySelectorAll(".onhover");
for(var i=0;i<hover.length;i++){
hover[i].addEventListener("mouseover",function() {
	this.style.backgroundColor="rgba(244, 65, 119, 0.2)";
});
}
for(var i=0;i<hover.length;i++){
hover[i].addEventListener("mouseout",function() {
	this.style.backgroundColor="rgba(255, 255, 255, 1)";
});
}
for(var i=0;i<radio.length;i++){
radio[i].addEventListener("mouseover",function() {
	this.style.backgroundColor="rgba(123, 65, 244, 0.2)";
});
}
for(var i=0;i<radio.length;i++){
radio[i].addEventListener("mouseout",function() {
	this.style.backgroundColor="rgba(255, 255, 255, 1)";
});
}