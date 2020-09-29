import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const SectionWrapper = styled.section`
  min-height: calc(100vh - 48px - 32px);
  width: 100%;
`;

function PageDefault({ children }) {
  return (
    <Wrapper>
      <Header />
      <SectionWrapper>
        {children}

      </SectionWrapper>
      <Footer />
    </Wrapper>
  );
}

PageDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageDefault;
