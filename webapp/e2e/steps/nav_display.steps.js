//<button class="MuiButtonBase-root MuiIconButton-root jss4 MuiIconButton-colorInherit MuiIconButton-edgeStart" tabindex="0" type="button" aria-label="menu"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button>
const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./features/nav_display.feature');

defineFeature(feature, test => {

    beforeEach(async () => {
        await global.page.goto('http://localhost:3000')
    });

    test('User opens nav', ({ when, then }) => {

        when('I click the button',  async () => {
            //const button = this.getButtonByClassName("MuiButtonBase-root MuiIconButton-root jss4 MuiIconButton-colorInherit MuiIconButton-edgeStart");
            //this.click(button);
            await expect(page).toClick('button', { class: 'MuiButtonBase-root MuiIconButton-root jss4 MuiIconButton-colorInherit MuiIconButton-edgeStart' })
        });

        then('I expect to see the nav menu', async () => {
            //await expect(this.getByText("Administrador")).toBeInTheDocument();
            await expect(page).toMatch('Administrador');
            await expect(page).toMatch('Ayuda');
            await expect(page).toMatch('Inicio');
            await expect(page).toMatch('Iniciar Sesión');
        });
    });
});