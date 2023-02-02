from PIL import Image
import glob
import os

# new folder path (for Windows OS)
# change path to your path
path = 'C:\\Users\\Yebba\\Desktop\\dglnfts\\DGLNFT Candy Machine\\Candy-Machine-V3-UI\\public\\nfts\\resized'
# create new folder
if not os.path.exists(path):
    os.makedirs(path)

# loop over existing images and resize
# change path to your path
for filename in glob.glob("C:\\Users\\Yebba\\Desktop\\dglnfts\\DGLNFT Candy Machine\\Candy-Machine-V3-UI\\public\\nfts\\*.png"): 
    img = Image.open(filename).resize((600,600))
    img.save('{}{}{}'.format(path,'\\',os.path.split(filename)[1]))
