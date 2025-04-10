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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos laborum officiis accusamus obcaecati quibusdam fuga quod ullam saepe. Adipisci earum ipsum autem non ex quae maxime vitae eveniet reprehenderit odio.
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iste ullam ratione facilis doloremque. Labore dolorum, maiores nam, ducimus voluptatem expedita sapiente ratione odio tempora neque iure molestias nulla! Ea?
                    </p>
                </div>
                <button className="btn btn-primary">Touch Me</button>
            </div>
            <div className="main--section--img">
                <img src="./imgs/images.jpg" alt="main-section" />
            </div>

        </section>
    );
}