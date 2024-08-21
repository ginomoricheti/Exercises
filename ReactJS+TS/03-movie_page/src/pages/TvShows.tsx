import DisplayItems from '../components/DisplayItems'
import { tvEndpoints } from '../modules/apiLinks'

const defaultProps = {
  numberOfMovies: 16,
  showButtons: true,
  moviesOn: false,
  tvShowOn: true
}

const TvShows = () => {
  return (
    <>
      <DisplayItems
        apiEndpoint={tvEndpoints.topRated}
        itemHeading='Bests TV Shows'
        {...defaultProps}
        />
      <DisplayItems
        apiEndpoint={tvEndpoints.trending}
        itemHeading='Bests TV Shows'
        {...defaultProps}
        />
      <DisplayItems
        apiEndpoint={tvEndpoints.airingToday}
        itemHeading='Bests TV Shows'
        {...defaultProps}
        />
      <DisplayItems
        apiEndpoint={tvEndpoints.popular}
        itemHeading='Bests TV Shows'
        {...defaultProps}
      />
    </>
  )
}

export default TvShows