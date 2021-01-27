import React, { useRef } from 'react';
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
import Select from 'react-select';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import IntlMessages from '../../helpers/IntlMessages';
import DropzoneExample from '../../containers/forms/DropzoneExample';
import { SliderTooltip } from '../../components/common/SliderTooltips';

const AddNewModal = ({
  modalOpen,
  toggleModal,
  categories,
  submitModel,
  data,
  onChange,
  setEquivalenceModule,
  setTeacherExpertise,
  setTag,
  setScore,
  setConcept,
}) => {
  const dropzone = useRef();

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>Tambah Model Pembelajaran</ModalHeader>
      <ModalBody>
        <Label>Judul</Label>
        <Input value={data.title} name="title" onChange={onChange} />
        <Label className="mt-4">Kesetaraan Modul</Label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={categories}
          onChange={setEquivalenceModule}
        />
        <Label className="mt-4">Keahlian Guru</Label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={categories}
          onChange={setTeacherExpertise}
        />
        <Label className="mt-4">Tahun</Label>
        <Input value={data.year} name="year" onChange={onChange} />
        <Label className="mt-4">Deskripsi</Label>
        <Input
          type="textarea"
          name="description"
          onChange={onChange}
          id="exampleText"
          value={data.description}
        />
        <Label className="mt-4">Score</Label>
        <SliderTooltip
          min={0}
          max={100}
          defaultValue={0}
          className="mb-5"
          step={1}
          onChange={setScore}
        />
        <Label className="mt-4">Konsep Pembelajaran</Label>
        <CustomInput
          type="radio"
          id="exCustomRadio"
          name="customRadio"
          label="Kontekstual"
          value="Kontekstual"
          onChange={(e) => {
            const { value } = e.target;
            setConcept(value);
          }}
        />
        <CustomInput
          type="radio"
          id="exCustomRadio2"
          name="customRadio"
          label="Tekstual"
          value="Tekstual"
          onChange={(e) => {
            const { value } = e.target;
            setConcept(value);
          }}
        />
        <Label className="mt-4">File</Label>
        <DropzoneExample ref={dropzone} />
        <Label className="mt-4">Cover</Label>
        <DropzoneExample ref={dropzone} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary" onClick={submitModel}>
          <IntlMessages id="pages.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default AddNewModal;
