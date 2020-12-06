$(function(){
	var _ball = $('.ball');
	var _nameIn = $('.in');
	var _tZ = $('.tz');
	init();
	initAnime();
	
	_ball.click(function(){
		if(!Number(sessionStorage.getItem('isBallClick'))){
			sessionStorage.setItem('isBallClick',1);
			ballClick();
		}
	});
	
	_nameIn.bind('keypress',function(event){ 
		if(_nameIn.val().length == 0){
			return;
		}else if(event.keyCode == 13){
			nameInClick();  
		}  
	});
	
	_tZ.click(function(){
		tzCick();
	});

});

function init(){
	sessionStorage.setItem('isBallClick',0);
}

function addName(name){
	sessionStorage.setItem('name',name);
}
