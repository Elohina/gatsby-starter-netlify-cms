import * as React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div> */}
      <div className='content has-text-centered'>
        <div className='container'>
          <div
            style={{ maxWidth: '100vw', margin: '2rem 0' }}
            className='columns'
          >
            <div className='column is-12'>
              <section className='credits'>
                <h3>©quinze</h3>
                <ul>
                  <li>
                    <strong>Diseño:</strong> Antonio Batle
                  </li>
                  <li>
                    <strong>Desarrollo Web:</strong> Elohina Guevara
                  </li>
                  <li>
                    (No sé qué más va aquí, quinzeañeres por favor avísenme)
                  </li>
                </ul>
                <h3 style={{ fontWeight: '300' }}>
                  ©Generación Quinze del Master en Creación Literaria de la UPF
                </h3>
              </section>
            </div>
            {/* <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div> */}
            {/* <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
