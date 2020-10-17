const {google} = require('googleapis');

/** START OF GOOGLE SHEETS API */

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.

const SPREADSHEET_ID = '191JB0NyT7dhCB1digAUUaukFljVpVjwUVP_L5jPk5LE';

/**
 * Inputs a new order into the database
 * @see https://docs.google.com/spreadsheets/d/191JB0NyT7dhCB1digAUUaukFljVpVjwUVP_L5jPk5LE/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function newOrder(auth, orderInfo) {
    const sheets = google.sheets({version: 'v4', auth});

    return new Promise( (resolve, reject) => {
        sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `Orders!A1:G`,
            valueInputOption: 'RAW',
            resource: {values: [Object.values(orderInfo)]}
        }).then(() => {
            resolve('Success!');
        }).catch((err) => {
            console.log(err);
            reject('No name found');
        });
    });
}

module.exports = {
    newOrder,
}