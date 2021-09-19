
class Sprite {

  constructor(scaleX, scaleY, img, imgCount) {
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.img = img;
    this.imgCount = imgCount;
  }
  get loadHtmlImage() {
    return this.img;
  }
}
class Actor {
  flipNextX_;
  sprite_;
  oldX_;
  constructor(x, y, sprite_) {
    this.x = x;
    this.y = y;
    this.sprite_ = sprite_;
    this.flipNextX_ = false;
  }

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


function drawSpriteActor(canvas, frame, actor_) {

  var scaleX_ = actor_.sprite_.scaleX;
  var scaleY_ = actor_.sprite_.scaleY;


  var imageObj = actor_.sprite_.img;
  var imgCount_ = actor_.sprite_.imgCount;
  //var sprSheetW=836*2;
  var sprSheetW = actor_.sprite_.img.width;
  var spriteW = sprSheetW / actor_.sprite_.imgCount;
  var spriteH = actor_.sprite_.img.height;

  var sx = spriteW * ((frame) % imgCount_);
  var sy = 0;
  var swidth = spriteW;
  var sheight =spriteH;
  var xc = actor_.x;
  var yc = actor_.y;
  var ctx = canvas.getContext('2d');
  //x.drawImage(i,f%6*W/6,0,W/6,64,0,0,W/6,64);
  if (actor_.flipNextX_) {
    ctx.save()
    ctx.translate(xc, 0);
    ctx.scale(-1, 1);
    ctx.translate(-xc, 0);
    ctx.drawImage(imageObj, sx, sy, swidth, sheight, xc, yc, ((swidth) * scaleX_), sheight * scaleY_);
    ctx.restore();
    return;
  }
  ctx.save();
  ctx.drawImage(imageObj, sx, sy, swidth, sheight, xc, yc, ((swidth) * scaleX_), sheight * scaleY_);
  ctx.restore();

}