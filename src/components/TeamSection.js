import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// Import images statically
const teamMembers = [
  {
    name: "Sandeep Guggila",
    position: "PM/Developer",
    description: "Sandeep Guggila is a versatile developer with expertise in project management and full-stack development.",
    image: <StaticImage src="../images/sandeep.png" alt="Sandeep Guggila" placeholder="blurred" layout="fixed" width={150} height={200} />,
  },
  {
    name: "Bryan Caldeira",
    position: "Developer Lead",
    description: "Bryan Caldeira leads development efforts with a strong background in full-stack development.",
    image: <StaticImage src="../images/bryan.png" alt="Bryan Caldeira" placeholder="blurred" layout="fixed" width={150} height={200} />,
  },
  {
    name: "Karthik Rhaja",
    position: "Frontend Developer",
    description: "Karthik Rhaja specializes in creating engaging and responsive frontend interfaces.",
    image: <StaticImage src="../images/karthik.png" alt="Karthik Rhaja" placeholder="blurred" layout="fixed" width={150} height={200} />,
  },
  {
    name: "Nandan Nishad",
    position: "Full Stack Developer",
    description: "Nandan Nishad is proficient in both frontend and backend technologies, delivering comprehensive solutions.",
    image: <StaticImage src="../images/nandan.png" alt="Nandan Nishad" placeholder="blurred" layout="fixed" width={150} height={200} />,
  },
  {
    name: "Simrandeep Kaur",
    position: "Frontend Developer",
    description: "Simrandeep Kaur focuses on building user-friendly and visually appealing web interfaces.",
    image: <StaticImage src="../images/simran.png" alt="Simrandeep Kaur" placeholder="blurred" layout="fixed" width={150} height={200} />,
  },
  {
    name: "Nikhil Kanda",
    position: "Lead Designer",
    description: "Nikhil Kanda leads product design with a keen eye for user experience and design aesthetics.",
    image: <StaticImage src="../images/nikhil.png" alt="Nikhil Kanda" placeholder="blurred" layout="fixed" width={150} height={200} />,
  },
  {
    name: "Palak Goyal",
    position: "Product Designer",
    description: "Palak Goyal works on designing products that are both functional and visually appealing.",
    image: <StaticImage src="../images/palak.png" alt="Palak Goyal" placeholder="blurred" layout="fixed" width={150} height={200} />,
  },
  {
    name: "Rahul Kota",
    position: "Product Designer",
    description: "Rahul Kota specializes in crafting user-centered designs that enhance the overall user experience.",
    image: <StaticImage src="../images/rahul.png" alt="Rahul Kota" placeholder="blurred" layout="fixed" width={150} height={200} />,
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
  color:#FFDABF;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;    


const TeamSubHeading = styled.h3`
  font-size: 15px;
  color:#FFDABF;
  text-align: center;
  


  @media (max-width: 768px) {
    font-size: 18px;
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
  margin: 10px 0;
  font-size: 0.8em;
`;

const TeamMemberPosition = styled.p`
  font-style: italic;
  color: #bdbdbd;
`;

const TeamSection = () => {
  return (
    <SectionWrapper>
      <TeamSectionWrapper>
        <TeamHeading>Talents Behind AlertMe</TeamHeading>
        {/* <TeamSubHeading>Meet the team that created this app in just 12 weeks! From initial design to final development, we built it from scratch and can't wait to share our creation with you.</TeamSubHeading> */}
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <TeamMemberImage>
                {member.image}
              </TeamMemberImage>
              <TeamMemberName>{member.name}</TeamMemberName>
              <TeamMemberPosition>{member.position}</TeamMemberPosition>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSectionWrapper>
    </SectionWrapper>
  );
};

export default TeamSection;





