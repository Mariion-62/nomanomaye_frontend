import styled from 'styled-components';

const SAccordion = styled.div`
  button.cubeTitle {
    background-color: none;
    position: relative;
    opacity: 1;
    background-image: url(${(props) => props.arrow});
    background-size: 16px 16px;
    background-position: right 28px center;
    background-repeat: no-repeat;
    background-color: white;
    background-color: none;
    border: none;
    width: 100%;
    text-align: left;
    padding-left: 30px;
    height: 4rem;

    h3 {
      font-size: 1.3rem;
      text-align: start;
    }
  }
  .cubeTitle {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 2px;
    overflow: hidden;
  }

  .content {
    visibility: hidden;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.1s ease-in;
  }

  .active .content {
    visibility: visible;
    height: auto;
    overflow: visible;
    opacity: 1;
    transition: all 0.4s ease-in;
    font-weight: 500;
  }

  .content2 {
    visibility: hidden;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.4s ease-in;
  }

  .active .content2 {
    visibility: visible;
    height: auto;
    overflow: visible;
    opacity: 1;
    font-family: 'Open Sans', sans-serif;
    transition: all 0.4s ease-in;
    font-weight: 500;
  }

  //Stylish the arrow later
  .cubeTitle:before {
    content: '';
    position: absolute;
  }

  .active .cubeTitle::before {
    top: 80%;
    left: -40%;
  }
`;

export default SAccordion;
