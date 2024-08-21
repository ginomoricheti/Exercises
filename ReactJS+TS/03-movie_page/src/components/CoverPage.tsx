// src/components/CoverPage.tsx
import { Cover, SearchBar } from "../styles/Styles.modules";
import { useState } from "react";

type CoverProps = {
  title: string;
  description: string;
  catchyPhrase: string;
  headerImage: string;
  showHeaderImage: boolean;
  showSearch: boolean;
  onSearch: (query: string) => void;
};

const CoverPage: React.FC<CoverProps> = ({
  title,
  description,
  catchyPhrase,
  headerImage,
  showHeaderImage,
  showSearch,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Cover>
      <div className="coverText">
        <h1>{title}</h1>
        <p>{description}</p>
        <em>{catchyPhrase}</em>
      </div>
      {showHeaderImage && <img src={headerImage} alt="A photo of an empty cinema room" />}
      {showSearch && (
        <SearchBar>
          <input
            type="search"
            placeholder="Over 10000 movies to search..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </SearchBar>
      )}
    </Cover>
  );
};

export default CoverPage;
