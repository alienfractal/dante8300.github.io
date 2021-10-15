import os
import time
import json

path = "../img/pixelart/"
files = os.listdir(path)

galleryFiles = {}
galleryFiles['gallery']= []
filteredFiles1 = filter(lambda file: file.endswith('.png'),files) 
filteredFiles2 = filter(lambda file: file.endswith('.PNG'),files) 
filteredFiles3 = filter(lambda file: file.endswith('.jpg'),files) 
filteredFiles = list(filteredFiles3) + list(filteredFiles2) +list(filteredFiles1)

for f in filteredFiles:
 #print(f)    
 filePath =path+f  
 filestat = os.stat(filePath)
 createTime = time.strftime('%d/%m/%Y', time.localtime(os.path.getmtime(filePath)))
 fileMetadata = open(path+f+'.json',)

# returns JSON object as 
# a dictionary
 data = json.load(fileMetadata)
 print(data[filePath])
 title = data[filePath]['title']
 print(title)
 category = data[filePath]['title']
 galleryFiles['gallery'].append({
     'title':title,
     'category':category,
     'fpath':filePath,
     'created':createTime
 } )

 

 with open('pictureGallery.json', 'w') as outfile:
    json.dump(galleryFiles, outfile)


    
    