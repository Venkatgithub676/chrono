// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const courseItems = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )
  const projectItems = timelineItemsList.filter(
    each => each.categoryId === 'PROJECT',
  )

  //   console.log(courseItems, projectItems)
  return (
    <div className="chrono-con">
      <h1>My Journey of</h1>
      <h1>CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={courseItems}>
        <ul>
          {courseItems.map(each => (
            <CourseTimelineCard each={each} key={each.id} />
          ))}
        </ul>
      </Chrono>
    </div>
  )
}

export default TimelineView
