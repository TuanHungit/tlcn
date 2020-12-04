import React, { lazy, useState, useEffect } from "react";
import ToDateForView from "../../common/convertDateForView";
import toPriceForView from "../../common/convertPriceForView";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CContainer,
  CRow,
  CCol,
  CImg,
  CTooltip,
  CInput,
} from "@coreui/react";

function TourCreate(props) {
  return (
    <CModal show={props.modal} onClose={props.CButtontoggleModal} size="xl">
      <CModalHeader closeButton>
        <h3>Thêm mới Tour</h3>
      </CModalHeader>
      <CModalBody>
        <CTabs activeTab="info">
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink data-tab="info">Thông tin</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="description">Mô tả chi tiết</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="destination">Điểm đến</CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className="pt-2">
            <CTabPane data-tab="info">
              <CContainer>
                <CRow>
                  <CCol lg="8">
                    <CRow>
                      <CCol lg="3">
                        Tên Tour {"  "}
                        <CTooltip content="Hello world! A tooltip example">
                          <i class="fas fa-info-circle"></i>
                        </CTooltip>
                      </CCol>
                      <CCol lg="9">
                        <CInput
                          type="text"
                          placeholder="Tên tour"
                          className="inp"
                        />
                      </CCol>
                    </CRow>

                    <CRow>
                      {" "}
                      <CCol lg="3">
                        Số ngày {"  "}
                        <CTooltip content="Hello world! A tooltip example">
                          <i class="fas fa-info-circle"></i>
                        </CTooltip>
                      </CCol>
                      <CCol lg="9">
                        {" "}
                        <CInput
                          type="text"
                          placeholder="Số ngày"
                          className="inp"
                        />
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol lg="3">
                        Địa điểm bắt đầu {"  "}
                        <CTooltip content="Hello world! A tooltip example">
                          <i class="fas fa-info-circle"></i>
                        </CTooltip>
                      </CCol>
                      <CCol lg="9">
                        <CInput
                          type="text"
                          placeholder="Địa điểm bắt đầu"
                          className="inp"
                        />
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol lg="3">
                        Địa điểm bắt đầu {"  "}
                        <CTooltip content="Hello world! A tooltip example">
                          <i class="fas fa-info-circle"></i>
                        </CTooltip>
                      </CCol>
                      <CCol lg="9"></CCol>
                    </CRow>
                  </CCol>
                  <CCol lg="4"></CCol>
                </CRow>
              </CContainer>
            </CTabPane>
            <CTabPane data-tab="description">456</CTabPane>
            <CTabPane data-tab="destination">789</CTabPane>
          </CTabContent>
        </CTabs>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary">Do Something</CButton>{" "}
        <CButton color="secondary" onClick={props.toggleModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
}

export default TourCreate;
