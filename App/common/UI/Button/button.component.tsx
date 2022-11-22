enum ButtonTypes {
  "button",
  "submit",
  "reset",
  undefined,
}

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  className: string;
  type: ButtonTypes;
};

export const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
