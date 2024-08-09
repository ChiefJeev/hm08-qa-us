const page = require('../../page');
const helper = require('../../helper')

// First Test: Setting the address
describe('Start an order', () => {
    it('should set the addresses', async () => {
        await browser.url(`/`);
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setValue('1300 1st St')
        await browser.pause(10000);
    })
})

// Second Test: Call the taxi
describe('Continue an order', () => {
    it('should call a taxi', async () => {
        await browser.url(`/`);
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setValue('1300 1st St')
            const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]')
        await callATaxiButton.click()
        await browser.pause(10000);
    })
})

// Third Test: Filling in the Phone Number
describe('Continue an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await browser.pause(10000);
    })
})

//Fourth Test: Add a credit card
describe('Continue an order', () => {
    it('should should open payment info modal', async () => {
        await browser.url(`/`);
        const paymentMethodButton = await $('//button[contains(text(), "Payment method")]');
        await paymentMethodButton.click();
        await browser.pause(10000);
        
        const addCardButton = await $('//button[contains(text(), "Add card")]');
        await addCardButton.click();
        await browser.pause(10000);

        const
        document.querySelector("#number")


    describe('Create an order', () => {
        it('should add credit card', async () => {
            await browser.url('/');
             await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        
            await browser.pause(2000);
            const overlay = await $('.overlay');
        
            if (await overlay.isDisplayed()) {
                await browser.execute(() => {
                    const overlayElement = document.querySelector('.overlay');
                    if (overlayElement) {
                        overlayElement.style.display = 'none';
                    }
                });
            }
        
            await browser.waitUntil(async () => !(await overlay.isDisplayed()), {
                timeout: 10000,
                timeoutMsg: 'Overlay did not disappear'
            });
        
            const paymentMethodButton = await $(page.paymentMethodButton);
            await paymentMethodButton.waitForDisplayed({ timeout: 10000 });
            await paymentMethodButton.scrollIntoView();
            await browser.execute((el) => el.click(), paymentMethodButton);
        
            const addCardButton = await $(page.addCardButton);
            await addCardButton.waitForDisplayed({ timeout: 10000 });
            await addCardButton.scrollIntoView();
            await browser.execute((el) => el.click(), addCardButton);
        
            const cardNumber = helper.getCardNumber();
            const codeNumber = helper.getCodeNumber();
            await page.fillCardNumber(cardNumber, codeNumber);
            await codeNumber.addValue('');
            await browser.keys('Tab');
                
            const linkButton = await $('#link-button');
            await linkButton.waitForEnabled({ timeout: 10000 });
            await browser.execute((el) => el.click(), linkButton);
            await expect(paymentMethodButton).toBeExisting(card);

        const closeButton = await $('//button[contains(class(), "button.close-button.section-close")]');
        await closeButton.click();
        await browser.pause(10000);
        })
    })
    })
})

//Fifth Test: Write message for driver
describe('Continue an order', () => {
    it('should write message for driver', async () => {
        await browser.url(`/`);
        const messageToTheDriverButton = await $(page.messageToTheDriverButton);
        await messageToTheDriverButton.waitForDisplayed();
        await messageToTheDriverButton.click();
        const messageToTheDriverModal = await $(page.messageToTheDriverButton);
        await expect(messageToTheDriverModal).toBeExisting();
    })

    it('should save the message', async () => {
        await browser.url(`/`);
        const messageToTheDriver = helper.getmessageToTheDriver("Thank you for my ice cream");
        await page.submitmessageToTheDriver(messageToTheDriver);

        await expect(await helper.getElementByText(messageToTheDriver)).toBeExisting();
        await browser.pause(10000);

    })
})

//Sixth Test: Order a blanket and handkerchiefs
describe('Continue an order', () => {
    it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddresses, toAddress);
        await page.selectSupportive();
        const blanketButton = await &(page.blankerButton);
        await blanketButton.click();
        await browser.pause(10000);
        await expect(page.BlanketCheck).toBeChecked();
    })
})  

//Seventh Test: Order 2 ice creams
describe('Continue an order', () => {
    it('should add 2 ice creams to order', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddresses, toAddress);
        const orderRequirementsDropdown = $('#orderRequirements');
        orderRequirementsDropdown.selectByVisibleText('Ice cream bucket');
        const iceCreamButton = await $(page.iceCreamButton);
        await iceCreamButton.click();
        await browser.pause(10000);
        await iceCreamButton.click();
        await browser.pause(10000);
        await expect ().toBeDisplayed();
    })
})

//Eighth Test: The Car search modal appears
describe('Create an order', () => {
    it('should open the car search modal', async () => {
        await browser.url(`/`);
  
        console.log('Filling addresses...');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive();

        const phoneNumber = helper.getPhoneNumber('+1');

        console.log('Submitting phone number...');
        await page.submitPhoneNumber(phoneNumber);

        console.log('Filling card number...');
        await page.fillCardNumber('123456784321');
        
        console.log('Filling CVV number...');
        await page.fillCvvNumber('12');

        await browser.pause(1000);

        const paymentModal = await $(page.cardPaymentModal);
        console.log('Waiting for the payment modal to exist...');
        const modalExists = await paymentModal.waitForExist({ timeout: 15000 });
        if (!modalExists) {
            throw new Error('Payment modal does not exist');
        }

        console.log('Waiting for the payment modal to display...');
        const modalDisplayed = await paymentModal.waitForDisplayed({ timeout: 15000 });
        if (!modalDisplayed) {
            throw new Error('Payment modal is not displayed');
        }
        await browser.pause(1000); 

        console.log('Attempting to find the close button...');
        const closeButtonSection = await paymentModal.$('.section.active');
        const closeButton = await closeButtonSection.$('.close-button.section-close');
        console.log('Waiting for the close button to exist...');
        const buttonExists = await closeButton.waitForExist({ timeout: 15000 });
        if (!buttonExists) {            throw new Error('Close button does not exist');
        }

        console.log('Waiting for the close button to display...');
        const buttonDisplayed = await closeButton.waitForDisplayed({ timeout: 15000 });
        if (!buttonDisplayed) {
            throw new Error('Close button is not displayed');
        }

        console.log('Clicking the close button...');
        await closeButton.click();
        await browser.pause(1000);

        const orderButton = await $(page.orderButton);
        console.log('Waiting for the order button to be clickable...');
        await orderButton.waitForClickable({ timeout: 15000 });
        await orderButton.click();

        const carSearchModal = await $(page.carSearchModal);
        console.log('Verifying car search modal exists...');
        await expect(carSearchModal).toBeExisting();
    });
});