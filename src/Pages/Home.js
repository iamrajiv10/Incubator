import React from "react";
import './styles/Home.css'
import Layout from "../component/Layout";

const Home = () => {
  return (
    <Layout title={"Home Page"}>
      <div>
            <div className="first">
                <div className="Headline">
                    <h1>One Stop Digital Growth Roadmap For All Brands!</h1>
                    <p>Leveraging the power of SEO, Social Media, and Content, we unleash the full digital potential of your business in no time.</p>
                </div>
                <div className="Headline">
                    <img src="https://www.shutterstock.com/image-photo/ladder-career-path-business-growth-260nw-1454002997.jpg" />
                </div>
            </div>
            <div className="second">
            <h1>OUR SERVICES</h1>
            <p>WE CREATE BEST PRODUCTS</p>
                <div className="what">
                    <div className="srvcblock">
                        <img src="https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"/>
                        <h5>Web Development</h5>
                        <p>it refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management.</p>
                    </div>
                    <div className="srvcblock">
                        <img src="https://www.nicepng.com/png/detail/252-2527712_guide-to-mobile-app-development-mobile-app-development.png"/>
                        <h5>App Development</h5>
                        <p>Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones.</p>
                    </div>
                    <div className="srvcblock">
                        <img src="https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"/>
                        <h5>Business Branding</h5>
                        <p>it refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management.</p>
                    </div>
                    <div className="srvcblock">
                        <img src="https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"/>
                        <h5>Social Media Marketing</h5>
                        <p>it refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management.</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </Layout>
  );
};

export default Home;
