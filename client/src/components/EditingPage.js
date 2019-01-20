import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withState } from "recompose";

import { Shelf, ShelfToolbar, Desk, Primary } from "../styles/layout";
import { TabBar, TabBarItem } from "./TabBar";

import Body from "./Body";
import Notes from "./Notes";

const Count = styled.div`
  padding: 0px 18px;
`;

const Actions = styled.div`
  display: flex;
`;

/** Component for the main editing page. */
class EditingPage extends React.Component {
  state = { saved: false, wordCount: 0 };
  saving = () => {
    this.setState({ saved: false });
  };
  saved = () => {
    this.setState({ saved: true });
  };
  setWordCount = count => {
    this.setState({ wordCount: count });
  };
  render() {
    const { tab, changeTab } = this.props;
    return (
      <React.Fragment>
        <Shelf>
          <ShelfToolbar>
            <TabBar>
              <TabBarItem
                selected={tab === "body"}
                onClick={() => changeTab("body")}
              >
                Body
              </TabBarItem>
              <TabBarItem
                selected={tab === "notes"}
                onClick={() => changeTab("notes")}
              >
                Notes
              </TabBarItem>
            </TabBar>
            <Actions>
              <em>
                {this.state.saved ? "Saved Successfully" : "Saving Now..."}
              </em>
              <Count>
                <strong>Word Count: {this.state.wordCount}</strong>
              </Count>
            </Actions>
          </ShelfToolbar>
        </Shelf>
        <Desk>
          <Primary>
            {tab === "body" ? (
              <Body
                saving={this.saving}
                saved={this.saved}
                setWordCount={this.setWordCount}
                workId={this.props.match.params.workdId}
              />
            ) : (
              <Notes />
            )}
          </Primary>
        </Desk>
      </React.Fragment>
    );
  }
}

EditingPage.propTypes = {
  /**
   * Which tab is being displayed. Can take up values: "body" |
   * "notes"
   */
  tab: PropTypes.string.isRequired,
  /* Callback to change the tab */
  changeTab: PropTypes.func.isRequired
};

/** Holds state for the current tab. */
const enhance = withState("tab", "changeTab", "body");

export default enhance(EditingPage);
