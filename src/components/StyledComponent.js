import styled from 'styled-components';

// *********************** All buttons ***********************

export const WhiteButton = styled.button`
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 30px;
  margin: 20px;
  text-align: center;
  border: none;
  background: #FFFFFF;
  position: relative;
  overflow: hidden;
  color: transparent; /* Make text transparent */
  z-index: 0;
  white-space: nowrap;
  cursor:none;

  &::before {
    content: attr(data-text); 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(90deg, #ff2e2e 0%, #ffa115 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    z-index: 1;
    pointer-events: none;
  }

`;

export const BrownButton = styled.button`
  background: #2B1200;
  color:#FFFFFF;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  margin: 0;
  text-align: center;
  border: none;
  cursor: pointer;


  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: none;
  }

`;
export const BrownButton2 = styled.button`
  background: #2B1200;
  color:#FFFFFF;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  margin: 10px;
  text-align: center;
  border: none;
  cursor: pointer;


  &:hover {
    opacity: 0.8;
  }

`;

export const YellowButton = styled.button`
  background: #FF7714;
  color: #2B1200;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  margin: 10px;
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


// ******************** All Headings ********************

export const HeadingText = styled.h1`
  font-size: 110px;
  font-weight: "bold";
  text-align: center;
  color: #2B1200;
  font-family: 'Public Sans', sans-serif;


  @media (max-width: 768px) {
    font-size: 50px;
  }
  
`;


export const SubHeadingText = styled.h2`
  font-size: 50px;
  color:'#2B1200';
  font-family: 'Public Sans', sans-serif;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;    
  



// *********************** Team Section ***********************
export const TeamHeading = styled.h2`
  font-size: 64px;
  color:#FFDABF;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;    


export const TeamSubHeading = styled.h3`
  font-size: 24px;
  color:#FFDABF;
  text-align: center;


  @media (max-width: 768px) {
    font-size: 18px;
  }
  
`;

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  img {
    border-radius: 50%;
    width: 299px !important;
    height: 372px !important;
    margin-bottom: 10px;
    object-fit: cover;
  }

  h3 {
    margin: 10px 0 5px;
    font-size: 30px;
    color: white;
  }

  p {
    font-size: 20px;
    color: #FFFFFF;
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 10px;
    border: 1px solid #FFDABF;
  }

  .social-links img {
    width: 38px !important;
    height: 38px !important;
    border-radius: 10%; /* Ensures the inner images also have border-radius */
  }
`;




// *********************** Contact Section ***********************


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 10px;
`;


export const FormLabel=styled.label`
  font-size: 20px;
  color: #FFDABF;
  margin: 10px;
`;  


export const FormInput=styled.input`
  input {
    font-size: 20px;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #461D00;
  }
`;

export const FormTextarea=styled.textarea`
    font-size: 20px;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #461D00;
    resize: vertical;
`;




  


