import React from 'react'
import styles from '../../styles/styles'
import { navItems } from '../../static/data'

function NavBar() {
  return (
    <div className= {`${styles.noramlFlex}`}>
        {
            navItems && navItems.map((i,index)=>(
                    <div className='flex'>

                    </div>
            ))       
         }
    </div>
  )
}

export default NavBar