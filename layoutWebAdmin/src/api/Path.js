import env from "../constants/enviroment"

const DOMAIN = env.domain
const refreshTokenUrl = `${DOMAIN}${env.refreshTokenUrl}`

const API = DOMAIN //+ "api/"
const IMAGE = DOMAIN + "uploads/"
export const Path = {
  API,
  IMAGE,
  refreshTokenUrl,
}
