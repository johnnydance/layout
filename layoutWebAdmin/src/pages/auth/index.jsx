import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { imageLogin, logAxons, logoFiveStar } from "../../constants/images";
import { useLoading } from "../../contexts/LoadingContext";
import { useTranslation } from "react-i18next";
import { COPYRIGHT_NOTICE, NAME_APPLICATION, VERSION_APP } from "../../constants/statics";
import LaguageSelect from "../../layouts/appBar/LaguageSelect";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { BsPerson, BsKey  } from "react-icons/bs";

export default function Login() {
  const { t } = useTranslation()
  const { showLoading, hideLoading } = useLoading()

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userDomain = formData.get("userDomain");
    const password = formData.get("password");
    
    showLoading()

    const body = {
      "UserDomain" : userDomain,
      "PassWord"  : password,
      "Country_Code": "KH"
    }

    // ApiLogin(body, res => {
    //   if (res?.status === 200) {
    //     const data = res?.data
    //     handleSaveProFile(data, () => navigate(RHome.path) )
    //     hideLoading()
    //   } else {
    //     hideLoading()
    //     showAlert({ content : t(res.message) })
    //   }
    // }
    // )


  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Phần bên trái với hình ảnh */}
      <Grid
        item
        size={{
          xs: false,
          sm: 6,
          md: 6
        }}
        sx={{
          backgroundImage: `url(${imageLogin})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Phần bên phải với nội dung */}
      <Grid
        item
        size={{
          xs: 12,
          sm: 6,
          md: 6
        }}
        // component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          px: '32px',
        }}
      >
        {/* Nội dung chính */}
        <Box position={"absolute"} right={'32px'} top={50}>
          <LaguageSelect />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Giúp căn giữa nội dung
            py: 4,
          }}
        >
          <Box>
            <img height={100} src={logAxons} alt="Logo" />
            {/* <img height={100} src={logAxons} alt="Logo" /> */}
          </Box>
         
          <Typography pb={4} pt={'8px'} fontSize={'26px'} fontWeight={'700'}>
            {NAME_APPLICATION}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, maxWidth: 400, width: "100%", gap: '16px', display:"flex", flexDirection: "column" }}
          >
            
            <TextField
              required
              fullWidth
              id="userDomain"
              label="User Domain"
              name="userDomain"
              autoComplete="email"
              autoFocus
            //   slotProps={{
            //   input: {
            //     startAdornment: (
            //       <InputAdornment position="start">
            //         <BsPerson color="rgba(152, 162, 179, 1)" fontSize={24}/>
            //       </InputAdornment>
            //     ),
            //   },
            // }}
            placeholder={t("Enter user name")}
              
            />
            <TextField
              size="medium"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" 
              placeholder={t("Enter Password")}
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                height: 44
              }}
            >
              {t("Đăng Nhập")}
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            backgroundColor: "rgba(245, 245, 245, 1)",
            py: 2,
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* <Divider /> */}
          <Box
            display="flex"
            justifyContent="space-between"
            px={2}
            alignItems="center"
            sx={{
              flexDirection : {
                xs: 'column',
                sm: 'column',
                md: 'row'
              }
            }}
          >
            <Typography
              color="rgba(102, 112, 133, 1)"
              fontSize={16}
              variant="subtitle1"
            >
              {VERSION_APP}
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={16}
              color="rgba(102, 112, 133, 1)"
            >
              {COPYRIGHT_NOTICE}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}