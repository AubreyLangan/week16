import React, { useState } from 'react';
import SearchResultsModal from './SearchResultsModal';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        setIsModalOpen(true);
        console.log('Searching for:', searchTerm);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <input 
            type='text' 
            placeholder='Search recipes...' 
            value={searchTerm}
            onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>

            <SearchResultsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                searchResults={''}
            />
        </div>
    );
};

export default SearchBar;