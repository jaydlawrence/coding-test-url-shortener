import React, {useEffect, useState} from 'react';
import { Alert } from '@material-ui/lab';
import {
  useParams
} from "react-router-dom";
import {Container, Loading} from './styles';
import { getLongURL } from '../../requests';

export const RedirectPage = () => {
  const { stub } = useParams();
  const [error, setError] = useState();

  const getAndRedirect = async () => {
    try {
      const longUrl = await getLongURL(stub);
      if (!longUrl) {
        throw new Error('no URL');
      } 
      window.location.replace(longUrl);
    } catch(e) {
      setError('This short URL doesn\'t seem to work');
    }
  }

  useEffect(async () => {
    getAndRedirect();
  }, [])

  
  return (
    <Container>
      {
        !error
        && (
          <>
            <p>
              Finding long version of your URL
            </p>
            <Loading />
          </>
        )
      }
      {
        error
        && <Alert elevation={6} variant="filled" severity="error">{error}</Alert>
      }
    </Container>
  )
}