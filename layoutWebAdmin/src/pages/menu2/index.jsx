import React from "react";
import { useLoading } from "../../contexts/LoadingContext";
import { useAlert } from "../../contexts/AlertContext";
import { Button } from "@mui/material";

function PageMenu2() {
  const { showLoading, hideLoading } = useLoading();
  const { showAlert } = useAlert();
  return (
    <div>
      <Button onClick={() => showLoading()}>Hiện Loading</Button>
      <Button
        onClick={() =>
          showAlert({
            title: "Thông Báo",
            content: "Nội dung thông báo",
            alertType: "confirmation",
            onOk: () => {},
            onCancel: () => {},
          })
        }
      >
        Hiện thông báo
      </Button>
    </div>
  );
}

export default PageMenu2;
