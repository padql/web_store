(function () {
  const toast = document.createElement("div");
  toast.className = "popup-toast";
  toast.innerHTML = `
    <button class="close" aria-label="Tutup">×</button>
    <h4>🎉 Diskon Spesial!</h4>
    <p><b>Potongan Rp. 5000</b><br />khusus <b>pembelian ke-3</b> kamu!</p>
  `;
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(toast);
  });

  function show() {
    toast.classList.add("show");
    setTimeout(hide, 10000); // auto hilang setelah 5 detik
  }

  function hide() {
    toast.classList.remove("show");
  }

  toast.querySelector(".close").addEventListener("click", hide);

  // muncul otomatis tiap buka/refresh
  window.addEventListener("load", () => {
    setTimeout(show, 800);
  });
})();
