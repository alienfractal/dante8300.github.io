import os

import json

path = "../img/pixelart/newfiles"
files = os.listdir(path)
#print(files)
pictureData = {}

filteredFiles1 = filter(lambda file: file.endswith('.png'),files) 
filteredFiles2 = filter(lambda file: file.endswith('.PNG'),files) 
filteredFiles3 = filter(lambda file: file.endswith('.jpg'),files) 
filteredFiles = list(filteredFiles3) + list(filteredFiles2) +list(filteredFiles1)
#print(filteredFiles)

for f in filteredFiles:
    
 filePath =path+f
 pictureData[filePath] ={
     'title':'NA',
     'category':'NA'
 } 


 with open(path+f +'.json', 'w') as outfile:
    json.dump(pictureData, outfile)

 pictureData= {}   