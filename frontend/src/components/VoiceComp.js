import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class VoiceComp extends React.Component{
  constructor(props){
    super(props)
    this.audioTag = React.createRef()
  }

  state = {
    playing: false
  }

  playHandler = (e) => {
    e.preventDefault()

    this.setState({
      playing: true
    }, () => this.audioTag.current.play())
  }

  stopHandler = (e) => {
    e.preventDefault()

    this.setState({
      playing: false
    }, () => {
      this.audioTag.current.pause();
      this.audioTag.current.currentTime = 0
    })
  }

  render(){
    return(
      <React.Fragment >
        { this.state.playing ?
          <Button icon='stop circle outline' content=' Stop Listening' onClick={this.stopHandler} className='voice-button'/>
          :
          <Button icon='play circle outline' content=' Listen To Voicemail' onClick={this.playHandler} className='voice-button'/> }
        <audio ref={this.audioTag} src={`http://localhost:3000/${this.props.voice}`}/>
      </React.Fragment>
    )
  }
}

export default VoiceComp
