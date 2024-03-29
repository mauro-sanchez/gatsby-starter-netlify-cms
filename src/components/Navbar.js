import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-blue"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* <Link to="/" className="n-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link> */}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-center has-text-centered">
              <Link className="n-item" to="/">
                Inicio
              </Link>
              <Link className="n-item" to="/about">
                Sociedad
              </Link>
              <Link className="n-item" to="/blog">
                Noticias
              </Link>
              <Link className="n-item" to="/conferencias">
                Conferencias
              </Link>
              <Link className="n-item" to="/cursos">
                Cursos
              </Link>
              <Link className="n-item" to="/contact">
                Contacto
              </Link>
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="n-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
