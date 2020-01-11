import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import ListSubheader from '@material-ui/core/ListSubheader';
import CollectionsBookmarkOutlined from '@material-ui/icons/CollectionsBookmarkOutlined';
import BookOutlined from '@material-ui/icons/BookOutlined';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const routes = useSelector(state => state.routes);
  let history = useHistory();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleRoute = route => {
    history.push(route);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {routes.map((element, index) => (
        <div key={index + 2}>
          <List
            subheader={
              index === 0 ? (
                <ListSubheader component="div" disableSticky={true}>
                  Escribelo Correcto
                </ListSubheader>
              ) : index > 1 && index < 11 ? (
                <ListSubheader component="div" disableSticky={true}>
                  Chapter {index - 1}
                </ListSubheader>
              ) : index > 8 && index < 20 ? (
                <ListSubheader component="div" disableSticky={true}>
                  Grade {index - 10}
                </ListSubheader>
              ) : index > 14 ? (
                <ListSubheader component="div" disableSticky={true}>
                  baccalaureate {index - 19}
                </ListSubheader>
              ) : (
                ''
              )
            }
          >
            {element.map(elementButton => (
              <div key={elementButton.name}>
                {index === 0 ? (
                  <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <ListItem
                      button
                      onClick={() => handleRoute(elementButton.route)}
                    >
                      <ListItemIcon>
                        {elementButton.icon === 'home' ? (
                          <HomeOutlined />
                        ) : elementButton.icon === 'contact' ? (
                          <EmailOutlined />
                        ) : elementButton.icon === 'about' ? (
                          <InfoOutlined />
                        ) : elementButton.icon === 'chapters' ? (
                          <CollectionsBookmarkOutlined />
                        ) : (
                          <BookOutlined />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={elementButton.name} />
                    </ListItem>
                  </Hidden>
                ) : (
                  <ListItem
                    button
                    onClick={() => handleRoute(elementButton.route)}
                  >
                    <ListItemIcon>
                      {elementButton.icon === 'home' ? (
                        <HomeOutlined />
                      ) : elementButton.icon === 'contact' ? (
                        <EmailOutlined />
                      ) : elementButton.icon === 'about' ? (
                        <InfoOutlined />
                      ) : elementButton.icon === 'chapters' ? (
                        <CollectionsBookmarkOutlined />
                      ) : (
                        <BookOutlined />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={elementButton.name} />
                  </ListItem>
                )}
              </div>
            ))}
          </List>
          {index === 0 ? (
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <Divider />
            </Hidden>
          ) : (
            <Divider />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar position="static">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Escribelo Correcto
          </Typography>
          <Hidden only={['xs', 'md', 'lg', 'xl']}>
            <Tooltip title="Home" aria-label="Home">
              <IconButton color="inherit" onClick={() => history.push('/')}>
                <HomeOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Mail" aria-label="Mail">
              <IconButton
                color="inherit"
                onClick={() => history.push('/contact')}
              >
                <EmailOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="About" aria-label="About">
              <IconButton
                color="inherit"
                onClick={() => history.push('/about')}
              >
                <InfoOutlined />
              </IconButton>
            </Tooltip>
          </Hidden>
          <Hidden only={['xs', 'sm']}>
            <Button color="inherit" onClick={() => history.push('/')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => history.push('/contact')}>
              Contact
            </Button>
            <Button color="inherit" onClick={() => history.push('/about')}>
              About
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {sideList('left')}
      </Drawer>
    </div>
  );
};

export default NavBar;
