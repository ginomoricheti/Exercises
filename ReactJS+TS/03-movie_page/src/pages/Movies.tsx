import DisplayItems from '../components/DisplayItems'
import { movieEndpoints } from '../modules/apiLinks'

const defaultProps = {
  numberOfMovies: 16,
  showButtons: true,
  moviesOn: true,
  tvShowOn: false
}

const Movies = () => {
  return (
    <>
      <DisplayItems
        apiEndpoint={movieEndpoints.topRated}
        itemHeading='Bests Movies'
        {...defaultProps}
      />
      <DisplayItems
        apiEndpoint={movieEndpoints.upcoming}
        itemHeading='Upcoming Movies'
        {...defaultProps}
        />
      <DisplayItems
        apiEndpoint={movieEndpoints.trending}
        itemHeading='Trending Movies'
        {...defaultProps}
        />
      <DisplayItems
        apiEndpoint={movieEndpoints.popular}
        itemHeading='Popular Movies'
        {...defaultProps}
        />
      <DisplayItems
        apiEndpoint={movieEndpoints.nowPlaying}
        itemHeading='Now Playing Movies'
        {...defaultProps}
      />
    </>
  )
}

export default Movies