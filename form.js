function submitForm() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  if (!email || !phone || !address || !city || !state) {
    alert("Please fill in all fields.");
    return;
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h5 class="text-success">Your Details:</h5>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>State:</strong> ${state}</p>
  `;

  // Clear form fields
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
}
