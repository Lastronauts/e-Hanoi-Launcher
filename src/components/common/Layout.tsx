import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
};

export default function Layout({ children, ...props }: Props) {
  return (
    <div {...props}>
      <Header />
      {children}
    </div>
  );
}
