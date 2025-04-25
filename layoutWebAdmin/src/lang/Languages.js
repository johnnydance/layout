import i18next from 'i18next'
import { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext'
import { initReactI18next } from 'react-i18next'

const updateLanguageResources = (languageData) => {
  if (languageData) {
    Object.keys(languageData?.detail).forEach((langKey) => {
      const langData = languageData.detail[langKey]
      // Cập nhật tài nguyên ngôn ngữ cho mỗi ngôn ngữ
      i18next.addResourceBundle(langKey, 'translation', langData)
    })
  }
}

// Khởi tạo i18next
i18next
  .use(initReactI18next) // Sử dụng initReactI18next
  .init({
    compatibilityJSON: 'v3',
    lng: 'vn',
    fallbackLng: 'vn'
  })

const Languages = () => {
  const { language } = useContext(AppContext)

  useEffect(() => {
    // Gọi hàm cập nhật tài nguyên ngôn ngữ khi language thay đổi
    updateLanguageResources(language)
  }, [language])

  return null // hoặc bạn có thể trả về một phần tử null
}

export default Languages
