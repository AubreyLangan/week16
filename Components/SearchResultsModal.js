import React from 'react';
import Modal from './Modal';

const SearchResultsModal = ({ isOpen, searchResults, onClose }) => {
    console.log('Data Type of searchResults:', typeof searchResults)

    if (!Array.isArray(searchResults)) {
        console.error('searchResults is not an array:', searchResults);

        return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <h2>Search Results</h2>
                <p>No results found</p>
            </Modal>
        );
    };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <h2>Search Results</h2>
        <ul>
            {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
            ))}
        </ul>
    </Modal>
  );
};

export default SearchResultsModal;