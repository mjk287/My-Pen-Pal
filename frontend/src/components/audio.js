import React from 'react'
import { connect } from 'react-redux'

class AudioComp extends React.Component {
  constructor(props){
    super(props)

    this.audioTag = React.createRef()
  }

  state = {
    track: {}
  }

  componentDidMount(){
    this.audioTag.current.crossOrigin = "anonymous"
    let audioContext = new AudioContext()
    const track = audioContext.createMediaElementSource(this.audioTag.current)

    // const gainNode = audioContext.createGain()
    // track.connect(gainNode).connect(audioContext.destination)
    //
    // gainNode.gain.value = 0.1

    // const filterNode = audioContext.createIIRFilter([0.000020298, 0.00004059599, 0.00020298], [1.0026964558, -1.9999880801, 0.9973035442])
    const filterNode = audioContext.createIIRFilter([0.00020298, 0.0004059599, 0.00020298], [1.0126964558, -1.9991880801, 0.9873035442])
    // [0.00020298, 0.0004059599, 0.00020298],
		// feedback: [1.0126964558, -1.9991880801, 0.9873035442]
    track.connect(filterNode).connect(audioContext.destination)
    this.audioTag.current.play()
  }

  render(){
    return(
      <React.Fragment>
        <audio src={`http://localhost:3000${this.props.currentUser.my_penpal.song}`} ref={this.audioTag}></audio>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AudioComp)
