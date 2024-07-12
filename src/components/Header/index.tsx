import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import bgImage from '../../assets/bg.svg';
import { keyframes } from 'styled-components';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const translateY = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(-8px) scale(1.1);
  }
`;

const scaleButton = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.07);
  }
  
`;

const BgHome = styled.div`
    position: relative;

    position: relative;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(6, 18, 30, 0.1), #06121e), url(${bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0;
    opacity: 0.9;
  
`;

const HeaderContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1440px;
    margin: 0 auto;
    padding: 0 8px;

    @media screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

`;

const HeaderIcons = styled.div`

    display: flex;
    gap: 14px;
    background-image: none;

`;

const InstagramIcon = styled(FaInstagram)`
    
    font-size: 3em;
    color: var(--white-normal);
    
    &:hover {
      color: var(--red-light);
      transition: color 0.9s;
      animation: ${translateY} 0.8s infinite alternate;
    }

    @media screen and (max-width: 768px){
        margin-top: 16px;        
    }

`;

const FacebookIcon = styled(FaFacebook)`
    
    font-size: 3em;
    color: var(--white-normal);
    
    &:hover {
      color: var(--red-light);
      transition: color 0.9s;
      animation: ${translateY} 0.8s infinite alternate;
    }

    @media screen and (max-width: 768px){
        margin-top: 16px;        
    }

`;

const TiktokIcon = styled(FaTiktok)`
    
    font-size: 3em;
    color: var(--white-normal);
    
    &:hover {
      color: var(--red-light);
      transition: color 0.9s;
      animation: ${translateY} 0.8s infinite alternate;
    }

    @media screen and (max-width: 768px){
        margin-top: 16px;        
    }

`;

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 14px;

    @media screen and (max-width: 768px){
        width: 160px;
        margin-top: 46px;
    }
`;

const HeaderButton = styled.div`
    border: 1px solid var(--white-normal);
    padding: 8px 24px;
    border-radius: 4px;
    color: var(--white-normal);
    background-color: transparent;
    cursor: pointer;

    &:hover{
      border: 1px solid var(--red-light);      
      background-color: var(--red-light);
      transition: background-color 0.9s;
    }

    a{
      color: var(--white-normal);
    }

    @media screen and (max-width: 768px){
        display: none;
    }

`;

const HeroMain = styled.main`
     max-width: 1440px;
     margin: 0 auto;
     padding: 0 8px;

     color: var(--white-normal);
     height: 80vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 14px;

     h1{
        text-align: center;
        line-height: 150%;
        max-width: 940px;
        font-size: 46px;
     }

     p{
        text-align: center;
        margin: 14px 0;

     }
   
    @media screen and (max-width: 768px){

        min-height: 60vh;

        h1{
          font-size: 34px;
          padding: 0 14px;
          width: 100%;
        }

        p{
          font-size: 14px;
        }

    }

    @media screen and (max-width: 480px){

        h1{
          font-size: 24px;
        }

    }

`;

const ButtonContactContainer = styled.div`
    display: inline-block;
    margin: 14px 0;

    &:hover {
        animation: ${scaleButton} 0.8s infinite alternate;
    }
`;

const ButtonContact = styled.a`
    padding: 14px 28px;
    color: var(--white-normal);
    background-color: var(--red-normal);
    border: 0;
    font-size: 18px;
    font-weight: 600;  
`;


function Header() {

  useEffect(() => {
    AOS.init();
  }, []);

    return (
      <BgHome>
        <header>

          <HeaderContent>

              <HeaderIcons data-aos="fade-down">

                  <a href="#" >
                    <InstagramIcon/>
                  </a>

                  <a href="#">
                    <FacebookIcon/>
                  </a>

                  <a href="#">
                    <TiktokIcon/>
                  </a>

              </HeaderIcons>

              <HeaderLogo data-aos="fade-up" data-aos-delay="300">
                  <img 
                    src={logo}
                    alt="Logo da barbearia"
                    data-aos="flip-up"
                    data-aos-delay="300"
                    data-aos-duration="1500" 
                  />
              </HeaderLogo>

              <HeaderButton data-aos="fade-down">
                  <a href="https://api.whatsapp.com/send?phone=5511111111111&text=Ol%C3%A1,%20" target="_blank"  >
                    Agendar horário
                  </a>
              </HeaderButton>

          </HeaderContent>

          <HeroMain data-aos="fade-up" data-aos-delay="400">

              <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
              <p>Horário de funcionamento: 09:00 ás 19:00</p>
              
              <ButtonContactContainer>
                <ButtonContact href="https://api.whatsapp.com/send?phone=5511111111111&text=Ol%C3%A1,%20" target="_blank">
                  Agendar horário
                </ButtonContact>
              </ButtonContactContainer>

          </HeroMain>

        </header>
      </BgHome>
    )
  }
  
  export default Header;
  