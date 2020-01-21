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

const UserNameInput = {
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

const EmailInput = {
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

const SelectInput = {
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

const PasswordInput = {
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
  UserNameInput,
  EmailInput,
  SelectInput,
  PasswordInput
]

export {
  INPUT_PROPS
};