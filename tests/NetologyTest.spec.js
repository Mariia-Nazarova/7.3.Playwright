const { test, expect } = require("@playwright/test");
const user = require("./user.js");

test("test", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(user.login);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(user.password);
  await page.getByPlaceholder("Пароль").press("Enter");
  await page.getByRole("heading", { name: "Моё обучение" }).click();
  await expect(
    page.getByRole("heading", { name: "Моё обучение" })
  ).toBeVisible();
});

test("test2", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("123@mail.ru");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("12345");
  await page.getByPlaceholder("Пароль").press("Enter");
  await page.getByTestId("login-error-hint").click();
  await expect(
    page.getByTestId("login-error-hint", {
      name: "Вы ввели неправильно логин или пароль.",
    })
  ).toBeVisible();
});
