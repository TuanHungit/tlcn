import React, { lazy, useState, useEffect } from "react";
import ToDateForView from "../../common/convertDateForView";
import toPriceForView from "../../common/convertPriceForView";

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
import "./booking.css";
import { getAllBooking } from "../../api/bookingApi";
const fields = [
  // { key: "id", label: "INDEX", _style: { width: "5%" } },
  { key: "tour", label: "TÊN TOUR", _style: { width: "20%" } },
  { key: "total", label: "THÀNH TIỀN", _style: { width: "7%" } },
  { key: "discount", label: "GIẢM GIÁ", _style: { width: "7%" } },
  { key: "startDate", label: "NGÀY BẮT ĐẦU", _style: { width: "7%" } },
  {
    key: "status",
    label: "TÌNH TRẠNG",
    _style: { width: "10%" },
  },
  {
    key: "show_details",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];
const getStatus = (status) => {
  switch (status) {
    case "cancel":
      return "danger";
    case "waiting":
      return "secondary";
    default:
      return "success";
  }
};

const getValueStatus = (status) => {
  switch (status) {
    case "cancel":
      return "Đã hủy";
    case "waiting":
      return "Đang chờ";
    default:
      return "Đã xong";
  }
};
function Booking() {
  const [bookingList, setBookingList] = useState(null);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const fetcData = async () => {
      try {
        const bookingList = await getAllBooking();

        setBookingList(bookingList);
        setLoading(false);
      } catch (err) {
        setBookingList(null);
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
          const bookingList = await getAllBooking();

          setBookingList(bookingList);
          setLoading(false);
        } catch (err) {
          setBookingList(null);
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
              <h1>Quản lý Hóa đơn</h1>
              {/* <CButton size="sm" color="info" onClick={toggleModal}>
                + Thêm mới
              </CButton> */}
            </CRow>
          </CContainer>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={bookingList}
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
              status: (item) => (
                <td>
                  <CBadge color={getStatus(item.status)}>
                    {getValueStatus(item.status)}
                  </CBadge>
                </td>
              ),
              tour: (item) => (
                <td>
                  <strong>{item.tour.name}</strong>
                </td>
              ),
              startDate: (item) => <td>{ToDateForView(item.startDate)}</td>,
              total: (item) => (
                <td>
                  {" "}
                  <CBadge color={"danger"}>{toPriceForView(item.total)}</CBadge>
                </td>
              ),
              discount: (item) => <td>{toPriceForView(item.discount)}</td>,
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
                            <CNavLink data-tab="info">Thông tin</CNavLink>
                          </CNavItem>
                          <CNavItem>
                            <CNavLink data-tab="startLocation">
                              Thanh toán
                            </CNavLink>
                          </CNavItem>
                        </CNav>
                        <CTabContent style={{ marginTop: "20px" }}>
                          <CTabPane data-tab="info">
                            <CContainer>
                              <CRow>
                                <CCol lg="6">
                                  <CRow>
                                    <CCol lg="4">Tên Tour:</CCol>
                                    <CCol lg="8">{item.tour.name}</CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Giá người lớn:</CCol>
                                    <CCol lg="8">
                                      {toPriceForView(item.priceAdults)}
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Giá trẻ em:</CCol>
                                    <CCol lg="8">
                                      {toPriceForView(item.priceChildren)}
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Giá em bé:</CCol>
                                    <CCol lg="8">
                                      {toPriceForView(item.priceBaby)}
                                    </CCol>
                                  </CRow>
                                  <hr />
                                </CCol>
                                <CCol lg="6">
                                  <CRow>
                                    <CCol lg="4">Số lượng người lớn:</CCol>
                                    <CCol lg="8">
                                      {item.numOfPersonAdults} người
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Số lượng trẻ em:</CCol>
                                    <CCol lg="8">
                                      {item.numOfPersonChildren} người
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Số lượng em bé:</CCol>
                                    <CCol lg="8">
                                      {item.numOfPersonBaby} người
                                    </CCol>
                                  </CRow>
                                  <hr />
                                </CCol>
                              </CRow>
                            </CContainer>
                          </CTabPane>
                          <CTabPane data-tab="startLocation">
                            <CContainer>
                              <CRow>
                                <CCol lg="6">
                                  <CRow>
                                    <CCol lg="4">Phương thức thanh toán</CCol>
                                    <CCol lg="8">{item.paymentMethod}</CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Ngày thanh toán</CCol>
                                    <CCol lg="8">
                                      {ToDateForView(item.createdAt)}
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Thành tiền</CCol>
                                    <CCol lg="8">
                                      {toPriceForView(item.total)}
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Giảm giá:</CCol>
                                    <CCol lg="8">
                                      {toPriceForView(item.discount)}
                                    </CCol>
                                  </CRow>
                                  <hr />
                                  <CRow>
                                    <CCol lg="4">Trạng thái</CCol>
                                    <CCol lg="8">
                                      {getValueStatus(item.status)}
                                    </CCol>
                                  </CRow>
                                  <hr />
                                </CCol>
                                <CCol lg="6">
                                  <CRow>
                                    <CCol lg="3">Chính sách Tour</CCol>
                                    <CCol lg="9">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: item.tour.policy,
                                        }}
                                        className="policy"
                                      />
                                    </CCol>
                                  </CRow>
                                </CCol>
                              </CRow>
                            </CContainer>
                          </CTabPane>
                        </CTabContent>
                      </CTabs>

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
      </CCard>
    </>
  );
}

export default Booking;
