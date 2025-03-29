enum ProjectStatus {
  IN_DEVELOPMENT = 'IN_DEVELOPMENT',
  PAUSED = 'PAUSED',
  IN_PRODUCTION = 'IN_PRODUCTION',
}

export type Project = {
  name: string;
  projectKey: string;
  bannerBackgroundColor: string;
  status: ProjectStatus;
  githubLink: string;
  sections: string[];
  technologies: string[];
};

export const almofus: Project = {
  name: 'Almofus',
  projectKey: 'almofus',
  bannerBackgroundColor: '#2b2e4a',
  githubLink: 'https://github.com/justinecoulon1/almofus',
  sections: ['general', 'technologies', 'key-features'],
  technologies: ['TypeScript', 'NestJs', 'TypeORM', 'PostgreSQL', 'React.js', 'Next.js'],
  status: ProjectStatus.IN_DEVELOPMENT,
};

export const fileShareTool: Project = {
  name: 'FileShareTool',
  projectKey: 'file-share-tool',
  bannerBackgroundColor: 'gray',
  githubLink: 'https://github.com/justinecoulon1/FileShareTool',
  sections: ['general'],
  technologies: ['Java', 'Spring boot', 'Hibernate', 'PostgreSQL', 'TypeScript', 'React.js', 'Next.js'],
  status: ProjectStatus.IN_DEVELOPMENT,
};

export const choreMate: Project = {
  name: 'ChoreMate',
  projectKey: 'chore-mate',
  bannerBackgroundColor: 'lightcyan',
  githubLink: 'https://github.com/justinecoulon1/ChoreMateBack',
  sections: ['general'],
  technologies: ['JavaScript', 'Express.js', 'Sequelize', 'PostgreSQL', 'React.js'],
  status: ProjectStatus.IN_DEVELOPMENT,
};

export const projectsList = [almofus, fileShareTool, choreMate];
