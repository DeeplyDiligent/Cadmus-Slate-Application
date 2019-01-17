import React from "react";
import { Value } from "slate";

import Editor from "./RichTextEditor";
import notesJSON from "../utils/notes.json";

class Notes extends React.Component {
  state = {
    value: Value.fromJSON(notesJSON)
  };

  /** Refer to https://docs.slatejs.org/slate-react/editor#onchange  */
  onChange = ({ value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Editor
        value={value}
        onChange={this.onChange}
        placeholder="Jot down your notes..."
      />
    );
  }
}

export default Notes;
