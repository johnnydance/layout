// providers/index.js

import { AlertProvider } from "./AlertContext";
import AppProvider from "./AppContext";
import combineProviders from "./combineProviders";
import { LoadingProvider } from "./LoadingContext";

const CombinedProviders = combineProviders(
  AppProvider,
  AlertProvider,
  LoadingProvider,
);

export default CombinedProviders;
