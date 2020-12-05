import React, { lazy, useState, useEffect } from "react";
import ToDateForView from "../../common/convertDateForView";
import toPriceForView from "../../common/convertPriceForView";
import MultiImageInput from "react-multiple-image-input";
import { produce } from "immer";
import QuillEditor from "../editor/quillEditor";

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
  const [images, setImages] = useState({});
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [day, setDay] = useState(1);
  const [locations, setLocations] = useState([
    {
      coordinates: [0, 0],
      title: "",
      description: "",
      day: 1,
    },
  ]);
  console.log(locations);
  const onChangeDescription = (value) => {
    console.log(value);
    setDescription(value);
  };
  const onChangeSummary = (value) => {
    setSummary(value);
  };

  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

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
                        <hr />
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
                        <hr />
                      </CCol>
                      <CCol lg="9">
                        {" "}
                        <CInput
                          frameBorder={false}
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
                        <hr />
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
                        <hr />
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
                      <CCol className="pt-3">
                        <MultiImageInput
                          images={images}
                          setImages={setImages}
                          theme={"light"}
                          cropConfig={{ crop, ruleOfThirds: true }}
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg="4">
                    <CRow>
                      <CCol lg="5">
                        Giá người lớn{"  "}
                        <CTooltip content="Hello world! A tooltip example">
                          <i class="fas fa-info-circle"></i>
                        </CTooltip>
                        <hr />
                      </CCol>
                      <CCol lg="7">
                        <CInput
                          type="text"
                          placeholder="Địa điểm bắt đầu"
                          className="inp"
                        />
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol lg="5">
                        Giá trẻ em{"  "}
                        <CTooltip content="Hello world! A tooltip example">
                          <i class="fas fa-info-circle"></i>
                        </CTooltip>
                        <hr />
                      </CCol>
                      <CCol lg="7">
                        <CInput
                          type="text"
                          placeholder="Địa điểm bắt đầu"
                          className="inp"
                        />
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol lg="5">
                        Giá em bé{"  "}
                        <CTooltip content="Hello world! A tooltip example">
                          <i class="fas fa-info-circle"></i>
                        </CTooltip>
                        <hr />
                      </CCol>
                      <CCol lg="7">
                        <CInput
                          type="text"
                          placeholder="Địa điểm bắt đầu"
                          className="inp"
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </CContainer>
            </CTabPane>
            <CTabPane data-tab="description">
              <CContainer>
                <CRow className="pt-3">
                  <CCol>
                    <QuillEditor
                      placeholder={"Nhập tóm tắt về Tour"}
                      onEditorChange={onChangeSummary}
                      title={"Tóm tắt"}
                      id={"toolbar1"}
                      // onFilesChange={onFilesChange}
                    />
                  </CCol>
                </CRow>
                <CRow className="pt-3">
                  <CCol>
                    <QuillEditor
                      placeholder={"Nhập mô tả về Tour"}
                      onEditorChange={onChangeDescription}
                      title={"Mô tả chi tiết"}
                      id={"toolbar2"}
                      // onFilesChange={onFilesChange}
                    />
                  </CCol>
                  <hr />
                </CRow>
              </CContainer>
            </CTabPane>
            <CTabPane data-tab="destination">
              <CContainer>
                <CRow>
                  <CCol>
                    {locations.map((el, index) => (
                      <div key={index}>
                        <div className="d-flex justify-content-between">
                          <h4>Ngày {index + 1}</h4>
                          <CButton
                            size="sm"
                            color="danger"
                            className="ml-1"
                            onClick={() => {
                              setLocations((el) =>
                                el.filter((x) => x.day - 1 !== index)
                              );
                            }}
                          >
                            x
                          </CButton>
                        </div>

                        <CRow>
                          <CCol lg="3">
                            {" "}
                            Tiêu đề điểm đến{"  "}
                            <CTooltip content="Hello world! A tooltip example">
                              <i class="fas fa-info-circle"></i>
                            </CTooltip>
                            <hr />
                          </CCol>
                          <CCol>
                            <CInput
                              type="text"
                              placeholder="Tiêu đề điêm đến"
                              className="inp"
                              onChange={(e) => {
                                const title = e.target.value;
                                setLocations((el) =>
                                  produce(el, (v) => {
                                    v[index].title = title;
                                    v[index].day = index + 1;
                                  })
                                );
                              }}
                            />
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol lg="3">
                            Vị trí bản đồ{"  "}
                            <CTooltip content="Hello world! A tooltip example">
                              <i class="fas fa-info-circle"></i>
                            </CTooltip>
                            <hr />
                          </CCol>
                          <CCol lg="9">
                            <CRow>
                              <CCol>
                                <CInput
                                  type="text"
                                  placeholder="Vị trí vĩ độ latitude"
                                  className="inp"
                                  onChange={(e) => {
                                    const latitude = e.target.value;
                                    setLocations((el) =>
                                      produce(el, (v) => {
                                        v[index].coordinates[0] = latitude;
                                      })
                                    );
                                  }}
                                />
                              </CCol>
                              <CCol>
                                <CInput
                                  type="text"
                                  placeholder="Vị trí kinh độ longitude"
                                  className="inp"
                                  onChange={(e) => {
                                    const longitude = e.target.value;
                                    setLocations((el) =>
                                      produce(el, (v) => {
                                        v[index].coordinates[1] = longitude;
                                      })
                                    );
                                  }}
                                />
                              </CCol>
                            </CRow>
                          </CCol>
                        </CRow>

                        <CRow className="py-3">
                          <CCol>
                            <QuillEditor
                              placeholder={"Nhập mô tả về điểm đến"}
                              onEditorChange={(value) => {
                                const desciption = value;
                                setLocations((el) =>
                                  produce(el, (v) => {
                                    v[index].description = desciption;
                                  })
                                );
                              }}
                              title={"Mô tả điểm đến"}
                              id={`toolbar${index + 10}`}
                              // onFilesChange={onFilesChange}
                            />
                            <hr />
                          </CCol>
                        </CRow>
                      </div>
                    ))}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CButton
                      size="sm"
                      color="info"
                      onClick={() => {
                        setLocations((el) => [
                          ...el,
                          {
                            coordinates: [0, 0],
                            title: "",
                            description: "",
                            day: day,
                          },
                        ]);
                      }}
                    >
                      Thêm mới điểm đến
                    </CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CTabPane>
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
