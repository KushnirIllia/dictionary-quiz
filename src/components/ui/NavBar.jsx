import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const id = Date.now()
  const linksList = useSelector(state => state.navBar.links)
  const label = useSelector(state => state.navBar.label)

  return linksList.length !== 0 && label.trim() !== '' && (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{label}</Link>
        <div className="navbar-collapse" id={id}>
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

export default NavBar