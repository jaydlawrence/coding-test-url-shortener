import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { useParams } from "react-router-dom";
import { Container, Loading } from './styles';
import { getLongURL } from '../../requests';

const redirect = (longUrl) => window.location.replace(longUrl);

export const RedirectPage = ({
  getURLFunction,
  redirectFunction,
}) => {
  const { stub } = useParams();
  const [error, setError] = useState();

  const getAndRedirect = async () => {
    try {
      const longUrl = await getURLFunction(stub);
      if (!longUrl) {
        throw new Error('no URL');
      } 
      redirectFunction(longUrl);
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

RedirectPage.propTypes = {
  getURLFunction: PropTypes.func,
  redirectFunction: PropTypes.func,
}

RedirectPage.defaultProps = {
  getURLFunction: getLongURL,
  redirectFunction: redirect,
}