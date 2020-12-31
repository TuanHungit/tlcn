import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";

const TheHeaderDropdownNotif = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    const pusher = new Pusher("c3acf5ea606cbffb9e16", {
      cluster: "ap1",
    });
    const channel = pusher.subscribe("my-channel");
    channel.bind("doc_updated", (data) => {
      setBooking(data);
      setItemsCount((state) => state + 1);
    });
  }, []);

  return (
    <CDropdown inNav className="c-header-nav-item mx-2">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell" />
        {booking ? (
          <CBadge shape="pill" color="danger">
            {itemsCount}
          </CBadge>
        ) : null}
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem header tag="div" className="text-center" color="light">
          <strong>Bạn có {itemsCount} notifications</strong>
        </CDropdownItem>
        {booking ? (
          <CDropdownItem>
            <Link
              to="booking"
              onClick={(e) => {
                setBooking(null);
                setItemsCount((state) => state - 1);
              }}
            >
              <CIcon name="cil-user-unfollow" className="mr-2 text-danger" />
              Người dùng Hủy Tour
            </Link>
          </CDropdownItem>
        ) : null}

        <CDropdownItem>
          <CIcon name="cil-user-follow" className="mr-2 text-success" /> Người
          dùng mới
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-chart-pie" className="mr-2 text-info" /> Hóa đơn mới
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdownNotif;
