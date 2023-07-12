import React from 'react';
import { Video } from 'expo-av';

const VideoPlayer = ({ source }) => (
    <Video
        source={source}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        style={{ width: '100%', height: 200 }}
    />
);

export default VideoPlayer;