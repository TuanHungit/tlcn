import React, { lazy, useState, useEffect, useRef } from "react";
import MultiImageInput from "react-multiple-image-input";
import { produce } from "immer";
import QuillEditor from "../editor/quillEditor";
import DatePicker from "react-datepicker";
import { createOnTour } from "../../api/tourApi";
import { getAllDestinations } from "../../api/destinationApi";
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
  CSelect,
  CAlert,
} from "@coreui/react";

function TourCreate(props) {
  const [images, setImages] = useState({});
  const [name, setName] = useState("");
  const [priceAdults, setPriceAdults] = useState(0);
  const [priceChildren, setPriceChildren] = useState(0);
  const [priceBaby, setPriceBaby] = useState(0);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [filesSummary, setFilesSummary] = useState(null);
  const [filesDes, setFilesDes] = useState(null);
  const [filesLocation, setFilesLocation] = useState(null);
  const [summary, setSummary] = useState("");
  const [day, setDay] = useState(1);
  const [availableDate, setAvailableDate] = useState([new Date()]);
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [desList, setDesList] = useState(null);
  const [policy, setPolicy] = useState("");
  const [label, setLabel] = useState("");
  const [numOfPerson, setNumOfPerson] = useState(0);
  const [vehicle, setVehicle] = useState("");
  const [startLocation, setStartLocation] = useState({
    coordinates: [0, 0],
    address: "",
  });
  const [locations, setLocations] = useState([
    {
      coordinates: [0, 0],
      title: "",
      description: "",
      day: 1,
    },
  ]);
  useEffect(() => {
    const fetcData = async () => {
      try {
        const desList = await getAllDestinations(["name"]);
        setDesList(desList);
      } catch (err) {
        console.log(err);
      }
    };
    fetcData();
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    const fetcData = async () => {
      try {
        const createdData = {
          name,
          priceAdults,
          priceChildren,
          priceBaby,
          description,
          duration,
          policy,
          vehicle,
          label,
          numOfPerson,
          startLocation,
          summary,
          availableDate: [...convertToISOString(availableDate)],
          locations,
          images: [...Object.values(images)],
          country,
        };

        await createOnTour(destination, createdData);

        props.setSuccess(true);

        props.toggleModal();
      } catch (err) {
        props.setSuccess(false);
        console.log(err);
      }
    };
    fetcData();
  };

  const onChangeDescription = (value) => {
    console.log(value);
    setDescription(value);
  };
  const onChangeSummary = (value) => {
    setSummary(value);
  };
  console.log(images);
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const convertToISOString = (list) => {
    return list.map((el) => el.toISOString());
  };

  return (
    <CModal show={props.modal} onClose={props.CButtontoggleModal} size="xl">
      <CModalHeader closeButton>
        <h3>Thêm mới Tour</h3>
      </CModalHeader>
      <form onSubmit={onSubmit}>
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
              <CNavItem>
                <CNavLink data-tab="schedule">Lịch khởi hành</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="policy">Chính sách Tour</CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent className="pt-2">
              <CTabPane data-tab="info">
                <CContainer>
                  <CRow>
                    <CCol lg="8">
                      <CRow className="py-2">
                        <CCol lg="3">
                          Tên Tour {"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="9">
                          <input
                            type="text"
                            placeholder="Tên tour"
                            className="inp"
                            required
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </CCol>
                      </CRow>

                      <CRow className="py-2">
                        {" "}
                        <CCol lg="3">
                          Số ngày {"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="2">
                          {" "}
                          <input
                            frameBorder={false}
                            type="text"
                            placeholder="Số ngày"
                            className="inp"
                            required
                            onChange={(e) => setDuration(e.target.value)}
                          />
                        </CCol>
                        <CCol lg="2"></CCol>
                        <CCol lg="3">
                          Số người {"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="2">
                          {" "}
                          <input
                            frameBorder={false}
                            type="text"
                            placeholder="Số người"
                            className="inp"
                            required
                            onChange={(e) => setNumOfPerson(e.target.value)}
                          />
                        </CCol>
                      </CRow>

                      <CRow className="py-2">
                        <CCol lg="3">
                          Địa điểm bắt đầu {"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="9">
                          <input
                            type="text"
                            placeholder="Địa điểm bắt đầu"
                            className="inp"
                            required
                            onChange={(e) => {
                              const address = e.target.value;
                              setStartLocation((el) =>
                                produce(el, (v) => {
                                  v.address = address;
                                })
                              );
                            }}
                          />
                        </CCol>
                      </CRow>

                      <CRow className="py-2">
                        <CCol lg="3"></CCol>
                        <CCol lg="9">
                          <CRow>
                            <CCol>
                              <input
                                type="text"
                                placeholder="Vị trí kinh độ longtitude"
                                className="inp"
                                required
                                onChange={(e) => {
                                  const latitude = e.target.value;
                                  setStartLocation((el) =>
                                    produce(el, (v) => {
                                      v.coordinates[0] = latitude;
                                    })
                                  );
                                }}
                              />
                            </CCol>
                            <CCol>
                              <input
                                type="text"
                                placeholder="Vị trí vĩ độ latitude"
                                className="inp"
                                required
                                onChange={(e) => {
                                  const latitude = e.target.value;
                                  setStartLocation((el) =>
                                    produce(el, (v) => {
                                      v.coordinates[1] = latitude;
                                    })
                                  );
                                }}
                              />
                            </CCol>
                          </CRow>
                        </CCol>
                      </CRow>

                      <CRow className="py-2">
                        <CCol lg="3">
                          Phương tiện{"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="9">
                          <input
                            type="text"
                            placeholder=" Phương tiện di chuyển"
                            className="inp"
                            required
                            onChange={(e) => setVehicle(e.target.value)}
                          />
                        </CCol>
                      </CRow>
                    </CCol>
                    <CCol lg="4">
                      <CRow className="py-2">
                        <CCol lg="5">
                          Chọn điểm đến{"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="7">
                          <CSelect
                            class="form-select"
                            onChange={(e) => {
                              const data = e.target.value.split(",");
                              setCountry(data[1]);
                              setDestination(data[0]);
                            }}
                            required
                          >
                            <option selected>Chọn điểm đến</option>
                            {desList
                              ? desList.map((el, key) => (
                                  <option key={key} value={[el.id, el.name]}>
                                    {el.name}
                                  </option>
                                ))
                              : null}
                          </CSelect>
                        </CCol>
                      </CRow>
                      <CRow className="py-2">
                        <CCol lg="5">
                          Gắn nhãn {"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="7">
                          <CSelect
                            class="form-select"
                            onChange={(e) => setLabel(e.target.value)}
                            required
                          >
                            <option selected>Chọn nhãn</option>

                            <option key="1" value="Tour mới">
                              Tour mới
                            </option>
                            <option key="1" value="Tour tết">
                              Tour tết
                            </option>
                            <option key="1" value="Tour nổi bật">
                              Tour nổi bật
                            </option>
                          </CSelect>
                        </CCol>
                      </CRow>
                      <CRow className="py-2">
                        <CCol lg="5">
                          Giá người lớn{"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="7">
                          <input
                            type="text"
                            placeholder="Giá người lớn"
                            className="inp"
                            required
                            onChange={(e) => setPriceAdults(e.target.value)}
                          />
                        </CCol>
                      </CRow>
                      <CRow className="py-2">
                        <CCol lg="5">
                          Giá trẻ em{"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="7">
                          <input
                            type="text"
                            placeholder="Giá trẻ em"
                            className="inp"
                            required
                            onChange={(e) => setPriceChildren(e.target.value)}
                          />
                        </CCol>
                      </CRow>
                      <CRow className="py-2">
                        <CCol lg="5">
                          Giá em bé{"  "}
                          <CTooltip content="Hello world! A tooltip example">
                            <i class="fas fa-info-circle"></i>
                          </CTooltip>
                        </CCol>
                        <CCol lg="7">
                          <input
                            type="text"
                            required
                            placeholder="Giá em bé"
                            className="inp"
                            onChange={(e) => setPriceBaby(e.target.value)}
                          />
                        </CCol>
                      </CRow>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol className="pt-3">
                      <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        max={10}
                        cropConfig={{ crop, ruleOfThirds: true }}
                      />
                    </CCol>
                  </CRow>
                </CContainer>
              </CTabPane>
              <CTabPane data-tab="description">
                <CContainer>
                  <CRow className="pt-3">
                    <CCol>
                      <QuillEditor
                        key={"toolbar1"}
                        placeholder={"Nhập tóm tắt về Tour"}
                        onEditorChange={onChangeSummary}
                        title={"Tóm tắt"}
                        id={"toolbar1"}
                        onFilesChange={(files) => setFilesSummary(files)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="pt-3">
                    <CCol>
                      <QuillEditor
                        key={"toolbar2"}
                        placeholder={"Nhập mô tả về Tour"}
                        onEditorChange={onChangeDescription}
                        title={"Mô tả chi tiết"}
                        id={"toolbar2"}
                        onFilesChange={(files) => setFilesDes(files)}
                      />
                    </CCol>
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
                            </CCol>
                            <CCol>
                              <input
                                type="text"
                                placeholder="Tiêu đề điêm đến"
                                className="inp"
                                required
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
                            </CCol>
                            <CCol lg="9">
                              <CRow>
                                <CCol>
                                  <input
                                    type="text"
                                    placeholder="Vị trí kinh độ longitude"
                                    className="inp"
                                    required
                                    onChange={(e) => {
                                      const longitude = e.target.value;
                                      setLocations((el) =>
                                        produce(el, (v) => {
                                          v[index].coordinates[0] = longitude;
                                        })
                                      );
                                    }}
                                  />
                                </CCol>
                                <CCol>
                                  <input
                                    type="text"
                                    placeholder="Vị trí vĩ độ latitude"
                                    className="inp"
                                    required
                                    onChange={(e) => {
                                      const latitude = e.target.value;
                                      setLocations((el) =>
                                        produce(el, (v) => {
                                          v[index].coordinates[1] = latitude;
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
                                onFilesChange={(files) =>
                                  setFilesLocation(files)
                                }
                              />
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
              <CTabPane data-tab="schedule">
                <CContainer>
                  <CRow>
                    <CCol>
                      {availableDate.map((el, key) => (
                        <CRow className="pt-3" key={key}>
                          <h4>Ngày {key + 1}</h4>
                          <CCol>
                            <DatePicker
                              selected={availableDate[key]}
                              onChange={(date) => {
                                const dateUpdated = [...availableDate];
                                dateUpdated[key] = date;
                                console.log(dateUpdated);
                                setAvailableDate([...dateUpdated]);
                              }}
                              isClearable
                              placeholderText="Vui lòng chọn lịch khởi hành!"
                            />
                          </CCol>
                        </CRow>
                      ))}
                    </CCol>
                  </CRow>
                  <CRow className="pt-3">
                    <CCol>
                      <CButton
                        size="sm"
                        color="info"
                        onClick={() => {
                          setAvailableDate((el) => el.concat([new Date()]));
                        }}
                      >
                        Thêm mới điểm đến
                      </CButton>
                    </CCol>
                  </CRow>
                </CContainer>
              </CTabPane>
              <CTabPane data-tab="policy">
                <CContainer>
                  <CRow className="pt-3">
                    <CCol>
                      <QuillEditor
                        key={"toolbar11"}
                        placeholder={"Nhập chính sách Tour"}
                        onEditorChange={(value) => setPolicy(value)}
                        title={"Chính sách Tour"}
                        id={"toolbar11"}
                        onFilesChange={(files) => setFilesSummary(files)}
                      />
                    </CCol>
                  </CRow>
                </CContainer>
              </CTabPane>
            </CTabContent>
          </CTabs>
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
  );
}

export default TourCreate;
