import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import theme from "./theme";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import AppRoute from "./routes";
import CombinedProviders from "./contexts";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <CombinedProviders>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter >
            <AppRoute />
            </BrowserRouter>
          </LocalizationProvider>
        </CombinedProviders>
      </CssBaseline>
      {/* </Suspense> */}
    </ThemeProvider>
  )
}

export default App
