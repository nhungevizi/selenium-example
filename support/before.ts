import { Before } from "cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { World } from "./world";

Before(async function () {
  const driver: WebDriver = await new Builder().forBrowser("chrome").build();
  const world = new World();
  world.driver = driver;
});