class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="style/footer.css">
    <footer class="footer">
        <ul class="footer-social-icon">
            <li class="footer-social-icon__item"><a class="footer-social-icon__link" href="https://instagram.com/anjalijustice">
                <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
            <li class="footer-social-icon__item"><a class="footer-social-icon__link" href="https://youtube.com/@anjalijustice">
                <ion-icon name="logo-youtube"></ion-icon>
                </a></li>
            <li class="footer-social-icon__item"><a class="footer-social-icon__link" href="https://tiktok.com/@anjalijustice"><ion-icon name="logo-tiktok"></ion-icon></a></li>
            <li class="footer-social-icon__item"><a class="footer-social-icon__link" href="https://facebook.com/anjalijusticevanlife">
                <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
        </ul>
        <ul class="menu">
          <li class="menu__item"><a class="menu__link" href="/index.html">Home</a></li>
          <li class="menu__item"><a class="menu__link" href="/about.html">About Me</a></li>
          <li class="menu__item"><a class="menu__link" href="/links.html">Shop</a></li>
          <li class="menu__item"><a class="menu__link" href="/consultations.html">Consultations</a></li>
          <li class="menu__item"><a class="menu__link" href="/mediakit.html">Media Kit</a></li>
          <li class="menu__item"><a class="menu__link" href="/contact.html">Contact</a></li>
    
        </ul>
        <p>2024 Anjali Justice | All Rights Reserved</p>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    `;
  }
}

customElements.define('footer-component', Footer);