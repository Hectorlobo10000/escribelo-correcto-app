import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Links from '@material-ui/core/Link';

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
  paper: {
    marginLeft: 5,
    marginRight: 5,
    height: 'auto',
    background: 'none',
  },
  title: {
    color: 'white',
  },
  button: {
    color: 'white',
    textAlign: 'left',
  },
});

const routes = [
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

export default function Footer() {
  const classes = useStyles();

  const openLink = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank');
    console.log(url);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" className={classes.container}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" align="center" className={classes.title}>
                Síguenos en Facebook
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" align="center" className={classes.title}>
                Síguenos en Facebook
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" align="center" className={classes.title}>
                Otros proyectos
              </Typography>
              {routes.map(value => (
                <Links
                  key={value.link}
                  href={value.link}
                  component="button"
                  className={classes.button}
                  variant="subtitle1"
                  onClick={e => openLink(e, value.link)}
                >
                  {value.name}
                </Links>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
