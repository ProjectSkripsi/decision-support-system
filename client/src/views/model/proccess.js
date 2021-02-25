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
  Table,
} from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import { get } from 'lodash';

const ModalProccess = ({
  isOpen,
  setIsOpen,
  valTotalDivisor,
  valDivisor,
  extractValue,
  minMaxVal,
  data,
}) => {
  return (
    <Modal isOpen={isOpen} size="lg" toggle={setIsOpen}>
      <ModalHeader>Topsis Proses</ModalHeader>
      <ModalBody>
        <Row>
          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Kriteria Penilaian</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Kriteria</th>
                      <th>Alias</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>KETERSEDIAAN MODUL/DIKTAT</td>
                      <td>V1</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>KEAHLIAN PENDIDIK</td>
                      <td>V2</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>KANDUNGAN KONTEN NASIOANLISME</td>
                      <td>V3</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>KONTEKSTUAL/ TEKSTUAL</td>
                      <td>V4</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>KANDUNGAN BUDAYA LOKAL</td>
                      <td>V5</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Kriteria Pembobotan</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Value</th>
                      <th>Bobot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Tidak Ada</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Kurang</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cukup</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle> Hasil Pembobotan Kriteria</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th rowSpan="2" style={{ textAlign: 'center' }}>
                        No
                      </th>
                      <th rowSpan="2" style={{ textAlign: 'center' }}>
                        Model Pembelajaran
                      </th>
                      <th colSpan="5" style={{ textAlign: 'center' }}>
                        Alias
                      </th>
                    </tr>
                    <tr>
                      <th style={{ textAlign: 'center' }}>V1</th>
                      <th style={{ textAlign: 'center' }}>V2</th>
                      <th style={{ textAlign: 'center' }}>V3</th>
                      <th style={{ textAlign: 'center' }}>V4</th>
                      <th style={{ textAlign: 'center' }}>V5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {valDivisor &&
                      valDivisor.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item[5]}</td>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[3]}</td>
                            <td>{item[4]}</td>
                          </tr>
                        );
                      })}
                    {valTotalDivisor && (
                      <tr>
                        <td
                          colSpan="2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          Nilai Pembagi
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[0]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[1]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[2]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[3]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[4]}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Nilai Max dan Nilai Min</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Model Pembelajaran</th>
                      <th>V1</th>
                      <th>V2</th>
                      <th>V3</th>
                      <th>V4</th>
                      <th>V15</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extractValue &&
                      extractValue.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{valDivisor[index][5]}</td>
                          <td>{item[0]}</td>
                          <td>{item[1]}</td>
                          <td>{item[2]}</td>
                          <td>{item[3]}</td>
                          <td>{item[4]}</td>
                        </tr>
                      ))}
                    {minMaxVal && (
                      <tr>
                        <td
                          colSpan="2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          Nilai MIN
                        </td>

                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['0'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['1'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['2'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['3'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['4'].min}
                        </td>
                      </tr>
                    )}
                    {minMaxVal && (
                      <tr>
                        <td
                          colSpan="2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          Nilai MAX
                        </td>

                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['0'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['1'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['2'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['3'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['4'].max}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Nilai D+,D- dan Value</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Model Pembelajaran</th>
                      <th>D+</th>
                      <th>D-</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item, index) => (
                        <tr key={item._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.title}</td>
                          <td>{item.topsis['D+']}</td>
                          <td>{item.topsis['D-']}</td>
                          <td>{item.topsis.topsis}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ModalProccess;
