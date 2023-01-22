const puppeteer = require('puppeteer');

async function run() {
    let url = "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/results?q=%7B%22ou%22:%7B%22modality%22:%22EN_CENTRE_MIXTE%22,%22type%22:%22CP%22,%22ville%22:%7B%22nom%22:%22TOULOUSE%22,%22codePostal%22:%2231000%22,%22codeInsee%22:%2231555%22,%22coordonnee%22:%7B%22longitude%22:1.4322938,%22latitude%22:43.59597%7D,%22eligibleCpf%22:true%7D%7D,%22sort%22:%22PRIX%22,%22debutPagination%22:1,%22nombreOccurences%22:6,%22quoiReferentiel%22:null,%22quoi%22:%22PYTHON%22,%22contexteFormation%22:%22ACTIVITE_PROFESSIONNELLE%22,%22distance%22:500%7D"
    const browser = await puppeteer.launch({ "slowMo": 500 });

    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3738.0 Safari/537.36');
    await page.goto(url);

    await page.click("#cdk-overlay-0 > mat-bottom-sheet-container > mcf-cm-banner > div.mcf-bottom-sheet-actions")

    await page.screenshot({ path: 'screenshot.png' });
    browser.close();
}
run();

//document.querySelector("#cdk-overlay-0 > mat-bottom-sheet-container > mcf-cm-banner > div.mcf-bottom-sheet-actions")