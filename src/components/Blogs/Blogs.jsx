import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blogs.css';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://learn.anuhyadigital.com/wp-json/wp/v2/posts?per_page=9&_embed')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the blog posts:', error);
      });
  }, []);

  return (
    <div className='blogs'>
      <div className="blog-container">
        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="post">
              <a href={post.link}>
              {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} className="post-image" />
              )}
              <div className="post-content">
                <h2>{post.title.rendered}</h2>
                <div className="post-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                <div className="post-meta">
                  <span>by {post._embedded.author[0].name}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{Math.ceil(post.content.rendered.split(' ').length / 200)} min read</span>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
