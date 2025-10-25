import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Search.module.css';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from an API or search service
  const searchableContent = [
    { text: 'About Me', page: '/about', tag: 'H1' },
    { text: 'Contact', page: '/contact', tag: 'H1' },
    { text: 'Skills', page: '/skills', tag: 'H1' },
    { text: 'Jobs', page: '/jobs', tag: 'H1' },
    { text: 'Gallery', page: '/gallery', tag: 'H1' },
    { text: 'Hobbies', page: '/hobbies', tag: 'H1' },
    { text: 'Portfolio', page: '/home', tag: 'H1' },
    { text: 'Oline Kleiven', page: '/about', tag: 'H1' },
    { text: 'University of Bergen', page: '/about', tag: 'P' },
    { text: 'Visual Design', page: '/about', tag: 'P' },
    { text: 'Universal Design', page: '/about', tag: 'P' },
    { text: 'Frontend Development', page: '/skills', tag: 'P' },
    { text: 'React', page: '/skills', tag: 'P' },
    { text: 'JavaScript', page: '/skills', tag: 'P' },
    { text: 'CSS', page: '/skills', tag: 'P' },
    { text: 'HTML', page: '/skills', tag: 'P' },
    { text: 'Skiing', page: '/hobbies', tag: 'P' },
    { text: 'Photography', page: '/hobbies', tag: 'P' },
    { text: 'Hiking', page: '/hobbies', tag: 'P' },
    { text: 'Leikanger', page: '/about', tag: 'P' },
    { text: 'Sogn', page: '/about', tag: 'P' }
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchableContent.filter(item =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(results.length > 0);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleResultClick = (page) => {
    navigate(page);
    setSearchQuery('');
    setShowResults(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSearchQuery('');
      setShowResults(false);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for words..."
        className={styles.searchInput}
        aria-label="Search portfolio content"
      />
      
      {showResults && (
        <div className={styles.searchResults}>
          {searchResults.map((result, index) => (
            <div
              key={index}
              className={styles.searchResultItem}
              onClick={() => handleResultClick(result.page)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleResultClick(result.page)}
              aria-label={`Navigate to ${result.text} on ${result.page}`}
            >
              <span className={styles.resultText}>{result.text}</span>
              <span className={styles.resultTag}>({result.tag})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
