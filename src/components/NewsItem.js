import React from 'react';
import { useTheme } from './ThemeContext'; // Import useTheme hook

export default function NewsItem({
  title, 
  description, 
  imageUrl, 
  link, 
  sourceUrl, 
  sourceName, 
  pubDate
}) 
{
  const { theme } = useTheme(); // Get the current theme
  const background = theme === 'light' ? 'bg-white' : 'bg-black'; // Set background color based on theme
  const textColor = theme === 'light' ? 'text-black' : 'text-white'; // Set text color based on theme
  return (
    <div className={`card my-3 ${background} ${textColor}`}>
      <img src={imageUrl} className="card-img-top" alt={title || 'News image'} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description.slice(0, 200) : ''}...</p>
        <p className="card-text">
          <small className={`text-${theme === 'light' ? 'black' : 'white'}-50`}>
            <em>Source: <a href={sourceUrl}>{sourceName}</a> | Published: {new Date(pubDate).toGMTString()}</em>
          </small>
        </p>
        <a rel="noreferrer" href={link} target="_blank" className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}
