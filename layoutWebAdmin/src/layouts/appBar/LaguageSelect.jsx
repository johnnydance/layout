import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useAppContext } from "../../contexts/AppContext";
import env from "../../constants/enviroment";
import { useTranslation } from "react-i18next";

function LaguageSelect({ border = false }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { langUse, language, handleSaveLangUse } = useAppContext()
  const { i18n } = useTranslation()

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value)
    handleSaveLangUse(event.target.value)
  }
  

  
  return (
    // <FormControl variant="outlined" style={{ width: 200}}>
    <Select
      sx={{
        border: "0px",
        borderRadius: 2,
        bgcolor: "white",
        ...(border && {
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        }
    })
       
      }}
      size="small"
      value={langUse}
      onChange={handleLanguageChange}
      renderValue={(selected) => {
        const selectedLang = language?.listLang.find((e) => e.value === selected);
        return (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img
                src={env.tranShowImage+ selectedLang?.Icon}
                alt="lang"
                style={{ width: "24px", height: "100%" }}
              />
            {
              !isMobile && <Typography fontWeight={"400"}>
              {selectedLang?.label}
            </Typography>
            }
            
          </div>
        );
      }}
    >
      {language?.listLang?.map((e) => (
        <MenuItem
          key={e.value}
          value={e.value}
          style={{ display: "flex", alignItems: "center", gap:2 }}
        >
            {/* Avatar icon */}
            <img
              src={env.tranShowImage+ e?.Icon}
              alt="lang"
              style={{ width: "24px", height: "100%" }}
              
            />
          <Typography variant="inherit">{e?.label}</Typography>
        </MenuItem>
      ))}
    </Select>
    // </FormControl>
  );
}

export default LaguageSelect;
