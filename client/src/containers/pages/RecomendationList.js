/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Row,
  Button,
  ButtonDropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CustomInput,
  Collapse,
} from 'reactstrap';
import { injectIntl } from 'react-intl';

import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ListPageHeading = ({
  intl,
  displayMode,
  changeDisplayMode,
  handleChangeSelectAll,
  changeOrderBy,
  changePageSize,
  selectedPageSize,
  totalItemCount,
  selectedOrderOption,
  match,
  startIndex,
  endIndex,
  selectedItemsLength,
  itemsLength,
  onSearchKey,
  orderOptions,
  pageSizes,
  toggleModal,
  heading,
  isOrder,
  isAdmin,
  onDelete,
  seeAll,
  isProcces,
  seeProccess,
}) => {
  const [dropdownSplitOpen, setDropdownSplitOpen] = useState(false);
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const { messages } = intl;

  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2 ">
          <h1 style={{ color: 'black' }}>
            {/* <IntlMessages id={heading} /> */}
            Rekomendasi Pembelajaran
          </h1>
          {isAdmin && (
            <div className="text-zero top-right-button-container">
              <Button
                color="primary"
                size="lg"
                className="top-right-button"
                onClick={() => toggleModal()}
              >
                <IntlMessages id="pages.add-new" />
              </Button>
              {'  '}
              <ButtonDropdown
                isOpen={dropdownSplitOpen}
                toggle={() => setDropdownSplitOpen(!dropdownSplitOpen)}
              >
                <div className="btn btn-primary btn-lg pl-4 pr-0 check-button check-all">
                  <CustomInput
                    className="custom-checkbox mb-0 d-inline-block"
                    type="checkbox"
                    id="checkAll"
                    checked={selectedItemsLength >= itemsLength}
                    onChange={() => handleChangeSelectAll(true)}
                    label={
                      <span
                        className={`custom-control-label ${
                          selectedItemsLength > 0 &&
                          selectedItemsLength < itemsLength
                            ? 'indeterminate'
                            : ''
                        }`}
                      />
                    }
                  />
                </div>
                <DropdownToggle
                  caret
                  color="primary"
                  className="dropdown-toggle-split btn-lg"
                />
                <DropdownMenu right>
                  <DropdownItem
                    onClick={onDelete}
                    disabled={selectedItemsLength === 0}
                  >
                    <IntlMessages id="pages.delete" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          )}
          {/* <Breadcrumb match={match} /> */}
        </div>
        <div className="mb-2">
          <Button
            color="empty"
            className="pt-0 pl-0 d-inline-block d-md-none"
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
          >
            <IntlMessages id="pages.display-options" />{' '}
            <i className="simple-icon-arrow-down align-middle" />
          </Button>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            <div className="d-block d-md-inline-block pt-1">
              {isOrder && (
                <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                  <DropdownToggle caret color="outline-dark" size="xs">
                    <IntlMessages id="pages.orderby" />
                    {selectedOrderOption.label}
                  </DropdownToggle>
                  <DropdownMenu>
                    {orderOptions.map((order, index) => {
                      return (
                        <DropdownItem
                          key={index}
                          onClick={() => changeOrderBy(order.column)}
                        >
                          {order.label}
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
              <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                <input
                  type="text"
                  name="keyword"
                  id="search"
                  placeholder={messages['menu.search']}
                  onKeyPress={(e) => onSearchKey(e)}
                />
              </div>
            </div>

            <div className="float-md-right pt-1">
              <Button color="light" size="sm" className="mb-2" onClick={seeAll}>
                Lihat Semua
              </Button>
            </div>
            {isProcces && (
              <div className="float-md-right pt-1 mr-2">
                <Button
                  color="light"
                  size="sm"
                  className="mb-2"
                  onClick={seeProccess}
                >
                  Lihat Proses
                </Button>
              </div>
            )}
          </Collapse>
        </div>
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  );
};

export default injectIntl(ListPageHeading);
