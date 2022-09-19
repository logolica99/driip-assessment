import React, { useState, createContext } from "react";

export const WorkExperienceContext = createContext();

export const WorkExperienceContextProvider = (props) => {
  const [experiences, setExperiences] = useState([1, 1, 1]);

  return (
    <WorkExperienceContext.Provider value={[experiences, setExperiences]}>
      {props.children}
    </WorkExperienceContext.Provider>
  );
};
