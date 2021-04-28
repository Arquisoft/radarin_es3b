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
describe("userLocalization add", () => {

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it("can be created correctly", async () => {
        var user = "NewUser";
        var latitude = 33.3;
        var longitude = 4.4;
        const response = await request(app).post("/api/userLocalization/add").send({user: user,latitude: latitude, longitude: longitude}).set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
        expect(response.body.user).toBe(user);
        expect(response.body.latitude).toBe(latitude);
        expect(response.body.longitude).toBe(longitude);
    });

    /**
     * Test that we can list user"s location without any error.
     */
     it("can be listed",async () => {

        /*Set up*/
        var user = "TestUser";
        var latitude = 11.1;
        var longitude = 2.2;
        const response = await request(app).post("/api/userLocalization/add").send({user: user,latitude: latitude, longitude: longitude}).set("Accept", "application/json");

        /*Check*/
        const responseGet = await request(app).get("/api/userLocalization/get/TestUser");
        expect(responseGet.statusCode).toBe(200);
        expect(responseGet.body.user).toBe(user);
        expect(responseGet.body.latitude).toBe(latitude);
        expect(responseGet.body.longitude).toBe(longitude);
    });
});


 describe("userLocalization delete", () => {

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it("can be deleted correctly", async () => {
        var user = "NewUser";
        var latitude = 66.6;
        var longitude = 5.5;
        const response = await request(app).post("/api/userLocalization/add").send({user: user,latitude: latitude, longitude: longitude}).set("Accept", "application/json");
        
        /*Check it"s there*/
        const responseGetNew = await request(app).get("/api/userLocalization/get/NewUser");
        expect(responseGetNew.statusCode).toBe(200);
        expect(responseGetNew.body.user).toBe(user);
        expect(responseGetNew.body.latitude).toBe(latitude);
        expect(responseGetNew.body.longitude).toBe(longitude);

        /*Check it"s deleted*/
        const responseDel = await request(app).get("/api/userLocalization/delete/NewUser");
        expect(responseDel.statusCode).toBe(200);
        
        /*Check it"s not there*/
        const responseEmpty = await request(app).get("/api/userLocalization/get/NewUser");
        expect(responseEmpty.body.user).toBe("error");
        expect(responseEmpty.body.latitude).toBe(0);
        expect(responseEmpty.body.longitude).toBe(0);
    });
});