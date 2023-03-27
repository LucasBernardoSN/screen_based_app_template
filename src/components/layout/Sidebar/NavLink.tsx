import { Link as ChakaraLink, Icon, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useSidebar } from '../../../contexts/Sidebar.context';

type NavLinkProps = {
  icon: ElementType;
  children: string;
  href: string;
};

export function NavLink({ href, icon, children }: NavLinkProps) {
  const { onClose } = useSidebar();
  const { pathname } = useLocation();

  const isActive = pathname.includes(href);

  return (
    <ChakaraLink
      as={Link}
      to={href}
      onClick={() => onClose()}
      display="flex"
      alignItems="center"
      color={isActive ? 'primary' : 'inherit'}
    >
      <Icon
        as={icon}
        fontSize="20"
        weight="fill"
      />
      <Text
        ml="4"
        textAlign="left"
        fontWeight="medium"
      >
        {children}
      </Text>
    </ChakaraLink>
  );
}
