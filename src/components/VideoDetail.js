import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) =>{

    if(!video) return <div>Loading...</div>

    console.log(video)

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`


    return(
       <React.Fragment>
           <Paper elevation={6} style={{ height: '50%' }}>
                <iframe frameBorder="0px" height="100%" width="100%" title="video Player"
                    src={videoSrc}
                />
           </Paper>
           <Paper elevation={6} style={{ height: '15px' }} >
               <Typography variant="h6">
                { video.snippet.title } - { video.snippet.channelTitle }</Typography>
              <Typography variant="subtitle1">{ video.snippet.channelTitle }</Typography>
              <Typography variant="subtitle2">{ video.snippet.description }</Typography>
           </Paper>
       </React.Fragment>

    )
}
export default VideoDetail