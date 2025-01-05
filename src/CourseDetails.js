import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import FailureView from './FailureView'
import './CourseDetails.css'

const courseDetailsApiUrl = id => `https://apis.ccbp.in/te/courses/${id}`

const CourseDetails = () => {
  const {id} = useParams()
  const [courseDetails, setCourseDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchCourseDetails = async () => {
    try {
      const response = await fetch(courseDetailsApiUrl(id))
      if (response.ok) {
        const data = await response.json()
        setCourseDetails(data.course_details)
        setError(false)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCourseDetails()
  }, [id])

  return (
    <div className="course-details-container">
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      ) : error ? (
        <FailureView onRetry={fetchCourseDetails} />
      ) : (
        <div className="course-details">
          <img
            src={courseDetails.image_url}
            alt={courseDetails.name}
            className="course-image"
          />
          <h1 className="course-title">{courseDetails.name}</h1>
          <p className="course-description">{courseDetails.description}</p>
        </div>
      )}
    </div>
  )
}

export default CourseDetails
