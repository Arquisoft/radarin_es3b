const request = require("supertest");
const server = require("./server-for-tests");

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await server.startdb();
    app = await server.startserver();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => await server.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await server.closeServer(); //finish the server
    await server.closeDB();
});

/**
 * Product test suite.
 */
describe("userLocalization_add ", () => {

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it("can be created correctly", async () => {
        user = 'NewUser';
        latitude = 11.1;
        longitude = 2.2;
        const response = await request(app).post('/api/userLocalization/add').send({user: user,latitude: latitude, longitude: longitude}).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
        expect(response.body.user).toBe(user);
        expect(response.body.latitude).toBe(latitude);
        expect(response.body.longitude).toBe(longitude);
    });
});