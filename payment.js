const walletAddress = document.querySelector("#wallet-address");
const paymentTier = document.querySelector("#payment-tier");
const copyWallet = document.querySelector("#copy-wallet");
const copyPaymentNote = document.querySelector("#copy-payment-note");
const copyStatus = document.querySelector("#copy-status");

function selectedAmount() {
  return paymentTier ? paymentTier.value : "19";
}

function paymentNote() {
  const amount = selectedAmount();
  return [
    "Local Automaton AI automation package",
    `Amount: ${amount} USDC on Base, shown as approximately $${amount}`,
    `Receiving address: ${walletAddress ? walletAddress.textContent.trim() : ""}`,
    "Reply with the public transaction hash after payment.",
    "No private keys, seed phrases, passwords, or wallet approvals are needed.",
  ].join("\n");
}

async function copyText(value, success) {
  await navigator.clipboard.writeText(value);
  copyStatus.textContent = success;
}

copyWallet.addEventListener("click", () => {
  copyText(walletAddress.textContent.trim(), "Wallet address copied.");
});

copyPaymentNote.addEventListener("click", () => {
  copyText(paymentNote(), "Payment note copied.");
});
