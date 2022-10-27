export interface SocialLink {
  title: string;
  url: string;
  _type: string;
  _key: string;
}

export interface Skill {
  category: string;
  iconUrl: string;
  title: string;
  _id: string;
}

export interface RichText {
  _key: string;
  _type: string;
  text: string;
}

export interface AboutMe {
  iconUrl: string;
  title: string;
  text: RichText[];
}

export interface Profile {
  aboutMe: AboutMe[];
  greeting: RichText[];
  cvURL: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  skills: Skill[];
  socialLinks: SocialLink[];
}
