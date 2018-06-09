import sys
from PIL import Image

def fun(filename):

    img = Image.open(filename)
    img.show()


def main():
    fun("index.jpeg")

if __name__=='__main__':
    main()
