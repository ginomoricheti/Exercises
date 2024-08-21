// src/pages/Home.tsx
import { useState } from 'react';
import CoverPage from '../components/CoverPage';
import coverPicture from '../assets/images/cover_background.jpg';
import DisplayItems from '../components/DisplayItems';
import { movieEndpoints, tvEndpoints } from '../modules/apiLinks';
import { APIKEY } from '../modules/apiLinks';

const defaultProps = {
  numberOfMovies: 8,
  showButtons: false,
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <CoverPage
        title="Welcome"
        description="A page created for cinema lovers"
        catchyPhrase="Laugh, cry, and cheer with the power of movies."
        headerImage={coverPicture}
        showHeaderImage={true}
        showSearch={true}
        onSearch={handleSearch}
      />
      
      {/* Mostrar resultados de búsqueda si hay un query, sino mostrar lo usual */}
      {searchQuery ? (
        <DisplayItems
          apiEndpoint={`search/movie?api_key=${APIKEY}&query=${searchQuery}`}
          numberOfMovies={8}
          itemHeading={`Search Results for "${searchQuery}"`}
          showButtons={false}
          moviesOn={true}
          tvShowOn={false}
        />
      ) : (
        <>
          <DisplayItems
            apiEndpoint={movieEndpoints.trending}
            itemHeading="Trending Movies"
            moviesOn={true}
            tvShowOn={false}
            {...defaultProps}
            />
          <DisplayItems
            apiEndpoint={movieEndpoints.popular}
            itemHeading="Popular Movies"
            moviesOn={true}
            tvShowOn={false}
            {...defaultProps}
            />
          <DisplayItems
            apiEndpoint={tvEndpoints.topRated}
            itemHeading="Top Rated TV Shows"
            moviesOn={false}
            tvShowOn={true}
            {...defaultProps}
          />
        </>
      )}
    </>
  );
};

export default Home;
