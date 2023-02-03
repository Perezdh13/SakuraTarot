import React, { useState } from 'react'
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import Sound from "react-sound"
import song from "../music/BGM.mp3";


function SoundDemo(
    handleSongLoading,
    handleSongPlaying,
    HandleSongFinishedPlaying
) {
    const [isPlaying, setIsPlaying] =  useState(false)
    return (
        <div className="music">
            {isPlaying ? <BsFillVolumeDownFill onClick={() => setIsPlaying(!isPlaying)} className="volume-icon" size={60}/> : <BsFillVolumeMuteFill onClick={() => setIsPlaying(!isPlaying)} className="volume-icon" size={60}/>}
            <Sound
                url={song}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={300}
                // onLoading={handleSongLoading}
                // onPlaying={handleSongPlaying}
                onFinishedPlaying={HandleSongFinishedPlaying}
                volume={20}
            />
        </div>
    )
}

export default SoundDemo