// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {each} = props

  console.log(each)
  const {courseTitle, description, duration, tagsList} = each
  return (
    <div>
      <div className="course-title-circle-con">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="circle-con">
          <AiFillClockCircle className="calendar" />
          <p className="duration ">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="course-items-ul-con">
        {tagsList.map(each1 => (
          <li key={each1.id} className="course-items-li-con">
            <p className="para">{each1.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
