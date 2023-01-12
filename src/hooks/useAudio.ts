export default function (url: string) {
  const audio = new Audio(url)

  const play = () => {
    audio.play()
  }

  const stop = () => {
    audio.pause()
    audio.currentTime = 0
  }

  return {
    play,
    stop
  }
}
