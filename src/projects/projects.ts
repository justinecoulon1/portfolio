export type Project = {
  name: string;
  projectKey: string;
  bannerBackgroundColor: string;
  status?: string;
  githubLink: string;
  sections: string[];
};

export const almofus: Project = {
  name: 'Almofus',
  projectKey: 'almofus',
  bannerBackgroundColor: '#2b2e4a',
  githubLink: 'https://github.com/justinecoulon1/almofus',
  sections: ['general', 'database', 'key-features'],
};

export const fileShareTool: Project = {
  name: 'FileShareTool',
  projectKey: 'file-share-tool',
  bannerBackgroundColor: 'red',
  githubLink: 'https://github.com/justinecoulon1/FileShareTool',
  sections: ['general', 'database', 'key-features'],
};

export const choreMate: Project = {
  name: 'ChoreMate',
  projectKey: 'chore-mate',
  bannerBackgroundColor: 'red',
  githubLink: 'https://github.com/justinecoulon1/ChoreMateBack',
  sections: ['general', 'database', 'key-features'],
};

export const projectsList = [almofus, fileShareTool, choreMate];
