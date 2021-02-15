var canvas = new fabric.Canvas("myCanvas");

var hero_x = 10;
var hero_y = 10;

var hero_obj = "";
var web_obj = "";

var web_width = 30;
var web_height = 30;
var hero_width = 150;
var hero_height = 140;
background_image= "images.jpeg";
spider_image= "spiderman.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.src = background_image;

    imgspider = new Image();
    imgspider.src = spider_image;
}
function uploadBackground() {
    canvas.getContext().drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}
function hero_update() {
    canvas.getContext().drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
    fabric.Image.fromURL("spiderman.png", function(Img){
        hero_obj = Img; 
        hero_obj.scaleToWidth(hero_width);
        hero_obj.scaleToHeight(hero_height);
        hero_obj.set({top:hero_y, left:hero_x});
        canvas.add(hero_obj);
    });
}
function new_web_update() {
    canvas.remove(hero_obj);
    fabric.Image.fromURL("web.png", function(Img){
        web_obj = Img; 
        web_obj.scaleToWidth(web_width);
        web_obj.scaleToHeight(web_height);
        web_obj.set({top:hero_y, left:hero_x});
        canvas.add(web_obj);
        uploadBackground();
        hero_update();
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    
    if (keypressed=='38') {
        up1();
        console.log("up");
    }
    if (keypressed=='40') {
        down1();
        console.log("down");
    }
    if (keypressed=='37') {
        left1();
        console.log("left");
    }
    if (keypressed=='39') {
        right1();
        console.log("right");
    }
    if (keypressed=='87') {
        new_web_update();
        console.log("web");
    }
}
function up1() {
    if (hero_y > 0) {
        hero_y = hero_y-10;
        console.log("The hero's X is = "+ hero_x +" and Y is = " + hero_y);
        canvas.remove(hero_obj);
        uploadBackground();
        hero_update();
    }
}
function down1() {
    if (hero_y < 500) {
        hero_y = hero_y+10;
        console.log("The hero's X is = "+ hero_x +" and Y is = " + hero_y);
        canvas.remove(hero_obj);
        uploadBackground();
        hero_update();
    }
}
function left1() {
    if (hero_x > 0) {
        hero_x = hero_x-10;
        console.log("The hero's X is = "+ hero_x +" and Y is = " + hero_y);
        canvas.remove(hero_obj);
        uploadBackground();
        hero_update();
    }
}
function right1() {
    if (hero_x < 900) {
        hero_x = hero_x+10;
        console.log("The hero's X is = "+ hero_x +" and Y is = " + hero_y);
        canvas.remove(hero_obj);
        uploadBackground();
        hero_update();
    }
}
