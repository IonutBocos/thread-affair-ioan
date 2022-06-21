export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-logo">
        <a href="https://www.google.ro/?hl=ro" title="Thread Affair">
          <img src="/images/logo.jpg" alt="Thread Affair - Logo"></img>
        </a>
      </div>

      <div className="header-support d-none d-lg-block">
        <ul>
          <li>
            <i class="fa-solid fa-phone"></i>
          </li>

          <li>
            <a href="tel:1-877-666-1840" title="Call us">
              Toll Free 1-877-666-1840
            </a>
          </li>

          <li>
            <a href="mailto:office@traidaffairs.com" title="Email us">
              office@traidaffairs.com
            </a>
          </li>
        </ul>
      </div>

      <div className="header-search d-lg-none">
        <ul>
          <li>
            <a href="https://www.google.ro/?hl=ro" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li>
            <a href="https://www.google.ro/?hl=ro" title="Search">
              <i className="fa-solid fa-search"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <a href="https://www.google.ro/?hl=ro" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span class="qty">3</span>
            </a>
          </li>

          <li>
            <a href="https://www.google.ro/?hl=ro" title="My account">
              <img src="/images/user-avatar.png" alt="My account"></img>

              <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
