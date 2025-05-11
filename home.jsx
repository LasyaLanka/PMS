import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ind1 from "../assets/ind1.jpeg";
import img2 from "../assets/img2.jpeg";
import villa1 from "../assets/villa1.jpeg";
import apartment from "../assets/apartment.jpg";
import indhouse from "../assets/indhouse.jpeg";

const home = () => {
  return (
    <>
      <style>{`
        .custom-navbar {
          background-color: #b3ecf2;
          padding: 15px 16px; /* Increased padding for navbar height */
          border-bottom: 1px solid #f2f2f2;
          width: 100%;
          height: 80px; /* Fixed height for navbar */
        }

        .custom-navbar .navbar-nav .nav-link {
          color: #000;
          margin-right: 15px;
          font-weight: bold;
          font-size: 1rem; /* Slightly larger font size */
        }

        .custom-navbar .navbar-brand {
          font-size: 1.5rem; /* Increased font size */
          padding-right: 20px;
        }

        .custom-navbar .nav-link:hover,
        .custom-navbar .nav-link.active {
          text-decoration: underline;
        }

        .custom-navbar .btn-outline-success {
          border: 1px solid #006400;
          color: #000;
          font-weight: bold;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }

        .custom-navbar .btn-outline-success:hover {
          background-color: #e6ffe6;
        }

        @media (max-width: 1440px) {
          .carousel img {
            height: 600px; /* Increased height for carousel images */
            object-fit: cover;
            width: 100%; /* Ensures full width */
          }

          .property-type img {
            width: 300px !important;  /* Increased image width */
            height: 200px !important; /* Increased image height */
            object-fit: cover;
          }

          .custom-navbar .nav-link {
            font-size: 1rem;
          }

          .custom-navbar .navbar-brand {
            font-size: 1.25rem;
          }
        }

        body {
          margin: 0;
        }

        .property-types {
          text-align: center;
          margin: 30px 0;
        }

        .property-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .property-type img {
          width: 100%;  /* Make sure the image stretches to fill the container */
          max-width: 350px; /* Allow the image to grow larger */
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        .property-type span {
          display: block;
          margin-top: 10px;
          font-weight: bold;
        }

        .footer {
          background-color: #b3e5f2;
          padding: 40px 20px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-column {
          flex: 1;
          min-width: 200px;
          margin: 20px;
        }

        .footer-logo h3 {
          margin-bottom: 10px;
        }

        .footer-column h3 {
          margin-bottom: 15px;
          font-weight: bold;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
        }

        .footer-column ul li {
          margin-bottom: 10px;
        }

        .footer-column ul li a {
          text-decoration: none;
          color: #000;
        }

        .footer-icon {
          margin-right: 8px;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">PMS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link active" href="/about-us">About Us</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Properties
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/indhouses">Individual Houses</a></li>
                  <li><a className="dropdown-item" href="/apartment">Apartments</a></li>
                  <li><a className="dropdown-item" href="/villa">Villas</a></li>
                  <li><a className="dropdown-item" href="/duplex">Duplex</a></li>
                  <li><a className="dropdown-item" href="/pg">PG</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link active" href="/booking">Bookings</a></li>
              <li className="nav-item"><a className="nav-link active" href="/maintenance">Maintenance</a></li>
              <li className="nav-item"><a className="nav-link active" href="/contact">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link active" href="/faq">FAQ</a></li>
            </ul>
            <form className="d-flex" action="/login">
              <button className="btn btn-outline-success" type="submit">Login/Sign Up</button>
            </form>
          </div>
        </div>
      </nav>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ind1} className="d-block w-100" alt="img1" style={{ height: '1100px', width: '800px',objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="img2" style={{ height: '600px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img src={villa1} className="d-block w-100" alt="img3" style={{ height: '600px', objectFit: 'cover' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="property-types mt-5">
        <h1>No matter what you manage, we’ve got you covered</h1>
        <p className="description">
          Scale your business efficiently with a centralized system of record that supports your entire portfolio.
        </p>
        <div className="property-row">
          <div className="property-type">
            <img src={indhouse} alt="Individual Houses" />
            <span>Individual houses</span>
          </div>
          <div className="property-type">
            <img src={apartment} alt="Apartment" />
            <span>Apartment</span>
          </div>
          <div className="property-type">
            <img src={villa1} alt="Villa" />
            <span>Villa</span>
          </div>
        </div>
      </div>

      <footer className="footer mt-5">
        <div className="footer-container">
          <div className="footer-column footer-logo">
            <h3>PropEase</h3>
            <p>We simplify property management for landlords, tenants, and agents by delivering tech-driven solutions that improve communication, maintenance tracking, and financial oversight.</p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p><span className="footer-icon">📞</span>+91 1234567891</p>
            <p><span className="footer-icon">📧</span>pms@gmail.com</p>
            <p><span className="footer-icon">📍</span>KL University, Tadepalli, Vijayawada, Andhra Pradesh, 522302</p>
            <p>Working Hours</p>
            <p>9am-5pm(Mon-Sat)</p>
          </div>
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Property Listings</a></li>
              <li><a href="#">Tenant Management</a></li>
              <li><a href="#">Maintenance Requests</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Maintenance</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 PropEase Property Management. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default home;
