
import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListOfPosts from './components/ListOfPosts';
import Post from './components/Post';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

}));

export default function App() {
  const classes = useStyles();
  const [selectedPost,setSelectedPost]=useState();

  const selectPost = (postId) => {
    setSelectedPost(postId);
  }

  const selectBack = ()=>{
    setSelectedPost(undefined);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Learning React
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
              {selectedPost!==undefined ? <Post post={selectedPost} onSelectBack={selectBack}></Post>:<ListOfPosts   onSelectReadMore={selectPost}></ListOfPosts>
              }
        </Container>
      </main>
    </React.Fragment>
  );
}

   

