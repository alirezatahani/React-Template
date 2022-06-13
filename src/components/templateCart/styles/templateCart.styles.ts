import styled from 'styled-components';

export const CartContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: '1rem',
  });
export type CartImageProps = {
  src: string;
};
export const CartImage = styled.div<CartImageProps>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  borderRadius: '15px',
}));
export const CartLinks = styled.div({
  width: '100%',
  height: 0,
  opacity: 0,
  borderRadius: '0 0 15px 15px',
  position: 'absolute',
  bottom: '-2px',
  backgroundColor: '#202730',
  color: '#00aeff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .2s ease-in-out',
});
export const Cart = styled.div({
  width: '250px',
  height: '306px',
  position: 'relative',
  borderRadius: '10px',
  boxShadow: 'rgb(0 0 0 / 30%) 2px 2px 5px 0px',
  ':hover': {
    [`${CartLinks}`]: {
      height: '30%',
      opacity: 1,
    },
    boxShadow: 'rgba(32, 39, 48, 0.5) 0px 20px 50px',
  },
});
export const CartLinkSpan = styled.span({
  textAlign: 'center',
  color: '#fff',
});
