import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
import './SimpleCard.css';

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
      marginTop: 80,
    
    },
    media: {
      height: 300,
    },

  }));

const SimpleCard = (props) =>  {
  const classes = useStyles();
  const {width} = props;
  return (
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
          image= {require ("./DJI_0031.JPG")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="text1-center">
          Kiswire SEAHQ Sales System
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions display={{ md: 'none' }} m={1}>
        <Button size="small" color="primary" position="center" className="text1-center" >
          Login
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
  </Grid>
    
  );
}

SimpleCard.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default SimpleCard;