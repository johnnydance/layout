import { LANGUAGE } from "./Fetch"
import env from "../constants/enviroment"


export const API_GET_LANGUAGE = (data, handleData) =>
  LANGUAGE(env.apiLanguage, data, res => {
    handleData(res)
  })
