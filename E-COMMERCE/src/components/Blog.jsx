import React from 'react';
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/blog4.png";
import Blog5 from "../assets/blog5.png";
import Blog6 from "../assets/blog6.png";
import BlogCard from './BlogCard';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      imageUrl: Blog1,
      category: ['Google', 'Trending', 'New'],
      title: 'Koudetat à la Maison #1 (L’intégrale)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 2,
      imageUrl: Blog2,
      category: ['Google', 'Trending', 'New'],
      title: 'Koudetat à la Maison #2 (L’intégrale)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '23 April 2021',
      comments: 8,
    },
    {
      id:3,
      imageUrl: Blog3, 
      category: ['Google', 'Trending', 'New'],
      title: 'Koudetat à la Maison #1 (L’intégrale)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 4,
      imageUrl: Blog4, 
      category: ['Google', 'Trending', 'New'],
      title: 'Koudetat à la Maison #1 (L’intégrale)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 5,
      imageUrl: Blog5, 
      category: ['Google', 'Trending', 'New'],
      title: 'Koudetat à la Maison #1 (L’intégrale)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 6,
      imageUrl: Blog6, 
      category: ['Google', 'Trending', 'New'],
      title: 'Koudetat à la Maison #1 (L’intégrale)',
      description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
  ];

 
  return (
    <div className="grid md:grid-cols-2 items-center px-32 py-8 ">
      {blogs.map(blog => (
        <BlogCard 
          key={blog.id}
          imageUrl={blog.imageUrl}
          category={blog.category}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          comments={blog.comments}
        />
      ))}
    </div>
  );
};

export default Blog;