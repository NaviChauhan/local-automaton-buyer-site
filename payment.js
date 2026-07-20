const walletAddress = document.querySelector("#wallet-address");
const paymentTier = document.querySelector("#payment-tier");
const copyWallet = document.querySelector("#copy-wallet");
const copyPaypal = document.querySelector("#copy-paypal");
const copyPaymentNote = document.querySelector("#copy-payment-note");
const copyStatus = document.querySelector("#copy-status");
const paypalLink = document.querySelector("#paypal-link");

function selectedAmount() {
  return paymentTier ? paymentTier.value : "19";
}

function paymentNote() {
  const amount = selectedAmount();
  return [
    "Local Automaton AI automation package",
    `Amount: approximately $${amount} USD / ${amount} USDC`,
    `Base USDC receiving address: ${walletAddress ? walletAddress.textContent.trim() : ""}`,
    `PayPal/card link: ${paypalLink ? paypalLink.href : "https://paypal.me/darsider24"}`,
    "Reply with the public transaction hash, platform milestone proof, or PayPal receipt confirmation after payment.",
    "No private keys, seed phrases, passwords, PayPal login, or wallet approvals are needed.",
  ].join("\n");
}

async function copyText(value, success) {
  await navigator.clipboard.writeText(value);
  copyStatus.textContent = success;
}

copyWallet.addEventListener("click", () => {
  copyText(walletAddress.textContent.trim(), "Wallet address copied.");
});

copyPaypal.addEventListener("click", () => {
  copyText(paypalLink.href, "PayPal link copied.");
});

copyPaymentNote.addEventListener("click", () => {
  copyText(paymentNote(), "Payment note copied.");
});
