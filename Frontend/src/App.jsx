import { Route,Routes } from "react-router-dom";
import FormPage from "./pages/FormPage";
import SubmissionsPage from "./pages/SubmissionsPage";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

function App() {
  console.log(import.meta.env.VITE_BACKEND_URL)

  return (
    <Routes>
      <Route index element={<FormPage/>}/>
      <Route path="/submissions" element={<SubmissionsPage/>} />
    </Routes>
  )
}

export default App
