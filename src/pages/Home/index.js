import React from 'react';

import PageDefault from '../../templates/PageDefault';
import ListEvent from '../../components/EventList';
import Form from '../../components/Form';

function Home() {
  return (
    <PageDefault>
      <>
        <Form />
        <ListEvent />
      </>
    </PageDefault>
  );
}

export default Home;
