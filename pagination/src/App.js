import React , { useState  , useEffect} from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagenation from './components/Pagenation';
import './App.css';

function App() {

  // state
  const [posts , setPosts] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState(1);
  const [ postsPerPage , ] = useState(10);

  // fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  } , [])

  // paginate posts
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex , lastPostIndex);

  return (
    <div className='App'>
      <h1>Posts</h1>
     <Posts posts={currentPosts} loading={loading}/>
     <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
