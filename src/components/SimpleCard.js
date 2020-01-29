import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
//import './SimpleCard.css';

const theme = createMuiTheme();

theme.typography.h5 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  
};

const useStyles = makeStyles( theme => ({

    root: {
      flexGrow: 1,
    },

    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    card: {
      //padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      //flex: '1 0 auto',
      //margin: theme.spacing(1),
      maxWidth: 450,
      margin: 'auto',
      marginTop: 120,
    },
    media: {
      height: 300,
    },

    title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
    display: 'block',
    },
    fontFamily: 'Nunito',

  }}));

const SimpleCard = (props) =>  {
  const classes = useStyles();
  const {width} = props;
  return (
    <ThemeProvider theme={theme}>
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12} margin="auto">
      <Grid container justify="center" >
        {[0].map(value => (
          <Grid key={value} item>
            <Card className={classes.card} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image= {require ("./kiswire.PNG")}
        />
        {/* <CardContent className={classes.title}>
          <Typography gutterBottom variant="h5" component="h2" >
          Kiswire SEAHQ Sales System
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
    </Grid>
  </Grid>
  </ThemeProvider>  
  );
}

SimpleCard.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default SimpleCard;