let totalDonation = 0;
const donationButton1 = document.getElementById("donation1");
donationButton1.addEventListener("click", function () {
  const amount1 = parseInt(document.getElementById("amountInput1").value);
  const noakhaliDonation = document.getElementById("donationAmount1");
  noakhaliDonation.innerText = `${amount1} BDT`;

  let initialBalance = 5500;
  totalDonation += amount1;
  const remainingBalence = initialBalance - totalDonation;
  const balanceElement = document.getElementById("remainBalence");
  balanceElement.innerText = `${remainingBalence} BDT`;

  if (amount1 <= 0 || isNaN(amount1)) {
    alert("Invalid Donation Amount ");
    return;
  }
});

const donationButton2 = document.getElementById("donation2");
donationButton2.addEventListener("click", function () {
  const amount2 = parseInt(document.getElementById("amountInput2").value);
  const feniDonation = document.getElementById("donationAmount2");
  feniDonation.innerText = `${amount2} BDT`;

  let initialBalance = 5500;
  totalDonation += amount2;
  const remainingBalence = initialBalance - totalDonation;
  const balanceElement = document.getElementById("remainBalence");
  balanceElement.innerText = `${remainingBalence} BDT`;

  if (amount2 <= 0 || isNaN(amount2)) {
    alert("Invalid Donation Amount ");
    return;
  }
});

const donationButton3 = document.getElementById("donation3");
donationButton3.addEventListener("click", function () {
  const amount3 = parseInt(document.getElementById("amountInput3").value);
  const quotaDonation = document.getElementById("donationAmount3");
  quotaDonation.innerText = `${amount3} BDT`;

  let initialBalance = 5500;
  totalDonation += amount3;
  const remainingBalence = initialBalance - totalDonation;
  const balanceElement = document.getElementById("remainBalence");
  balanceElement.innerText = `${remainingBalence} BDT`;

  if (amount3 <= 0 || isNaN(amount3)) {
    alert("Invalid Donation Amount ");
    return;
  }
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
donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-[#B4F461]", "text-gray-500");
  historyTab.classList.remove("btn-outline", "bg-[#B4F461]", "text-gray-500");

  document.getElementById("donation-form").classList.remove("hidden");
  document.getElementById("history-form").classList.add("hidden");
});
