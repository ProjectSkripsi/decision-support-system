import React, { useRef } from 'react';
import { Row, CardTitle, CardBody, Card, Button, Form } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import DropzoneExample from '../../containers/forms/DropzoneExample';

const BlankPage = ({ match }) => {
  const dropzone = useRef();
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1 style={{ color: 'black' }}>Update Kurikulum</h1>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <Form>
                <CardTitle>File Kurikulum</CardTitle>
                <DropzoneExample ref={dropzone} />
                <Button color="primary" className="mt-4">
                  UPDATE
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default BlankPage;
