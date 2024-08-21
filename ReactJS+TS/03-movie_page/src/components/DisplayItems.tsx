// src/components/DisplayItems.tsx
// API DATA

import { useEffect, useState } from 'react';
import { MovieShowsWrapper } from '../styles/Styles.modules';
import axios from 'axios';
import { IconButton, CircularProgress } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';

// Customizing Styles for MUI Components
const orangeBase = '#FFA500';
const orangeMain = alpha(orangeBase, 0.7);

// Custom Colors
declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary'];
  }
  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    orange: {
      main: orangeMain,
      light: alpha(orangeBase, 0.5),
      dark: alpha(orangeBase, 0.9),
      contrastText: getContrastRatio(orangeMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

interface Movie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
}

interface DataProps {
  apiEndpoint: string;
  numberOfMovies: number;
  showButtons: boolean;
  tvShowOn: boolean;
  moviesOn: boolean;
  itemHeading: string;
}

const DisplayItems: React.FC<DataProps> = ({
  apiEndpoint,
  numberOfMovies,
  showButtons,
  moviesOn,
  tvShowOn,
  itemHeading
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showItems, setShowItems] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiEndpoint}`, {
          params: {
            page: currentPage,
          },
        });

        const { results, total_pages } = response.data;

        setShowItems(results.slice(0, numberOfMovies));
        setTotalPages(total_pages);

      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiEndpoint, numberOfMovies, currentPage]);

  // Changing the date format from YMD (Year-Month-Day) to DMY (Day-Month-Year)
  function formattedDate(dateString: string | number | Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    if (dateString === null || dateString === undefined) {
      throw new Error("Invalid date");
    }
  
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }
  
    return date.toLocaleDateString('en-US', options);
  }

  // Previous Page Button Function
  const prevItemsPage = () => {
    if (currentPage > 1) {
      setCurrentPage((nextPage) => nextPage - 1);
    }
  };

  // Next Page Button Function
  const nextItemsPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((nextPage) => nextPage + 1);
    }
  };

  return (
    <MovieShowsWrapper>
      {loading ? (
        <div className='loadingOverlay'>
          <CircularProgress size={80} color='warning' />
          <p>Loading</p>
        </div>
      ) : (
        <>
          <div className='movieHeading'>
            <h1>{itemHeading}</h1>
          </div>
          <div className='movieCard'>
            {showItems.map((items) => {
              const percentage = (items.vote_average / 10) * 100;

              return (
                <div key={items.id}>
                  <div className='movie'>
                    <div className='movieImage'>
                      <img src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`} alt="movie img" />
                    </div>
                    <span>{percentage.toFixed(0)}%</span>
                    <div className='movieInfo'>
                      {moviesOn && (
                        <>
                          <h4>{items.title}</h4>
                          <p>{formattedDate(items.release_date)}</p>
                        </>
                      )}
                      {tvShowOn && (
                        <>
                          <h4>{items.name}</h4>
                          <p>{formattedDate(items.first_air_date)}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {showButtons && (
            <div className='buttons'>
              {currentPage > 1 && (
                <ThemeProvider theme={theme}>
                  <IconButton
                    onClick={prevItemsPage}
                    sx={{color:theme.palette.orange.main}}
                    size='large'
                  >
                    <KeyboardArrowLeftIcon fontSize='inherit' />
                  </IconButton>
                </ThemeProvider>
              )}
              <p>Page <span>{currentPage}</span></p>
              {currentPage < totalPages && (
                <ThemeProvider theme={theme}>
                  <IconButton
                    onClick={nextItemsPage}
                    size='large'
                    sx={{color:theme.palette.orange.main}}
                  >
                    <KeyboardArrowRightIcon fontSize='inherit' />
                  </IconButton>
                </ThemeProvider>
              )}
            </div>
          )}
        </>
      )}
    </MovieShowsWrapper>
  );
}

export default DisplayItems;
