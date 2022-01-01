import styled from "styled-components"
import tw from "twin.macro"
import { Logo } from "../logo"

const NavBarContainer = styled.div`
  min-height: 68px;

  ${tw`
    flex 
    flex-row 
    items-center
    justify-between
    w-full
    max-w-2xl
    lg:pl-12
    lg:pr-12
  `}
`
const LogoContainer = styled.div``

export const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <h1>NavBar</h1>
    </NavBarContainer>
  )
}
