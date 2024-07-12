import styled from "styled-components";
import imgAbout from '../../assets/images.svg';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = styled.section`
    background-color: var(--primary-normal);
    overflow: hidden;
    color: var(--white-normal);
`;

const AboutContent = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 34px 14px 64px 14px;
    
    div{
      flex: 1;
    }

    img{
      max-width: 570px;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
  
`;

const AboutDescription = styled.div`
    h2{
      font-size: 38px;
      margin-bottom: 24px;
    }

    p{
      margin-bottom: 14px;
      line-height: 150%;
    }
`;

function About() {

  useEffect(() => {
    AOS.init();
  }, []);

    return (
      <AboutSection>
        <AboutContent>

            <div data-aos="zoom-in" data-aos-delay="100">
              <img 
                src={imgAbout} 
                alt="Imagem sobre a barbearia" 
              />
            </div>

            <AboutDescription data-aos="zoom-out-left" data-aos-delay="250">
              <h2>Sobre</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor imperdiet libero, sed iaculis ipsum. Maecenas dapibus nisi neque, eu varius dui sagittis sit amet. Mauris nec ex nec ligula imperdiet semper. Sed mauris nisi, tempor in velit et, scelerisque ornare lacus. Ut lacinia eros vel urna tristique, nec vulputate mauris blandit. Integer iaculis, eros et varius feugiat, ante eros pellentesque mauris, nec tincidunt neque urna non diam. Integer lacinia at dolor sit amet lacinia. Mauris sit amet aliquet massa. Duis posuere volutpat eros eu malesuada.</p>
              <p>Horário de funcionamento: <strong>09:00</strong> ás <strong>19:00</strong></p>
            </AboutDescription>

        </AboutContent>
      </AboutSection>
    )
  }
  
  export default About;
  