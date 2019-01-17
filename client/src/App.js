import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";

import EditingPage from "./components/EditingPage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  h1 {
    margin: 18px 0px;
  }
  p {
    margin: 18px 0px;
  }
`;

function NoMatch() {
  return (
    <Container>
      <Message>
        <h1>404: Route not found</h1>
        <p>
          There is nothing loaded on this route. <br />
          If this is the first time you are running the task, you should go to
          <br />
          <br />
          <Link to="/work/15f16959-3507-4786-983f-3b6ed82486a8/editing">
            /work/15f16959-3507-4786-983f-3b6ed82486a8/editing
          </Link>
          <br />
          <br />
          The UUID <code>15f16959-3507-4786-983f-3b6ed82486a8</code>
          is just a random primary key.
        </p>
      </Message>
    </Container>
  );
}

/**
 * Main top-level component which should render the main routes in
 * the student client.
 *
 * Currently only renders the default `/:workId/editing` route since this
 * client isn't setup with a submission workflow.
 */
function App() {
  return (
    <Switch>
      <Route path="/work/:workdId/editing" component={EditingPage} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;
