import {Page, expect} from "@playwright/test";

export default class Signup{
    readonly page: Page;

    constructor (page : Page){
        this.page = page;
    }

    signUpButton = () => this.page.getByRole('link', { name: ' Signup / Login' });
    headingNewUserSignUp = () => this.page.getByRole('heading', { name: 'New User Signup!'});
    userName = () => this.page.getByRole('textbox', { name: 'Name' });
    emailField = () => this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    signUpBtn = () => this.page.getByRole('button', { name: 'Signup' });
    titleMrRadio = () => this.page.getByRole('radio', { name: 'Mr.' });
    passField = () => this.page.getByRole('textbox', { name: 'Password *' });
    newsletterCheckbox = () => this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
    specialOffersCheckbox = () => this.page.getByRole('checkbox', { name: 'Receive special offers from' });
    firstName = () => this.page.getByRole('textbox', { name: 'First name *' });
    lastName = () => this.page.getByRole('textbox', { name: 'Last name *' });
    companyName = () => this.page.getByRole('textbox', { name: 'Company', exact: true });
    addressName = () => this.page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    address2Name = () => this.page.getByRole('textbox', { name: 'Address 2' });
    countryName= () => this.page.getByLabel('Country *');
    stateName = () => this.page.getByRole('textbox', { name: 'State *' });
    cityName = () => this.page.getByRole('textbox', { name: 'City * Zipcode *' });
    zipcode = () => this.page.locator('#zipcode');
    mobNum  = () => this.page.getByRole('textbox', { name: 'Mobile Number *' });
    createBtn  = () => this.page.getByRole('button', { name: 'Create Account' });
    conBtn  = () => this.page.getByRole('link', { name: 'Continue' });
    logOutBtn  = () => this.page.getByRole('link', { name: ' Delete Account' });
    dltBtn  = () => this.page;



    async visit(url:string){
        await this.page.goto(url)
        await expect(this.page).toHaveURL(/automationexercise.com/);
    }

    async signUpWithCredentials(){
        await expect(this.signUpButton()).toBeVisible();
        await this.signUpButton().click();
        await expect(this.headingNewUserSignUp()).toBeVisible();
        await this.userName().click();
        await this.userName().fill(process.env.USER_NAME!);
        await this.emailField().click();
        await this.emailField().fill(process.env.USER_EMAIL!);
        await this.signUpBtn().click();
        // await page.pause();
        await expect(this.page).toHaveURL(/.*\/signup/);
        await expect(this.page.getByText('Enter Account Information')).toBeVisible();
        await this.titleMrRadio().check();
        await this.passField().click();
        await this.passField().fill(process.env.USER_PASSWORD!);
        await this.page.locator('#days').selectOption('15');
        await this.page.locator('#months').selectOption('6');
        await this.page.locator('#years').selectOption('1990');
        await this.newsletterCheckbox().check();
        await this.specialOffersCheckbox().check();
        await this.firstName().click();
        await this.firstName().fill(process.env.USER_FIRST_NAME!);
        await this.lastName().click();
        await this.lastName().fill(process.env.USER_LAST_NAME!);
        await this.companyName().click();
        await this.companyName().fill(process.env.USER_COMPANY!);
        await this.addressName().click();
        await this.addressName().fill(process.env.USER_ADDRESS!);
        await this.address2Name().click();
        await this.address2Name().fill(process.env.USER_ADDRESS_2!);
        await this.countryName().selectOption('United States');
        await this.stateName().click();
        await this.stateName().fill(process.env.USER_STATE!);
        await this.cityName().click();
        await this.cityName().fill(process.env.USER_CITY!);
        await this.zipcode().click();
        await this.zipcode().fill(process.env.USER_ZIPCODE!);
        await this.mobNum().click();
        await this.mobNum().fill(process.env.USER_MOBILE_NUMBER!);
        await this.createBtn().click();
        await expect(this.page.getByText('Account Created!')).toBeVisible();
        await expect(this.page).toHaveURL(/.*\/account_created/);
        await this.conBtn().click();
        await expect(this.page.getByText('Logged in as Sadman Ridom')).toBeVisible();
        await expect(this.page.getByRole('link', { name: ' Logout' })).toBeVisible();
        await this.logOutBtn().click();
        await expect(this.page.getByText('Account Deleted!')).toBeVisible();

    }



}