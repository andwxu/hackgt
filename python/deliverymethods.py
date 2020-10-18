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

deliv_methods = {'dine-in': 0, 'delivery': 0, 'curbside': 0}
for order in list_of_orders:
    deliv_methods[order[5]] = deliv_methods[order[5]] + 1
types = ["Dine-in", 'Curbside', 'Delivery']
fig, ax = plt.subplots()
values = list(deliv_methods.values())
print(values)
print(types)
ax.pie(values, labels=types, autopct='%1.2f%%')
ax.set_title("Customer Delivery Method Preference")
plt.show()

