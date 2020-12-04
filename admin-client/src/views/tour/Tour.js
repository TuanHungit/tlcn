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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { getAllTour } from "../../api/tourApi";
const fields = [
  // { key: "id", label: "INDEX", _style: { width: "5%" } },
  { key: "name", label: "TÊN", _style: { width: "20%" } },
  { key: "price", label: "GIÁ TỪ", _style: { width: "7%" } },
  { key: "duration", label: "SỐ NGÀY", _style: { width: "7%" } },
  { key: "ratingsAverage", label: "ĐÁNH GIÁ", _style: { width: "7%" } },
  {
    key: "startLocation",
    label: "VỊ TRÍ BẮT ĐẦU",
    _style: { width: "10%" },
  },
  { key: "country", label: "ĐIỂM ĐẾN", _style: { width: "10%" } },
  {
    key: "show_details",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];
const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";

    default:
      return "primary";
  }
};

function Tour() {
  const [tourList, setTourList] = useState(null);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
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
  return (
    <>
      <CCard>
        <CCardHeader className="CCardHeader-title ">Tour</CCardHeader>
        <CCardBody>
          <CDataTable
            items={tourList}
            fields={fields}
            striped
            responsive
            loading={loading}
            itemsPerPage={8}
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
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
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
                      {details.includes(index) ? "Hide" : "Show"}
                    </CButton>
                  </td>
                );
              },
              details: (item, index) => {
                return (
                  <CCollapse show={details.includes(index)}>
                    <CCardBody>
                      <CTabs activeTab="home" active>
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
                                <CCol lg="6">
                                  <h6>{item.name}</h6>
                                  <CImg
                                    src="https://www.natours.dev/img/tours/tour-3-1.jpg"
                                    alt="img"
                                    width="300px"
                                    height="200px"
                                  />
                                </CCol>
                                <CCol lg="6">
                                  <CContainer>
                                    <CRow>
                                      <CCol lg="4">Tên Tour:</CCol>
                                      <CCol lg="8">{item.name}</CCol>
                                    </CRow>
                                    <CRow>
                                      <CCol lg="4">Giá người lớn:</CCol>
                                      <CCol lg="8">{item.priceAdults}</CCol>
                                    </CRow>
                                    <CRow>
                                      <CCol lg="4">Giá trẻ em:</CCol>
                                      <CCol lg="8">{item.priceChildren}</CCol>
                                    </CRow>
                                    <CRow>
                                      <CCol lg="4">Giá em bé:</CCol>
                                      <CCol lg="8">{item.priceBaby}</CCol>
                                    </CRow>
                                    <CRow>
                                      <CCol lg="4">Điểm khởi hành:</CCol>
                                      <CCol lg="8">
                                        {item.startLocation.address}
                                      </CCol>
                                    </CRow>
                                    <CRow>
                                      <CCol lg="4">Điểm đến:</CCol>
                                      <CCol lg="8">{item.country}</CCol>
                                    </CRow>
                                  </CContainer>
                                </CCol>
                              </CRow>
                            </CContainer>
                          </CTabPane>
                          <CTabPane data-tab="schedule">
                            <CContainer>
                              <CRow>
                                <CCol lg="3">Lịch khởi hành</CCol>
                                <CCol lg="9">
                                  {item.availableDate.map((el, index) => {
                                    return (
                                      <p>
                                        {ToDateForView(el)} <br />
                                      </p>
                                    );
                                  })}
                                </CCol>
                              </CRow>
                              <CRow>
                                <CCol lg="3">Tóm tắt về Tour</CCol>
                                <CCol lg="9">{item.summary}</CCol>
                              </CRow>
                            </CContainer>
                          </CTabPane>
                          <CTabPane data-tab="startLocation">789</CTabPane>
                          <CTabPane data-tab="review">789</CTabPane>
                        </CTabContent>
                      </CTabs>
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

export default Tour;
