import { Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { AuthenticatedLoading } from '../components/AppInitialization/AuthenticatedLoading';
import { Header } from '../components/layout/Header/Header';
import { Sidebar } from '../components/layout/Sidebar/Sidebar.index';
import { useAuth } from '../contexts/Auth.context';
import { SingIn } from '../pages/Common/SignIn';

export function PrivateRoutes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <SingIn />;

  return (
    <>
      <AuthenticatedLoading />

      <Grid
        m="0 auto"
        maxW="96em"
        h="100vh"
        templateColumns="repeat(3 1fr)"
        templateRows="60px 1fr"
      >
        <Header />

        <Grid
          minH="480px"
          templateColumns={{ base: '1fr', lg: '240px 1fr' }}
          px={{ base: '0', lg: '2', xl: '4' }}
          pb={{ base: '0', lg: '2', xl: '8' }}
          gap="2"
        >
          <Sidebar />

          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
