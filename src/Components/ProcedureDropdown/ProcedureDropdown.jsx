import React from 'react'
import { Link } from 'react-router-dom'
import './Assets/styles.css'

const ProcedureDropdown = ({ img, title, linkProcedureCategory, lickCategoryClicked }) => {
  return (
    <div className='cardProcedureDropdown'>
      <Link to={linkProcedureCategory} onClick={lickCategoryClicked}>
        <div className='cardProcedureDropdown-procedure_img'>
          <img src={img} alt={title} />
        </div>
        <div className='cardProcedureDropdown-procedure_title'>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProcedureDropdown