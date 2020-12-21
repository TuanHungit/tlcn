import React, { lazy, useState, useEffect } from "react";
import ToDateForView from "../../common/convertDateForView";
import toPriceForView from "../../common/convertPriceForView";
import TourCreate from "./tourCreate";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CTabContent,
  CTabs,
  CTabPane,
  CNav,
  CNavLink,
  CNavItem,
  CCollapse,
  CButton,
  CContainer,
  CRow,
  CCol,
  CImg,
  CAlert,
} from "@coreui/react";

import { getAllTour } from "../../api/tourApi";
const fields = [
  // { key: "id", label: "INDEX", _style: { width: "5%" } },
  { key: "name", label: "TÊN", _style: { width: "20%" } },
  { key: "priceAdults", label: "GIÁ TỪ", _style: { width: "7%" } },
  { key: "duration", label: "SỐ NGÀY", _style: { width: "7%" } },
  { key: "ratingsAverage", label: "ĐÁNH GIÁ", _style: { width: "7%" } },
  {
    key: "startLocation",
    label: "NƠI KHỞI HÀNH",
    _style: { width: "10%" },
  },
  { key: "country", label: "ĐIỂM ĐẾN", _style: { width: "10%" } },
  { key: "label", label: "NHÃN", _style: { width: "5%" } },
  {
    key: "show_details",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];
const getStar = (ratingsAverage) => {
  if (ratingsAverage < 1) {
    return "danger";
  } else if (ratingsAverage < 2) {
    return "danger";
  } else if (ratingsAverage < 3) {
    return "warning";
  } else if (ratingsAverage < 4) {
    return "secondary";
  } else {
    return "success";
  }
};

function Tour() {
  const [tourList, setTourList] = useState(null);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const fetcData = async () => {
      try {
        const tourList = await getAllTour();

        setTourList(tourList);
        setLoading(false);
      } catch (err) {
        setTourList(null);
        setLoading(true);
        console.log(err);
      }
    };
    fetcData();
  }, []);
  useEffect(() => {
    if (success) {
      const fetcData = async () => {
        try {
          const tourList = await getAllTour();

          setTourList(tourList);
          setLoading(false);
        } catch (err) {
          setTourList(null);
          setLoading(true);
          console.log(err);
        }
      };
      fetcData();
    }
  }, [success]);
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <CCard>
        <CCardHeader className="CCardHeader-title ">
          <CContainer>
            <CRow className="d-flex justify-content-between">
              <h1>Quản lý Tour</h1>
              <CButton size="sm" color="info" onClick={toggleModal}>
                + Thêm mới
              </CButton>
            </CRow>
          </CContainer>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={tourList}
            fields={fields}
            striped
            responsive
            loading={loading}
            itemsPerPage={5}
            itemsPerPageSelect
            hover
            sorter
            columnFilter
            tableFilter
            footer
            pagination
            scopedSlots={{
              ratingsAverage: (item) => (
                <td>
                  <CBadge color={getStar(item.ratingsAverage)}>
                    {item.ratingsAverage} / 5
                  </CBadge>
                </td>
              ),
              duration: (item) => (
                <td>
                  {item.duration} ngày &amp; {item.duration - 1} đêm
                </td>
              ),
              priceAdults: (item) => (
                <td>
                  <strong> {toPriceForView(item.priceAdults)}</strong>
                </td>
              ),
              startLocation: (item) => <td>{item.startLocation.address}</td>,
              label: (item) => (
                <td>
                  <CBadge color={"danger"}>{item.label}</CBadge>
                </td>
              ),
              show_details: (item, index) => {
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        toggleDetails(index);
                      }}
                    >
                      {details.includes(index) ? "Ẩn" : "Hiển thị"}
                    </CButton>
                  </td>
                );
              },
              details: (item, index) => {
                return (
                  <CCollapse show={details.includes(index)}>
                    <CCardBody>
                      <CTabs activeTab="info" active>
                        <CNav variant="tabs">
                          <CNavItem>
                            <CNavLink data-tab="info">
                              Thông tin cơ bản
                            </CNavLink>
                          </CNavItem>
                          <CNavItem>
                            <CNavLink data-tab="schedule">
                              Lịch khởi hành
                            </CNavLink>
                          </CNavItem>
                          <CNavItem>
                            <CNavLink data-tab="startLocation">
                              Các điểm đến
                            </CNavLink>
                          </CNavItem>
                          <CNavItem>
                            <CNavLink data-tab="review">Đánh giá</CNavLink>
                          </CNavItem>
                        </CNav>
                        <CTabContent style={{ marginTop: "20px" }}>
                          <CTabPane data-tab="info">
                            <CContainer>
                              <CRow>
                                <CCol lg="3">
                                  <h6>{item.name}</h6>
                                  <CImg
                                    src={`http://${item.images[0]}`}
                                    alt="img"
                                    alt="Image"
                                    width="250px"
                                    height="200px"
                                  />
                                </CCol>
                                <CCol lg="5">
                                  <CContainer>
                                    <CRow>
                                      <CCol lg="4">Tên Tour:</CCol>
                                      <CCol lg="8">{item.name}</CCol>
                                    </CRow>
                                    <hr />
                                    <CRow>
                                      <CCol lg="4">Giá người lớn:</CCol>
                                      <CCol lg="8">{item.priceAdults}</CCol>
                                    </CRow>
                                    <hr />
                                    <CRow>
                                      <CCol lg="4">Giá trẻ em:</CCol>
                                      <CCol lg="8">{item.priceChildren}</CCol>
                                    </CRow>
                                    <hr />
                                    <CRow>
                                      <CCol lg="4">Giá em bé:</CCol>
                                      <CCol lg="8">{item.priceBaby}</CCol>
                                    </CRow>
                                    <hr />
                                    <CRow>
                                      <CCol lg="4">Điểm khởi hành:</CCol>
                                      <CCol lg="8">
                                        {item.startLocation.address}
                                      </CCol>
                                    </CRow>
                                    <hr />
                                    <CRow>
                                      <CCol lg="4">Điểm đến:</CCol>
                                      <CCol lg="8">{item.country}</CCol>
                                    </CRow>
                                  </CContainer>
                                </CCol>
                                <CCol lg="4">
                                  <CRow>
                                    <CCol lg="4">Số ngày:</CCol>
                                    <CCol lg="8">
                                      {item.duration} ngày &amp;{" "}
                                      {item.duration - 1} đêm
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Mô tả tóm tắt:</CCol>
                                    <CCol lg="8">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: item.summary,
                                        }}
                                      />
                                    </CCol>
                                  </CRow>
                                </CCol>
                              </CRow>
                            </CContainer>
                          </CTabPane>
                          <CTabPane data-tab="schedule">
                            <CContainer>
                              <CRow>
                                <CCol lg="4">
                                  <CRow>
                                    <CCol lg="3">Lịch khởi hành:</CCol>
                                    <CCol lg="8">
                                      {item.availableDate.map((el, key) => {
                                        return (
                                          <p key={key}>
                                            {ToDateForView(el)} <br />
                                          </p>
                                        );
                                      })}
                                    </CCol>
                                  </CRow>
                                </CCol>
                                <CCol lg="8">
                                  <CRow>
                                    <CCol lg="2">Các điểm hấp dẫn:</CCol>
                                    <CCol lg="10">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: item.description,
                                        }}
                                      />
                                    </CCol>
                                  </CRow>
                                </CCol>
                              </CRow>
                            </CContainer>
                          </CTabPane>
                          <CTabPane data-tab="startLocation">
                            <CContainer>
                              {item.locations.map((el, key) => (
                                <CRow key={key}>
                                  <h5 onClick={toggleCollapse} key={key}>
                                    {el.title}
                                  </h5>
                                  <CCollapse show={collapse} key={key}>
                                    <p key={key}>
                                      {" "}
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: el.description,
                                        }}
                                      />
                                    </p>
                                  </CCollapse>
                                </CRow>
                              ))}
                            </CContainer>
                          </CTabPane>
                          <CTabPane data-tab="review">789</CTabPane>
                        </CTabContent>
                      </CTabs>
                      <CButton size="sm" color="info">
                        Cập nhật
                      </CButton>
                      <CButton size="sm" color="danger" className="ml-1">
                        Xóa
                      </CButton>
                    </CCardBody>
                  </CCollapse>
                );
              },
            }}
          />
        </CCardBody>
        <TourCreate
          modal={modal}
          toggleModal={toggleModal}
          setSuccess={setSuccess}
        />
      </CCard>
    </>
  );
}

export default Tour;
