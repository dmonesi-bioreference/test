import StyleLabelStyled from './StyleLabel.styles';

const StyleLabel: React.FC = (props) => {
  return (
    <StyleLabelStyled className="style-label">
      {props.children}
      <div className="style-label__underline" />
    </StyleLabelStyled>
  );
};

export default StyleLabel;
