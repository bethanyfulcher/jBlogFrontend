import {Link} from "react-router-dom"

import wizardsAndWhiteboards from "./wizardsAndWhiteboards.png"
import trees from "../../images/tree_pic.jpg"
import sky from "../../images/sky_pic.jpg"
import road from "../../images/road_pic.jpg"

import './style.css'

export default function BlogGrid(props) {

    return (
        <div className="blog-grid">
             <section class="tiles">

					<article class="style1">
						<span class="image">
							<img src={trees} alt="Trees" />
						</span>
                        <Link to={'/blog'}>
						<a class="project modal-trigger">
                            <h2>Pain</h2>
							<div class="content">
								<p>Pursuing through the pain.</p>
							</div>
						</a>
                        </Link>
					</article>
					<article class="style1">
						<span class="image">
							<img src={sky} alt="Sky" />
						</span>
						<a href="#modal1" class="project modal-trigger">
                            <h2>Love</h2>
							<div class="content">
								<p>Loving the small things in life.</p>
							</div>
						</a>
					</article>
					<article class="style1">
						<span class="image">
							<img src={road} alt="Road" />
						</span>
						<a href="#modal1" class="project modal-trigger">
                            <h2>Hope</h2>
							<div class="content">
								<p>Holding on to hope.</p>
							</div>
						</a>
					</article>
            </section>
        </div>
    )
}