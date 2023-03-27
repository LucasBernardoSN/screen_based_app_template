type ComposeProvidersProps = {
  children: React.ReactNode;
  with: React.ElementType[];
};

/**
 *  Componente que compõe vários providers em um único componente.
 * - Ele recebe um array de providers e faz o render deles em cascata.
 * @see https://dev.to/fariasmateuss/compose-multiple-react-providers-4oc4
 */
export function ComposeProviders({
  children,
  with: Providers,
}: ComposeProvidersProps) {
  return (
    <>
      {Providers.reduce(
        (accProvider, Provider) => (
          <Provider>{accProvider}</Provider>
        ),
        children
      )}
    </>
  );
}
