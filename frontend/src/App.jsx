import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import DashBoard from "./pages/DashBoard";
import AdminHome from "./adminpages/AdminHome";
import AdminAbout from "./adminpages/AdminAbout";
import AddTaskForm from "./adminpages/AddTaskForm";
import UserRegistration from "./pages/userRegistration";
// import UserDashBoard from "./pages/userDashboard";
import DashBoardUser from "./pages/DashboardUser";
import UserTask from "./adminpages/UserTask";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="registration" element={<Registration />} />
            {/* <Route path="userreg" element={<userRegistration />} /> */}
          </Route>
        </Routes>

        <Routes>
          <Route path="dashboard" element={<DashBoard />}>
            <Route path="adminhome" element={<AdminHome />} />
            <Route path="adminabout" element={<AdminAbout />} />
            <Route path="addtask" element={<AddTaskForm />} />
            <Route path="userregister" element={<UserRegistration />} />
          </Route>
          <Route>
            <Route path="userdashboard" element={<DashBoardUser />} >
            <Route path="userTask" element={<UserTask />} />
            </Route>
          </Route>
        </Routes>

        {/* </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
