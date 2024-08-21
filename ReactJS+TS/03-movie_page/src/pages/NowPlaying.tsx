import DisplayItems from '../components/DisplayItems'
import { movieEndpoints, tvEndpoints } from '../modules/apiLinks'

const defaultProps = {
  numberOfMovies: 16,
  showButtons: true,
}

const NowPlaying = () => {
  return (
    <>
      <DisplayItems
        apiEndpoint={movieEndpoints.nowPlaying}
        itemHeading='Now playing movies'
        moviesOn={true}
        tvShowOn={false}
        {...defaultProps}
        />
      <DisplayItems
        apiEndpoint={tvEndpoints.airingToday}
        itemHeading='Airing Today'
        moviesOn={false}
        tvShowOn={true}
        {...defaultProps}
      />
    </>
  )
}

export default NowPlaying