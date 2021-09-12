

var currentFrames=0;
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


function loadSpriteContent(canvas,frame,xl,yl,scaleX,scaleY,imageObj,imgCount){
    var scaleX_ = scaleX;
    var scaleY_ = scaleY;
    
            var imgCount_ = imgCount;
            //var sprSheetW=836*2;
            var sprSheetW=imageObj.width;
            var spriteW=sprSheetW/imgCount;
            var spriteH=imageObj.height;

            var sx=spriteW*((frame)%imgCount);
            var sy=0;
            var swidth=spriteW;
            var sheight=spriteH;
            var xc=xl;
            var yc=yl;
            var imgWidth=spriteW;
            var imgHeight=spriteH;
            var ctx=canvas.getContext('2d');
           //x.drawImage(i,f%6*W/6,0,W/6,64,0,0,W/6,64);
           
            ctx.drawImage(imageObj,sx,sy,swidth,sheight,xc, yc, ((imgWidth)*scaleX_), imgHeight*scaleY_);
}

function u(t) {
c.width|=0
f=frame
W=c.width;
H=c.height;
q=Math.abs(S(t)*255+W*H)%255;
c.style.background = R();


for(x.fillRect(0,0,i=2e3,i);i--;x.fillRect(960+i*S(i)*Z,540+i*C(i*i)*Z,Z,Z)){
x.fillStyle=R(i,i*C(i),Z=2**T(i/9+t/3),i+.03)

}
var scalefactorX=2;
var scalefactorY=4;
if(f%(24+(6*S(t^f)|0)) == 0){
    var imageObj_green =  document.getElementById('hongo1');
    var imageObj_red =  document.getElementById('hongo2');
    currentFrames+=1;
    
    loadSpriteContent(c,currentFrames,0,(c.height-imageObj_green.height*4),2,4,imageObj_green,19);
    loadSpriteContent(c,currentFrames,c.width-imageObj_red.width*0.6,(c.height-imageObj_red.height*4),2,4,imageObj_red,4);
}else{
    var imageObj_green =  document.getElementById('hongo1');
    var imageObj_red =  document.getElementById('hongo2');
 
    loadSpriteContent(c,currentFrames,0,(c.height-imageObj_green.height*scalefactorY),scalefactorX,scalefactorY,imageObj_green,19);
    loadSpriteContent(c,currentFrames,c.width-imageObj_red.width*0.6,(c.height-imageObj_red.height*scalefactorY),scalefactorX,scalefactorY,imageObj_red,4);

}


}