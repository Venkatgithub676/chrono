// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelines} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelines
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-calender-con">
        <h1>{projectTitle}</h1>
        <div className="calendar-con">
          <AiFillCalendar className="calendar" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        href={projectUrl}
        className="anchor-tag"
        target="_blank"
        rel="noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
