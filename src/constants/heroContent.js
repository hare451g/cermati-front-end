// background
import backgroundImg from '../assets/images/work-desk__dustin-lee.jpg';
import icon from '../assets/images/y-logo-white.png';

import auth from '../constants/auth';

const heroContent = {
  icon,
  background: backgroundImg,
  headingText: `Hello! I'm ${auth.name}`,
  subHeading: 'Consult, Design, and Develop Websites',
  descriptions: `Have something great in mind? Feel free to contact me. I'll help you to make it happen.`,
  withLink: true,
  linkLabel: `let's make contact`,
  linkTo: '/#contact',
};

export default heroContent;
