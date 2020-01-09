import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 1,
    background: '#20232a',
  },
  container: {
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 5,
  },
  card: {
    marginLeft: 5,
    marginRight: 5,
    height: 'auto',
    background: 'none',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
  },
  title: {
    color: 'white',
  },
  button: {
    color: 'white',
    textAlign: 'left',
  },
  facebookIframe: {
    border: 'none',
    overflow: 'hidden',
    height: 494,
    allowtransparency: 'true',
    width: 428,
    paddingTop: 10,
  },
  counterFlags: {
    opacity: 1,
    width: 428,
    border: 0,
  },
});

const projects = [
  {
    name: 'Hondurasensusmanos Geografia e Historia',
    link: 'http://www.hondurasensusmanos.com/',
  },
  {
    name: 'Hondurasensusmanos Hoy en la Historia',
    link: 'http://www.hondurasensusmanos.com/hoyenlahistoria',
  },
  {
    name: 'Hondurasensusmanos Descúbrenos',
    link: 'http://hondurasensusmanos.net/',
  },
  {
    name: 'Hondurasensusmanos Ferias',
    link: 'http://www.hondurasensusmanos.com/feriasdehonduras',
  },
  {
    name: 'Hondurasensusmanos fotos',
    link: 'http://www.hondurasensusmanos.com/fotos',
  },
  {
    name: 'Hondurasensusmanos Noticias',
    link: 'http://www.hondurasensusmanos.info/',
  },
  {
    name: 'Hondurasensusmanos Turismo',
    link: 'http://www.rinconesdehonduras.info/',
  },
  {
    name: 'Hondurasensusmanos Turismo Fotos',
    link: 'http://www.rinconesdehonduras.info/fotos/',
  },
  {
    name: 'Hondurasensusmanos Pintando Honduras',
    link: 'http://pintandohonduras.hondurasensusmanos.info/',
  },
  {
    name: 'Honduras y sus Departamentos',
    link: 'http://rinconesdehonduras.net/',
  },
  { name: 'Leahonduras', link: 'http://leahonduras.com/' },
  { name: 'Escribelocorrecto', link: 'http://escribelocorrecto.com/' },
  { name: 'Radiotvmickyandonie', link: 'http://www.mickyandonie.com/radio' },
  { name: 'Mickyandonie', link: 'http://www.mickyandonie.com/' },
];

const Footer = () => {
  const classes = useStyles();

  const openLink = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" className={classes.container}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className={classes.card} raised={false} elevation={0}>
              <Typography variant="h5" align="center" className={classes.title}>
                Nuestros visitantes
              </Typography>
              <Grid container>
                <img
                  alt="flags counter"
                  src="http://s01.flagcounter.com/count/PAhb/bg_333333/txt_FFFFFF/border_CCCCCC/columns_4/maxflags_250/viewers_3/labels_1/pageviews_1/flags_1/"
                />
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className={classes.card} raised={false} elevation={0}>
              <Typography variant="h5" align="center" className={classes.title}>
                Síguenos en Facebook
              </Typography>
              <Grid container>
                <iframe
                  className={classes.facebookIframe}
                  title="frame"
                  src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F%23%21%2Fpages%2FEscribelocorrectocom%2F153123494754696&amp;width=500&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=true&amp;header=true&amp;height=500"
                  scrolling="no"
                />
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className={classes.card} raised={false} elevation={0}>
              <Typography variant="h5" align="center" className={classes.title}>
                Otros proyectos
              </Typography>
              <Grid container>
                {projects.map(value => (
                  <Grid item xs={12} key={value.name}>
                    <Button
                      key={value.link}
                      className={classes.title}
                      onClick={e => openLink(e, value.link)}
                    >
                      {value.name}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography
          align="center"
          variant="subtitle1"
          className={classes.title}
        >
          &copy; Copyright 2018 —{' '}
          <strong>Otro proyecto más Honduras en sus Manos</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
