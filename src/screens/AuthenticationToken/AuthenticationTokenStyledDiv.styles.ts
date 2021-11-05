import styled from 'styled-components';

import { colors } from 'styles'

const AuthenticationTokenStyledDiv = styled.div`
.react-multi-carousel-list{
  position: static;
}

.react-multi-carousel-track{
  position: relative;
}

.react-multi-carousel-dot-list{
  position: absolute;
  bottom: auto;
  margin-top: 35em;
}

.react-multi-carousel-dot button {
  background:${colors.grey[400]};
  border: none;
}

.react-multi-carousel-dot--active button {
  background:${colors.black};
}

.authentication-form-button-holder{
  position: relative;
  margin-top: 3em;
}




`
export default AuthenticationTokenStyledDiv