import React, { Fragment } from "react";
import AppBarCustom from "./AppBar";
import { Box } from "@mui/material";
import Footer from "./footer";
import SideBars from "./sideBars/SideBars";
import HeaderPage from "./HeaderPage";
import { useMediaQuery } from "react-responsive";

function Main({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Fragment>
      <AppBarCustom />
      <Box
        display={"flex"}
        flexDirection={"row"}
        bgcolor={"rgba(246, 247, 249, 1)"}
        height={"calc(100vh - 80px)"} // Chiều cao trừ AppBar
      >
        {/* SideBars bên trái */}
        {
          !isMobile && <SideBars />
        }
        

        {/* Nội dung chính bên phải */}
        <Box
          sx={{
            // height: "90vh", // Giữ chiều cao cố định
            overflowX: "hidden",
            px: 4,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",   // Chiều cao tối thiểu bằng vùng hiển thị
            position: "relative", // Quan trọng cho Footer
          }}
        >
          {/* Phần nội dung chính với HeaderPage và children */}
          <Box
            sx={{
              flex: 1, // Chiếm toàn bộ không gian còn lại trừ Footer
              // overflowY: "auto", // Cho phép cuộn dọc nếu nội dung dài
              // py: 4, // Giữ padding như code mới
              mt : 4
            }}
          >
            <HeaderPage />
            {children}
          </Box>

          {/* Footer nằm dưới cùng */}
          <Box
            sx={{
              position: "sticky",  // Giữ dưới cùng khi nội dung ngắn
              bottom: 0,
              bgcolor: "white",    // tránh bị trong suốt nếu cuộn
              zIndex: 1
            }}
          >
            <Footer />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Main;