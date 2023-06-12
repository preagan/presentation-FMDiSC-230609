async function wdtest(page) {
  await page.goto('https://d3tests.top/fmi/webd/Contacts_100');
}

module.exports = { wdtest };
