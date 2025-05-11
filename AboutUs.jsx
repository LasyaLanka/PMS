import React from 'react';

const AboutUs = () => {
  return (
    <>
      <section>
        {/* Add the image here */}
        <img 
          src="/images/ind2.jpg"  // The image you want to use
          height={500} 
          width={1265} 
          alt="About Us Image"
        />
      </section>

      <section className="content">
        <h2>Who We Are</h2>
        <p>
          Founded in 2025, our Property Management System (PMS) is dedicated to providing comprehensive and efficient solutions for residential and commercial property owners. With years of experience and a commitment to innovation, we empower landlords and property managers to streamline their operations.
        </p>
        <p>
          Our services range from tenant management and rent collection to maintenance scheduling and legal compliance. We are driven by our mission to simplify property management and maximize property value for our clients.
        </p>
        <p>
          With a user-first philosophy, our PMS platform is built for speed, security, and scalability—ensuring you stay ahead in today’s competitive real estate landscape.
        </p>
      </section>

      <section className="team">
        <h2>Executive Team</h2>
        <div className="team-members">
          <div className="member">
            <img 
              src="https://randomuser.me/api/portraits/men/45.jpg" 
              alt="Executive 1" 
            />
            <h3>Siva Aasrith</h3>
            <p>CEO & Founder</p>
            <p>Email: siva@pms.com</p>
          </div>
          <div className="member">
            <img 
              src="https://randomuser.me/api/portraits/men/76.jpg" 
              alt="Executive 2" 
            />
            <h3>Jayaram</h3>
            <p>CTO</p>
            <p>Email: jayaram@pms.com</p>
          </div>
          <div className="member">
            <img 
              src="https://randomuser.me/api/portraits/women/68.jpg" 
              alt="Executive 3" 
            />
            <h3>Lasya</h3>
            <p>Operations Director</p>
            <p>Email: lasya@pms.com</p>
          </div>
        </div>
      </section>

      <footer>
        &copy; 2025 Property Management System | All Rights Reserved
      </footer>

      <style>
        {`
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9f9f9;
            color: #333;
          }

          section {
            margin-bottom: 50px;
          }

          .content {
            max-width: 1000px;
            margin: 50px auto;
            padding: 0 20px;
            line-height: 1.8;
          }

          .content h2 {
            font-size: 32px;
            margin-bottom: 20px;
            color: #006d77;
          }

          .content p {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .team {
            background-color: #e8f6f8;
            padding: 50px 20px;
          }

          .team h2 {
            text-align: center;
            margin-bottom: 40px;
            color: #007b8f;
          }

          .team-members {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 30px;
          }

          .member {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            padding: 20px;
            width: 250px;
            text-align: center;
          }

          .member img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 15px;
          }

          .member h3 {
            margin: 10px 0 5px;
            font-size: 20px;
          }

          .member p {
            margin: 5px 0;
            font-size: 14px;
            color: #555;
          }

          footer {
            text-align: center;
            padding: 30px;
            background-color: #222;
            color: white;
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
};

export default AboutUs;
