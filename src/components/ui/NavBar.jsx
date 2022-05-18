import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavBar = ({ label, linksList }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{label}</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            {linksList.map(link => (
              <li key={`${link.to}_`}>
                <Link
                  to={link.to}
                  className={`nav-link`}
                  aria-current="page"
                >{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  )
}
NavBar.propTypes = {
  label: PropTypes.string.isRequired,
  linksList: PropTypes.array.isRequired,
}

export default NavBar