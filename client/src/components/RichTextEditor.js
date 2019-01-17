import React from "react";
import styled from "styled-components";
import { Editor } from "slate-react";
import { withProps } from "recompose";

const Paragraph = styled.p`
  margin: 1em auto;
  max-width: 800px;
  min-width: 360px;
`;

const HeadingOne = styled.h1`
  margin: 1em auto;
  max-width: 800px;
  min-width: 360px;
`;

const HeadingTwo = styled.h2`
  margin: 1em auto;
  max-width: 800px;
  min-width: 360px;
`;

/** Semi-Rich text renderer for Slate */
const renderNode = props => {
  const { attributes, children, node } = props;

  switch (node.type) {
    case "heading-one":
      return <HeadingOne {...attributes}>{children}</HeadingOne>;
    case "heading-two":
      return <HeadingTwo {...attributes}>{children}</HeadingTwo>;
    default:
      return <Paragraph {...attributes}>{children}</Paragraph>;
  }
};

const renderMark = props => {
  const { children, mark, attributes } = props;

  switch (mark.type) {
    case "bold":
      return <strong {...attributes}>{children}</strong>;
    case "code":
      return <code {...attributes}>{children}</code>;
    case "italic":
      return <em {...attributes}>{children}</em>;
    case "underlined":
      return <u {...attributes}>{children}</u>;
    default:
      return undefined;
  }
};

/** Inject default configuration over a simple Slate Editor compoenent */
const enhance = withProps({
  spellCheck: true,
  autoFocus: true,
  renderNode,
  renderMark
});

const StyledEditor = styled(Editor)`
  width: 100%;
  margin: auto 0;
`;

export default enhance(StyledEditor);
