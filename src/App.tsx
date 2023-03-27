import { RouterProvider } from 'react-router-dom';
import { DefaultLoading } from './components/AppInitialization/DefaultLoading';
import { useRoutesContext } from './routes/Routes.context';

export function App() {
  const { router } = useRoutesContext();

  /**
   * Quando o router estiver pronto, o RouterProvider disponibilizar as rotas.
   * Se o usuário não estiver autenticado, a tela de login será exibida.
   * Se o usuário estiver autenticado, o AuthenticatedLoading será exibido.
   * Ele é responsável por carregar os dados e os principais componentes da aplicação.
   * Quando o AuthenticatedLoading estiver pronto, o ele mostrará o app.
   * @see src\routes\PrivateRoutes.tsx
   * @see src\components\AppInitialization\AuthenticatedLoading.tsx
   */
  return router ? <RouterProvider router={router} /> : <DefaultLoading />;
}
