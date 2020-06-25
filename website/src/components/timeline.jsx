import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar } from 'react-icons/fa'
import TimelineElement from './timelineElement'

import {useThemeUI, css} from 'theme-ui'

export default ({data}) => {
  const { theme } = useThemeUI()
  return (
    <VerticalTimeline
      css={css({
        "&::before": {
          background: theme.colors.primary,
          width: 2
        },
        ".vertical-timeline-element-icon": {
          boxShadow: "0 2px 40px 0 rgba(0,0,0,0.07)"
        }
      })}
    >

      {data.map((item, index) => (
        <TimelineElement item={item} key={index}/>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaStar />}
      ></VerticalTimelineElement>
    </VerticalTimeline>
  )
}
