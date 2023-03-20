import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("mario", "luigi", 360);
let invoices = [];
invoices.push(invOne);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    invOne.format();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
