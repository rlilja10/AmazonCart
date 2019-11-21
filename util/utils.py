import requests

headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36'}
default_price = '0.0'
default_image = 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'


def get_price(url):
    try:
        r = requests.get(url, headers=headers)
        str_price = r.text.split('priceBlockBuyingPriceString">$')[1].split('<')[0]
        return str_price
    except:
        return default_price

def get_image(url):
    try:
        r = requests.get(url, headers=headers)
        image_url = r.text.split('imgTagWrapperId')[1].split('src="\n')[1].split('\n')[0]
        return image_url
    except:
        return default_image

def get_info(url):
    info = {}
    r = requests.get(url, headers=headers)
    try:
        str_price = r.text.split('priceBlockBuyingPriceString">$')[1].split('<')[0]
        info['price'] = str_price
    except:
        info['price'] = default_price
    
    try:
        image_url = r.text.split('imgTagWrapperId')[1].split('src="\n')[1].split('\n')[0]
        info['image'] = image_url
    except:
        info['image'] = default_image

    return info

