export default function MainSection() {
    return (
        <section id="mainSection" className="main--section">
            <div className="main--section--content--box">
                <div className="main--section--content">
                    <p className="section--title"> Hi, I am Krish</p>
                    <h1 className="main--section--title">
                        <span className="main--section-title--color">Full Stack </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="main--section-description">
                        I’m a passionate and results-driven software developer with hands-on experience in backend and full-stack development, cloud infrastructure, and enterprise systems. During my time at TATA Consulting Services, I supported the BMO Investorline platform, resolving technical incidents, optimizing cloud performance using AWS, and enhancing data security through Java-based solutions.
                        <br />
                        I hold AWS Developer Associate, Cloud Practitioner, and Solutions Architect certifications, and bring a strong foundation in Java, Spring Boot, React, Node.js, and modern cloud technologies. I’m continuously seeking opportunities to apply my skills in building scalable, secure, and impactful software solutions.
                    </p>
                </div>
                <button className="btn btn-primary">Touch Me</button>
            </div>
            <div className="main--section--img">
                <img src="./imgs/image.png" alt="main-section" />
            </div>

        </section>
    );
}