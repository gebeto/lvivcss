enum SocialNetwork {
  Facebook = 'fb',
  Twitter = 'twitter',
  Linkedin = 'linkedin'
}

export interface DataCard {
  img: string,
  title: string,
  social: {
    [key in SocialNetwork]: string;
  }
}
