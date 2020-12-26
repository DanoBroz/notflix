import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo 
            to={ROUTES.HOME} 
            src="/images/misc/logo.png"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL
            })}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}