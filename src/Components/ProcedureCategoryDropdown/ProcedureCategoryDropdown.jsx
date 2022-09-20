import { ArrowRight2 } from 'iconsax-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProcedureDropdown from '../ProcedureDropdown/ProcedureDropdown'
import './Assets/styles.css'

const ProcedureCategoryDropdown = ({ categoryProceduresImg, categoryProceduresTitle, catego, ClickedCategory, idCategory, lickCategoryClicked, linkCategory }) => {

    const [categoryOpen, setCategoryOpen] = useState(false)

    const mouseEnter = () => {
        setCategoryOpen(!categoryOpen)
    }
    const mouseLeave = () => {
        setCategoryOpen(false)
    }

    // onClick={() => setCategoryOpen(!categoryOpen)}
  return (
    <div className='categoryProcedures' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={ClickedCategory}>
        <Link to={linkCategory} className='categoryProcedures_'>
            <div className='categoryProcedures_text'>
                <div className='categoryProcedures_img'>
                    <img src={categoryProceduresImg} alt={categoryProceduresTitle} />
                </div>
                <div className='categoryProcedures_p'>
                    <p>{categoryProceduresTitle}</p>
                </div>
            </div>
            <div>
                <ArrowRight2 size="22" color="#004274"/>
            </div>
        </Link>
        <div className='categoryProcedures_dropdown'>
            {categoryOpen &&
                catego.map((cat) => {
                    return (
                        <ProcedureDropdown img={cat.img} title={cat.title} linkProcedureCategory={`procedure/${idCategory}/${cat.id}`} lickCategoryClicked={lickCategoryClicked}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProcedureCategoryDropdown