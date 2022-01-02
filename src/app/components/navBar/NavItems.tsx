import styled from "styled-components"
import tw from "twin.macro"
import { useMediaQuery } from "react-responsive"
import { SCREENS } from "../responsive"
import "./index.css"

interface Props {
  show: boolean
}

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
`}
`

const NavItem = styled.li`
  ${tw`
    text-sm
    md:text-base
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    text-black
    hover: text-gray-700  
    transition
    ease-in-out
    duration-500
`}
`

export const NavItems = ({ show }:Props) => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  return (
    <ListContainer className={isMobile ? `mobVersion ${show? 'active' : ''}` : "" }>
      <NavItem>
        <a href="#!">Home</a>
      </NavItem>
      <NavItem>
        <a href="#!">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#!">Services</a>
      </NavItem>
      <NavItem>
        <a href="#!">Contact us</a>
      </NavItem>
    </ListContainer>
  )
}
