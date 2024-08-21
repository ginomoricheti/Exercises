import DisplayItems from '../components/DisplayItems'
import { movieEndpoints, tvEndpoints } from '../modules/apiLinks'

const defaultProps = {
  numberOfMovies: 16,
  showButtons: true,
}

const Popular = () => {
  return (
    <>
      <DisplayItems
        apiEndpoint={movieEndpoints.popular}
        itemHeading='Popular movies'
        moviesOn={true}
        tvShowOn={false}
        {...defaultProps}
      />
      <DisplayItems
        apiEndpoint={tvEndpoints.popular}
        itemHeading='Popular TV Shows'
        moviesOn={false}
        tvShowOn={true}
        {...defaultProps}
      />
    </>
  )
}

export default Popular