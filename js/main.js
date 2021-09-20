

var currentFrames = 0;
var galleryList = '';


var imageObj_green = '';
var imageObj_red = '';
var imageObj_bunny = '';
var imageObj_jester = '';
var imageObj_wizard = '';
var previousX = 0;

var actorBunny = '';
var actorMushroomGreen;
var actorMushroomRed;
var actorMushroomPurple;
var actorJester;
var actorWizard;
var assetsLoaded = false;
var actorJann;
var actorBoogie;
var actorSkeleton;

var actorTitle;
var actorking;
var actorqueen;
var actorbishop;
var actorpriest;
var actorskull;
var actorufo;
var actoralien;
var actoralienjhon;
var actorRobot;

var home ;
var pixelArt ;
var music ;
var about ;
var slideIndex = 1;


var actors = [];


function requestGalleryList() {
    var xmlhttp = new XMLHttpRequest(),
        method = 'GET',
        url = '../db/pictureGallery.json';

    xmlhttp.onreadystatechange = function () {
        try {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                //myFunction(myArr);


                console.log("Gallery loaded ")
                populateGrid(myArr);
                assetsLoaded = true;
            }
        } catch (e) {
            console.log(e);
        }

    };
  
    xmlhttp.open(method, url, true);
    xmlhttp.send();

    actorBunny = new Actor(0, 0, new Sprite(4, 4, document.getElementById('bunny'), 3));
    actorMushroomGreen = new Actor(0, 0, new Sprite(2, 4, document.getElementById('hongo1'), 19));
    actorMushroomRed = new Actor(0, 0, new Sprite(2, 4, document.getElementById('hongo2'), 4));
    actorJester = new Actor(0, 0, new Sprite(4, 4, document.getElementById('jester'), 5));
    actorWizard = new Actor(0, 0, new Sprite(4, 4, document.getElementById('wizard'), 3));
    actorBoogie = new Actor(0, 0, new Sprite(2, 2, document.getElementById('boogie'), 25));
    actorSkeleton = new Actor(0, 0, new Sprite(2, 2, document.getElementById('skeleton'), 20));
    actorJann = new Actor(0, 0, new Sprite(3, 3, document.getElementById('jan'), 8));
    actorTitle = new Actor(0, 0, new Sprite(2, 2, document.getElementById('title'), 5));
    //actorJaan = new Actor(0, 0, new Sprite(2,2, document.getElementById('jan'), 8));
    actorking = new Actor(0, 0, new Sprite(2, 2, document.getElementById('king'), 3));
    actorqueen = new Actor(0, 0, new Sprite(4, 4, document.getElementById('queen'), 3));
    actorbishop = new Actor(0, 0, new Sprite(4, 4, document.getElementById('bishop'), 3));
    actorpriest = new Actor(0, 0, new Sprite(4, 4, document.getElementById('priest'), 3));
    actorskull = new Actor(0, 0, new Sprite(4, 4, document.getElementById('skull'), 8));
    actorufo = new Actor(0, 0, new Sprite(2, 4, document.getElementById('ufo'), 1));
    actoralien = new Actor(0, 0, new Sprite(4, 4, document.getElementById('alien'), 6));
    actoralienjhon = new Actor(0, 0, new Sprite(2, 3, document.getElementById('jhon'), 32));
    actorMushroomPurple = new Actor(0, 0, new Sprite(3, 4, document.getElementById('hongo3'), 10));
    actorRobot = new Actor(0, 0, new Sprite(3, 4, document.getElementById('robot'), 25));
    home = document.getElementById('page_home');
    pixelArt = document.getElementById('page_pixel');
    music = document.getElementById('page_music');
    about = document.getElementById('page_about');
    slideIndex=1;
    showDivs(slideIndex,'btn_home');
    
}



function u(t) {

    if (!assetsLoaded) { return; }
    c.width |= 0
    f = frame
    W = c.width;
    H = c.height;
    //q = Math.abs(S(t) * 255 + W * H) % 255;
    //c.style.background = R(0);


    /*for (x.fillRect(0, 0, i = 2e3, i); i--; x.fillRect(960 + i * S(i) * Z, 540 + i * C(i * i) * Z, Z, Z)) {
        x.fillStyle = R(i, i * C(i), Z = 2 ** T(i / 9 + t / 3), i + .03)

    }*/
    var newLocal = C(t / 4);
    var nextX = W / 2 + newLocal * W;
    moveActor(c, actorRobot, W - W / 3.5, H - actorRobot.sprite_.img.height * actorRobot.sprite_.scaleY - 15, f >> 4);
    moveActor(c, actorMushroomPurple, W / 8, H - actorMushroomPurple.sprite_.img.height * actorMushroomPurple.sprite_.scaleY, f >> 4);
    moveActor(c, actorMushroomGreen, actorMushroomGreen.x, H - actorMushroomGreen.sprite_.img.height * actorMushroomGreen.sprite_.scaleY, (f >> (newLocal) + 6) + 1);
    moveActor(c, actorMushroomRed, W - actorMushroomRed.sprite_.img.width * 0.5, c.height - actorMushroomRed.sprite_.img.height * actorMushroomRed.sprite_.scaleY, (f >> (newLocal) + 6) + 1);

    moveActor(c, actoralienjhon, W - W / 2.5, H - actoralienjhon.sprite_.img.height * actoralienjhon.sprite_.scaleY, f >> 3);
    moveActor(c, actorBoogie, W / 2, c.height - actorBoogie.sprite_.img.height * actorBoogie.sprite_.scaleY, (f >> C(t / 8) + 3) + 1);
    moveActor(c, actorBunny, nextX, H - actorBunny.sprite_.img.height * actorBunny.sprite_.scaleY, f >> 2);
    moveActor(c, actorWizard, W / 2 - C(t / 8) * W, H - actorWizard.sprite_.img.height * actorWizard.sprite_.scaleY, f >> 2);

    moveActor(c, actorSkeleton, W / 2 - C(t / 6) * W, H - actorSkeleton.sprite_.img.height * actorSkeleton.sprite_.scaleY + 15, (f >> 2) * 2);
    moveActor(c, actorJester, W / 2 - C(t / 32) * W, H - actorJester.sprite_.img.height * actorJester.sprite_.scaleY, (f >> 2));
    moveActor(c, actorJann, W - C(t / 7) * W, H - actorJann.sprite_.img.height * actorJann.sprite_.scaleY, (f >> 3));
    //moveActor(c,actorBoogie,W/2,H- actorBoogie.sprite_.img.height * actorBoogie.sprite_.scaleY,(f >> C(t/8)+3 )+1);
    moveActor(c, actorTitle, W / 2 - actorTitle.sprite_.img.width / 5, H / 3, (f >> 4));
    moveActor(c, actorking, W / 2 - actorking.sprite_.img.width * actorking.sprite_.scaleY / 1.5, H - actorking.sprite_.img.height * actorking.sprite_.scaleY, (f >> 4));
    moveActor(c, actorbishop, W / 2 - actorbishop.sprite_.img.width * actorbishop.sprite_.scaleY / 2, H - actorbishop.sprite_.img.height * actorbishop.sprite_.scaleY, (f >> 4));
    moveActor(c, actorpriest, W / 2 - actorpriest.sprite_.img.width * actorpriest.sprite_.scaleY / 3, H - actorpriest.sprite_.img.height * actorpriest.sprite_.scaleY, (f >> 4));
    moveActor(c, actorqueen, W / 2 - actorqueen.sprite_.img.width * actorqueen.sprite_.scaleX / 5, H - actorqueen.sprite_.img.height * actorqueen.sprite_.scaleY, (f >> 4));

    moveActor(c, actorskull, W / 4 - C(t / 3) * W, H / 2 - actorskull.sprite_.img.height * actorskull.sprite_.scaleY * newLocal, (f >> 4) * 2);
    moveActor(c, actoralien, W / 3 - C(t / 8) * W, H - actoralien.sprite_.img.height * actoralien.sprite_.scaleY, (f >> 3));
    moveActor(c, actorufo, W / 4 - C(t / 4.5) * W, H / 4 - actorufo.sprite_.img.height * actorufo.sprite_.scaleY * newLocal, (f >> 4) * 2);

}

function moveActor(c, actor, newx, newy, frame) {
    actor.oldX = actor.x;
    actor.flipNextX_ = actor.oldX > newx;
    actor.x = newx;
    actor.y = newy;
    drawSpriteActor(c, frame, actor);
}

/*Page navigation*/
// Slideshow

function currentPage(pageIndex){

}

function showDivs(n,navid) {
    var i;

    var pages = [home, pixelArt, music, about];
    

    console.log(n);
    if (n > pages.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = pages.length };
    for (i = 0; i < pages.length; i++) {
        //console.log(pages[i]);
        pages[i].style.display = "none";
    }

    pages[n - 1].style.display = "block";
    slideIndex =n;
    var list = document.getElementsByTagName("a")
    for (let index = 0; index < list.length; index++) {
        list[index].classList.remove("active");
    }
    document.getElementById(navid).classList.add("active");
    
}


