import React from "react";
import { Value } from "slate";

import wordcount from 'wordcount';
import Editor from "./RichTextEditor";
import io from "socket.io-client";

import { debounce } from "lodash";

class Body extends React.Component {
  state = {
    value: null
  };

  componentWillMount() {
    console.log(
      "connecting to ",
      "http://localhost:5000/?id=" + this.props.workId
    );
    this.socket = io.connect("http://localhost:5000/?id=" + this.props.workId);
    this.getData();
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  setSlateData(data) {
    this.setState({ value: Value.fromJSON(JSON.parse(data)) });
  }

  getData() {
    this.socket.on("getdata", data => {
      console.log(data);
      if (data.token === this.props.workId) {
        this.setSlateData(data.data);
      }
    });
  }
  /** Refer to https://docs.slatejs.org/slate-react/editor#onchange  */
  onChange = ({ value }) => {
    this.setState({ value: value });
    this.props.saving(this.props.context);
    this.calcWordCountAndWriteData(value);
  };

  calcWordCountAndWriteData = debounce(this.writeDataAndUpdateWordCount, 500);

  writeDataAndUpdateWordCount(value) {
    this.writeNewData(JSON.stringify(value.toJSON()));
    this.props.setWordCount(wordcount(value.document.getText()));
  }

  writeNewData(val) {
    this.socket.emit("senddata", val, this.setNavbarToSavedIfSuccessful);
  }

  setNavbarToSavedIfSuccessful = success => {
    console.log(success);
    if (success) {
      this.props.saved();
      console.log("data written successfully");
    }
  };

  render() {
    const { value } = this.state;
    if (value) {
      return (
        <Editor
          value={value}
          onChange={this.onChange}
          placeholder="Write your assignment..."
        />
      );
    } else {
      return <div />;
    }
  }
}

export default Body;
