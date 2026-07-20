const form = document.querySelector("#intake-form");
const output = document.querySelector("#output");
const validation = document.querySelector("#validation");
const copyButton = document.querySelector("#copy");

const addressPattern = /^0x[a-fA-F0-9]{40}$/;
const txPattern = /^$|^0x[a-fA-F0-9]{64}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const packageName = document.querySelector("#package").value.trim();
  const buyer = document.querySelector("#buyer").value.trim();
  const contact = document.querySelector("#contact").value.trim();
  const address = document.querySelector("#address").value.trim();
  const goal = document.querySelector("#goal").value.trim();
  const workflow = document.querySelector("#workflow").value.trim();
  const review = document.querySelector("#review").value.trim();
  const timeline = document.querySelector("#timeline").value.trim();
  const tx = document.querySelector("#tx").value.trim();

  if (!addressPattern.test(address)) {
    validation.textContent = "Address is not a valid public EVM address.";
    output.textContent = "";
    return;
  }

  if (!txPattern.test(tx)) {
    validation.textContent = "Transaction hash should be blank or a valid 0x hash.";
    output.textContent = "";
    return;
  }

  validation.textContent = "Ready to send. Public payment data only; no private keys requested.";
  output.textContent = [
    `Buyer: ${buyer}`,
    `Contact: ${contact || "not provided"}`,
    `Package: ${packageName}`,
    `Receiving address: ${address}`,
    `Transaction hash: ${tx || "not provided yet"}`,
    `Setup goal: ${goal}`,
    `First workflow: ${workflow}`,
    `Review gate: ${review}`,
    `Timeline: ${timeline}`,
    "",
    "Next steps:",
    "1. Verify the public Base USDC payment.",
    "2. Confirm the first workflow scope and approved inputs.",
    "3. Build the runnable example, setup notes, and verification steps.",
    "4. Log confirmed revenue only after payment is received.",
  ].join("\n");
});

copyButton.addEventListener("click", async () => {
  if (!output.textContent.trim()) {
    validation.textContent = "Generate a request before copying.";
    return;
  }
  await navigator.clipboard.writeText(output.textContent);
  validation.textContent = "Copied request text.";
});
