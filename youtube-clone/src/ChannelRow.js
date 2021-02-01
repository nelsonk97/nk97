import React from 'react'
import "./ChannelRow.css";
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ChannelRow({image, channel, verified, subs, numVideos, description}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image}/>
      <div className="channelRow__text">
        <h4>{channel} {verified && <CheckCircleIcon className="channelRow__icon"/>}</h4>
        <p>{subs} subcribers • {numVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
