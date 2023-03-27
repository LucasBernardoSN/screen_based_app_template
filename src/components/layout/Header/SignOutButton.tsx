import { IconButton } from '@chakra-ui/react';
import { SignOut } from 'phosphor-react';
import { useAuth } from '../../../contexts/Auth.context';

export function SignOutButton() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <IconButton
      aria-label="Button to sign out"
      icon={
        <SignOut
          weight="bold"
          width={20}
          height={20}
        />
      }
      onClick={() => handleSignOut()}
      variant="ghost"
      size="md"
    />
  );
}
