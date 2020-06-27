pancake.timers = {};
pancake.timers.second = 80;

pancake.timers.countdown = function(f, ms) {
    return window.setTimeout(f, ms);
};

pancake.timers.timer = function(f, ms) {
    return window.setInterval(f, 1000 / ms);
};

pancake.timers.pause = function(timer) {
    window.clearInterval(timer);
};

// Don't judge me,I used that one by Paul Irish
// Sorry if that makes Pancake sucks
pancake.timers.animate = function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            window.oRequestAnimationFrame      ||
            function(callback, fps) {
                window.setTimeout(callback, 1000 / fps);
            };
};