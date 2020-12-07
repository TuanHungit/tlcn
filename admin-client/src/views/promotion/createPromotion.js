import React, { lazy, useEffect, useState } from "react";
import ToPriceForView from "../../common/convertPriceForView";
import ToDateForView from "../../common/convertDateForView";
import DatePicker from "react-datepicker";
import QuillEditor from "../editor/quillEditor";
import { createPromotion } from "../../api/promotionApi";
import alertify from "alertifyjs";
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
  input,
  CSelect,
  CAlert,
} from "@coreui/react";

function CreatePromotion(props) {
  const [files, setFiles] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title,
      code,
      discount,
      description,
      startDate,
      endDate,
    };

    try {
      await createPromotion(data);
      props.toggleModal();
      props.createSuccess();
      alertify.success("Thêm khuyến mãi thành công");
    } catch (err) {
      alertify.error("Có lỗi rồi");
    }
  };
  return (
    <>
      <CModal show={props.modal} onClose={props.toggleModal} size="xl">
        <CModalHeader closeButton>
          {" "}
          <h3>Thêm mới khuyến mãi</h3>
        </CModalHeader>
        <form onSubmit={onSubmit}>
          <CModalBody>
            <CContainer>
              <CRow>
                <CCol lg="6">
                  <CRow>
                    <CCol lg="4" className="pt-2">
                      Tiêu đề khuyến mãi {"  "}
                      <CTooltip content="Hello world! A tooltip example">
                        <i class="fas fa-info-circle"></i>
                      </CTooltip>
                    </CCol>
                    <CCol lg="8">
                      <input
                        type="text"
                        placeholder="Nhập tiêu đề"
                        className="inp"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        style={{ width: "100%" }}
                        required
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol lg="4" className="pt-2">
                      Mã khuyến mãi {"  "}
                      <CTooltip content="Hello world! A tooltip example">
                        <i class="fas fa-info-circle"></i>
                      </CTooltip>
                    </CCol>
                    <CCol lg="8">
                      <input
                        type="text"
                        placeholder="Nhập mã khuyến mãi"
                        className="inp"
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                        style={{ width: "100%" }}
                        required
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol lg="4" className="pt-2">
                      Giá trị khuyến mãi {"  "}
                      <CTooltip content="Hello world! A tooltip example">
                        <i class="fas fa-info-circle"></i>
                      </CTooltip>
                    </CCol>
                    <CCol lg="8">
                      <input
                        type="text"
                        placeholder="Nhập giá trị khuyến mãi"
                        className="inp"
                        onChange={(e) => {
                          setDiscount(e.target.value);
                        }}
                        style={{ width: "100%" }}
                        required
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol lg="4" className="pt-2">
                      Thời gian {"  "}
                      <CTooltip content="Hello world! A tooltip example">
                        <i class="fas fa-info-circle"></i>
                      </CTooltip>
                    </CCol>
                    <CCol lg="4" className="pt-2">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                          setStartDate(date);
                        }}
                        isClearable
                        placeholderText="Ngày bắt đầu"
                      />
                    </CCol>

                    <CCol lg="4" className="pt-2">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => {
                          setEndDate(date);
                        }}
                        isClearable
                        placeholderText="Ngày kết thúc"
                      />
                    </CCol>
                  </CRow>
                </CCol>
                <CCol lg="6" className="pt-2">
                  <QuillEditor
                    title="Mô tả về khuyến mãi"
                    key={"toolbar5"}
                    placeholder={"Nhập mô tả về khuyến mãi"}
                    onEditorChange={(value) => setDescription(value)}
                    id={"toolbar5"}
                    onFilesChange={(files) => setFiles(files)}
                  />
                </CCol>
              </CRow>
            </CContainer>
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" type="submit">
              Thêm mới
            </CButton>{" "}
            <CButton color="secondary" onClick={props.toggleModal}>
              Bỏ qua
            </CButton>
          </CModalFooter>
        </form>
      </CModal>
    </>
  );
}
export default CreatePromotion;
