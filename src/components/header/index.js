import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Group,
  Link,
  Text,
  Background,
  Container,
  Logo,
  Feature,
  FeatureCallOut,
  ButtonLink,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Picture,
  Dropdown,
  Profile,
  Inner,
  Close,
  Overlay,
} from './styles/header'

const HeaderContext = createContext()

export default function Header({bg = true, children, ...restProps}) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <HeaderContext.Provider value={{showPlayer, setShowPlayer}}>
      {bg ? <Background {...restProps}>{children}</Background> : children}
    </HeaderContext.Provider>
  );
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src={`/notflix/images/icons/search.png`} alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search files and series"
        active={searchActive}
      />
    </Search>
  )
}

Header.Logo = function HeaderLogo({ to, ...restProps}) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  )
}

Header.Group = function HeaderGroup({ children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Header.Text = function HeaderText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Header.Link = function HeaderLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Video = function HeaderVideo({ ...restProps }) {
  const {showPlayer, setShowPlayer} = useContext(HeaderContext);

  return showPlayer ?
    ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)}>
        <Inner>
          <video {...restProps} id="notflix-player" controls autoPlay>
            <source
              src={`/notflix/videos/joker.mp4`}
              type={`video/mp4`}
            />
          </video>
          <Close onClick={() => setShowPlayer(false)} />
        </Inner>
      </Overlay>,
      document.body
    ): null;
}

Header.PlayButton = function HeaderPlayButton({ ...restProps }) {
  const {showPlayer, setShowPlayer} = useContext(HeaderContext);

  return (
    <PlayButton onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
      Play
    </PlayButton>
  )
}

Header.Picture = function HeaderPicture({src, ...restProps}) {
  return <Picture src={`/notflix/images/users/${src}.png`} {...restProps} />
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
  return <Profile {...restProps}>{children}</Profile>
}