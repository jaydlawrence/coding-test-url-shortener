import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { isURL } from '../../utils';
import { NewURLWithCopy } from '../NewUrlWithCopy';
import { Container, Input, Loading } from './styles';
import { addURLGetStub } from '../../requests';

export const ShortenForm = () => {
  const [url, setUrl] = useState('');
  const [formError, setFormError] = useState(null);
  const [shortURL, setShortURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onChange = ({target: {value}}) => {
    setUrl(value);
    if (formError) {
      setFormError(null);
    }
  }
  const onClick = async () => {
    if (!isURL(url)) {
      setFormError("Please provide a valid URL")
      return;
    }
    setIsLoading(true)
    try {
      const stub = await addURLGetStub(url);
      if (!stub) {
        throw new Error('couldn\t get stub');
      }
      setShortURL(`${window.location.href}${stub}`);
    } catch(e) {
      formError('There was an error with creating short URL');
    }
    setIsLoading(false);
  }
  return (
    <Container>
      <p>
        Provide a URL to be shortened
      </p>
      {
        formError
      && <Alert elevation={6} variant="filled" severity="error">{formError}</Alert>
      }
      <Input id="standard-basic" label="Long Url" onChange={onChange} value={url} />
      <Button variant="contained" color="primary" onClick={onClick} disabled={!!formError || isLoading}>
        {isLoading ? 'Loading...' : 'Shorten'}
      </Button>
      {
        isLoading
        && <Loading />
      }
      {
        shortURL
        && <NewURLWithCopy value={shortURL} />
      }
    </Container>
  );
  
}