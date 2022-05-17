import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

import { CATEGORIES } from '../../constants/categories'
import newsIcon from '../../assets/news-icon.svg'
import { useState } from 'react'
import classNames from 'classnames'


const Navbar = () => {
  const [selected, setSelected] = useState('')

  return(
    <nav className={styles.nav}>
      <div className={styles.navIconWrapper}>
        <img className={styles.navIcon} src={newsIcon} alt="navbar icon" />
        <h1 className={styles.navTitle}>NEWS</h1>
      </div>

      <div className={styles.categories}>
        {CATEGORIES.map( (category, index) => {
          return(
            <>
              <Link 
                key={index}
                onClick={() => setSelected(category.name)}
                to={`/${category.slug}`}
                className={classNames(styles.category, {
                  [styles.selected]: selected === category.name
                })}
              >
                {category.name}
              </Link>
            </>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar