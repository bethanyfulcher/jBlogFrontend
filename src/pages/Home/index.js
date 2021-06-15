import BlogGrid from "../../components/BlogGrid"

import "./style.css";

export default function Home(props) {

    return (
        <div>
        <body id="body">
            {/* <h1>Home Page!</h1> */}
            <section class="quote-section">
                <p id="quote">"Believe you can and you're halfway there"</p>
                <p id="quote-author">-Theodore Roosevelt</p>
            </section>

            <BlogGrid/>
        </body>
        </div>
    )
}