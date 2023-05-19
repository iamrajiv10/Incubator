import { Link } from "react-router-dom";
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
                        <p>
                            it refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management.
                        </p>
                        <ul>
                        <li>
                        <Link className="dropdown-item" to="/webdev">
                          Learn More 
                        </Link>
                        </li>
                        </ul>
                    </div>
                    <div className="srvcblock">
                        <img src="https://www.nicepng.com/png/detail/252-2527712_guide-to-mobile-app-development-mobile-app-development.png"/>
                        <h5>App Development</h5>
                        <p>
                            Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones.
                        </p>
                        <ul>
                        <li>
                        <Link className="dropdown-item" to="/webdev">
                          Learn More 
                        </Link>
                        </li>
                        </ul>
                    </div>
                    <div className="srvcblock">
                        <img src="https://cdn.wedevs.com/uploads/2020/06/Business-Branding-feature-Images.png"/>
                        <h5>Business Branding</h5>
                        <p>
                        Branding is the process of creating a distinct identity for a business in the mind of your target audience and consumers. At the the most basic level, branding is made up of a company's logo, visual design, mission, and tone of voice.
                        </p>
                        <ul>
                        <li>
                        <Link className="dropdown-item" to="/webdev">
                          Learn More 
                        </Link>
                        </li>
                        </ul>
                    </div>
                    <div className="srvcblock">
                        <img src="https://napoleoncat.com/wp-content/uploads/2020/09/social-media-strategies-for-small-business-featured-image.jpg"/>
                        <h5>Social Media Marketing</h5>
                        <p>
                        Social media marketing is the use of social media platforms and websites to promote a product or service. Although the terms e-marketing and digital marketing are still dominant in academia, social media marketing is becoming more popular for both practitioners and researchers.
                        </p><ul>
                        <li>
                        <Link className="dropdown-item" to="/webdev">
                          Learn More 
                        </Link>
                        </li>
                        </ul>
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
