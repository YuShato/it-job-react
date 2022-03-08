import { JobPosition } from './JobPosition'
import { useSelector } from 'react-redux'
import { selectAllpositions } from 'store/positions/position-selectors'

const JobList = () => {
  const positions = useSelector(selectAllpositions)
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList }
