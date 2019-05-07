import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class VoiceComp extends React.Component{
  constructor(props){
    super(props)
    this.audioTag = React.createRef()
    this.beepTag = React.createRef()
  }

  state = {
    playing: false
  }

  playHandler = (e) => {
    e.preventDefault()
    console.log(this.beepTag.current.paused)
    this.beepTag.current.play()

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
      this.audioTag.current.pause();
      this.audioTag.current.currentTime = 0
    })
  }

  componentDidMount(){
    this.beepTag.current.crossOrigin = "anonymous"
    let audioContext = new AudioContext()
    const track = audioContext.createMediaElementSource(this.beepTag.current)
    const filterNode = audioContext.createIIRFilter([0.00020298, 0.0004059599, 0.00020298], [1.0126964558, -1.9991880801, 0.9873035442])
    track.connect(filterNode).connect(audioContext.destination)
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
      </React.Fragment>
    )
  }
}

export default VoiceComp
