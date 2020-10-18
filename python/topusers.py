import gspread
from oauth2client.service_account import ServiceAccountCredentials
from matplotlib import pyplot as plt
from matplotlib import ticker as tick
import numpy as np

# use creds to create a client to interact with the Google Drive API
scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name('sheets_data.json', scope)
client = gspread.authorize(creds)

sheet = client.open("Orders").sheet1
list_of_orders = sheet.get_all_values()

deliv_methods = {'asdonelan': 0, 'andwxu': 0, 'ppunmaneeluk': 0, 'aditibhatia':0}
for order in list_of_orders:
    deliv_methods[order[0]] = deliv_methods[order[0]] + 1
types = ['asdonelan', 'andwxu', 'ppunmaneeluk', 'aditibhatia']
fig, ax = plt.subplots()
values = list(deliv_methods.values())
print(values)
print(types)
ax.pie(values, labels=types, autopct='%1.2f%%')
ax.set_title("Your Top Customers")
plt.show()

