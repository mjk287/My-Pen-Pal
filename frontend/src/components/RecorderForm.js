import React from 'react'
import { Segment, Button, Grid, Menu, Icon, Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

class RecorderForm extends React.Component {
  constructor(props){
    super(props)

    this.audioTag = React.createRef()
    this.previewTag = React.createRef()
  }


  state = {
    post: {
      title: '',
      voice: null,
      user_id: this.props.currentUser.id
    },
    preview: '',
    recording: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clickRecordHandler = (e) => {
    e.preventDefault()

    this.chunks = [];

    this.mediaRecorder.start(10)

    this.setState({
      recording: true
    })
  }

  clickStopHandler = (e) => {
    e.preventDefault()

    this.mediaRecorder.stop();
    this.setState({
      recording: false
    }, () => this.saveAudio());
  }

  saveAudio = () => {
    const blob = new Blob(this.chunks, {type: 'audio/*'});
    // generate video url from blob
    const audioURL = window.URL.createObjectURL(blob);
    // append videoURL to list of saved videos for rendering
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        voice: blob
      },
      preview: audioURL
    });
  }

  previewHandler = (e) => {
    e.preventDefault()

    this.previewTag.current.src = this.state.preview
    this.previewTag.current.play()
  }

  async componentDidMount(){
    const stream = await navigator.mediaDevices.getUserMedia({audio: true})

    this.audioTag.current.srcObject = stream;
    this.audioTag.current.play();

    this.mediaRecorder = new MediaRecorder(stream);

    this.chunks = [];

    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    }
  }

  render(){
    return(
      <Segment id='post-form-segment'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <h1 className='post-form-text'>Make a Post!</h1>
            </Grid.Column>
            <Grid.Column width={4}>
              <Menu icon borderless fluid widths={3} className='post-form-types'>
                <Menu.Item>
                  <Icon name='image outline' size='large' onClick={(e) => this.props.handleTypeChange('pic')}/>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='write square' size='large' onClick={(e) => this.props.handleTypeChange('text')}/>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='file audio' size='large' onClick={(e) => this.props.handleTypeChange('voice')}/>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form>
          <Grid.Row>
            <Input label='Title:' type='text' name='title' value={this.state.title} onChange={this.handleChange} className='input-field-margin'/>
          </Grid.Row>
          <Grid.Row>
            {this.state.recording ?
            <Button icon='microphone slash' content=' Stop Recording' onClick={this.clickStopHandler}/>
            :
            <Button icon='microphone' onClick={this.clickRecordHandler} content=' Start Recording'/>}
            <Button icon='play circle outline' content=' Play Preview' onClick={this.previewHandler}/>
            <audio ref={this.audioTag}></audio>
            <audio ref={this.previewTag}></audio>
          </Grid.Row>
        </Form>
      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(RecorderForm)
