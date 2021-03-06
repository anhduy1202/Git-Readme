import example from '../Image/readmeex.jpg';

const Home = (props) => {
    return (
        <main className="home-container">
            <header>  Welcome to GitReadme πΎπ€©  </header>
            <section className="home-subheader">
                The only website you'll need to make a pretty looking Readme on Github
            </section>

            <p className="exampledes">
                Here's an example from my Github Readme
            </p>
            <img className="home-example" src={example}></img>

            <section className="how">
                <p className="how-header"> How It Works? π€ </p>
                <p className="how-subheader"> It's easy! Just follow these steps</p>
            <ol className="how-steps">
                <li> Sign In/ Sign Up to your Github Account </li>
                <li> At the homepage, click on the readme (introduce yourself) </li>
                <li> Type anything you want</li>
                <li> Use this website and copy the code you need π</li>
            </ol>
            </section>

            <section className="credits">
                <p className="credits-header"> Credits: </p>
                <p className="credits-subheader"> Awesome resources that I collect information from </p>
                <div className="credits-grid">
                    <div className="badge">
                        <a href="https://github.com/Ileriayo/markdown-badges#music"> Ileriayo's Github </a>
                    </div>
                    <div className="shield">
                        <a href="https://shields.io"> Shields.io </a>
                    </div>
                    <div className="theme">
                        <a href="https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md"> Anurag's Github</a>
                    </div>
                    <div className="count">
                        <a href="https://komarev.com/anton"> Anton's Website </a>
                    </div>
                </div>
            </section>

            <div className="myrepo">
                    <p className="myrepo-header"> Thank You! </p>
                    <p className="myrepo-star"> Give it a β­οΈ if you enjoy using the website</p>
                    <a href="https://github.com/anhduy1202">  π My Github π </a>
            </div>
        </main>
    );
}

export default Home;
