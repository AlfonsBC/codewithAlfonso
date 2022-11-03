
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1wMgxRR97Gjva0xpYvBiTebVoLbdPfgTJ3m9yH5fJ7Ew/edit?usp=sharing");
const sheet = sheets.getSheetByName("Sheet1");
function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.name,data.lname, data.uni,data.email,data.phone]);
  return ContentService.createTextOutput("Success");
}