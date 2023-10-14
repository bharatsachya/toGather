import React from "react";
import SiteHeader from "../components/Header.jsx"; 
import PrimaryNav from '../components/primaryNav.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SecondaryNav from '../components/secondaryNav.jsx';
import DocumentLinks from '../components/DocumentsLinks.jsx'
export default function Home() {
  return <div>
    <h1>Home</h1>
    <PrimaryNav/>
    <SiteHeader/>
    <SecondaryNav/>
    <DocumentLinks/>
    <SiteFooter/>
  </div>
}
