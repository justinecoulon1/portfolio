export type ResumeExperienceInfo = {
  resumeExperienceKey: string;
  startDate: string;
  endDate: string;
};

export const bxFormationTraining: ResumeExperienceInfo = {
  resumeExperienceKey: 'bx-formation-training',
  startDate: '10-24',
  endDate: '04-25',
};

export const udemyTraining: ResumeExperienceInfo = {
  resumeExperienceKey: 'udemy-training',
  startDate: '11-23',
  endDate: '07-24',
};

export const erasmus: ResumeExperienceInfo = {
  resumeExperienceKey: 'erasmus',
  startDate: '01-21',
  endDate: '06-21',
};

export const translationMaster: ResumeExperienceInfo = {
  resumeExperienceKey: 'translation-master',
  startDate: '2017',
  endDate: '2023',
};

export const resumeExperiences: ResumeExperienceInfo[] = [
  bxFormationTraining,
  udemyTraining,
  erasmus,
  translationMaster,
];
