import json
import urllib

NEWS_API_KEY = ''

def generateFeedUrl(category):
    return "http://newsapi.org/v2/top-headlines?country=us&category={category}&apiKey={API_KEY}".format(category=category, API_KEY=NEWS_API_KEY)

def generateLocalFeedUrl():
    return "https://www.columbian.com/wp-content/themes/columbian2/data/get_data.php?json=trending"

def getResponse(url):
    operUrl = urllib.urlopen(url)
    if(operUrl.getcode()==200):
       data = json.loads(operUrl.read())
    else:
       data = "Error receiving data: {error}".format(error=operUrl.getcode())
    return data
    
def main(event, context):
    try:
        if event['pathParameters']:
            paramCategory = event['pathParameters']['category']
    except:
        paramCategory = ''

    if paramCategory is not None:
        url = generateFeedUrl(paramCategory)
        data = getResponse(url)
        return {'statusCode': 200, 'body': data}

    return {'statusCode': 500, 'body': 'Request Failed'}
