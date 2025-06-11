import { google } from 'googleapis';

export async function getSheetData() {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'Sheet1',
  });

  const [header, ...rows] = res.data.values;

  return rows.map(row => {
    const obj = {};
    header.forEach((col, i) => {
      obj[col] = row[i] || '';
    });
    return obj;
  });
}
