import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
}))

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.AppBar}>
      <Toolbar>
        <Typography variant="h5">
          Have I Been Breached
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header