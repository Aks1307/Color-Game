var noof=6;
var colors=genrndm(noof);
var squares=document.querySelectorAll(".square");
var cc=document.querySelector("#pick");
var m=document.querySelector("#msg");
var h1=document.querySelector("h1");
var res=document.querySelector("#reset");
var esy=document.querySelector("#easyb");
var hrd=document.querySelector("#hardb");


esy.addEventListener("click",function(){
	noof=3;

this.classList.add("selected");
hrd.classList.remove("selected");
colors=genrndm(noof);
pc=rnd();
cc.textContent=pc;
for (var i = 0; i < squares.length; i++) {
	if(colors[i])
		{squares[i].style.background=colors[i];
		}
		else
			{

				squares[i].style.display="none";
			}
}
});


hrd.addEventListener("click",function(){
noof=6;
this.classList.add("selected");
esy.classList.remove("selected");
colors=genrndm(noof);
pc=rnd();
cc.textContent=pc;
for (var i = 0; i < squares.length; i++) {

		squares[i].style.background=colors[i];
				
			{

				squares[i].style.display="block";
			}
		}


})

pc=rnd();
cc.textContent=pc;

for(var i=0;i<squares.length;i++)
{


squares[i].style.background=colors[i];
	

squares[i].addEventListener("click",function(){

var sc=(this.style.background);
if(sc === pc){
	m.textContent="Correct!!";
	h1.style.background=sc;
 chgclr(sc);
 res.textContent="Play Again "
}else{
	this.style.background="#232323";
	m.textContent="Incorrect!!!";
}

});
}
function chgclr(color){


for (var i = 0; i <squares.length; i++) {
squares[i].style.background=color;
}


}
function rnd(){

	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function genrndm(num){

var arr= [];
for (var i = 0; i < num; i++) {
	arr.push(rc());

}
return arr;
}

function rc()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

return "rgb("+r+", "+g+", "+b +")";
}
res.addEventListener("click",function(){	

colors=genrndm(noof);
pc=rnd();
cc.textContent=pc;
h1.style.color="white";
res.textContent="new color";
for(var i=0;i<squares.length;i++)
{
squares[i].style.background=colors[i];
}
h1.style.background="steelblue";

m.textContent="";
this.textContent="New Colors";


});