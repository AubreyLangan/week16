import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResultsModal from './SearchResultsModal';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = performSearch(searchTerm);

        setSearchResults('');

        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {isModalOpen && <SearchResultsModal searchTerm={searchTerm} onClose={handleCloseModal} />}
            <p>This is the Search Page</p>
        </div>
    );
};

export default SearchPage;