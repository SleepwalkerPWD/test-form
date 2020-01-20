//Все инпуты
import { 
  UserIconStyled,
  MailIconStyled,
  DownIconStyled,
  EyeIconStyled,  
  EyeClosedIconStyled,
  DoneIconStyled,
  ErrorIconStyled,
  DoneGrayIconStyled
} from '../FormComponent/styled';

const UserInput = {
  id: 1,
  title: 'Name',
  icon: UserIconStyled,
  success: DoneIconStyled,
  error: ErrorIconStyled,
  text: 'ex. John Oliver',
  type: 'text',
  titleFor: 'text',
  name: 'userName',
};

const MailInput = {
  id: 2,
  title: 'Email',
  icon: MailIconStyled,
  success: DoneIconStyled,
  error: ErrorIconStyled,
  text: 'you@example.com',
  type: 'email',
  titleFor: 'email',
  name: 'email'
};

const DownInput = {
  id: 3,
  title: 'Country',
  icon: DownIconStyled,
  success: DoneIconStyled,
  error: ErrorIconStyled,
  text: 'Country of your residence',
  type: 'text',
  titleFor: 'text',
  name: 'country'
};

const EyeInput = {
  id: 4,
  title: 'Password',
  icon: EyeClosedIconStyled,
  success: DoneIconStyled,
  error: ErrorIconStyled,
  eyeOpen: EyeIconStyled,
  doneGray: DoneGrayIconStyled,
  text: 'Create password',
  type: 'password',
  titleFor: 'password',
  name: 'password'
};

const INPUT_PROPS = [
  UserInput,
  MailInput,
  DownInput,
  EyeInput
]

export {
  INPUT_PROPS
};