import React, { useState, useContext, createContext } from 'react';
import { Container, Overlay, Inner, Button, Close } from './styles/player';
import ReactDOM from 'react-dom';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
  ? ReactDOM.createPortal(
    <Overlay {...restProps} onClick={() => setShowPlayer(false)}>
      <Inner>
        <video id="notflix-player" controls autoPlay>
          <source src={process.env.PUBLIC_URL + `/videos/the-social-network.mp4`} type="video/mp4" />
        </video>
        <Close />
      </Inner>
    </Overlay>,
    document.body
  ) : null;
}

Player.Button = function PlayerButton({ ...restProps }) {
  const {showPlayer, setShowPlayer} = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>Play</Button>
}