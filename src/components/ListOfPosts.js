import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dataArray from '../data.json'
import { Grid } from '@material-ui/core';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },  
}));

export default function ListOfPosts({onSelectReadMore}) {
  const classes = useStyles();
  return (
      <Grid container spacing={4}>
            {dataArray.map((key) => (
        <Grid item key={key} xs={12} sm={6} md={4}>
          <Card className={classes.root}>
       <CardHeader
        avatar={
          <Avatar>
            {key.author.charAt(0)}
          </Avatar>
        }
        title={key.title.length >45 ? key.title.substring(0,45)+'...': key.title}
        subheader={<Moment format='dddd, MMMM Do YYYY'>{key.created}</Moment>}
      />
      <CardMedia
        className={classes.media}
        image={key.cover}
      />
      <CardContent  >
        <Typography variant="body2" color="textSecondary" component="p" >
          {key.description.length > 200 ? key.description.substring(0,200)+'...': key.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small" color="primary" onClick={()=>{onSelectReadMore(key.id)}}> 
          READ MORE
        </Button>
      </CardActions>
    </Card>
        </Grid>
      ))}
      </Grid>
    

    

  );
}
