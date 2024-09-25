let totalDonation = 0;
let donationHistory = [];
const donationButton1 = document.getElementById("donation1");
donationButton1.addEventListener("click", function () {
  const amount1 = parseInt(document.getElementById("amountInput1").value);
  const noakhaliDonation = document.getElementById("donationAmount1");
  if (amount1 > 0) {
    noakhaliDonation.innerText = `${amount1} BDT`;
  }

  if (amount1 <= 0 || isNaN(amount1)) {
    alert("Invalid Donation Amount ");
    return;
  }

  let initialBalance = 5500;
  totalDonation += amount1;
  const remainingBalence = initialBalance - totalDonation;
  const balanceElement = document.getElementById("remainBalence");
  balanceElement.innerText = `${remainingBalence} BDT`;

  if (amount1 > remainingBalence) {
    alert("Insufficient balance.");
    return;
  }
  if ("amountInput1" == "") {
    alert("Enter amount");
    return;
  }
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
  let donationEntry = `${amount1} taka is Donate for Flood Relief in Noakhali,Bangladesh`;
  donationHistory.push(donationEntry);
  updateHistory();
});

const donationButton2 = document.getElementById("donation2");
donationButton2.addEventListener("click", function () {
  const amount2 = parseInt(document.getElementById("amountInput2").value);
  const feniDonation = document.getElementById("donationAmount2");
  if (amount2 > 0) {
    feniDonation.innerText = `${amount2} BDT`;
  }

  if (amount2 <= 0 || isNaN(amount2)) {
    alert("Invalid Donation Amount ");
    return;
  }

  let initialBalance = 5500;
  totalDonation += amount2;
  const remainingBalence = initialBalance - totalDonation;
  const balanceElement = document.getElementById("remainBalence");
  balanceElement.innerText = `${remainingBalence} BDT`;

  if (amount2 > remainingBalence) {
    alert("Insufficient balance.");
    return;
  }
  if ("amountInput2" == "") {
    alert("Enter amount");
    return;
  }
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
  let donationEntry = `${amount2} taka is Donate for Flood Relief in Feni,Bangladesh`;
  donationHistory.push(donationEntry);
  updateHistory();
});

const donationButton3 = document.getElementById("donation3");
donationButton3.addEventListener("click", function () {
  const amount3 = parseInt(document.getElementById("amountInput3").value);
  const quotaDonation = document.getElementById("donationAmount3");
  if (amount3 > 0) {
    quotaDonation.innerText = `${amount3} BDT`;
  }

  if (amount3 <= 0 || isNaN(amount3)) {
    alert("Invalid Donation Amount ");
    return;
  }

  let initialBalance = 5500;
  totalDonation += amount3;
  const remainingBalence = initialBalance - totalDonation;
  const balanceElement = document.getElementById("remainBalence");
  balanceElement.innerText = `${remainingBalence} BDT`;

  if (amount3 > remainingBalence) {
    alert("Insufficient balance.");
    return;
  }
  if ("amountInput3" == "") {
    alert("Enter amount");
    return;
  }
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
  let donationEntry = `${amount3} taka is Donate for Aid for Injured in the Quota Movement`;
  donationHistory.push(donationEntry);
  updateHistory();
});

//History button function
const historyTab = document.getElementById("history-Tab");
const donationTab = document.getElementById("donation-Tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-[#B4F461]", "text-gray-500");
  donationTab.classList.remove("btn-outline", "bg-[#B4F461]", "text-gray-500");

  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("history-form").classList.remove("hidden");
});

//Donation button function
donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-[#B4F461]", "text-gray-500");
  historyTab.classList.remove("btn-outline", "bg-[#B4F461]", "text-gray-500");

  document.getElementById("donation-form").classList.remove("hidden");
  document.getElementById("history-form").classList.add("hidden");
});

function updateHistory() {
  let historyDiv = document.getElementById("donationHistory");
  historyDiv.innerHTML = "";
  donationHistory.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add(
      "p-4",
      "bg-gray-50",
      "border",
      "border-gray-200",
      "rounded",
      "font-medium"
    );
    div.innerText = item;
    historyDiv.appendChild(div);
  });
}
function displayDate() {
  document.getElementById("showDate").innerHTML = new Date().appendChild("p");
}
