import styled from "styled-components";

const VisitContainer = styled.div`

    background-color: var(--white-normal);
    color: var(--black-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 54px 14px;;

`;

function Visit() {
 
    return (
      <section>
        <VisitContainer>
          <h2>Venha conhecer</h2>
        </VisitContainer>
          <iframe
            width='100%'
            height= '450px'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.9098242661944!2d-49.40105712383339!3d-20.835347567140218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb2f66a871335%3A0x10c83b87a725573c!2sRiopreto%20Shopping%20Center!5e0!3m2!1spt-BR!2sbr!4v1720734025528!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
      </section>
      
      
    )
  }
  
  export default Visit
  