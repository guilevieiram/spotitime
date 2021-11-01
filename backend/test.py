import requests

res = requests.post(
    url = "http://127.0.0.1:5000/", 
    data = {
        'date': '2001-01-30'
    }
)

print(res.text)