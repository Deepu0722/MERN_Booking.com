import { test, expect } from '@playwright/test';

const UI_URL="http://localhost:5173";

test('should allow the user to sign in',async({page})=>{
  await page.goto(UI_URL);

  //get the sign-in button
  await page.getByRole("link", {name: 'Sign In'}).click();
  //Assertions: expect
  await expect(page.getByRole('heading', {name:'Sign In'})).toBeVisible();

  await page.locator('[name=email]').fill('new@gmail.com');
  await page.locator('[name=password]').fill('password123');

  //get the login - button
  await page.getByRole('button', {name: 'Login'}).click();
  //Assertions: expect
  await expect(page.getByText('Sign In Successful!')).toBeVisible();
  await expect(page.getByRole('link', {name: 'My Bookings'})).toBeVisible();
  await expect(page.getByRole('link', {name: 'My Hotels'})).toBeVisible();
  await expect(page.getByRole('button', {name: 'Sign Out'})).toBeVisible();
});

test("should allow the user to register", async({page}) => {
  let test_email= `test${Math.floor(Math.random()*9000)+100}@test.com`
 await page.goto(UI_URL);

 await page.getByRole('link',{name: 'Sign In'}).click();
 await page.getByRole('link', {name: 'Create a Account here?'}).click();

 await expect(page.getByRole('heading', {name: 'Create an Account'})).toBeVisible();
 await page.locator('[name=firstName]').fill('test_firstName');
 await page.locator('[name=lastName]').fill('test_lastName');
 await page.locator('[name=email]').fill(test_email);
 await page.locator('[name=password]').fill('password123');
 await page.locator('[name=confirmPassword]').fill('password123');

// Click the 'Create Account' button
await page.getByRole('button', { name: 'Create Account' }).click();

// Assertions to verify successful registration
await expect(page.getByText('Registration Success!').first()).toBeVisible();
await expect(page.getByRole('link', { name: 'My Bookings' })).toBeVisible();
await expect(page.getByRole('link', { name: 'My Hotels' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();


});
