import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
// import { useLoading } from '../../contexts/LoadingContext';
// import { useAlert } from '../../contexts/AlertContext';
import Table from "./Table";
import Header from "./Header";
import NewPost from "./newpost";
// import DrawerMenu1 from './DrawerMenu1';
const dataDemo = [
  {
    id: 1,
    column1:
      "Lễ tổng kết hoạt động tuân thủ và chương trình Đại sứ tuân thủ 2024: Văn hóa doanh nghiệp CPV minh bạch và bền vững",
    column2: "Feed",
    column3: "Dữ liệu cột 3 - Hàng 1",
    column4: "Dữ liệu cột 4 - Hàng 1",
    column5: "Dữ liệu cột 5 - Hàng 1",
    column6: "Dữ liệu cột 6 - Hàng 1",
    column7: "Dữ liệu cột 7 - Hàng 1",
  },
  {
    id: 2,
    column1: "C.P. Việt Nam lan tỏa yêu thương đến những vùng biên cương",
    column2: "Food",
    column3: "Dữ liệu cột 3 - Hàng 2",
    column4: "Dữ liệu cột 4 - Hàng 2",
    column5: "Dữ liệu cột 5 - Hàng 2",
    column6: "Dữ liệu cột 6 - Hàng 2",
    column7: "Dữ liệu cột 7 - Hàng 2",
  },
  {
    id: 3,
    column1: "C.P. Việt Nam: Top 10 uy tín, Top 50 xuất sắc năm 2024.",
    column2: "Truyền thống",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
  {
    id: 4,
    column1: "Dữ liệu cột 1 - Hàng 3",
    column2: "Dữ liệu cột 2 - Hàng 3",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
  {
    id: 5,
    column1: "Dữ liệu cột 1 - Hàng 3",
    column2: "Dữ liệu cột 2 - Hàng 3",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
  {
    id: 6,
    column1: "Dữ liệu cột 1 - Hàng 3",
    column2: "Dữ liệu cột 2 - Hàng 3",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
  {
    id: 7,
    column1: "Dữ liệu cột 1 - Hàng 3",
    column2: "Dữ liệu cột 2 - Hàng 3",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
  {
    id: 8,
    column1: "Dữ liệu cột 1 - Hàng 3",
    column2: "Dữ liệu cột 2 - Hàng 3",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
  {
    id: 9,
    column1: "Dữ liệu cột 1 - Hàng 3",
    column2: "Dữ liệu cột 2 - Hàng 3",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
  {
    id: 10,
    column1: "Dữ liệu cột 1 - Hàng 3",
    column2: "Dữ liệu cột 2 - Hàng 3",
    column3: "Dữ liệu cột 3 - Hàng 3",
    column4: "Dữ liệu cột 4 - Hàng 3",
    column5: "Dữ liệu cột 5 - Hàng 3",
    column6: "Dữ liệu cột 6 - Hàng 3",
    column7: "Dữ liệu cột 7 - Hàng 3",
  },
];
function PageMenu1() {
  const [isShowAddNewPost, setIsShowAddNewPost] = useState(false);

  const handleIsShowAddNewPost = () => {
    setIsShowAddNewPost(true);
  };

  return (
    <Box
      py={3}
      px={3}
      bgcolor={"white"}
      borderRadius={2}
      // height={"90%"}
      // component={Paper}
    >
      {/* <DrawerMenu1 onClose = {onClose} open={open}/> */}
      {!isShowAddNewPost && (
        <>
          <Header handleIsShowAddNewPos={handleIsShowAddNewPost} />
          <Box mt={2}>
            <Table rows={dataDemo} />
            {/* <Table rows={dataDemo} /> */}
          </Box>
        </>
      )}
      {isShowAddNewPost && <NewPost />}
    </Box>
  );
}

export default PageMenu1;
