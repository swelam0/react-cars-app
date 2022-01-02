import { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Logo } from "../logo"
import { NavItems } from "./NavItems"
import { SCREENS } from "../responsive"
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavBarContainer = styled.div`
  min-height: 68px;

  ${tw`
    flex 
    flex-row 
    items-center
    justify-between
    w-full
    max-w-screen-2xl
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `}
`
const LogoContainer = styled.div``
const BarsButton = styled.div`
  ${tw`
    text-lg
    cursor-pointer
  `}
`

export const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
  const [showNav, setShowNav] = useState(false)

  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      {isMobile ? (
        <BarsButton onClick={() => setShowNav(!showNav)}>
          <FontAwesomeIcon icon={faBars} />
        </BarsButton>
      ) : (
        ""
      )}

      <NavItems show={showNav} />
    </NavBarContainer>
  )
}
