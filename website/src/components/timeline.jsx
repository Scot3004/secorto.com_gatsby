import React from 'react'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaStar } from 'react-icons/fa'
import TimelineElement from './timelineElement'

import { useThemeUI, css } from 'theme-ui'

export default ({ data }) => {
  const { theme } = useThemeUI()
  return (
    <VerticalTimeline
      css={css({
        '&::before': {
          background: theme.colors.primary,
          width: 4,
        },
        '.vertical-timeline-element-icon': {
          boxShadow: '0 4px 40px 0 rgba(0,0,0,0.07)',
        },
      })}
    >
      {data.map((item, index) => (
        <TimelineElement item={item} key={index} />
      ))}
      <VerticalTimelineElement
        iconStyle={{
          background: theme.colors.timeline.previousWorkBG,
          color: theme.colors.timeline.iconColor
        }}
        icon={<FaStar />}
      ></VerticalTimelineElement>
    </VerticalTimeline>
  )
}
