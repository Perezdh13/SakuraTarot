import React, { useState } from 'react'
import Sound from "react-sound"
import song from "../music/BGM.mp3";

function SoundDemo(
    handleSongLoading,
    handleSongPlaying,
    HandleSongFinishedPlaying
) {
    const [isPlaying, setIsPlaying] =  useState(false)
    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}</button>
            <Sound
                url={song}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={HandleSongFinishedPlaying}
            />
        </div>
    )
}

export default SoundDemo