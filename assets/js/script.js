const loginButton = document.querySelector(".login-button");
if (window.ethereum) {
  // Here the user has MetaMask.
  loginButton.addEventListener("click", async () => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (e) {
      console.error("Error logging in:", e);
    }
  });
} else {
  alert("Cannot interact with the website");
}
