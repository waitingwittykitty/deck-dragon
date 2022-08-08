interface ButtonProps {
  className?: string;
  size?: 'big' | 'small';
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}
