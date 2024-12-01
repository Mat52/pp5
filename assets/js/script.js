"use strict";
let ul = document.getElementById("client-list");
let clientList = [];
function saveData(event) {
    event.preventDefault();
    const formEl = event.target;
    // Ensure proper type checks for form elements
    const company = formEl.elements.namedItem("companyName").value;
    const nip = formEl.elements.namedItem("nip").value;
    const city = formEl.elements.namedItem("city").value;
    const street = formEl.elements.namedItem("street").value;
    const comments = formEl.elements.namedItem("comments").value;
    const industry = formEl.elements.namedItem("industry").value;
    const active = formEl.elements.namedItem("active").checked;
    // Validate required fields (if needed)
    if (!company || !nip || !city || !street) {
        console.error("Required fields are missing.");
        return;
    }
    // Create a new Client instance
    const newClient = new Client(company, nip, city, street, comments, industry, active);
    console.log(newClient);
    clientList.push(newClient);
    showList();
}
function fillData() {
    // Define customerData with explicit typing
    const customerData = {
        companyName: "ACME Inc.",
        nip: "13353356",
        city: "Sarasota",
        street: "West Avenue",
        comments: "Trusted partner.",
        industry: "Engineering",
        active: "true", // Use "true" or "false" for checkbox compatibility
    };
    const formObject = document.forms[customerData];
    // Explicitly cast Object.keys to keys of customerData
    Object.keys(customerData).forEach((fieldId) => {
        const formElement = formObject.elements.namedItem(fieldId);
        if (formElement) {
            if (formElement.type === "checkbox") {
                formElement.checked = customerData[fieldId] === "true";
            }
            else {
                formElement.value = customerData[fieldId];
            }
        }
    });
}
function showForm() {
    const clientForm = document.getElementById("client-form");
    const clientListElement = document.getElementById("client-list");
    if (clientForm && clientListElement) {
        clientForm.style.display = "block";
        clientListElement.style.display = "none";
    }
}
function showList() {
    const clientForm = document.getElementById("client-form");
    const clientListElement = document.getElementById("client-list");
    if (clientForm && clientListElement) {
        clientForm.style.display = "none";
        clientListElement.style.display = "block";
    }
    if (ul) {
        ul.innerHTML = "";
        clientList.forEach((client) => {
            ul.innerHTML += `<li class="list-group-item">${client.getData()}</li>`;
        });
    }
}
