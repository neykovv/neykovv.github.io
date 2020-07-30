let firstGauge = document.querySelector('.skills__item:first-child .progress');
let firstTarget = parseInt(firstGauge.getAttribute('data-target'));
let firstGaugeReadout = document.querySelector('.skills__item:first-child .percentage > .value');

let secondGauge = document.querySelector('.skills__item:nth-child(2) .progress');
let secondTarget = parseInt(secondGauge.getAttribute('data-target'));
let secondGaugeReadout = document.querySelector('.skills__item:nth-child(2) .percentage > .value');

let thirdGauge = document.querySelector('.skills__item:nth-child(3) .progress');
let thirdTarget = parseInt(thirdGauge.getAttribute('data-target'));
let thirdGaugeReadout = document.querySelector('.skills__item:nth-child(3) .percentage > .value');

let fourthGauge = document.querySelector('.skills__item:nth-child(4) .progress');
let fourthTarget = parseInt(fourthGauge.getAttribute('data-target'));
let fourthGaugeReadout = document.querySelector('.skills__item:nth-child(4) .percentage > .value');

//variables
let gaugeR = parseInt(document.querySelectorAll('circle')[0].getAttribute('r'));
let gaugeC = gaugeR * Math.PI * 2;
let animationDuration = 1.2;

//init svg circles
let circles = document.querySelectorAll('circle');
let gauges = document.querySelectorAll('.progress');
TweenMax.set(circles, {
  strokeDashoffset: gaugeC
});

TweenMax.set(gauges, {
  attr: {
    'stroke-dasharray': gaugeC + ' ' + gaugeC
  }
});

//calculate the offset
function calculateOffset(t, c) {
			
  let target = c - (c * t) / 100;
  return target;

}

//timeline
let tl = new TimelineMax();

//first gauge animation
tl.to(firstGauge, animationDuration, {

  strokeDashoffset: calculateOffset(firstTarget, gaugeC),
  ease: Bounce.easeOut,
  onUpdate: function() {

    let currentStrokeOffset = parseInt(firstGauge.style.strokeDashoffset);
    firstGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//second gauge animation

tl.to(secondGauge, animationDuration, {

  strokeDashoffset: calculateOffset(secondTarget, gaugeC),
  ease: Bounce.easeOut,
  onUpdate: function() {

    let currentStrokeOffset = parseInt(secondGauge.style.strokeDashoffset);
    secondGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//third gauge animation
tl.to(thirdGauge, animationDuration, {

  strokeDashoffset: calculateOffset(thirdTarget, gaugeC),
  ease: Bounce.easeOut,
  onUpdate: function() {

    let currentStrokeOffset = parseInt(thirdGauge.style.strokeDashoffset);
    thirdGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//fourth gauge animation
tl.to(fourthGauge, animationDuration, {

  strokeDashoffset: calculateOffset(fourthTarget, gaugeC),
  ease: Bounce.easeOut,
  onUpdate: function() {

    let currentStrokeOffset = parseInt(fourthGauge.style.strokeDashoffset);
    fourthGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

/*tl.to(secondGauge, animationDuration, {

  strokeDashoffset: calculateOffset(secondTarget, gaugeC),
  ease: Power3.easeInOut,
   onUpdate: function() {

    var currentStrokeOffset = parseInt(secondGauge.style.strokeDashoffset);
    secondGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//third gauge animation
tl.to(thirdGauge, animationDuration, {

  strokeDashoffset: calculateOffset(thirdTarget, gaugeC),
  ease: Elastic.easeOut.config(1, 0.4),
   onUpdate: function() {

    var currentStrokeOffset = parseInt(thirdGauge.style.strokeDashoffset);
    thirdGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//fourth gauge animation
tl.to(fourthGauge, animationDuration, {

  strokeDashoffset: calculateOffset(fourthTarget, gaugeC),
  ease: SlowMo.ease.config(0.1, 1.3, false),
   onUpdate: function() {

    var currentStrokeOffset = parseInt(fourthGauge.style.strokeDashoffset);
    fourthGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});*/
    