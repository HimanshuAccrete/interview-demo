import { Box, Grid, LinearProgress } from '@mui/material'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { dataCtx } from '../../context/DataContext'

const Progressbar = () => {
  const { getProgressBar, data } = useContext(dataCtx);

    const [report, setReport] = useState({})

  useEffect(() => {
    const { male, female, total } = getProgressBar()
    const percent = Math.round((male * 100) / total)
    setReport({ male, female, total, percent })
  }, [
    useMemo(() => data, [data])
  ])
  

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <LinearProgress variant="determinate" value={report.percent || 0} />
      <Box>
        <Grid container xl={12} sx={{ mt: 3, fontSize: 16 }}>
          <Grid item xl={8} xs={8} sx={{ fontWeight: 600, mb: 1 }}>
            Male User: 
          </Grid>
          <Grid item xl={4} xs={4}>
            {report.male}
          </Grid>
          <Grid item xl={8} xs={8} sx={{ fontWeight: 600 }}>
            Female User: 
          </Grid>
          <Grid item xl={4} xs={4}>
            {report.female}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Progressbar