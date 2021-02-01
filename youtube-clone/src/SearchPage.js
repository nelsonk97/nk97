import React from 'react'
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon/>
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnhoa6jtz7ccGj30Al2Ha8t4ImDVW2U98STxoLXp=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Marquess Brownlee"
        verified
        subs="13.5M"
        numVideos={1,318}
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!">
      </ChannelRow>
      <hr/>
      <VideoRow
        title="The MKBHD Setup Tour 2020!"
        views="3.7M"
        subs="13.5M"
        description="My Mac Pro setup for early 2020!"
        timestamp="1 year ago"
        channel="Marquess Brownlee"
        image="https://i.ytimg.com/an_webp/pgmHkfvGYnY/mqdefault_6s.webp?du=3000&sqp=CLCdyIAG&rs=AOn4CLD-aDR3tkNXJ8jeZ4Sm9Sp8RxKR7w"
        >
      </VideoRow>
      <VideoRow
        title="The MKBHD Setup Tour 2020!"
        views="3.7M"
        subs="13.5M"
        description="My Mac Pro setup for early 2020!"
        timestamp="1 year ago"
        channel="Marquess Brownlee"
        image="https://i.ytimg.com/an_webp/pgmHkfvGYnY/mqdefault_6s.webp?du=3000&sqp=CLCdyIAG&rs=AOn4CLD-aDR3tkNXJ8jeZ4Sm9Sp8RxKR7w"
        >
      </VideoRow>
      <VideoRow
        title="The MKBHD Setup Tour 2020!"
        views="3.7M"
        subs="13.5M"
        description="My Mac Pro setup for early 2020!"
        timestamp="1 year ago"
        channel="Marquess Brownlee"
        image="https://i.ytimg.com/an_webp/pgmHkfvGYnY/mqdefault_6s.webp?du=3000&sqp=CLCdyIAG&rs=AOn4CLD-aDR3tkNXJ8jeZ4Sm9Sp8RxKR7w"
        >
      </VideoRow>
      <VideoRow
        title="The MKBHD Setup Tour 2020!"
        views="3.7M"
        subs="13.5M"
        description="My Mac Pro setup for early 2020!"
        timestamp="1 year ago"
        channel="Marquess Brownlee"
        image="https://i.ytimg.com/an_webp/pgmHkfvGYnY/mqdefault_6s.webp?du=3000&sqp=CLCdyIAG&rs=AOn4CLD-aDR3tkNXJ8jeZ4Sm9Sp8RxKR7w"
        >
      </VideoRow>
      <VideoRow
        title="The MKBHD Setup Tour 2020!"
        views="3.7M"
        subs="13.5M"
        description="My Mac Pro setup for early 2020!"
        timestamp="1 year ago"
        channel="Marquess Brownlee"
        image="https://i.ytimg.com/an_webp/pgmHkfvGYnY/mqdefault_6s.webp?du=3000&sqp=CLCdyIAG&rs=AOn4CLD-aDR3tkNXJ8jeZ4Sm9Sp8RxKR7w"
        >
      </VideoRow>
      <VideoRow
        title="The MKBHD Setup Tour 2020!"
        views="3.7M"
        subs="13.5M"
        description="My Mac Pro setup for early 2020!"
        timestamp="1 year ago"
        channel="Marquess Brownlee"
        image="https://i.ytimg.com/an_webp/pgmHkfvGYnY/mqdefault_6s.webp?du=3000&sqp=CLCdyIAG&rs=AOn4CLD-aDR3tkNXJ8jeZ4Sm9Sp8RxKR7w"
        >
      </VideoRow>
    </div>
  )
}

export default SearchPage