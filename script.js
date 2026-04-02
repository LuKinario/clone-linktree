const toast = document.querySelector(".toast");
const copyButtons = document.querySelectorAll("[data-link]");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

async function copyLink(event) {
  event.preventDefault();
  const link = event.currentTarget.dataset.link;
  if (!link) return;

  try {
    await navigator.clipboard.writeText(link);
    showToast(`Link copiado: ${link}`);
  } catch (error) {
    console.error(error);
    showToast("Não foi possível copiar o link");
  }
}

copyButtons.forEach((button) => button.addEventListener("click", copyLink));
