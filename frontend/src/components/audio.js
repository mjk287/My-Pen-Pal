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

    // gainNode.gain.value = 0.1

    const filterNode = audioContext.createIIRFilter([0.00020298, 0.0004059599, 0.00020298], [1.0126964558, -1.9991880801, 0.9873035442])
    track.connect(filterNode).connect(audioContext.destination)

    //     let lowPassCoefs = [
    // 	{
    // 		frequency: 200,
    // 		feedforward: [0.00020298, 0.0004059599, 0.00020298],
    // 		feedback: [1.0126964558, -1.9991880801, 0.9873035442]
    // 	},
    // 	{
    // 		frequency: 500,
    // 		feedforward: [0.0012681742, 0.0025363483, 0.0012681742],
    // 		feedback: [1.0317185917, -1.9949273033, 0.9682814083]
    // 	},
    // 	{
    // 		frequency: 1000,
    // 		feedforward: [0.0050662636, 0.0101325272, 0.0050662636],
    // 		feedback: [1.0632762845, -1.9797349456, 0.9367237155]
    // 	},
    // 	{
    // 		frequency: 5000,
    // 		feedforward: [0.1215955842, 0.2431911684, 0.1215955842],
    // 		feedback: [1.2912769759, -1.5136176632, 0.7087230241]
    // 	}
    // ]
  }

  render(){
    return(
      <React.Fragment>
        <audio src={`http://localhost:3000${this.props.currentUser.my_penpal.song}`} autoPlay ref={this.audioTag}></audio>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AudioComp)
