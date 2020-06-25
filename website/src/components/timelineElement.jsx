import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { FaUserGraduate, FaBriefcase } from 'react-icons/fa'
import { useThemeUI } from 'theme-ui'
const timelineTypeProps = {
  academic: {
    icon: <FaUserGraduate />,
    iconStyle: { background: 'red', color: '#fff' }
  },
  work: {
    icon: <FaBriefcase />,
    iconStyle: { background: 'gray', color: '#fff' }
  },
  currentWork: {
    icon: <FaBriefcase />,
    iconStyle: { background: 'blue', color: '#fff' }
  }
}

export default ({item}) => {
  const { theme } = useThemeUI()

  return (
  <VerticalTimelineElement
        contentStyle={{ 
          background: theme.colors.background,
          color: theme.colors.text,
          border: `2px solid ${theme.colors.primary}`,
          boxShadow: '0 2px 40px 0 rgba(0,0,0,0.07)'}}
        contentArrowStyle={{ borderRight: `7px solid ${theme.colors.primary}` }}
        date={item.date}
        {...timelineTypeProps[item.type]}
  >

    <h3 className="vertical-timeline-element-title" >{item.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{item.place}</h4>
    <p>
      {item.location}
    </p>
  </VerticalTimelineElement>
  )
}

