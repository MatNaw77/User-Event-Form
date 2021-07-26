import puppeteer from 'puppeteer';

describe('E2E tests', () => {
    let browser;
    let page;

    beforeAll( async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();

        await page.goto('http://localhost:3000');
        await page.waitForSelector('.makeStyles-header-3');
    });

    it('Should contain Add new event header', async () => {
        const text = await page.$eval('.makeStyles-header-3', (e) => e.textContent);
        expect(text).toContain('Add new event');
    });

    it('Should view success alert when good data', async () => {
        await page.type('input[name="firstName"]', 'Mateusz');
        await page.type('input[name="secondName"]', 'Naw');
        await page.type('input[name="email"]', 'naw@wp.pl');
        await page.type('input[name="date"]', '17.07.2021');
        await page.click('button[type="submit"]');
        
        const alert = await page.$eval('.MuiAlert-message', (e) => e.textContent);
        expect(alert).toContain('An event has been added to database!');
    });

    it('Should show error alert when send wrong data', async () => {
        await page.type('input[name="firstName"]', 'Mateusz');
        await page.type('input[name="secondName"]', 'Naw');
        await page.type('input[name="email"]', 'naw@wp.pl');
        await page.type('input[name="date"]', '2021-03-21'); 
        await page.click('button[type="submit"]');
        await page.screenshot({ path: 'example2.png' });

        const alert = await page.$eval('.MuiAlert-message', (e) => e.textContent);
        expect(alert).toContain('An error occured during adding to database!');
    });
    afterAll(() => browser.close());
})  