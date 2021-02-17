import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
  CopiedContainer,
  UrlContainer
} from './styles';

export const NewURLWithCopy = ({value}) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const markCopied = () => {
    setCopiedToClipboard(true);
    setTimeout(
      () => setCopiedToClipboard(false),
      5000
    );
  }
  return (
    <>
      <p>
        This is your new shortened URL:
      </p>
      <CopyToClipboard
        text={value}
        onCopy={markCopied}
      >
        <UrlContainer>{value}</UrlContainer>
      </CopyToClipboard>
      {
        copiedToClipboard
        && <CopiedContainer>Copied to clipboard</CopiedContainer>
      }
    </>
  );
};
NewURLWithCopy.propTypes = {
  value: PropTypes.string.isRequired,
}