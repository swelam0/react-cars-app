import styled from "styled-components"
import tw from "twin.macro"

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
`}
`

const NavItem = styled.li`
  ${tw`
    text-xs
    md:text-base
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    text-black
    hover: text-gray-700  
    transition
    ease-in-out
    duration-300
`}
`

export const NavItems = () => {
  return (
    <ListContainer>
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
