import React, { lazy, useEffect, useState } from "react";
import ToPriceForView from "../../common/convertPriceForView";
import ToDateForView from "../../common/convertDateForView";
import DatePicker from "react-datepicker";
import QuillEditor from "../editor/quillEditor";
import MultiImageInput from "react-multiple-image-input";

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
import { createOneDestination } from "../../api/destinationApi";

function CreateDestination(props) {
  const [files, setFiles] = useState(null);
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [images, setImages] = useState({});
  const [numOfTour, setNumOfTour] = useState(0);
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      images: [...Object.values(images)],
      destination,
      numOfTour,
    };
    try {
      await createOneDestination(data);
      props.toggleModal();
      props.createSuccess();
      alertify.success("Thêm địa điểm thành công");
    } catch (err) {
      alertify.error("Có lỗi rồi");
    }
  };
  return (
    <>
      <CModal show={props.modal} onClose={props.toggleModal} size="xl">
        <CModalHeader closeButton>
        {" "}
          <h3>Thêm điểm đến </h3>
        </CModalHeader>
        <form onSubmit={onSubmit}>
          <CModalBody>
            <CContainer>
              <CRow>
                <CCol lg="6">
                  <CRow>
                    <CCol lg="4" className="pt-2">
                    Tên điểm đến {"  "}
                      <CTooltip content="Hello world! A tooltip example">
                        <i class="fas fa-info-circle"></i>
                      </CTooltip>
                    </CCol>
                    <CCol lg="8">
                      <input
                        type="text"
                        placeholder="Nhập điểm đến"
                        className="inp"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        style={{ width: "100%" }}
                        required
                      />
                    </CCol>
                  </CRow>
                <CRow>
                  <CCol lg="4" className="pt-2">
                      Số tour {"  "}
                      <CTooltip content="Hello world! A tooltip example">
                        <i class="fas fa-info-circle"></i>
                      </CTooltip>
                    </CCol>
                    <CCol lg="8">
                      <input
                        type="number"
                        placeholder="Nhập số tour"
                        className="inp"
                        onChange={(e) => {
                          setNumOfTour(e.target.value);
                        }}
                        style={{ width: "100%" }}
                        required
                      />
                    </CCol>
                  </CRow> 
         
                </CCol>
                <CCol lg="6" className="pt-2">
                  <QuillEditor
                   title="Mô tả về điểm đến"
                    key={"toolbar5"}
                    placeholder={"Nhập mô tả về điểm đến"}
                    onEditorChange={(value) => setDestination(value)}
                    id={"toolbar5"}
                    onFilesChange={(files) => setFiles(files)}
                    required
                  />
                </CCol>
              </CRow>
              <CRow>
                  <CCol className="pt-3">
                    <MultiImageInput
                      images={images}
                      setImages={setImages}
                      theme={"light"}
                      cropConfig={{ crop, ruleOfThirds: true }}
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
export default CreateDestination;
