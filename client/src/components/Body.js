import React from "react";
import { Value } from "slate";

import Editor from "./RichTextEditor";
import io from 'socket.io-client';

import { debounce } from 'lodash';

class Body extends React.Component {

  state = {
    value: null
  };

  constructor(props){
    super(props)
    console.log('connecting to ','http://localhost:5000/?id='+this.props.workId)
    this.socket = io.connect('http://localhost:5000/?id='+this.props.workId);
    this.getData();
  }

  componentWillUnmount(){
    this.socket.disconnect()
  }

  setSlateData(data){
    this.setState({value: Value.fromJSON(JSON.parse(data))})
  }

  getData(){
    this.socket.on('getdata', data  => {
      console.log(data)
      if (data.token === this.props.workId){
        this.setSlateData(data.data)
      }
    });
  }
  /** Refer to https://docs.slatejs.org/slate-react/editor#onchange  */
  onChange = ({ value }) => {
    this.setState({ value: value });
    this.props.saving(this.props.context)
    var context = this;
    this.calcWordCountAndWriteData(context,value);
  };

  calcWordCountAndWriteData = debounce(
    function (context, value) {
      context.writeNewData(JSON.stringify(value.toJSON()));
      context.props.setWordCount(value.document.getText().split(' ').length, context.props.context);              
    }, 500)
  

  writeNewData(val){
    // console.log(this.props.context)
    var context = this;
    this.socket.emit('senddata', val, function(success){
      if(success){
        context.props.saved(context.props.context)
        console.log('data written successfully')
      }
    });
  }

  render() {
    const { value } = this.state;
    if(value){
      return (
        <Editor
          value={value}
          onChange={this.onChange}
          placeholder="Write your assignment..."
        />
      );
    } else {
      return(<div></div>)
    }
  }
}

export default Body;
