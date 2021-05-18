import React from 'react';
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from 'reactstrap';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';
import Select from 'react-select';
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import IntlMessages from '../../../helpers/IntlMessages';

const AddNewModal = ({
  modalOpen,
  toggleModal,
  data,
  onChange,
  onSubmit,
  isUpdate,
}) => {
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>Tambah Tenaga Pengajar</ModalHeader>
      <ModalBody>
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event, errors, values) => onSubmit(event, errors, values)}
        >
          <AvGroup>
            <Label>Nama Lengkap</Label>
            <AvInput
              required
              name="name"
              value={data.name}
              onChange={onChange}
            />
            <AvFeedback>Nama Lengkap wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Email</Label>
            <AvInput
              required
              name="email"
              value={data.email}
              onChange={onChange}
            />
            <AvFeedback>Email wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Password</Label>
            <AvInput
              required
              name="password"
              value={data.password}
              onChange={onChange}
              type="password"
            />
            <AvFeedback>Password wajib di isi!</AvFeedback>
          </AvGroup>

          <Button
            color="secondary"
            outline
            onClick={toggleModal}
            className="mt-5 mr-5 ml-4"
          >
            <IntlMessages id="pages.cancel" />
          </Button>
          <Button color="primary" className="mt-5 ml-5">
            <IntlMessages id="pages.submit" />
          </Button>
        </AvForm>
      </ModalBody>
    </Modal>
  );
};

export default AddNewModal;
