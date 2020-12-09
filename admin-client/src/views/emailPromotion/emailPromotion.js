import React, { lazy, useEffect, useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "../../common/axiosClient";
import ToDateForView from "../../common/convertDateForView";

const fields = [
  { key: "email", label: "ĐỊA CHỈ EMAIL", _style: { width: "15%" } },
  { key: "createdAt", label: "NGÀY ĐĂNG KÝ", _style: { width: "15%" } },
  { key: "status", label: "TÌNH TRẠNG", _style: { width: "23%" } },

  { key: "id", label: "THAO TÁC", _style: { width: "5%" } },
];
const getBadge = (status) => {
  switch (status) {
    case status:
      return "success";
    case !status:
      return "danger";
    default:
      return "primary";
  }
};
function Account() {
  const [emails, setEmails] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("/email-promotions")
        .then((response) => {
          setEmails(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(true);
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <CCard>
        <CCardHeader className="CCardHeader-title ">
          <h1>Quản lý Email khách hàng</h1>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={emails}
            fields={fields}
            striped
            itemsPerPage={5}
            pagination
            loading={loading}
            scopedSlots={{
              createdAt: (item) => <td>{ToDateForView(item.createdAt)}</td>,
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>
                    {item.status ? "Đang hoạt động" : "Ngưng hoạt động"}
                  </CBadge>
                </td>
              ),
              id: (item) => (
                <td style={{ display: "flex", justifyContent: "start" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "80%",
                      justifyContent: "space-between",
                    }}
                  >
                    <CLink className="c-subheader-nav-link" href="#">
                      <CIcon name="cil-pencil" alt="Edit" />
                      {/* {item.id} */}
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
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
}

export default Account;
