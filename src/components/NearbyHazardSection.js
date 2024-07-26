import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { SubHeadingText } from './StyledComponent';
import styled from 'styled-components';
import {useResponsive} from '../hooks/useResponsive';

const NearbyHazardSectionWrapper = styled.div`
  background-color: #FFF3EA;
  text-align: center;
  width: 100%;
  padding-bottom:3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const NearbyHazardSection = () => {
  const {isMobile} = useResponsive();

  return(
    <NearbyHazardSectionWrapper>
      <SubHeadingText style={{textAlign:"center", width:"70%"}}>
      <b>Receive alerts</b>🔔 on nearby <b>hazards</b> and report issues to <b>stay safe</b>.
      </SubHeadingText>
      <StaticImage 
        src="../images/FeaturesOrganization/HightlightedPhoneView.png"
        alt="Nearby Hazard" 
        placeholder="blurred"
        layout="fixed"
        style={{width:isMobile?"363px": "1368px", height:isMobile?"278px": "1032px", margin:"2rem" }}
      />
    </NearbyHazardSectionWrapper>
  )
}

export default NearbyHazardSection;
