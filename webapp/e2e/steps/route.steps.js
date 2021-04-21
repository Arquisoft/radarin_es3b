const {defineFeature, loadFeature}=require("jest-cucumber");
const feature = loadFeature("./features/route.feature");

defineFeature(feature, test => {
  
  beforeEach(async () => {
    await global.page.goto("https://radarines3bwebapp.herokuapp.com/");
  })

  test("The user can navigate through different pages", ({given,when,then}) => {

    given("I am on the Home route", () => {
        expect(page).toMatch("Radarin");
    });

    when("I click the nav and click the Administrador", async () => {
        await expect(page).toClick("button", { class: "MuiButtonBase-root MuiIconButton-root jss4 MuiIconButton-colorInherit MuiIconButton-edgeStart" });
        await expect(page).toClick("a", { text: "Administrador" });
    });

    then("I expect to be on the Administrador route", async () => {
        await expect(page).toMatch("Administrador");
    });
  });

});