import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import imgLogoBarbearia from '../../assets/logo.svg'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 54px 0;
    gap: 24px;
    color: var(--white-normal);

    p{
      text-align: center;
    }
`;

const FooterIcons = styled.div`
    display: flex;
    gap: 8px;
    color: var(--white-normal);
`;

const InstagramIcon = styled(FaInstagram)`
    
    font-size: 2.5em;
    color: var(--white-normal);
    
    &:hover {
      color: var(--red-light);
    }

    @media screen and (max-width: 768px){
               
    }

`;

const FacebookIcon = styled(FaFacebook)`
    
    font-size: 2.5em;
    color: var(--white-normal);
    
    &:hover {
      color: var(--red-light);
    }


`;

const TiktokIcon = styled(FaTiktok)`
    
    font-size: 2.5em;
    color: var(--white-normal);
    
    &:hover {
      color: var(--red-light);
    }

`;

function Footer() {
 
    return (
      <FooterContainer>

        <FooterIcons>
            <a href="#">
              <InstagramIcon />
            </a>

            <a href="#">
              <FacebookIcon/>
            </a>

            <a href="#">
              <TiktokIcon/>
            </a>
        </FooterIcons>

        <div>
          <img 
            src={imgLogoBarbearia} 
            alt="Logo barbearia" 
          />
        </div>

        <p>Copyright 2023 | Dev Barbearia - Todos os direitos reservados.</p>
        
      </FooterContainer>    
  
    )
  }
  
  export default Footer
  