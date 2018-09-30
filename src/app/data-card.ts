enum SocialNetwork {
  Facebook = 'fb',
  Twitter = 'twitter',
  Linkedin = 'linkedin'
}

export interface DataCard {
  img: string;
  title: string;
  exclusive?: boolean;
  hidden?: boolean;
  status?: string;
  social: {
    [key in SocialNetwork]: string;
  };
  description?: string;
  topic?: string;
  bio?: string;
}
