const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./features/homepage.feature');

defineFeature(feature, test => {

    beforeEach(async () => {
        await global.page.goto('http://localhost:3000')
    });

    test('User opens the app', ({ when, then }) => {

        when('I go to the homepage', async () => {
            await expect(page).toMatch('Radarin');
        });

        then('I should see the app title', function () {
        });
    });
});