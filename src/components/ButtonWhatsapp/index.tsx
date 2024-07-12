import styled from "styled-components";
import imgBtnWhatsapp from '../../assets/whatssapp.svg';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BtnWhatsapp = styled.a`
    position: fixed;
    bottom: 14px;
    right: 24px;
    z-index: 99;

    img{
      max-width: 74px;
      transition: transform 0.4s;

      &:hover{
        transform: scale(1.1);
      }
    }

    &:hover span {
      opacity: 1;
      visibility: visible;
  }

  @media screen and (max-width: 768px){
        max-width: 64px;
    }

`;

const TooltipText = styled.span`
      visibility: hidden;
      position: absolute;
      width: 120px;
      top: 8px;
      left: -144px;
      padding: 6px;
      text-align: center;
      background-color: var(--black-normal);
      color: var(--white-normal);
      opacity: 0;
      transition: opacity 0.4s;

`;

function ButtonWhatsapp() {

  useEffect(() => {
    AOS.init();
  }, []);
 
    return (
      <BtnWhatsapp 
        href="https://api.whatsapp.com/send?phone=5511111111111&text=Ol%C3%A1,%20" 
        target="_blank"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
          <img 
            src={imgBtnWhatsapp}
            alt="Botão whatsapp" 
          />
          <TooltipText id="tooltip-text">Agende seu horário</TooltipText>
      </BtnWhatsapp>
    )
  }
  
  export default ButtonWhatsapp
  