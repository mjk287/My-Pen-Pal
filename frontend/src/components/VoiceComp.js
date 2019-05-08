import React from 'react'
import { Button } from 'semantic-ui-react'

class VoiceComp extends React.Component{
  constructor(props){
    super(props)
    this.audioTag = React.createRef()
    this.beepTag = React.createRef()
    this.backgroundNoise = React.createRef()
  }

  state = {
    playing: false
  }

  playHandler = (e) => {
    e.preventDefault()

    this.beepTag.current.play()
    this.backgroundNoise.current.play()

    this.setState({
      playing: true
    }, () => setTimeout(() => this.audioTag.current.play(), 1000))
  }

  stopHandler = (e) => {
    e.preventDefault()

    this.beepTag.current.play()


    this.setState({
      playing: false
    }, () => {
      this.audioTag.current.pause()
      this.audioTag.current.currentTime = 0
      this.backgroundNoise.current.pause()
      this.backgroundNoise.current.currentTime = 0
    })
  }

  componentDidMount(){
    this.beepTag.current.crossOrigin = "anonymous"
    let audioContext = new AudioContext()
    const track = audioContext.createMediaElementSource(this.beepTag.current)
    const filterNode = audioContext.createIIRFilter([0.00020298, 0.0004059599, 0.00020298], [1.0126964558, -1.9991880801, 0.9873035442])
    track.connect(filterNode).connect(audioContext.destination)

    this.audioTag.current.crossOrigin = "anonymous"
    let audioVoiceContext = new AudioContext()
    const track2 = audioVoiceContext.createMediaElementSource(this.audioTag.current)
    const filterNode2 = audioVoiceContext.createIIRFilter([0.0050662636, 0.0101325272, 0.0050662636], [1.0332762845, -1.9897349456, 0.9667237155])
    track2.connect(filterNode2).connect(audioVoiceContext.destination)

    // const gainNode = audioContext.createGain()
    // track.connect(gainNode).connect(audioContext.destination)
    //
    // gainNode.gain.value = 0.1

    this.backgroundNoise.current.crossOrigin = "anonymous"
    let audioNoiseContext = new AudioContext()
    const track3 = audioNoiseContext.createMediaElementSource(this.backgroundNoise.current)
    const gainNode = audioNoiseContext.createGain()
    gainNode.gain.value = 0.02
    track3.connect(gainNode).connect(audioNoiseContext.destination)

  }

  render(){
    return(
      <React.Fragment >
        { this.state.playing ?
          <Button icon='stop circle outline' content=' Stop Listening' onClick={this.stopHandler} className='voice-button'/>
          :
          <Button icon='play circle outline' content=' Listen To Voicemail' onClick={this.playHandler} className='voice-button'/> }
        <audio ref={this.audioTag} src={`http://localhost:3000/${this.props.voice}`}/>
        <audio ref={this.beepTag} src={require('../assets/beep.mp3')}/>
        <audio ref={this.backgroundNoise} src={require('../assets/voice-recorder-background-noise.mp3')} />
      </React.Fragment>
    )
  }
}

export default VoiceComp
