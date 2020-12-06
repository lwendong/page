function initAnime() {
	anime({
		targets: '.ball',
		scale: {
			value: 2,
			duration: 1000,
			endDelay: 0
		},
		direction: 'alternate',
		loop: true,
		endDelay: 500,
		easing: 'easeInExpo'
	});

}

function ballClick() {

	anime.remove('.ball');

	var click = anime.timeline({
		targets: '.ball',
		easing: 'easeInOutQuad',
		duration: 2000
	});

	click
		.add({
			color: {
				value: '#D9D9F3',
				duration: 2000
			},
			rotate: {
				value: 360
			},
			scale: {
				value: 2
			}
		})
		.add({
			fontSize: {
				value: '55px'
			},
			width: {
				value: '+=650px',
				duration: 1000,
				easing: 'easeInOutSine'
			},
			height: {
				value: '+=50px',
				duration: 1000,
				easing: 'easeInOutSine'
			},
			borderRadius: {
				value: ['50%', '0'],
				duration: 1500
			},
			update: function(anim) {
				$('.click').text('HELL0');
			}
		}, '+=400')
		.add({
			border: {
				value: ['5px #EAF2D3 solid', '0px #EAF2D3 solid'],
				duration: 1000
			}
		}, '-=1000')
		.add({
			targets: '.click',
			translateX: '-380px',
			translateY: '-140px',
			duration: 1250,
			complete: function(anim) {
				$('.ball').css('display', 'none');
				$('.page').css('display', 'block');
			}
		}, '-=1500')
		.add({
			targets: '.hx',
			opacity: '1',
			duration: 1250,
			update: function(anim) {
				$('.hx').css('display', 'block');
			}
		}, '+=800')
		.add({
			targets: '.in',
			opacity: '1',
			duration: 1250,
			update: function(anim) {
				$('.in').css('display', 'block');
			}
		}, '+=500')
		
}

function nameInClick() {
	var click = anime.timeline({
		easing: 'easeInOutQuad',
		duration: 1000
	});

	click
		.add({
			targets: '.in',
			translateX: '+=500px',
			width: '-=1000px',
			update: function(anim) {
				$('.in').attr("disabled", "disabled");
				$('.xm').html('&nbsp,&nbsp' + $('.in').val());
			},
			complete: function(anim) {
				$('.in').css('display', 'none');
				addName($('.in').val());
			}
		})
		.add({
			targets: '.xm',
			opacity: '1',
			update: function(anim) {
				$('.xm').css('display', 'block');
			}
		}, '-=500')
		.add({
			targets: '.hx',
			opacity: 0,
			complete: function(anim) {
				$('.hx').css('display', 'none');
				$('.jd').css('display', 'block');
				$('.hj').css('display', 'block');
			}
		}, '-=700')
		.add({
			targets: '.jd',
			opacity: 1,
			duration: 2000
		}, '+=500')
		.add({
			targets: '.hj',
			opacity: 1,
			duration: 2000,
			complete: function(anim) {
				$('.icon').css('display', 'block');
			}
		}, '+=500')
		.add({
			targets: 'svg path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 2500,
			delay: function(el, i) { return i * 250 },
			direction: 'alternate',
			loop: true
		})
}

function tzCick(){
	var click = anime.timeline({
		easing: 'easeInQuad',
		duration: 1000,
		direction: 'normal',
		targets: '.page',
	});
	click
	.add({
		borderRadius: '50%',
	})
	.add({
		scale: '0',
		complete: function(anim) {
			window.location.href="http://www.baidu.com";
		}
	},'-=200')
}