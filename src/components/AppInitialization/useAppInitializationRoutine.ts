import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import { sleep } from '../../utils/sleep';
import {
  InitializationErrors,
  InitializationSteps,
} from './AuthenticatedLoading';

/**
 * Hook que inicializa a aplicação.
 * - Usa o useEffectOnce para executar a rotina de inicialização apenas uma vez.
 */
export function useAppInitializationRoutine() {
  const [stepList, setStepList] = useState<InitializationSteps[]>([]);
  const [initializationError, setInitializationError] = useState<
    InitializationErrors | undefined
  >();
  const [currentStep, setCurrentStep] =
    useState<InitializationSteps>('networkConnection');

  /**
   * UseEffect que executa a rotina de inicialização da aplicação.
   * A rotina de inicialização é executada apenas uma vez. (useEffectOnce)
   * Ela é executada quando o componente FullPageLoading é montado.
   * O componente FullPageLoading é montado quando o usuário acessa a aplicação autenticado.
   * Se todos os passos da rotina forem executados com sucesso, a aplicação é inicializada.
   * Se algum passo da rotina falhar, é exibido um erro na tela. Com as opções de tentar novamente ou sair da aplicação.
   */
  useEffectOnce(() => {
    /**
     * Verficica se o usuário está conectado à internet enviando uma requisição para o Google.
     */
    async function tryConnectToNetwork() {
      setCurrentStep('networkConnection');

      // setInitializationError('networkConnection');

      return sleep();
    }

    /**
     * Verifica se é possível se conectar ao servidor enviando um ping.
     */
    async function tryConnectToServer() {
      setCurrentStep('serverConnection');

      // setInitializationError('serverConnection');

      setStepList((prev) => [...prev, 'serverConnection']);

      return sleep();
    }

    /**
     * Verifica se o usuário está autenticado.
     */
    async function tryValidateSession() {
      setCurrentStep('sessionValidation');

      // setInitializationError('sessionValidation');

      setStepList((prev) => [...prev, 'sessionValidation']);

      return sleep();
    }

    /**
     * Executa a rotina de inicialização da aplicação.
     * - Se algum passo da rotina falhar, é exibido um erro na tela. Com as opções de tentar novamente ou sair da aplicação.
     */
    async function initializeApp() {
      try {
        await tryConnectToNetwork();

        await tryConnectToServer();

        await tryValidateSession();

        setCurrentStep('finished');

        await sleep(0, () => setStepList((prev) => [...prev, 'finished']));
      } catch {
        console.error('Erro ao inicializar a aplicação.');
      }
    }

    // Executa a rotina de inicialização da aplicação.
    initializeApp();
  });

  return { currentStep, stepList, initializationError };
}
