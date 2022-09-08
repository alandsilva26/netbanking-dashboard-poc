import { Link, useLocation } from 'react-router-dom';

import { NavItemStyled } from 'components/mui/styled/NavItemStyled';
import { regExpFromArr } from 'lib';

interface NavItemProps {
  title?: string;
  to: string;
  matchParams?: string[];
}

export type NavItemOption = NavItemProps;

export const NavItem = ({
  title,
  to = '/',
  matchParams = [],
}: NavItemProps) => {
  const { pathname } = useLocation();

  const matchPath: RegExp = regExpFromArr(pathname.split('/').slice(1));


  const doesMatch = (): boolean => {
    if (matchPath) {
      if (matchPath.test(to)) {
        return true;
      }
    }

    return false;
  };

  return (
    <NavItemStyled selected={doesMatch()}>
      <Link to={to}>{title ? title : to}</Link>
    </NavItemStyled>
  );
};
