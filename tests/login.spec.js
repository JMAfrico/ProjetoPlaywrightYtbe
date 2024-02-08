import {test,expect} from '@playwright/test';

test("login com sucesso",async({page}) =>{
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.getByLabel('Username').click();
      await page.getByLabel('Username').fill('tomsmith');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('SuperSecretPassword!');
      await page.getByRole('button', { name: ' Login' }).click();
      await expect(page.getByText('You logged into a secure area')).toBeVisible();
})

test('login com erro', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByText('Your password is invalid! ×')).toBeVisible();
});

test("logout com sucesso",async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: ' Login' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.getByText('You logged out of the secure')).toBeVisible();
})