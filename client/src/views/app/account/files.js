import React, { useRef } from 'react';
import { isEmpty } from 'lodash';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  CardTitle,
  Label,
  Button,
} from 'reactstrap';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import DropzoneExample from '../../../containers/forms/DropzoneExample';
import {
  ReactTableWithPaginationCard,
  ReactTableDivided,
} from '../../../containers/ui/ReactTableCards';

const Files = ({
  files,
  onRemove,
  handleChange,
  onUploadFile,
  onSaveFile,
  oldFiles,
}) => {
  const dropzone = useRef();

  return (
    <>
      <ReactTableDivided data={oldFiles} />

      {files.map((item, index) => (
        <Card className="mb-5" key={index}>
          <CardBody>
            <AvForm className="mb-3">
              <>
                <AvGroup>
                  <Label className="mt-3">Nama File</Label>
                  <AvInput
                    name="name"
                    required
                    value={item.name}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <AvFeedback>Nama wajib diisi!</AvFeedback>
                </AvGroup>

                <Label>File</Label>
                <DropzoneExample
                  ref={dropzone}
                  onUpload={(file) => onUploadFile(file, index)}
                />
              </>
            </AvForm>

            <div className="row text-right">
              <div className="col-md-12">
                <Button color="danger" onClick={() => onRemove(index)}>
                  Hapus
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      {!isEmpty(files) && (
        <div className="row text-right">
          <div className="col-md-12">
            <Button color="success" onClick={onSaveFile}>
              Simpan
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Files;
