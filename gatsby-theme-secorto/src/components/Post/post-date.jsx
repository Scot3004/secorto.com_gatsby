/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FaCalendarAlt } from 'react-icons/fa'

const PostDate = ({ children, ...props}) => (
  <div
    {...props}
  >
    <small>
      <FaCalendarAlt sx={{
        fontSize: 12,
      }}/> {children}
    </small>
  </div>
)

export default PostDate
