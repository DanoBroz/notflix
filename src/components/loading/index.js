import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';
const imagePath = process.env.PUBLIC_URL + '/notflix/images/';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
        <LockBody />
        <Picture src={`${imagePath}users/${src}.png`} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}
