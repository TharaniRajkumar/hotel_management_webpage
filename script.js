
document.getElementById("menu-toggle").addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
  });
  
 
  document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmation").textContent = "Thank you! Your room has been booked.";
    this.reset();
  });
  
