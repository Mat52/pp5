let ul: HTMLElement | null = document.getElementById("client-list");
let clientList: Client[] = [];

function saveData(event: Event): void {
  event.preventDefault();

  const formEl = event.target as HTMLFormElement;

  // Ensure proper type checks for form elements
  const company: string = (formEl.elements.namedItem("companyName") as HTMLInputElement).value;
  const nip: string = (formEl.elements.namedItem("nip") as HTMLInputElement).value;
  const city: string = (formEl.elements.namedItem("city") as HTMLInputElement).value;
  const street: string = (formEl.elements.namedItem("street") as HTMLInputElement).value;
  const comments: string = (formEl.elements.namedItem("comments") as HTMLInputElement).value;
  const industry: string = (formEl.elements.namedItem("industry") as HTMLInputElement).value;
  const active: boolean = (formEl.elements.namedItem("active") as HTMLInputElement).checked;

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
function fillData(): void {
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

  const formObject = document.forms[customerData] as HTMLFormElement;

  // Explicitly cast Object.keys to keys of customerData
  (Object.keys(customerData) as Array<keyof typeof customerData>).forEach((fieldId) => {
    const formElement = formObject.elements.namedItem(fieldId) as HTMLInputElement | null;
    if (formElement) {
      if (formElement.type === "checkbox") {
        formElement.checked = customerData[fieldId] === "true";
      } else {
        formElement.value = customerData[fieldId];
      }
    }
  });
}



function showForm(): void {
  const clientForm = document.getElementById("client-form");
  const clientListElement = document.getElementById("client-list");

  if (clientForm && clientListElement) {
    clientForm.style.display = "block";
    clientListElement.style.display = "none";
  }
}

function showList(): void {
  const clientForm = document.getElementById("client-form");
  const clientListElement = document.getElementById("client-list");

  if (clientForm && clientListElement) {
    clientForm.style.display = "none";
    clientListElement.style.display = "block";
  }

  if (ul) {
    ul.innerHTML = "";
    clientList.forEach((client) => {
      ul!.innerHTML += `<li class="list-group-item">${client.getData()}</li>`;
    });
  }
}
