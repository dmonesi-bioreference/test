import ToggleStyled from './Toggle.styles';

export interface ToggleProps {
  label?: string
}

const Toggle: React.FC<ToggleProps> = (props) => {

  return (
    <ToggleStyled aria-label={props.label} className="switch">
     
        <label className="switch__label" >

          <input role="switch" type="checkbox" className="switch__input" />
          <span className="switch__background" ></span>
          <span className="switch__handle"></span>
        </label>
    </ToggleStyled>
  );
};

export default Toggle;

