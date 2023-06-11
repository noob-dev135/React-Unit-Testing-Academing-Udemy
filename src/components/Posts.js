import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   const data = await res.json();
    //   setPosts(data);
    // };
    // fetchData();
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if(res.status === 200) {
          res.json().then(data => setPosts(data));
        } else {
          console.error('Response Error:', res);
        }
      }).catch(err => {
        console.error('Fetch Error:', err);
      });
  }, []);
  return (
    <ul>
      { posts.map(post => <li key={post.id}>{post.title}</li>) }
    </ul>
  );
}