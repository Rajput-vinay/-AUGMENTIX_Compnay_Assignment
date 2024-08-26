import AuthProvider from "./context/Auth";
import Authentication from "./pages/Authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./Posts/CreatePost";
import UpdatePost from "./Posts/UpdatePost";
import NavBar from "./components/NavBar"; // Assuming NavBar component
import Footer from "./components/Footer"; // Assuming Footer component

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 flex flex-col">
      <BrowserRouter>
        <AuthProvider>
          
          <main className="flex-grow">
            <Routes>
              <Route path="/auth" element={<Authentication />} />
              <Route path="/" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/update/:id" element={<UpdatePost />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
