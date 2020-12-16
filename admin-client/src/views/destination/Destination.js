import React, { useState, useEffect, lazy } from "react";
import {
  CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CLink,
  CTabPane,
  CImg,
  CRow,
  CCol,
  CCollapse,
  CTabs,
  CTabContent,
  CContainer,
} from "@coreui/react";
import "./style.css";
import CIcon from "@coreui/icons-react";
import DestinationCreate from "./createDestination";
import { getAllDestinations } from "../../api/destinationApi";
const fields = [
  { key: "id", label: "INDEX", _style: { width: "10%" } },
  { key: "name", label: "TÊN", _style: { width: "20%" } },
  // { key: "summary", label: "MÔ TẢ", _style: { width: "20%" } },
  { key: "numOfTour", label: "SỐ TOUR", _style: { width: "20%" } },

  // { key: "destination", label: "ĐỊA ĐIÊM", _style: { width: "30%" } },
  
  {
    key: "show_details",label: "",_style: { width: "10%" },
    sorter: false,
    filter: false,
  },
  { key: "action", label: "ACTION", _style: { width: "10%" } },
];

function Destination() {
  const [destinationsList, setDestinationsList] = useState(null);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  const createSuccess = () => {
    setSuccess(!success);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllDestinations();

        setDestinationsList(response);
        setLoading(false);
      } catch (err) {
        setDestinationsList(null);
        setLoading(true);
        console.log(err);
      }
    };
    fetchData();
  }, [success]);

  const toggleModal = () => {
    setModal(!modal);
  };
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
        <CCardHeader className="CCardHeader-title ">
          <CContainer>
            <CRow className="d-flex justify-content-between">
              <h1>Destination</h1>
              <CButton size="sm" color="info" onClick={toggleModal}>
                + Thêm mới
              </CButton>
            </CRow>
          </CContainer>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={destinationsList}
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
              index: (item) => <td>{item.id}</td>,
              name: (item) => (
                <td>
                  <CBadge >{item.name}</CBadge>
                </td>
              ),
              numOfTour: (item) => (
                <CBadge >
                  {item.numOfTour}
                </CBadge>
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
              action: () => (
                <td style={{ display: "flex", justifyContent: "start" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "10%",
                      justifyContent: "space-between",
                    }}
                  >
                    <CLink className="c-subheader-nav-link" href="#">
                      <CIcon name="cil-pencil" alt="Edit" />
                      {/* &nbsp;Edit */}
                    </CLink>
                    <CLink className="c-subheader-nav-link" href="#">
                      <CIcon
                        style={{ color: "red" }}
                        name="cil-trash"
                        alt="Delete"
                      />
                      {/* &nbsp;Edit */}
                    </CLink>
                  </div>
                </td>
              ),
              details: (item, index) => {
                return (
                  <CCollapse show={details.includes(index)}>
                    <CCardBody>
                      <CTabs activeTab="info" active>
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
                                <CCol lg="9">
                        
                                  <CRow>
                                    <CCol lg="2">Mô tả tóm tắt:</CCol>
                                    <CCol lg="10">
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
        <DestinationCreate
          modal={modal}
          toggleModal={toggleModal}
          setSuccess={setSuccess}
        />
      </CCard>
    </>
  );
}

export default Destination;
