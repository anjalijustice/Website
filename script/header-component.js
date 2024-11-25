class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="style/nav.css">
    <header>
            <label class="hide-desktop-nav hamburger-menu">
                <input type="checkbox">
            </label> 
            <aside class="sidebar hide-desktop-nav">
                <nav>
                    <div><a href="index.html">Home</a></div>
                    <div><a href="about.html">About Me</a></div>
                    <div><a href="links.html">Shop</a></div>
                    <button class="dropdown-btn">Consultations</button>
                        <div class="dropdown-container">
                            <a href="consultVan.html">Vanlife</a>
                            <a href="consultWeb.html">Website Development</a>
                        </div>
                    <div><a href="mediakit.html">Media Kit</a></div>
                    <div><a href="contact.html">Contact</a></div>
                </nav>
            </aside>
            <nav>
                <div class="hide-mobile-nav" id="nav">
                    <a href="index.html">Home</a>
                    <a href="about.html">About Me</a>
                    <a href="links.html">Shop</a>
                    <div class="dropdown">
                      <button class="dropbtn"><a href="consultations.html">Consultations</a></button>
                      <div class="dropdown-content">
                        <a href="consultVan.html">Vanlife</a>
                        <a href="consultWeb.html">Website Development</a>
                      </div>
                    </div>
                    <a href="mediakit.html">Media Kit</a>
                    <a href="contact.html">Contact</a>
                  </div>
            </nav>
        </header>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    `;
  }
}

customElements.define('header-component', Header);

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("open");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}