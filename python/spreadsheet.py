import gspread
from oauth2client.service_account import ServiceAccountCredentials
from matplotlib import pyplot as plt
from datetime import datetime, timezone
import numpy as np
import os

print(os.getcwd())

# use creds to create a client to interact with the Google Drive API
scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
client = gspread.authorize(creds)

# Find a workbook by name and open the first sheet
# Make sure you use the right name here.
sheet = client.open("Legislators 2017").sheet1

# Extract and print all of the values
list_of_hashes = sheet.get_all_records()
print(list_of_hashes)

fig, ax = plt.subplots()
ax.plot([1,2,3,4], [1,4,2,3])
plt.show()