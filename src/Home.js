import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import FailureView from './FailureView'
import './Home.css'

const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchCourses = async () => {
    try {
      const response = await fetch(coursesApiUrl)
      if (response.ok) {
        const data = await response.json()
        setCourses(data.courses)
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
    fetchCourses()
  }, [])

  return (
    <div className="home-container">
      <h1 className="home-heading">Courses</h1>
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      ) : error ? (
        <FailureView onRetry={fetchCourses} />
      ) : (
        <ul className="courses-list">
          {courses.map(course => (
            <li key={course.id} className="course-item">
              <Link to={`/courses/${course.id}`} className="course-link">
                <img
                  src={course.logo_url}
                  alt={course.name}
                  className="course-logo"
                />
                <p className="course-name">{course.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home
