import gspread
from oauth2client.service_account import ServiceAccountCredentials
import random as rand
from datetime import datetime, timezone
import time as t

# use creds to create a client to interact with the Google Drive API
scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name('sheets_data.json', scope)
client = gspread.authorize(creds)

sheet = client.open("Orders").sheet1

names = ['asdonelan', 'andwxu', 'ppunmaneeluk', 'aditibhatia']
menu = ["Southern Marinated Fried Chicken","Turkey Drumstick Osso Bucco","Whole Red Snapper and Bajan Green Sauce",\
    "Roasted Beet Salad","Smoked Pork Belly","Vegan Peach Cobbler","Lemonade","Sweet Tea",]
delivery_types = ['dine-in', 'delivery', 'curbside']
for i in range(3000):
    new_row = []
    new_row.append(names[rand.randint(0, len(names) - 1)])
    seconds = rand.randint(1602949220- 31536000, 1602949220)
    time = datetime.fromtimestamp(seconds, timezone.utc)
    while(time.hour not in [16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2]):
        seconds = rand.randint(1602949220- 31536000, 1602949220)
        time = datetime.fromtimestamp(seconds, timezone.utc)
    print(time.hour)
    new_row.append(str(seconds))
    food_items = ""
    for i in range(rand.randint(1, 5)):
        food_items = food_items + menu[rand.randint(0, len(menu) - 1)]  + ","
    food_items = food_items[0:len(food_items) - 1]
    new_row.append(food_items)
    new_row.append("filler comment")
    new_row.append(rand.randint(5, 45))
    new_row.append(delivery_types[rand.randint(0, len(delivery_types) - 1)])
    print(new_row)
    sheet.append_row(new_row)
    t.sleep(.95)
    
#sheet.append_row(['test', str(1603005896), 'Turkey Drumstick Osso Bucco,Roasted Beet Salad','', 'delivery'])