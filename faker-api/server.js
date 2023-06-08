const express = require("express");
const { faker } = require('@faker-js/faker');
const { application } = require("express");
const app = express();
const PORT = 8000;


// Middleware
app.use(express.json(), express.urlencoded({extended:true}));


const createUser = () =>{
    
    const newUser = {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
    return newUser;
}

const createCompany = () =>{
    
    const newCompany = {
        id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode:faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

const createBoth = () => {
    const company = createCompany();
    const user = createUser();
    return {
        user: user,
        company: company
    };
}


app.get("/api/users/new", (req, res) => {
    res.json(
        createUser()
    )
})

app.get("/api/companies/new", (req, res) => {
    res.json(
        createCompany()
    )
})

app.get("/api/user/company", (req, res) => {
    res.json(
        createBoth()
    )
})



app.listen(PORT, () =>{
    console.log(`server up on port: ${PORT} and is listening for REQuests to RESpond to`);
})