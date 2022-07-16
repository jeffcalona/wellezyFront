import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'
import React, { useState } from 'react'
import './Assets/styles.css'

const CollapseList = ({ collapseListTitle, collapseList }) => {

    const [openList, setOpenList] = useState(false)
    const handleClick = () => {
        setOpenList(!openList)
    }

  return (
    <>
        <ListItemButton onClick={handleClick} className='collapseList_ListItemButton' >
            <ListItemText primary={collapseListTitle} />
            {openList ? <ArrowUp2 size="32" color="white"/> : <ArrowDown2 size="32" color="white"/>}
        </ListItemButton>
        <Collapse in={openList} timeout="auto" unmountOnExit sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05) !important', borderRadius: '20px' }}>
            <List component="div">
                {collapseList}
            </List>
        </Collapse>
    </>
  )
}

export default CollapseList