import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Card,
  CardTitle,
  CardBody,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  CardHeader,
  Button,
} from 'reactstrap';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import GlideComponentThumbs from '../../components/carousel/GlideComponentThumbs';
import { Colxx } from '../../components/common/CustomBootstrap';

const ModalDetail = ({ isOpen, setIsOpen, data, onDownload }) => {
  const [activeTab, setActiveTab] = useState('details');

  // const onDownload = async () => {};
  return (
    <Modal isOpen={isOpen} size="lg" toggle={setIsOpen}>
      <ModalHeader>{data.title}</ModalHeader>
      <ModalBody>
        <Row>
          <Colxx xxs="12" xl="12" className="col-left">
            <Card className="mb-4">
              <CardBody>
                <GlideComponentThumbs
                  settingsImages={{
                    bound: true,
                    rewind: false,
                    focusAt: 0,
                    startAt: 0,
                    gap: 5,
                    perView: 1,
                    data: [
                      {
                        id: 1,
                        img: data.coverUrl,
                      },
                    ],
                  }}
                  settingsThumbs={{
                    bound: true,
                    rewind: false,
                    focusAt: 0,
                    startAt: 0,
                    gap: 10,
                    perView: 5,
                    data: [],
                    breakpoints: {
                      576: {
                        perView: 4,
                      },
                      420: {
                        perView: 3,
                      },
                    },
                  }}
                />
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <Nav tabs className="card-header-tabs ">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'details',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('details')}
                      to="#"
                      location={{}}
                    >
                      Deskripsi Model
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'info',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('info')}
                      to="#"
                      location={{}}
                    >
                      Info Model
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="details">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <h3 className="mb-5">{data.title}</h3>
                        <p style={{ textAlign: 'justify' }}>
                          {data.description}
                        </p>
                        <br />
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="info">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <div className="d-flex flex-row align-items-center">
                          <h5>Tahun:</h5>
                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <h5>
                              <p className="list-item-heading mb-1">
                                {data.year}
                              </p>
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <h5>Pengarang:</h5>
                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <h5>
                              <p className="list-item-heading mb-1">
                                {data.author || '-'}
                              </p>
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center ">
                          <h5>Kesetaraan Modul:</h5>
                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <h5>
                              <p className="list-item-heading mb-1">
                                {data.equivalenceModule}
                              </p>
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center ">
                          <h5>Keahlian Guru:</h5>
                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <h5>
                              <p className="list-item-heading mb-1">
                                {data.teacherExpertise}
                              </p>
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center ">
                          <h5>Kandungan Budaya Lokal:</h5>
                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <h5>
                              <p className="list-item-heading mb-1">
                                {data.score}
                              </p>
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center ">
                          <h5>Kandungan Konten Nasionalisme:</h5>
                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <h5>
                              <p className="list-item-heading mb-1">
                                {data.nasionalismContent}
                              </p>
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center ">
                          <h5>Konsep Pembelajaran:</h5>
                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <h5>
                              <p className="list-item-heading mb-1">
                                {data.learningConcept}
                              </p>
                            </h5>
                          </div>
                        </div>

                        <Button
                          color="secondary"
                          block
                          outline
                          onClick={() => onDownload(data)}
                          className="mt-3"
                        >
                          <a className="simple-icon-cloud-download" /> DOWNLOAD
                          ({data.download || 0})
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Colxx>

          {/*  */}
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ModalDetail;
