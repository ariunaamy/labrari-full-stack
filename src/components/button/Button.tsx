

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`button ${className ?? ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
