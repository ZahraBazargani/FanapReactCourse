import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dataArray from '../data.json'
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth:"md",
      alignContent:'center',
      background:'transparent',
    },
    media: {
      height: 0,
      paddingTop: '50%',
    },  
  }));
export default function Post(props){
    const classes = useStyles();
        return(
            <Card className={classes.root}>
            <CardHeader
             title={dataArray[props.post-1].title}
             subheader={ 
             <Moment format='dddd, MMMM Do YYYY'>{dataArray[props.post-1].created}</Moment>}
           />
           <CardMedia
        className={classes.media}
        image={dataArray[props.post-1].cover}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p" >
          {dataArray[props.post-1].description}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p" >
          {dataArray[props.post-1].body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button variant="contained" color="primary" onClick={props.onSelectBack}>
       BACK TO LIST
    </Button>
      </CardActions>
         </Card>
    )
}