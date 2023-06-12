async function wdtest(page) {
  page.setDefaultTimeout(60000);
  await page.goto('https://d3tests.top/fmi/webd/Contacts_100');
  await page.locator('#t0mainmenubar div').nth(2).click();
  await page.getByText('Close File').click();
  await page.close();
}

module.exports = { wdtest };
