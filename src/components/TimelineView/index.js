// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  //   console.log(courseItems, projectItems)
  return (
    <div className="chrono-con">
      <h1 className="heading">
        My JOURNEY OF <br />
        CCBP 4.0
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          cardForeColor: 'pink',
          titleColor: 'brown',
        }}
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard each={each} key={each.id} />
          }
          return <ProjectTimelineCard projectTimelines={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
