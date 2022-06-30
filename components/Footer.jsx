export default function footer() {
  return (
    <footer className="footer ">
      <section className="footer-primary">
        <div className="footer-primary-inner container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://x.ro" title="Information">
                  Information
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Contact us">
                  Contact us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Track my order">
                  Track my order
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Shipping">
                  Shipping
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Free returns">
                  Free returns
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My account">
                  My account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="Services">
                  Information
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Ship to store">
                  Contact us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Gift card">
                  Track my order
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Online Only">
                  Shipping
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Tips tricks">
                  Free returns
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Home">
                  My account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="Loyality programs">
                  Loyality programs
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Sign up">
                  Sign up
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="The simons">
                  Track my order
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My account">
                  Shipping
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Conditions">
                  Free returns
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Faq">
                  My account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="Careers">
                  Information
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Contact us">
                  Contact us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Track my order">
                  Track my order
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Shipping">
                  Shipping
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Free returns">
                  Free returns
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My account">
                  My account
                </a>
              </li>
            </ul>
          </nav>

          <section className="footer-contact ">
            <h1>
              <span>Thread Affair</span> Milano
            </h1>
            {/* display block pe ancore */}
            <p>
              Largo Augusto 3, Milano, 20122, Milano, IT
              <a href="tel:+0039 02 760 003 66" title="Call us">
                Tel: 0039 02 760 003 66
              </a>
              {/* use a:nth of type a */}
              <a href="mailto:office@thread-affair.com" title="Email us">
                office@thread-affair.com
              </a>
            </p>
          </section>

          <section className="footer-support">
            <ul>
              <li>
                <a href="tel:+0039 02 760 003 66" title="Support">
                  <i className="fa-solid fa-phone"></i> Support
                </a>
              </li>

              <li>
                <a href="" title="Chat">
                  <i className="fa-solid fa-comments"></i> Chat
                </a>
              </li>

              <li>
                <a href="" title="Email">
                  <i className="fa-solid fa-envelope"></i> Email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="footer-secondary text-center mt-4">
        <p>©2019 THREAD AFFAIR. All Rights Reserved.</p>

        <p>
          Designed buy
          <img
            className="ms-2"
            src="/images/pixellab_logo.jpg"
            alt="Pixellab"
          ></img>
        </p>
      </section>
    </footer>
  );
}
