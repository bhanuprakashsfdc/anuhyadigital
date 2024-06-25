import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './Allblogs.css';


// Spinner Component

const Spinner = () => (
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>

);

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://learn.anuhyadigital.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed`);
      setPosts(prevPosts => [...prevPosts, ...response.data]);
      if (response.data.length < 9) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching the blog posts:', error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore || loading) return;
      setPage(prevPage => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[hasMore, loading]);

  return (
    <div>
      <div className="allblog-container">
        <div className="allposts">
          {posts.map(post => (
            <div key={post.id} className="allpost">
             <a href={post.link}>  
              {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} className="allpost-image" />
              )}
              <div className="allpost-content">
                <h2>{post.title.rendered}</h2>
                <div className="allpost-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                <div className="allpost-meta">
                  <span>by {post._embedded.author[0].name}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{Math.ceil(post.content.rendered.split(' ').length / 200)} min read</span>
                </div>
              </div>
              </a> 
            </div>
          ))}
        </div>
        {loading && <Spinner />}
      </div>
    </div>
  );
}

export default AllBlogs;
