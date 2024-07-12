import styled from 'styled-components';
import imgProduct1 from '../../assets/corte1.png';
import imgProduct2 from '../../assets/corte2.png';
import imgProduct3 from '../../assets/corte3.png';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = styled.section`

    background-color: var(--white-normal);
    color: var(--black-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 54px 14px;

`;

const ServicesContent = styled.div`

    max-width: 1440px;
    margin: 0 auto;
    padding: 0 8px;

    h2{
      text-transform: uppercase;
      text-align: center;
      font-size: 38px;
      margin-bottom: 14px;
    }
    
    p{
      line-height: 150%;
      margin-bottom: 14px;
      text-align: center;
      max-width: 780px;
    }

`;

const ServicesContainer = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0 44px 34px 44px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`;

const Product = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--white-normal);
    border-radius: 8px;
    box-shadow: 0px -1px 17px -4px rgba(0,0,0, 0.45);

    overflow: hidden;

    img{
      width: 100%;
      max-width: 354px;
      transition: transform 0.25s;

      &:hover{
        transform: scale(1.2);
        z-index: 1;
      }

      @media screen and (max-width: 768px){
        max-width: 740px;
      }

    }

`;

const ProductInfo = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 14px;
    background-color: var(--white-normal);
    z-index: 3;

    button{
      color: var(--white-normal);
      background-color: var(--red-normal);
      padding: 4px 8px;
      border-radius: 4px;
      border: 0;
      cursor: default;
    }

`;

function Services() {
  
  useEffect(() => {
    AOS.init();
  }, []);

    return (
      <ServicesSection>

        <ServicesContent>
          <h2>Serviços</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor imperdiet libero, sed iaculis ipsum. Maecenas dapibus nisi neque, eu varius dui sagittis sit amet.</p>
        </ServicesContent>

        <ServicesContainer>

          <Product data-aos="fade-up" data-aos-delay="300">

            <img 
              src={imgProduct1}
              alt="Corte normal" 
            />

            <ProductInfo>
              <strong>Corte normal</strong>
              <button>
                R$ 45,00
              </button>
            </ProductInfo>

          </Product>

          <Product data-aos="fade-up" data-aos-delay="400">

            <img 
              src={imgProduct2}
              alt="Barba completa" 
            />

            <ProductInfo>
              <strong>Barba completa</strong>
              <button>
                R$ 35,00
              </button>
            </ProductInfo>

          </Product>

          <Product data-aos="fade-up" data-aos-delay="550">

            <img 
              src={imgProduct3}
              alt="Corte e barba" 
            />

            <ProductInfo>
              <strong>Corte e barba</strong>
              <button>
                R$ 80,00
              </button>
            </ProductInfo>

          </Product>
          
        </ServicesContainer>

      </ServicesSection>
    )
  }
  
  export default Services
  