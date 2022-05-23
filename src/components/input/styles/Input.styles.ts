import styled from 'styled-components';
import {
  InputLabelProps,
  InputAddonProps,
  InputContainerProps,
} from '../content/input/input_types';

export const InputContainer = styled.div<InputContainerProps>`
  margin: 0 0 20px;
  display: ${({ hasAddon }) => (hasAddon ? 'flex' : 'grid')};
  width: 100%;
  label {
    padding-left: 5px;
    padding-bottom: 10px !important;
  }
`;

export const InputLabel = styled.span<InputLabelProps>({
  paddingRight: '20px',
  whiteSpace: 'nowrap',
});

export const InputRightAddon = styled.span<InputAddonProps>(
  ({ theme, scale }) => ({
    ...theme.sizes[scale],
    ...theme.typography.input,
    backgroundColor: theme.palette.greyScale.main,
    color: theme.palette.common.white,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    whiteSpace: 'nowrap',
    borderBottomRightRadius: 0,
    paddingInline: 10,
  })
);

export const InputLeftAddon = styled.span<InputAddonProps>(
  ({ theme, scale }) => ({
    ...theme.sizes[scale],
    ...theme.typography.input,
    backgroundColor: theme.palette.greyScale.main,
    color: theme.palette.common.white,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    whiteSpace: 'nowrap',
    borderBottomRightRadius: 0,
    paddingInline: 10,
  })
);
