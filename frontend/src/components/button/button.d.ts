interface ButtonProps {
  className?: string;
  size?: 'big' | 'small';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}
