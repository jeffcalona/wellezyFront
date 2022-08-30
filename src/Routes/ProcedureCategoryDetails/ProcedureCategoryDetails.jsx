import { Grid } from '@mui/material'
import React from 'react'
import ProcedureCatergoryDetailsHeader from '../../Components/ProcedureCategoryDetailsHeader/ProcedureCatergoryDetailsHeader'
import ProcedureCategoryDetailsMain from '../../Components/ProcedureCategoryDetailsMain/ProcedureCategoryDetailsMain'

const ProcedureCategoryDetails = () => {
  return (
    <Grid container justifyContent='center'>
        <ProcedureCatergoryDetailsHeader />
        <ProcedureCategoryDetailsMain />
    </Grid>
  )
}

export default ProcedureCategoryDetails