import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import "./assets/fonts/fonts.css";
import { BorderLeft, BorderRight } from "@mui/icons-material";

// Create a theme instance.
const theme = createTheme({
  drawerWidth: "280px",

  colorBgMenuActive: "rgba(246, 247, 249, 1)",
  colorTextMenuActive: "rgba(7, 78, 159, 1)",
  colorBgMenuHover: "rgba(246, 246, 246, 0.8)",

  palette: {
    primary: {
      main: "rgba(7, 78, 159, 1)", // Màu chính (xanh đậm)
      hover: "rgba(10, 110, 225, 1)", // Màu khi hover
      bgColor: "rgba(246, 246, 246, 1)", // Màu nền
    },
    secondary: {
      main: "#19857b", // Màu phụ (xanh lam)
    },
    error: {
      main: red.A400, // Màu lỗi
    },
    background: {
      default: "rgba(246, 246, 246, 1)", // Màu nền mặc định cho toàn bộ ứng dụng
      paper: "#ffffff", // Màu nền cho các component như Card, Paper
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)", // Màu chữ chính
      secondary: "rgba(0, 0, 0, 0.6)", // Màu chữ phụ
      disabled: "rgba(0, 0, 0, 0.38)", // Màu chữ khi disabled
    },
    divider: "rgba(0, 0, 0, 0.12)", // Màu của đường viền (Divider)
    action: {
      active: "rgba(7, 78, 159, 1)", // Màu khi active (dùng primary.main)
      hover: "rgba(7, 78, 159, 0.04)", // Màu khi hover
      selected: "rgba(7, 78, 159, 0.08)", // Màu khi được chọn
      disabled: "rgba(0, 0, 0, 0.26)", // Màu khi disabled
      disabledBackground: "rgba(0, 0, 0, 0.12)", // Màu nền khi disabled
    },
  },
  typography: {
    fontFamily: "IBMPlexSans",
  },
  components: {
    // Áp dụng màu mặc định cho toàn bộ ứng dụng
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgba(246, 246, 246, 1)", // Màu nền mặc định
          color: "rgba(0, 0, 0, 0.87)", // Màu chữ mặc định
        },
      },
    },
    // DataGrid
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderWidth: 0,
          fontSize: "16px",
          backgroundColor: "#ffffff",

          // Header pinned
          "& .MuiDataGrid-columnHeader--pinnedLeft": {
            backgroundColor: "transparent",
          },
          "& .MuiDataGrid-columnHeader--pinnedRight": {
            backgroundColor: "white",
          },

          // Cell pinned
          "& .MuiDataGrid-cell--pinnedLeft": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-cell--pinnedRight": {
            backgroundColor: "white",
          },

          // Fix màu pinned background
          "& .MuiDataGrid-cell--pinnedBackground": {
            backgroundColor: "white",
          },

          // Thêm fix cho container pinned
          "& .MuiDataGrid-filler--pinnedRight, & .MuiDataGrid-filler--pinnedLeft":
            {
              backgroundColor: "white",
              borderLeft: "none",
              borderRight: "none",
            },
        },

        // Header style
        columnHeader: {
          backgroundColor: "rgba(222, 237, 254, 1)",
          color: "rgba(10, 110, 225, 1)",
        },

        columnHeaderTitle: {
          fontWeight: 700,
        },

        // Row min height & content alignment
        row: {
          minHeight: "100px", // chỉnh chiều cao cho hàng
          maxHeight: "fit-content",
        },

        // Cell style: căn giữa và padding
        cell: {
          display: "flex",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        },
      },
    },
    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          textTransform: "none",
          whiteSpace: "nowrap",
          borderRadius: "8px",
          boxShadow: "none", // Tắt đổ bóng
          "&:hover": {
            boxShadow: "none", // Tắt đổ bóng khi hover
          },
          "&:active": {
            boxShadow: "none", // Tắt đổ bóng khi click
          },
          "&.Mui-disabled": {
            boxShadow: "none", // Tắt đổ bóng khi disabled
          },
        },
      },
    },

    // InputLabel
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: "normal",
          color: "rgba(152, 162, 179, 1)", // Màu chữ mặc định
          "&.Mui-disabled": {
            color: "rgba(0, 0, 0, 1) !important", // Màu label khi disabled
          },
        },
      },
    },
    // TextField
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "white",
            "& fieldset": {
              borderColor: "rgba(228, 231, 236, 1)", // Màu viền mặc định
            },
            "&:hover fieldset": {
              borderColor: "rgba(7, 78, 159, 1)", // Màu viền khi hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(7, 78, 159, 1)", // Màu viền khi focus
            },
          },

          "& .MuiOutlinedInput-input": {
            color: "black", // Màu chữ chính

            "&::placeholder": {
              color: "rgba(152, 162, 179, 1)", // Màu placeholder
              opacity: 1, // mặc định một số browser có opacity thấp, nên set lại
            },
          },
        },
      },
    },
    // Paper
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // Màu nền mặc định cho Paper
        },
      },
    },
    // Link
    MuiLink: {
      styleOverrides: {
        root: {
          color: "rgba(7, 78, 159, 1)", // Màu mặc định cho Link (primary.main)
          "&:hover": {
            color: "rgba(12, 77, 160, 0.9)", // Màu khi hover (primary.hover)
          },
        },
      },
    },
    // Typography
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#344054", // Màu chữ mặc định
        },
      },
    },
    // Card
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // Màu nền mặc định cho Card
          color: "rgba(0, 0, 0, 0.87)", // Màu chữ mặc định
        },
      },
    },
    // Divider
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.12)", // Màu mặc định cho Divider
        },
      },
    },
  },
});

export default theme;
