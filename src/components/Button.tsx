type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return (
    <div
      className="button"
      onClick={onClick}
    >
      Calculate
    </div>
  );
};

export default Button;
