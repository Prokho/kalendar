import requests


def validation_phone(phone, validation_code):
    url = "https://direct.i-dgtl.ru/api/v1/message"
    header = {
        "Authorization": "Basic MzE5NTp3UXd3NHE2VmFPbHpjcFdKWDU0dHBI",
        "Content-Type": "application/json"
    }
    data = [
        {
            "channelType": "FLASHCALL",
            "senderName": "FLASHCALL",
            "destination": phone,
            "content": validation_code,
            "ttl": 70
        }
    ]
    response = requests.post(url, json=data, headers=header)
    return response.status_code

if __name__ == "__main__":
    print(validation_phone('79067316555', '5678'))