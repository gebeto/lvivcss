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
  social: {
    [key in SocialNetwork]: string;
  };
}
