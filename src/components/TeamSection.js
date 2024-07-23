// src/components/TeamSection.js
import React from 'react';
import { TeamHeading, TeamMember } from './StyledComponent'

const TeamSection = () => (
  <div>
    <TeamHeading>The Team</TeamHeading>
    <TeamMember>
      <img src="./icon-144X144.png" alt="Team Member 1" />
      <h3>Team Member 1</h3>
      <p>Role</p>
    </TeamMember>
  </div>
);

export default TeamSection;

