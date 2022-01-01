import styled from "styled-components"
import tw from "twin.macro"
import CarLogoImg from "../../../assets/images/car-logo.png"

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
  `}

  img {
    width: auto;
    height: 100%;
  }
`

const LogoText = styled.div`
  ${tw`
    m-1
    text-xl
    md:text-2xl
    font-bold
    text-black
  `}
`
export const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="Logo" />
      </Image>
      <LogoText>yourCar.</LogoText>
    </LogoContainer>
  )
}
