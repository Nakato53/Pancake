p.can = {};
p.canvases = [];
p.can.compatible_width = window.innerWidth - 20;
p.can.compatible_height = window.innerHeight - 20;

p.can.create = function(w, h, c) {
    p.canvases[c] = document.createElement("canvas");
    p.canvases[c].width = w;
    p.canvases[c].height = h;
    document.body.appendChild(p.canvases[c]);
};

p.can.resize = function(w, h, c) {
    p.canvases[c].width = w;
    p.canvases[c].height = h;
};

p.can.setAttribute = function(v, val, c) {
    window.eval(" p.canvases[" + c.toString() + "]." + v.toString() + " = " + val.toString() + "; ");
};

p.can.remove = function(c) {
    p.canvases[c].parentNode.removeChild(p.canvases[c]);
};

p.can.hide = function(c) {
    p.canvases[c].style.visibility = "hidden";
};

p.can.show = function(c) {
    p.canvases[c].style.visibility = "visible";
};

p.can.set = function(ca, c) {
    p.canvases[c] = ca;
};
