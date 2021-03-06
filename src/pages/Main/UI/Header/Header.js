import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'

const styles = () => ({
  header: {
    flexBasis: 0,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

function Header(props) {
  return (
    <Grid item xs={12} className={props.classes.header}>
      <AppBar
        position="static"
        color="default"
        className={classNames(props.classes.appBar, props.openDrawer && props.classes.appBarShift)}
        onClick={() => props.updateUI({ openDrawer: !props.openDrawer })}
      >
        <Toolbar>
          <IconButton className={props.classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Typography type="title" color="inherit">
            Hello World
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

Header.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,

  updateUI: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
