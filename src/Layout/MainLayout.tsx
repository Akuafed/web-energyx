import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> 
        <Outlet /> {/* Ini tempat isi page tampil */}
      </main>
      <Footer />
    </>
  );
}
