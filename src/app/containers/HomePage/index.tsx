import styled from "styled-components"
import tw from "twin.macro"
import { NavBar } from "../../components/navBar"

const PageContainer = styled.div`
  ${tw`flex flex-col w-full h-full items-center overflow-x-hidden`}
`

export const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <h1>Home Page</h1>
    </PageContainer>
  )
}
