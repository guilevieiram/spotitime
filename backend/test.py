import requests

print(str({
        'date': '2001-01-30'
    }).replace("'", '"'))
res = requests.post(
    url = "http://127.0.0.1:5000/", 
    data = str({
        "date": "2001-01-30"
    })
)

print(res.text)