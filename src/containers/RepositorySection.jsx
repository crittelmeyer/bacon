import React from 'react';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import { H1 } from '../components/Headings';
import RepositoryList from './RepositoryList';

const RepositorySection = () => (
  <Section>
    <Grid>
      <Row>
        <Col textAlign="center">
          <H1>My github repositories</H1>
        </Col>
      </Row>
      <Row>
        <Col>
          <RepositoryList />
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default RepositorySection;
