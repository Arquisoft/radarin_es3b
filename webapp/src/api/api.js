
//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production
export async function addUser(username, email) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "name": username, "email": email })
    });
    return await response.json();
}

export async function getUsers() {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    //console.log(apiEndPoint);
    let response = await fetch(apiEndPoint + "/users/list");
    return await response.json();
}

export async function addUserLocalization(user, latitude, longitude) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/userLocalization/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": user, "latitude": latitude, "longitude": longitude })
    });
    return await response.json();
}

export async function getUserLocalization(user) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/userLocalization/get/" + user);
    return await response.json();
}

export async function deleteUserLocalization(user) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/userLocalization/delete/" + user);
    return await response.json();
}

export async function getUserLocalizationList() {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    //console.log(apiEndPoint);
    let response = await fetch(apiEndPoint + "/userLocalization/list");
    return await response.json();
}

export async function addUserRegister(user, allowed) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/userRegister/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": user, "allowed": allowed})
    });
    return await response.json();
}

export async function deleteUserRegister(user) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/userRegister/delete/" + user);
    return await response.json();
}

export async function getUserRegisterList() {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    //console.log(apiEndPoint);
    let response = await fetch(apiEndPoint + "/userRegister/list");
    return await response.json();
}

export async function getUserRegister(user) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/userRegister/get/" + user);
    return await response.json();
}

export async function cleanDatabase() {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/userLocalization/deleteAll");
    return await response.json();
}


export async function login(user, password) {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000/api";
    let response = await fetch(apiEndPoint + "/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": user, "password": password})
    });
    return await response.json();
}