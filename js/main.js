

var currentFrames = 0;
var galleryList ='';

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
                console.log(myArr);
            }
        } catch (e) {
            console.log(e);
        }

    };
    xmlhttp.open(method, url, true);
    xmlhttp.send();


}

//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
/*Parameter	Description	Play it
img	Specifies the image, canvas, or video element to use	 
sx	Optional. The x coordinate where to start clipping	
sy	Optional. The y coordinate where to start clipping	
swidth	Optional. The width of the clipped image	
sheight	Optional. The height of the clipped image	
xc	The x coordinate where to place the image on the canvas	
yc	The y coordinate where to place the image on the canvas	
width	Optional. The width of the image to use (stretch or reduce the image)	
height	Optional. The height of the image to use (stretch or reduce the image)*/


function loadSpriteContent(canvas, frame, xl, yl, scaleX, scaleY, imageObj, imgCount) {
    var scaleX_ = scaleX;
    var scaleY_ = scaleY;

    var imgCount_ = imgCount;
    //var sprSheetW=836*2;
    var sprSheetW = imageObj.width;
    var spriteW = sprSheetW / imgCount;
    var spriteH = imageObj.height;

    var sx = spriteW * ((frame) % imgCount);
    var sy = 0;
    var swidth = spriteW;
    var sheight = spriteH;
    var xc = xl;
    var yc = yl;
    var imgWidth = spriteW;
    var imgHeight = spriteH;
    var ctx = canvas.getContext('2d');
    //x.drawImage(i,f%6*W/6,0,W/6,64,0,0,W/6,64);

    ctx.drawImage(imageObj, sx, sy, swidth, sheight, xc, yc, ((imgWidth) * scaleX_), imgHeight * scaleY_);
}

function u(t) {
    c.width |= 0
    f = frame
    W = c.width;
    H = c.height;
    q = Math.abs(S(t) * 255 + W * H) % 255;
    c.style.background = R();


    for (x.fillRect(0, 0, i = 2e3, i); i--; x.fillRect(960 + i * S(i) * Z, 540 + i * C(i * i) * Z, Z, Z)) {
        x.fillStyle = R(i, i * C(i), Z = 2 ** T(i / 9 + t / 3), i + .03)

    }
    var scalefactorX = 2;
    var scalefactorY = 4;
   
    if (f % (24 + (6 * S(t ^ f) | 0)) == 0) {
        var imageObj_green = document.getElementById('hongo1');
        var imageObj_red = document.getElementById('hongo2');
        currentFrames += 1;

        loadSpriteContent(c, currentFrames, 0, (c.height - imageObj_green.height * scalefactorY+20), 2, 4, imageObj_green, 19);
        loadSpriteContent(c, currentFrames, c.width - imageObj_red.width * 0.6, (c.height - imageObj_red.height * scalefactorY+35), 2, 4, imageObj_red, 4);
    } else {
        var imageObj_green = document.getElementById('hongo1');
        var imageObj_red = document.getElementById('hongo2');

        loadSpriteContent(c, currentFrames, 0, (c.height - imageObj_green.height * scalefactorY+20), scalefactorX, scalefactorY, imageObj_green, 19);
        loadSpriteContent(c, currentFrames, c.width - imageObj_red.width * 0.6, (c.height - imageObj_red.height * scalefactorY+35), scalefactorX, scalefactorY, imageObj_red, 4);

    }

    
    for(x.font='32px l',i=0;i<59;i++){
        x.fillStyle=R(255*(i%2),255,255)
        x.fillText(String.fromCharCode(((f)*i)%8500),C(o=20*i+t)*i*13+950,S(o+=i/6)*i*19+450)
       }


       for(j=0;j<51;j++)
       for(i=0;i<51;i++){
       x.fillStyle=R(0,255,255)
       if((i^j+f)%15){
       x.fillRect(i*5,j*5,5,5)}
       } 
       
          
       
}

