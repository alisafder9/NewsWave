import React, { useState, useEffect, useCallback } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTheme } from './ThemeContext'; // Import useTheme hook

export default function News({ category }) {
  const [news, setNews] = useState([]); // Store the list of articles
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Store error if any
  const [nextPage, setNextPage] = useState(null); // Track the next page ID

  const { theme } = useTheme(); // Get theme from context

  // Apply theme-specific background color or styles
  const background = theme === 'light' ? 'bg-light' : 'bg-dark';
  const backgroundColor = theme === 'light' ? 'bg-white' : 'bg-black';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  // Function to fetch news articles
  const fetchNews = useCallback(async (pageId = null) => {
    try {
      let url = `https://newsdata.io/api/1/latest?country=pk&category=${category}&apikey=pub_684517beefeba5b1679c6a21cbc44d49431e0`;

      if (pageId) {
        url += `&page=${pageId}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      setNews((prevNews) => [...prevNews, ...data.results]); // Concatenate the new articles
      if (data.nextPage) {
        setNextPage(data.nextPage);
      } else {
        setNextPage(null); // No more pages available
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [category]);

  // Fetch the news when the component mounts or category changes
  useEffect(() => {
    setNews([]); // Reset news state when category changes
    setNextPage(null); // Reset next page state
    setLoading(true); // Reset loading state
    fetchNews(); // Fetch the news for the new category
  }, [category, fetchNews]);

  // Show loading spinner if data is being fetched
  if (loading && news.length === 0) return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );

  // Show error message if there’s an issue with the fetch
  if (error) return (
    <div className="alert alert-danger" role="alert">
      Error: {error}. Please try again later.
    </div>
  );

  // Dynamic category title based on category
  const getCategoryTitle = (category) => {
    const titles = {
      sports: 'Sports News',
      technology: 'Technology News',
      business: 'Business News',
      science: 'Science News',
      entertainment: 'Entertainment News',
      health: 'Health News',
      world: 'World News',
      politics: 'Politics News',
      environment: 'Environment News',
      food: 'Food News',
      top: 'Top News'
    };
    return titles[category] || 'Top News';
  };

  return (
    <div className={`container rounded-3 overflow-hidden my-3 ${background} ${textColor}`}>
      <h2 className="text-center"
        style={{ marginTop: '2rem', marginBottom: '2rem', padding: '1rem' }}>
        {getCategoryTitle(category)}
      </h2>

      <InfiniteScroll
        className={`overflow-hidden`}
        dataLength={news.length}
        next={() => fetchNews(nextPage)} // Fetch next page of articles
        hasMore={!!nextPage} // If there's more news, allow scrolling
        loader={
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You have reached the end of the news!</b>
          </p>
        }
      >
        <div className="row">
          {news.map((article, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.image_url || '/path/to/default-image.jpg'}
                link={article.link}
                sourceName={article.source_name}
                sourceUrl={article.source_url}
                pubDate={article.pubDate}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      <footer className={`text-center py-3 my-2 ${textColor} ${backgroundColor}`}>
        <p>&copy; {new Date().getFullYear()} NewsWave. All rights reserved.</p>
      </footer>
    </div>
  );
}
