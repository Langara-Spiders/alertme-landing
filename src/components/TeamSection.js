import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { WhiteButton } from "./StyledComponent"; // Ensure this component is correctly exported and imported

// Import images statically
const teamMembers = [
  {
    name: "Sandeep Guggila",
    position: "PM/Developer",
    description: "Sandeep Guggila is a versatile developer with expertise in project management and full-stack development.",
    image: <StaticImage src="../images/sandeep.png" alt="Sandeep Guggila" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/sandeepguggila",
    linkedin: "https://www.linkedin.com/in/sandeepguggila",
    xing: "https://www.xing.com/profile/Sandeep_Guggila",
  },
  {
    name: "Bryan Caldeira",
    position: "Developer Lead",
    description: "Bryan Caldeira leads development efforts with a strong background in full-stack development.",
    image: <StaticImage src="../images/bryan.png" alt="Bryan Caldeira" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/bryancaldeira",
    linkedin: "https://www.linkedin.com/in/bryancaldeira",
    xing: "https://www.xing.com/profile/Bryan_Caldeira",
  },
  {
    name: "Karthik Rhaja",
    position: "Frontend Developer",
    description: "Karthik Rhaja specializes in creating engaging and responsive frontend interfaces.",
    image: <StaticImage src="../images/karthik.png" alt="Karthik Rhaja" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/karthikrhaja",
    linkedin: "https://www.linkedin.com/in/karthikrhaja",
    xing: "https://www.xing.com/profile/Karthik_Rhaja",
  },
  {
    name: "Nandan Nishad",
    position: "Full Stack Developer",
    description: "Nandan Nishad is proficient in both frontend and backend technologies, delivering comprehensive solutions.",
    image: <StaticImage src="../images/nandan.png" alt="Nandan Nishad" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/nandannishad",
    linkedin: "https://www.linkedin.com/in/nandannishad",
    xing: "https://www.xing.com/profile/Nandan_Nishad",
  },
  {
    name: "Simrandeep Kaur",
    position: "Frontend Developer",
    description: "Simrandeep Kaur focuses on building user-friendly and visually appealing web interfaces.",
    image: <StaticImage src="../images/simran.png" alt="Simrandeep Kaur" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/simrandkaur",
    linkedin: "https://www.linkedin.com/in/simrandkaur",
    xing: "https://www.xing.com/profile/Simrandeep_Kaur",
  },
  {
    name: "Nikhil Kanda",
    position: "Lead Designer",
    description: "Nikhil Kanda leads product design with a keen eye for user experience and design aesthetics.",
    image: <StaticImage src="../images/nikhil.png" alt="Nikhil Kanda" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/nikhilkanda",
    linkedin: "https://www.linkedin.com/in/nikhilkanda",
    xing: "https://www.xing.com/profile/Nikhil_Kanda",
  },
  {
    name: "Palak Goyal",
    position: "Product Designer",
    description: "Palak Goyal works on designing products that are both functional and visually appealing.",
    image: <StaticImage src="../images/palak.png" alt="Palak Goyal" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/palakgoyal",
    linkedin: "https://www.linkedin.com/in/palakgoyal",
    xing: "https://www.xing.com/profile/Palak_Goyal",
  },
  {
    name: "Rahul Kota",
    position: "Product Designer",
    description: "Rahul Kota specializes in crafting user-centered designs that enhance the overall user experience.",
    image: <StaticImage src="../images/rahul.png" alt="Rahul Kota" placeholder="blurred" layout="fixed" width={150} height={200} />,
    twitter: "https://twitter.com/rahulkota",
    linkedin: "https://www.linkedin.com/in/rahulkota",
    xing: "https://www.xing.com/profile/Rahul_Kota",
  },
];

const SectionWrapper = styled.section`
  background: #fcefe3;
  margin-top: 10rem;
`;

const TeamSectionWrapper = styled.section`
  background: #2B1200;
  padding: 50px;
  text-align: center;
  color: #fff;
  border-radius: 40px;
  font-family: "Arial";
`;

const TeamHeading = styled.h2`
  font-size: 64px;
  color: #FFDABF;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const TeamSubHeading = styled.h3`
  font-size: 15px;
  color: #FFDABF;
  text-align: center;
  margin: 0 auto; /* Center align if needed */
  max-width: 60%; /* Limit the width to ensure wrapping */
  overflow-wrap: break-word; /* Break words to fit the container */
  word-wrap: break-word; /* Fallback for older browsers */
  margin-top: -1.5em; /* Adjust this value to reduce space on top */
  margin-bottom: 2.5em; /* Optional: Adjust bottom margin if needed */

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 90%; /* Adjust width on smaller screens */
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMember = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #2B1200;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-icons {
    display: flex;
    gap: 15px;
    padding-bottom: 2em;
  }
`;

const TeamMemberImage = styled.div`
  width: 100%;
  max-width: 250px;
  overflow: hidden;
  border-radius: 40%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const TeamMemberName = styled.h3`
  margin: 0.7em 0;
  font-size: 0.8em;
`;

const TeamMemberPosition = styled.p`
  font-style: italic;
  color: #bdbdbd;
`;


const StyledWhiteButton = styled(WhiteButton)`
  margin-top: 3em;
  margin-bottom: 0em;
`;

const TeamSection = () => {
  return (
    <SectionWrapper>
      <TeamSectionWrapper>
        <StyledWhiteButton data-text="Our Team">Our Team</StyledWhiteButton>
        <TeamHeading>Talents Behind AlertMe</TeamHeading>
        <TeamSubHeading>Meet the team that created this app in just 12 weeks! From initial design to final development, we built it from scratch and can't wait to share our creation with you.</TeamSubHeading>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <TeamMemberImage>
                {member.image}
              </TeamMemberImage>
              <TeamMemberName>{member.name}</TeamMemberName>
              <TeamMemberPosition>{member.position}</TeamMemberPosition>
              <div className="social-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#f5f5f5" }} />
                </a>
                <a href={member.xing} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSquareXTwitter} size="lg" style={{ color: "#f5f5f5" }} />
                </a>
              </div>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSectionWrapper>
    </SectionWrapper>
  );
};


export default TeamSection;












