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
                <div className="what">
                    <h3>WHAT WE DO</h3>
                    <p>We develop digital growth roadmaps for brands, agencies, and startups. Our roadmaps include strategies, tactics, and tools to grow your companies. </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </Layout>
  );
};

export default Home;
