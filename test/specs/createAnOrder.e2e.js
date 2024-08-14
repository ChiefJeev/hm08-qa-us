const page = require('../../page');
const helper = require('../../helper')

// First Test: Setting the address
describe('Start an order', () => {
    it('should set the addresses', async () => {
        await browser.url(/)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
    })
})

// Second Test: Call the taxi
describe('Continue an order', () => {
    it('should call a taxi', async () => {
        await browser.url(/);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveTariff = await page.selectSupportive();
        await expect(supportiveTariff.parentElement()).toHaveElementClass('active');
    })
})

// Third Test: Filling in the Phone Number
describe('Continue an order', () => {
    it('should save the phone', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await $(div=${phoneNumber})).toBeExisting();
        await browser.pause(10000);
    })
})

//Fourth Test: Add a credit card
describe('Create an order', () => {
    it('should add credit card', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);
        const cardNumber = helper.getCardNumber();
        const codeNumber = helper.getCardCode();
        await page.addPaymenMethodCard(cardNumber, codeNumber);
        await expect(await $(${page.paymentMethodAddedCard})).toBeExisting();
    })
})

//Fifth Test: Write message for driver
describe('Continue an order', () => {
    it('should write message for driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const message = "Thank you for my order";
        await page.addMessageToTheDriver(message);
        await expect($(page.messageToTheDriverField)).toHaveValue(message);

    })
})

//Sixth Test: Order a blanket and handkerchiefs
describe('Continue an order', () => {
    it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        await page.addBlanketAndHandkerchiefs();
        await expect($(page.blanketButtonStatus)).toBeChecked();
    })
})  

//Seventh Test: Order 2 ice creams
describe('Continue an order', () => {
    it('should add 2 ice creams to order', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();
        const plusIceCream = 2;
        await page.addIceCream(plusIceCream);
        await expect($(div=${plusIceCream})).toBeExisting();
    })
})

//Eighth Test: The Car search modal appears
describe('Create an order', () => {
    it('should open the car search modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber('+1');
        await page.submitPhoneNumber(phoneNumber);
        await page.placeOrder();
        await expect($(${page.carSearchModal})).toBeExisting();
    });
});