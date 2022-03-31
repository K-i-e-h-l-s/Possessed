function showline1(){

	element = document.querySelector(".line1");
	element.style.setProperty('visibility', 'visible');
}

function showline2(){

	element = document.querySelector(".line2");
	element.style.setProperty('visibility', 'visible');
}

function showline3(){

	element = document.querySelector(".line3");
	element.style.setProperty('visibility', 'visible');
}

function showfigure1(){

	element = document.querySelector(".box1");
	element.style.setProperty('visibility', 'visible');
}
function showfigure2(){

	element = document.querySelector(".box2");
	element.style.setProperty('visibility', 'visible');
	element = document.querySelector(".box1");
	element.style.setProperty('visibility', 'hidden');
}
function showfigure3(){

	element = document.querySelector(".box3");
	element.style.setProperty('visibility', 'visible');
	element = document.querySelector(".box2");
	element.style.setProperty('visibility', 'hidden');
}
function showfigure4(){
	element = document.querySelector(".box4");
	element.style.setProperty('visibility', 'visible');
	element = document.querySelector(".box3");
	element.style.setProperty('visibility', 'hidden');
}

function flick(){
	element = document.querySelector(".blackbox");
	element.style.setProperty('visibility', 'visible');
}

function unflick(){
	element = document.querySelector(".blackbox");
	element.style.setProperty('visibility', 'hidden');
}
function red(){
	element = document.querySelector(".blackbox");
	element.style.setProperty('background-color', 'red');
}

function black(){
	element = document.querySelector(".blackbox");
	element.style.setProperty('background-color', 'black');
}
function end(){
	element = document.querySelector(".ending");
	element.style.setProperty('visibility', 'visible');
}

showline1();
setTimeout(() => { showline2(); }, 2000);
setTimeout(() => { showline3(); }, 4000);
setTimeout(() => { showfigure1(); }, 15000);
setTimeout(() => { flick(); }, 16500);
setTimeout(() => { unflick(); }, 18000);
setTimeout(() => { showfigure2(); }, 18000);
setTimeout(() => { flick(); }, 	19500);
setTimeout(() => { unflick(); }, 21000);
setTimeout(() => { showfigure3(); }, 21000);
setTimeout(() => { flick(); }, 22500);
setTimeout(() => { unflick(); }, 24000);
setTimeout(() => { showfigure4(); }, 24000);
setTimeout(() => { flick(); }, 25500);
setTimeout(() => { red(); }, 26000);
setTimeout(() => { black(); }, 26500);
setTimeout(() => { end(); }, 28000);

