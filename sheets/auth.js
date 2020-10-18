const { JWT } = require('google-auth-library');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export default function authorize() {
    return new Promise((resolve, reject) => {
        const jwtClient = new JWT(
            process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
            null,
            process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
            SCOPES
        );

        jwtClient.authorize(() => resolve(jwtClient));
    }).catch((err) => {console.log(err)});
}

