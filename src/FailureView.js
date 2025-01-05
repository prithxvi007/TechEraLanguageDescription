import './FailureView.css'

const FailureView = ({onRetry}) => (
  <div className="failure-view-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
      className="failure-view-image"
    />
    <h1 className="failure-view-message">Ooops! Something Went Wrong</h1>
    <p className="failure-view-error-text">
      We cannot seem to find the page you are looking for{' '}
    </p>
    <button type="button" className="retry-button" onClick={onRetry}>
      Retry
    </button>
  </div>
)

export default FailureView
