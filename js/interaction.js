var current = 0;
var lock = false;

var transluscent = .35;
var slideSpeed = 750;

var colorPrimary = '#000000';
var colorSecondary = '#FFFFFF';

var intervalID;
var direction = 's';
var direction_next = 's';

var bgimg = 1;
var onPhone;

function onLoad(){
	centerDivs();
	if($(window).width() <= 799){
		onPhone = true;
	} else {
		onPhone = false;
	}
	$(window).resize(function(){
		centerDivs();
		if($(window).width() <= 799){
			onPhone = true;
		} else {
			onPhone = false;
		}
	});
}

function centerDivs(){
	$('.page div').each(function(){
		$(this).css({'margin-top':-$(this).height()/2});
	});
}

$(window).load(onLoad);

function onReady(){
	//link hover effects
	$('a').not('.pointer').each(function(){
		$(this).mouseenter(function(){
			$(this).animate({
				backgroundColor:colorPrimary,
				color: colorSecondary
			},400);
		});
		$(this).mouseout(function(){
			$(this).animate({
				backgroundColor:colorSecondary,
				color: colorPrimary
			},400);
		});
	});
	
	for(var i=1;i<6;i++){
		var p = $('.pointer'+i);
		p.bind('click', function(event){
			var p_num = parseInt($(this).attr('class').split(' ')[1].replace('pointer',''));
			if(current == p_num-1){
				nextPage();
			} else if (current == p_num){
				prevPage();
			}
		});
	}
	
	//scroll down = next page, prev for scroll up
	$('body').bind('mousewheel', function(event, delta, deltaX, deltaY) {
		
		if((deltaY < 0 || deltaX > 0) && delta < 0 ){
			nextPage();
		} else if ((deltaY > 0 || deltaX < 0) && delta > 0){
			prevPage();
		}
		return false;
	});
	
	/*
	$('.content').bind('click', function(event){
		if(!galleryReady) return;
		
		if(event.pageX > $(this).width()/2){
			nextPhoto();
		} else {
			prevPhoto();
		}
	});
	
	//swiping on phone
	$(".content").touchwipe({
		wipeLeft: function() { nextPhoto(); },
		wipeRight: function() { prevPhoto(); },
		wipeUp: function() { nextPhoto();},
		wipeDown: function() { prevPhoto(); },
		min_move_x: 20,
		min_move_y: 20,
		preventDefaultEvents: true
   });*/
	
	
}

$(document).ready(onReady);

//next/prev arrow clicked, next/prev page enters
function enterPage(num){
	var p = $('.page:eq('+num+')');
	if(p.hasClass('page_s') || onPhone){
		p.animate({
			top:'50%'
		},slideSpeed);
	} else if(p.hasClass('page_e')){
		p.animate({
			left:'50%'
		},slideSpeed);
	} else if(p.hasClass('page_n')){
		p.animate({
			bottom:'50%'
		},slideSpeed);
	} else if(p.hasClass('page_w')){
		p.animate({
			right:'50%'
		},slideSpeed);
	}
}

//prev arrow clicked, page exits
function exitPagePrev(num){
	var p = $('.page:eq('+num+')');
	if(p.hasClass('page_s') || onPhone){
		p.animate({
			top:'120%'
		},slideSpeed);
	} else if(p.hasClass('page_e')){
		p.animate({
			left:'120%'
		},slideSpeed);
	} else if(p.hasClass('page_n')){
		p.animate({
			bottom:'120%'
		},slideSpeed);
	} else if(p.hasClass('page_w')){
		p.animate({
			right:'120%'
		},slideSpeed);
	}
}

//next arrow clicked, page exits
function exitPageNext(num){
	var p = $('.page:eq('+num+')');
	if(p.hasClass('page_s') || onPhone){
		p.animate({
			top:'-20%'
		},slideSpeed);
	} else if(p.hasClass('page_e')){
		p.animate({
			left:'-20%'
		},slideSpeed);
	} else if(p.hasClass('page_n')){
		p.animate({
			bottom:'-20%'
		},slideSpeed);
	} else if(p.hasClass('page_w')){
		p.animate({
			right:'-20%'
		},slideSpeed);
	}
}

//next arrow clicked, next arrow enters
function enterArrowNext(num){
	var p = $('.pointer'+num);
	if(p.hasClass('black_down') || p.hasClass('white_down') || onPhone){
		p.animate({
			top:'75%'
		},slideSpeed);
	} else if(p.hasClass('black_left') || p.hasClass('white_left')){
		p.animate({
			left:'25%'
		},slideSpeed);
	} else if(p.hasClass('black_up') || p.hasClass('white_up')){
		p.animate({
			top:'30%'
		},slideSpeed);
	} else if(p.hasClass('black_right') || p.hasClass('white_right')){
		p.animate({
			left:'75%'
		},slideSpeed);
	}
}

//prev arrow clicked, next arrow exits
function exitArrowNext(num){
	var p = $('.pointer'+num);
	if(p.hasClass('black_down') || p.hasClass('white_down') || onPhone){
		p.animate({
			top:'140%'
		},slideSpeed);
	} else if(p.hasClass('black_left') || p.hasClass('white_left')){
		p.animate({
			left:'-40%'
		},slideSpeed);
	} else if(p.hasClass('black_up') || p.hasClass('white_up')){
		p.animate({
			top:'-40%'
		},slideSpeed);
	} else if(p.hasClass('black_right') || p.hasClass('white_right')){
		p.animate({
			left:'140%'
		},slideSpeed);
	}
}

//prev arrow clicked, prev arrow enters
function enterArrowPrev(num){
	var p = $('.pointer'+num);
	if(p.hasClass('black_down') || p.hasClass('white_down') || onPhone){
		p.animate({
			top:'30%'
		},slideSpeed);
	} else if(p.hasClass('black_left') || p.hasClass('white_left')){
		p.animate({
			left:'75%'
		},slideSpeed);
	} else if(p.hasClass('black_up') || p.hasClass('white_up')){
		p.animate({
			top:'75%'
		},slideSpeed);
	} else if(p.hasClass('black_right') || p.hasClass('white_right')){
		p.animate({
			left:'25%'
		},slideSpeed);
	}
}

//next arrow clicked, prev arrow moves back
function exitArrowPrev(num){
	var p = $('.pointer'+num);
	if(num == 1){
		p.animate({
			top:'50%'
		},slideSpeed);
	} else {
		enterArrowNext(num);
	}
}

//prev arrow clicked, next arrow enters
function enterArrowFinal(num){
	enterArrowPrev(num);
}

//next arrow clicked, prev arrow enters
function exitArrowFinal(num){
	var p = $('.pointer'+num);
	if(p.hasClass('black_down') || p.hasClass('white_down') || onPhone){
		p.animate({
			top:'-40%'
		},slideSpeed);
	} else if(p.hasClass('black_left') || p.hasClass('white_left')){
		p.animate({
			left:'140%'
		},slideSpeed);
	} else if(p.hasClass('black_up') || p.hasClass('white_up')){
		p.animate({
			top:'140%'
		},slideSpeed);
	} else if(p.hasClass('black_right') || p.hasClass('white_right')){
		p.animate({
			left:'-40%'
		},slideSpeed);
	}
}

function prevPage(){
	if(lock || current == 0) return;
	lock = true;
	transition();
	moveHeaderPrev();
	enterPage(current-2);
	exitPagePrev(current-1);
	exitArrowPrev(current);
	exitArrowNext(current+1);
	enterArrowFinal(current-1);
	exitSpecial();
	current --;
	enterSpecial();
}

function nextPage(){
	if(lock || current == 4) return;
	if(current == 0){
		$("#page_first").animate({
			'top':'-100%'
		},slideSpeed, function(){
			$("#page_first").remove();
		})
	}
	lock = true;
	transition();
	moveHeaderNext();
	enterPage(current);
	exitPageNext(current-1);
	exitArrowFinal(current);
	enterArrowPrev(current+1);
	enterArrowNext(current+2);
	exitSpecial();
	current ++;
	enterSpecial();
}

function moveHeaderPrev(){
	var t = $("#header");
	switch(direction){
		case "up":
			t.animate({
				'top':'-100%'
			},slideSpeed/2);
			break;
		case "right":
			t.animate({
				'left':'100%'
			},slideSpeed/2);
			break;
		case "down":
			t.animate({
				'top':'100%'
			},slideSpeed/2);
			break;
		case "left":
			t.animate({
				'left':'-100%'
			},slideSpeed/2);
			break;
	}
	setTimeout(function(){
		switch(direction_prev){
			case "up":
				t.css({'top':$(window).height(),'left':'0'});
				break;
			case "right":
				t.css({'top':'0','left':-$(window).width()});
				break;
			case "down":
				t.css({'top':-$(window).height(),'left':'0'});
				break;
			case "left":
				t.css({'top':'0','left':$(window).width()});
				break;
		}
	},slideSpeed/2+20);
	setTimeout(function(){
		t.animate({
			'top':'0',
			'left':'0'
		},slideSpeed/2);
	},slideSpeed/2+40);
}

function moveHeaderNext(){
	var t = $("#header");
	switch(direction){
		case "up":
			t.animate({
				'top':'100%'
			},slideSpeed/2);
			break;
		case "right":
			t.animate({
				'left':'-100%'
			},slideSpeed/2);
			break;
		case "down":
			t.animate({
				'top':'-100%'
			},slideSpeed/2);
			break;
		case "left":
			t.animate({
				'left':'100%'
			},slideSpeed/2);
			break;
	}
	setTimeout(function(){
		switch(direction_next){
			case "up":
				t.css({'top':-$(window).height(),'left':'0'});
				break;
			case "right":
				t.css({'top':'0','left':$(window).width()});
				break;
			case "down":
				t.css({'top':$(window).height(),'left':'0'});
				break;
			case "left":
				t.css({'top':'0','left':-$(window).width()});
				break;
		}
	},slideSpeed/2+20);
	setTimeout(function(){
		t.animate({
			'top':'0',
			'left':'0'
		},slideSpeed/2);
	},slideSpeed/2+40);
}

function transition(){
	direction_prev = (current <= 1 || onPhone) ? 'down' : $('.pointer'+(current-1)).attr('class').split(' ')[2].replace('black_','').replace('white_','');
	direction = (!current || onPhone) ? 'down' : $('.pointer'+(current)).attr('class').split(' ')[2].replace('black_','').replace('white_','');
	direction_next = (current>=4 || onPhone) ? 'down' : $('.pointer'+(current+1)).attr('class').split(' ')[2].replace('black_','').replace('white_','');
	
	intervalID = setInterval(function(){
		toggleColors();
		setColors();
	},50);
	setTimeout(function(){
		clearInterval(intervalID);
		if((current%2==1 && colorPrimary=="#000000") || (current%2==0 && colorPrimary=="#FFFFFF")){
			toggleColors();
			setColors();
		}
		lock = false;
	},slideSpeed+100);
}

function enterSpecial(){
	if(current == 0 || onPhone) return;
	switch(current){
		case 1:
			$.get('get/developer.php',function(ret){
				$("#wrapper").append(ret);
				$("#game").animate({
					'bottom':0
				}, slideSpeed, function(){
					startGame();
				});
			});
			break;
		case 2:
			bgimg = Math.ceil(Math.random()*5);
			break;
		case 3:
			startConversation();
			break;
	}
}
function exitSpecial(){
	if(current == 0 || onPhone) return;
	switch(current){
		case 1:
			endGame();
			$("#game").animate({
					'bottom':'-150'
				}, slideSpeed, function(){
					$("#game").remove();
				})
			break;
		case 3:
			endConversation();
			break;
	}
}

function toggleColors(){
	if(colorPrimary == '#000000'){
		colorPrimary = '#FFFFFF';
		colorSecondary = '#000000';
	} else {
		colorPrimary = '#000000';
		colorSecondary = '#FFFFFF';
	}
}

function setColors(){
	$('h3').css('background',colorSecondary);
	$('#wrapper').css({'background':colorSecondary,'color':colorPrimary});
	$('#wrapper a').not('.pointer').css({'background':colorSecondary,'color':colorPrimary});
	
	//game
	$('#player').css({'background':colorPrimary,'color':colorSecondary});
	$('#floor').css({'background':colorPrimary,'color':colorSecondary});
	$('.obstacle').css('background',colorPrimary);
	
	//convo
	$('.message').css({'background':colorPrimary,'color':colorSecondary});
	
	if(colorPrimary == '#FFFFFF'){
		$('.black_up').removeClass('black_up').addClass('white_up');
		$('.black_right').removeClass('black_right').addClass('white_right');
		$('.black_down').removeClass('black_down').addClass('white_down');
		$('.black_left').removeClass('black_left').addClass('white_left');
	} else {
		$('.white_up').removeClass('white_up').addClass('black_up');
		$('.white_right').removeClass('white_right').addClass('black_right');
		$('.white_down').removeClass('white_down').addClass('black_down');
		$('.white_left').removeClass('white_left').addClass('black_left');
	}
	
	if(current == 2 && !onPhone){
		if(colorPrimary == '#FFFFFF'){
			$("#wrapper").css({'background':'url(photos/'+bgimg+'.jpg) no-repeat center '+colorSecondary,'background-size':'100%'});
		} else {
			$("#wrapper").css({'background':'url(photos/'+bgimg+'_.jpg) no-repeat center '+colorSecondary,'background-size':'100%'});
		}
	}
}


/****GAME VARIABLES & FUNCTIONS****/
var frameInterval;
var generateInterval;

var xSpeed = 15;
var ySpeed = 0;
var jumping = false;
var jumpSpeed = 20;
var g = 2;
var groundHeight = 30;

var score = 0;
var highscore = 0;

var game_message = 'Click Anywhere or Spacebar to Jump!'

function game_jump(){
	if(jumping) return;
	game_message = '';
	jumping = true;
	ySpeed = jumpSpeed;
}

function game_gravity(){
	if(jumping){
		ySpeed -= g;
		$("#player").css('bottom','+='+ySpeed);
		var playerY = $("#player").css('bottom');
		if(parseInt(playerY) < groundHeight){
			ySpeed = 0;
			$("#player").css('bottom',groundHeight);
			jumping = false;
		}
	}
}

function game_reset(){
	score = 0;
	jumping = false;
	ySpeed = 0;
	$("#player").css('bottom',groundHeight);
	window.localStorage.setItem('highscore',highscore);
	$('.obstacle').remove();
}

function startGame(){
	highscore = window.localStorage.getItem('highscore');
	frameInterval = setInterval(function(){
		game_gravity();
		score ++;
		if(score > highscore){
			highscore = score;
		}
		$("#floor").html('Score: '+score+'&nbsp &nbsp &nbsp High Score: '+highscore+' &nbsp &nbsp'+game_message);
		$('.obstacle').css('right','+='+xSpeed);
		$('.obstacle').each(function(){
			if($(this).offset().left < -5){
				$(this).remove();
			}
			
			var x1 = $(this).offset().left;
			var y1 = $(this).offset().top;
			var h1 = $(this).outerHeight(true);
			var w1 = $(this).outerWidth(true);
			var b1 = y1 + h1;
			var r1 = x1 + w1;
			var x2 = $('#player').offset().left;
			var y2 = $('#player').offset().top;
			var h2 = $('#player').outerHeight(true);
			var w2 = $('#player').outerWidth(true);
			var b2 = y2 + h2;
			var r2 = x2 + w2;
			  
			if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return;
			game_reset();
		});
	},50);
	generateInterval = setInterval(function(){
		$('#game').append('<div class="obstacle"></div>');
	},2000)
	$('body').on('mousedown', game_jump);
	$('body').keydown(function(e){
		if(e.keyCode == 32){
			game_jump();
		}
	 });
}

function endGame(){
	game_reset();
	clearInterval(frameInterval);
	clearInterval(generateInterval);
}

/**SOCIAL MEDIA SPECIALS**/
var currentText = 0;
var convoInterval;
var currentPerson = 1;
var faces1 = [': )', ': (', ': D', ': O', ': P', ': |', ': 3', ': V', ': S', '>: (', '>: )'];
var faces2 = ['( :', ') :', 'D :', 'O :', 'd :', '| :', 'c :', 'V :', 'S :', ') :<', '( :<'];

function startConversation(){
	$('#wrapper').append('<div id="conversation"></div>');
	setTimeout(function(){
		nextText();
		convoInterval = setInterval(nextText,1500);
	},slideSpeed);
}

function nextText(){
	var faces = (currentPerson == 1) ? faces1 : faces2;
	var face;
	
	var messageString = '';
	var numBlas = Math.ceil(Math.random()*5);
	for(i=0;i<numBlas;i++){
		messageString += ' bla';
	}
	
	var random = Math.random();
	if(random < .75){
		messageString += '.';
		
	} else if (random < .8){
		messageString += '!';
	} else if (random < .85){
		messageString += '?';
	} else if (random < .88){
		messageString += '...';
	} else if (random < .91){
		messageString += '???';
	} else if (random < .94){
		messageString += '!!!';
	} else if (random < .97){
		messageString += '?!?';
	} else{
		messageString += '?!?';
	}
	random = Math.random();
	if(random < .5){
		face = faces[0];
	} else if (random < .65){
		face = faces[1];
	} else {
		var facesLeft = faces.length-2;
		var compare = .65+.35/facesLeft;
		for(i=2;i<faces.length;i++){
			if(random < compare){
				face = faces[i];
				break;
			}
			compare += .35/facesLeft;
		}
	}
	
	var dir = (currentPerson == 1) ? 'left' : 'right'
	
	$('#conversation').append('<div id="t'+currentText+'" class="person'+currentPerson+' msg"><div class="pic">'+face+'</div><div class="message"><div class="speechtail white_'+dir+'"></div>'+messageString+'</div></div>');
	$('.msg').animate({
		'bottom':'+=100'
	}, 200);
	if(currentText > 4){
		$('#t'+(currentText-5)).animate({
			'opacity':'0'
		}, 200, function(){
			$(this).remove();
		});
	}
	
	currentPerson = (currentPerson == 1) ? 2 : 1;
	currentText ++;
}

function endConversation(){
	clearInterval(convoInterval);
	$(".person1").animate({
		'left':'-100%'
	},slideSpeed);
	$(".person2").animate({
		'right':'-100%'
	},slideSpeed, function(){
		$("#conversation").remove();
	});
	currentText = 0;
	currentPerson = 1;
}