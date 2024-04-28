//'Clown Fish' by Rachel Hisko on Unsplash

/* timeline sequence */
var timeline = gsap.timeline({repeat: -1, repeatDelay: 1});

timeline.to("img", {duration: 2, x: 400}); /* move forward to 400 pos */
timeline.to("img", {scaleX: -1, x: 400}); /* flip horizontally */
timeline.to("img", {duration: 2, x: 0}); /* move forward to start pos */
timeline.to("img", {scaleX: 1, x: 0}); /* flip horizontally */
