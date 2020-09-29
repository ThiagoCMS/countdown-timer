import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  align-items: center;
  box-shadow: 1px 0 5px hsla(0, 0%, 13%, .5);
  display: flex;
  flex-direction: row;
  height: 32px;
  justify-content: center;
  width: 100%;
`;

const Text = styled.p`
  color: hsla(0, 0%, 0%, 1);
`;

Text.Link = styled.a`
  color: hsla(0, 0%, 0%, 1);

  :hover {
    color: hsla(220, 100%, 25%, .9)
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Text>
        Made with
        {' '}
        {'</>'}
        {' '}
        by
        {' '}
        <Text.Link href="https://github.com/ThiagoCMS" rel="noopener noreferrer" target="_blank">Thiago</Text.Link>
      </Text>
    </FooterWrapper>
  );
}

export default Footer;
