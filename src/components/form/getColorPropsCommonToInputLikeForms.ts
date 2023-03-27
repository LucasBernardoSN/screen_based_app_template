import { InputProps as propNames } from '@chakra-ui/react';

type GetColorPropsCommonToInputLikeFormsReturnProps = Pick<
  propNames,
  | '_disabled'
  | '_focus'
  | '_hover'
  | '_focusVisible'
  | '_invalid'
  | '_placeholder'
  | 'bg'
  | 'borderColor'
  | 'borderRadius'
>;

export function getColorPropsCommonToInputLikeForms(): GetColorPropsCommonToInputLikeFormsReturnProps {
  return {
    _disabled: {
      bg: 'slate8',
      opacity: 0.85,
      _hover: {
        bg: 'slate8',
      },
    },
    _focus: { bg: 'slate1' },
    _hover: { bg: 'slate1' },
    _focusVisible: {
      boxShadow: `0px 0px 0px 1px var(--chakra-colors-primary)`,
      borderColor: 'primary',
    },
    _invalid: {
      borderColor: 'error',
      borderWidth: '1.5px',
      _focusVisible: {
        boxShadow: 'none',
      },
    },
    _placeholder: { color: 'slate11', fontStyle: 'italic' },
    bg: 'slate1',
    borderColor: 'slate7',
    borderRadius: 'md',
  };
}
