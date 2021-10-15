__author__ = 'John'
from PIL import Image
from datetime import datetime
import time
import os
from PIL import ImageFont
from PIL import ImageDraw 

path = "../img/pixelart/newfiles/cubecollabs/"
currentDate = datetime.now().strftime('%Y-%m-%d-%H-%M-%S')
files = os.listdir(path)

cubes = []

filteredFiles1 = filter(lambda file: file.endswith('.png'), files)
filteredFiles2 = filter(lambda file: file.endswith('.PNG'), files)

filteredFiles = list(filteredFiles2) + list(filteredFiles1)

for f in filteredFiles:
    print(f)
    #im = Image.open(path+f)
    cubes.append(path+f)


print(len(cubes)/4)
W = 62*4+62
H = int(62*len(cubes)/4)
bigim = Image.new("RGBA", (W, H),(0, 0, 0, 255))
imgnum=0
cy = -62
cx =15 
for y in range(0, int(len(cubes)/4)):
    cy += -15
    cx = -15 if y %2 ==0 else 15
    for x in range(0, 4):
        imgnum+=1
        print("cube ", imgnum, " x ", x, " y ", y," cx ",cx," cy ",cy," cx+x*62 ",cx+x*62," cy+ y*62 ",cy+y*62)
        im= Image.open(cubes[imgnum-1])
        bigim.paste(im,(30+cx+x*62,100+ cy+y*62),im.convert('RGBA'))
        
  
#pix = im.getpixel((31,31))
# im.putpixel((0,0),(0,0,255))

#draw = ImageDraw.Draw(bigim)
font = ImageFont.truetype(r'../fonts/FFFFORWA.ttf', 16)

bigim.save('fractal.png')
bigim = Image.open('fractal.png')
draw = ImageDraw.Draw(bigim)
text ="CUBE COLLAB ENTRIES"
draw.text((W-len(text)*14.23, H-50),text,(255,0,255),font)
bigim.save('fractal.png') 
bigim.show()