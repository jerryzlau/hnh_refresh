/**
 * HNH Appointment Form → Google Sheet
 *
 * Setup:
 *  1. Open your Google Sheet → Extensions → Apps Script
 *  2. Replace the default code with this entire file
 *  3. Deploy → New Deployment → Web App
 *       Execute as:  Me
 *       Who has access:  Anyone
 *  4. Copy the Web App URL and paste it into contact.html as SHEET_URL
 *  5. Add a header row to row 1 of the sheet:
 *     Submitted | First Name | Last Name | Phone | Email | Service |
 *     Preferred Date | Preferred Time | Contact Method | Notes
 */

function doPost(e) {
  try {
    var data   = JSON.parse(e.postData.contents);
    var sheet  = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      data.submittedAt   || new Date().toLocaleString('en-HK'),
      data.firstName     || '',
      data.lastName      || '',
      data.phone         || '',
      data.email         || '',
      data.service       || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.contactMethod || '',
      data.notes         || ''
    ]);
  } catch (err) {
    Logger.log('Error: ' + err.message);
  }

  /* Must return something — content doesn't matter since the fetch uses no-cors */
  return ContentService.createTextOutput('ok');
}

/** Optional: test by running this function manually in the Apps Script editor */
function testPost() {
  doPost({
    postData: {
      contents: JSON.stringify({
        submittedAt: new Date().toLocaleString('en-HK'),
        firstName: 'Test', lastName: 'User',
        phone: '+852 9000 0000', email: 'test@example.com',
        service: 'Hepatitis B Evaluation & Treatment',
        preferredDate: '2026-07-01', preferredTime: 'Morning (9:00 am – 1:00 pm)',
        contactMethod: 'WhatsApp', notes: 'Test submission'
      })
    }
  });
}
