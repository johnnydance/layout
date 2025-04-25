
import { createContext, useContext, useEffect, useState } from "react"

import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { Path } from "../api/Path"
import { API_GET_LANGUAGE } from "../api/Assets"
import env from "../constants/enviroment"

const updateLanguageResources = (languageData) => {
  if (languageData) {
    Object.keys(languageData.detail).forEach((langKey) => {
      const langData = languageData.detail[langKey]
      i18next.addResourceBundle(langKey, "translation", langData, true, true)
    })
  }
}

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
})

export const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null)

  const [language, setLanguage] = useState(null)
  const [langUse, setLangUse] = useState("en")
  const [config, setConfig] = useState(null)

  useEffect(() => {
    // localStorage.clear()
    let userStorage = localStorage.getItem("userSmartCD")
    let langUseStorage = localStorage.getItem("langUseSmartCD")
    let configStorage = localStorage.getItem("configSmartCD")

    if (langUseStorage) {
      setLangUse(langUseStorage)
      const defaultLang = "en"
      i18next.changeLanguage(langUseStorage || defaultLang)
    }

    if (userStorage) {
      setUser(JSON.parse(userStorage))
    }
    if (configStorage) {
      setConfig(JSON.parse(configStorage))
    }
  }, [])

  useEffect(() => {
    // Fetch and set language resources
    const handlegetLanguage = () => {
      API_GET_LANGUAGE({ ProgramID: env.programID }, (res) => {
        if (res.status === 200) {
          let _data = res.data.Data

          // Thêm thuộc tính image cho từng phần tử trong detail
          Object.keys(_data.detail).forEach((lang) => {
            _data.detail[lang] = {
              ..._data.detail[lang],
              image: {
                uri:
                  Path?.SF_IMAGE +
                  _data.listLang.find((e) => e.value === lang)?.Icon,
              },
            }
          })

          // Cập nhật phần listLang
          _data.listLang.forEach((e) => {
            e["image"] = { uri: Path?.SF_IMAGE + e?.Icon }
          })

          handleSaveLangUse(langUse)
          setLanguage(_data)
        }
      })
    }

    handlegetLanguage()
  }, [])

  useEffect(() => {
    if (language) {
      updateLanguageResources(language)
    }
  }, [language])

  const handleSaveLangUse = async (lng) => {
    if (lng === langUse) return
    try {
      setLangUse(lng)
      localStorage.setItem("langUseSmartCD", lng)
    } catch (error) {
      console.error("Failed to countryBusiness", error)
    }
  }

  const handleSaveProFile = (user, action) => {
    setUser(user)
    localStorage.setItem("userSmartCD", JSON.stringify(user))
    action() // Call the action function directly
  }

  const handleLogout = (action) => {
    setUser(null)
    localStorage.clear()
    action()
  }

  const handleSaveConfig = (config) => {
    setConfig(config)
    localStorage.setItem('configSmartCD', JSON.stringify(config))
  }

  return (
    <AppContext.Provider
      value={{
        user: user,
        langUse,
        language,
        config,

        handleSaveProFile: handleSaveProFile,
        handleLogout: handleLogout,
        handleSaveLangUse,
        handleSaveConfig
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export const useAppContext = () => useContext(AppContext);
