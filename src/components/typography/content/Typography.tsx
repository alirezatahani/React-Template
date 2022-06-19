import React from 'react';
import { TypographyContainer } from '../styles/typography.styles';
import { TypographyProps, VariantsType } from './typography_types';

const variantsMapping: VariantsType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body1: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  ...props
}: TypographyProps) => {
  const copyRef = React.useRef<null | HTMLParagraphElement>();

  const Component: any = variant ? variantsMapping[variant] : 'p';

  const handleCopy = () => {
    navigator.clipboard.writeText(copyRef.current.innerText);
  };

  return (
    <TypographyContainer {...props}>
      <Component ref={copyRef}>
        {children}
        {props.copyable && (
          <img
            onClick={handleCopy}
            style={{ width: 12, height: 12, cursor: 'pointer' }}
            src="https://www.nicepng.com/png/detail/232-2328361_app-copy-app-copy-app-copy-copy-icon.png"
          />
        )}
      </Component>
    </TypographyContainer>
  );
};

Typography.defaultProps = {
  strong: false,
};
export default Typography;
