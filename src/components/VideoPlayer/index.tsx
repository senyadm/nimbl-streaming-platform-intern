import { likeSolid } from '@/assets/icons'
import Image from 'next/image'
import styles from './VideoPlayer.module.scss'
import screenfull from 'screenfull'

import stopIcon from '@/assets/icons/stop.svg'
import playIcon from '@/assets/icons/play.svg'
import volumeIcon from '@/assets/icons/volume.png'
import muteIcon from '@/assets/icons/mute.svg'
import surprizeIcon from '@/assets/icons/surprize.png'
import donateIcon from '@/assets/icons/donate.png'
import subtitleIcon from '@/assets/icons/subs.png'
import settingsIcon from '@/assets/icons/settings.png'
import fullIcon from '@/assets/icons/full_screen.png'
import channelIcon from '@/assets/avatar3.png'
import viewIcon from '@/assets/icons/eye.svg'
import likeIcon from '@/assets/icons/like-solid.svg'

import { useEffect, useRef, useState } from 'react'

const VideoPlayer = () => {
    const [stop, setStop] = useState(false)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [muted, setMuted] = useState(true)
    const [progress, setProgress] = useState('0%')
    const [volumeProgress, setVolumeProgress] = useState('100%')
    const [currentMinutes, setCurrentMinutes] = useState(0)
    const [currentSeconds, setCurrentSeconds] = useState(0)
    const [durationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)
    const [toggleSettings, setToggleSettings] = useState(false)
    const [isControllersVisible, setIsControllersVisible] = useState(false)

    const videoRef = useRef<HTMLVideoElement | null>(null)
    const volumeRef = useRef<HTMLDivElement | null>(null)
    const playerRef = useRef<HTMLDivElement | null>(null)

    const getCurrentTime = () => {
        return `${currentMinutes < 10 ? '0' : ''}${currentMinutes}:${
            currentSeconds < 10 ? '0' : ''
        }${currentSeconds}`
    }

    const getDurationTime = () => {
        return `${durationMinutes < 10 ? '0' : ''}${durationMinutes}:${
            durationSeconds < 10 ? '0' : ''
        }${durationSeconds}`
    }

    const updateCurrentTime = () => {
        setCurrentMinutes(Math.floor((videoRef.current?.currentTime || 0) / 60))
        const temp = Math.floor(
            (videoRef.current?.currentTime || 0) - currentMinutes * 60
        )
        if (temp % 60 < 0) {
            setCurrentSeconds(60 + (temp % 60))
        } else {
            setCurrentSeconds(temp % 60)
        }
    }

    const durationTime = () => {
        setDurationSeconds(
            Math.floor((videoRef.current?.duration || 0) - durationMinutes * 60)
        )
        setDurationMinutes(Math.floor((videoRef.current?.duration || 0) / 60))
    }

    const togglePlay = () => {
        const method = videoRef.current?.paused && true ? 'play' : 'pause'
        //@ts-ignore
        videoRef.current[method]()
        setStop(method === 'play' ? false : true)
    }

    const scrub = (e: any) => {
        const scrubTime =
            (e.nativeEvent.offsetX / (videoRef?.current?.clientWidth || 1)) *
            (videoRef?.current?.duration || 0)
        if (!isNaN(scrubTime)) {
            //@ts-ignore
            videoRef.current.currentTime = scrubTime
        }
    }

    const handleProgress = () => {
        const percent =
            // @ts-ignore
            (videoRef.current?.currentTime / videoRef.current?.duration) * 100
        setProgress(`${percent}%`)
    }

    const handleProgressVolume = (e: any) => {
        const percent =
            (e.nativeEvent.offsetX / (volumeRef?.current?.clientWidth || 0)) *
            100
        setVolumeProgress(`${percent}%`)
        setMuted(percent === 0)
        if (muted && percent === 0) setVolumeProgress('1%')
        //@ts-ignore
        videoRef.current.volume = percent / 100
    }

    const handleFullScreen = () => {
        //@ts-ignore
        screenfull.toggle(playerRef.current)
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'f') {
            //@ts-ignore
            screenfull.toggle(playerRef.current)
        }
        if (e.keyCode == '37') {
            //@ts-ignore
            videoRef.current.currentTime -= 10
        }
        if (e.keyCode == '39') {
            //@ts-ignore
            videoRef.current.currentTime += 10
        }
        if (e.keyCode == '38') {
            //@ts-ignore
            if (videoRef.current?.volume != 1) {
                //@ts-ignore
                videoRef.current.volume += 0.02
                //@ts-ignore
                setVolumeProgress(`${videoRef.current.volume * 100}%`)
            }
            setMuted(false)
        }
        if (e.keyCode == '40') {
            //@ts-ignore
            if (videoRef.current?.volume > 0.02) {
                console.log(videoRef.current?.volume)
                //@ts-ignore
                videoRef.current.volume -= 0.02
                //@ts-ignore
                setVolumeProgress(`${videoRef.current.volume * 100}%`)
            } else {
                setMuted(true)
                setVolumeProgress(`0%`)
            }
        }
        if (e.keyCode == '32') {
            togglePlay()
        }
    }

    return (
        <div
            ref={playerRef}
            className={styles.player}
            onMouseEnter={() => setIsControllersVisible(true)}
            onMouseLeave={() => setIsControllersVisible(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <video
                ref={videoRef}
                width={'100%'}
                height={'100%'}
                autoPlay
                onTimeUpdate={() => {
                    handleProgress()
                    updateCurrentTime()
                    durationTime()
                }}
                onDoubleClick={handleFullScreen}
                onClick={togglePlay}
                muted={muted}
                src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"
                // src="https://www.youtube.com/watch?v=arDpUtrps6o&ab_channel=kazakhlofi"
            />

            <div
                className={styles.player_top}
                style={{
                    opacity: isControllersVisible ? '1' : '0',
                    transition: '.3s all',
                }}
            >
                <div className={styles.player_top_title}>
                    <h3>
                        IGNORE THE FUD Binance CZ | AAVE Freezes Lending Markets
                        | Polygon Solana NFT
                    </h3>
                    <div>
                        <span>
                            <Image src={viewIcon} alt="view" />
                            100 345
                        </span>
                        <span>
                            <Image src={likeIcon} alt="like" />5 324
                        </span>
                    </div>
                </div>
                <div className={styles.player_top_channel}>
                    <div className={styles.player_top_channel_content}>
                        <h4>Helen_NFT</h4>
                        <p>245,511 members</p>
                    </div>
                    <Image src={channelIcon} alt="channel logo" />
                </div>
            </div>

            <div
                className={styles.bottom_opacity}
                style={{
                    opacity: isControllersVisible ? '.5 ' : '0',
                    transition: '.3s all',
                }}
            ></div>
            <div
                className={styles.player_controller_bottom}
                style={{
                    opacity: isControllersVisible ? '1' : '0',
                    transition: '.3s all',
                }}
            >
                <div className={styles.player_controller_bottom_likes}>
                    <span>
                        <Image
                            width={20}
                            height={20}
                            src={likeSolid}
                            alt="like"
                        />
                        5 324
                    </span>
                    <span>
                        <Image
                            width={20}
                            height={20}
                            src={surprizeIcon}
                            alt="like"
                        />
                        5 324
                    </span>
                    <span>
                        <Image
                            width={20}
                            height={20}
                            src={donateIcon}
                            alt="like"
                        />
                        5 324
                    </span>
                </div>

                <div className={styles.bottom_opacity_content}>
                    <div className={styles.player_controller_bottom_volume_row}>
                        <Image
                            src={stop ? stopIcon : playIcon}
                            width={25}
                            height={stop ? 18 : 22}
                            alt="pause"
                            onClick={togglePlay}
                        />
                        <div className={styles.volume_progress}>
                            <Image
                                src={muted ? muteIcon : volumeIcon}
                                height={muted ? 21 : 15}
                                alt="volume"
                                onClick={() => setMuted(!muted)}
                            />
                            <div
                                ref={volumeRef}
                                className={styles.progress}
                                onClick={(e) => {
                                    handleProgressVolume(e)
                                }}
                            >
                                <div
                                    className={styles.progress__filled}
                                    style={{ width: volumeProgress }}
                                ></div>
                            </div>
                            {getCurrentTime()}
                        </div>
                    </div>

                    <div className={styles.bottom_right}>
                        <p>{getDurationTime()}</p>
                        <div>
                            <Image src={subtitleIcon} alt="subtitle" />
                        </div>
                        <div>
                            <Image
                                src={settingsIcon}
                                alt="settings"
                                onClick={() =>
                                    setToggleSettings(!toggleSettings)
                                }
                            />
                        </div>
                        <Image
                            src={fullIcon}
                            alt="full screen"
                            onClick={handleFullScreen}
                        />
                    </div>
                </div>

                <div
                    className={styles.progress}
                    onMouseMove={(e) => isMouseDown && scrub(e)}
                    onClick={(e) => {
                        scrub(e)
                        handleProgress()
                    }}
                >
                    <div
                        className={styles.progress__filled}
                        style={{ width: progress }}
                    ></div>
                </div>
            </div>

            <div
                className={styles.settings_menu}
                style={{ display: !toggleSettings ? 'none' : '' }}
            >
                <span>
                    <p>Subtitles</p>
                    <h6>Off</h6>
                </span>
                <span>
                    <p>Video speed</p>
                    <h6>1x</h6>
                </span>
                <span>
                    <p>Video quality</p>
                    <h6>Auto (480p)</h6>
                </span>
            </div>

            {stop && (
                <div className={styles.pause_center}>
                    <Image width={30} height={30} src={stopIcon} alt="pause" />
                </div>
            )}
        </div>
    )
}

export default VideoPlayer
