import LoadingStyled from './Loading.styles';

export interface LoadingProps {
  variant?: 'dna' | 'shimmer';
}

const Loading: React.FC<LoadingProps> = (props) => {
  const nucleotides = (
    <>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </>
  );
  return (
    <LoadingStyled {...props}>
      {props.variant === 'dna' && (
        <div className="dna-container">
          <ul>{nucleotides}</ul>
          <ul className="opposing-set">{nucleotides}</ul>
        </div>
      )}
    </LoadingStyled>
  );
};

export default Loading;
