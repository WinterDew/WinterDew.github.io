
var file = (window.innerWidth < 1000) ? "res/particlesjs-config-mobile.json" : "res/particlesjs-config.json";

particlesJS.load('particles-js', file, function() {
    console.log(`${file} loaded`);
});