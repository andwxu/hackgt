import gspread
from oauth2client.service_account import ServiceAccountCredentials
from matplotlib import pyplot as plt
from matplotlib import ticker as tick
from datetime import datetime, timezone, timedelta, date
import numpy as np
import random
import re
import os
import mpld3


# use creds to create a client to interact with the Google Drive API
scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name('sheets_data.json', scope)
client = gspread.authorize(creds)

sheet = client.open("Orders").sheet1
list_of_orders = sheet.get_all_values()

#initialize dictionary for each hour in a day
hours_day = dict() 
i = 0
while i < 24:
    hours_day[i] = dict()
    i = i + 1

#iterate through rows in sheet, pulling time and item of order
menu = []
open_hour = 12
close_hour = 22
for order in list_of_orders:
    time = datetime.fromtimestamp(int(order[1]) - 14400, timezone.utc)
    elapsed = datetime.now() - time.replace(tzinfo=None)
    elapsed_day = elapsed.days
    hour = time.hour
    order = order[2]
    foods = re.split(",", order)
    for food in foods:
        if hour in range(open_hour, close_hour):
            if food not in menu:
                    menu.append(food)
            if elapsed_day <= 1:
                if food in hours_day[hour]:
                    hours_day[hour][food] = hours_day[hour][food] + 1
                else:
                    hours_day[hour][food] = 1
            
##generate x axis labels based on opening/closing hours
x_labels = []
for i in range(open_hour, close_hour + 1):
    label = ""
    time = i
    if time % 12 != 0:
        time = time % 12
    else:
        time = 12
    label += str(time) + ":00"
    if i <= 12:
        label += " AM"
    else:
        label += " PM"
    x_labels.append(label)
##format graph
barWidth = .5/len(menu)
position_base = np.arange(0,24,1)
i = -.25
fig, ax = plt.subplots(figsize=(20, 6))
x = range(len(menu))
plt.xlabel('Hour')
ax.xaxis.set_major_locator(tick.MultipleLocator(1))
ax.set_xticklabels(x_labels)
ax.margins(2,0)
plt.xlim(12-.3, 21+.3)
plt.ylabel('Number of Orders')
ax.set_title('Orders/Hour')
ax.yaxis.set_major_locator(tick.MultipleLocator(1))
max_val = 0
for menu_item in menu: #construct each bar
    bar = []
    for order_hour in hours_day:
        if menu_item in hours_day[order_hour]:
            if hours_day[order_hour][menu_item] > max_val:
                max_val = hours_day[order_hour][menu_item]
            bar.append(hours_day[order_hour][menu_item])
        else:
            bar.append(.05)
    r = random.random()
    g = random.random()
    b = random.random()
    rgb = (r, g, b)
    plt.bar((position_base + i), bar, color=rgb, width = barWidth, edgecolor = 'white', label = menu_item, align='edge')
    i = i + .5/len(menu)
plt.ylim(0, max(round(max_val) + .5, 1))
plt.legend()   
plt.savefig('../public/avg_day.png')
plt.show()
