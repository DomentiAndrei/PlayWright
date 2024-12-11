const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://maps.moderncampus.net/login');
    

    await page.fill('#username', 'adometi@moderncampus.com'); // Update with the actual username field selector
    await page.fill('#password', 'Armagidon8!'); // Update with the actual password field selector
    await page.click('#login-button'); // Update with the actual login button selector

    // Perform login steps here (fill in forms, click buttons, etc.)
    
    // Wait for navigation to ensure login is complete
    await page.waitForNavigation();

    // Save cookies
    const cookies = await context.cookies();
    fs.writeFileSync('cookies.json', JSON.stringify(cookies));

    // Save local storage
    const localStorage = await page.evaluate(() => JSON.stringify(window.localStorage));
    fs.writeFileSync('localStorage.json', localStorage);

    
})();