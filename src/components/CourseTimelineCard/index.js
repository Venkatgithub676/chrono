// Write your code here

const CourseTimelineCard = props => {
  const {each} = props

  console.log(each)
  const {title, courseTitle, description, tagslist} = each
  return (
    <div>
      <h1>{courseTitle}</h1>
      <p>{description}</p>
      <ul>
        {tagslist.map(each1 => (
          <li key={each1.id}>{each1.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
