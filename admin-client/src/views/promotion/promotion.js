import React, { lazy, useEffect, useState } from "react";

import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CLink,
  CContainer,
  CRow,
  CButton,
} from "@coreui/react";

import ToPriceForView from "../../common/convertPriceForView";
import ToDateForView from "../../common/convertDateForView";
import { getAllPromotion } from "../../api/promotionApi";
import CreatePromotion from "./createPromotion";
const fields = [
  // { key: "id", label: "INDEX", _style: { width: "5%" } },
  { key: "title", label: "TIÊU ĐỀ", _style: { width: "30%" } },
  { key: "code", label: "MÃ KHUYẾN MÃI", _style: { width: "10%" } },
  { key: "discount", label: "GIÁ TRỊ", _style: { width: "10%" } },
  { key: "startDate", label: "NGÀY BẮT ĐẦU", _style: { width: "15%" } },
  { key: "endDate", label: "NGÀY KẾT THÚC", _style: { width: "15%" } },
];

function Promotion() {
  const [promotions, setPromotions] = useState(null);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const createSuccess = () => {
    setSuccess(!success);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPromotion();
        setPromotions(response);
      } catch (err) {
        setPromotions(null);
        console.log(err);
      }
    };
    fetchData();
  }, [success]);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <CCard>
        <CCardHeader className="CCardHeader-title ">
          <CContainer>
            <CRow className="d-flex justify-content-between">
              <h1> Quản lý khuyến mãi</h1>
              <CButton size="sm" color="info" onClick={toggleModal}>
                + Thêm mới
              </CButton>
            </CRow>
          </CContainer>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={promotions}
            fields={fields}
            striped
            itemsPerPage={5}
            pagination
            scopedSlots={{
              title: (item) => (
                <td>
                  <strong> {item.title}</strong>
                </td>
              ),

              code: (item) => (
                <td>
                  <CBadge color="success"> {item.code}</CBadge>
                </td>
              ),
              discount: (item) => (
                <td>
                  <CBadge color="danger">
                    {ToPriceForView(item.discount)}
                  </CBadge>
                </td>
              ),
              startDate: (item) => <td>{ToDateForView(item.startDate)}</td>,
              endDate: (item) => <td>{ToDateForView(item.endDate)}</td>,
            }}
          />
        </CCardBody>
      </CCard>

      <CreatePromotion
        modal={modal}
        toggleModal={toggleModal}
        createSuccess={createSuccess}
      />
    </>
  );
}

export default Promotion;
