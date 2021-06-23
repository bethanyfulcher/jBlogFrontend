import wizardsAndWhiteboards from "./wizardsAndWhiteboards.png"

import './style.css'

export default function BlogGrid(props) {

    return (
        <div>
             <section class="tiles">

					<article class="style1">
						<span class="image">
							<img src={wizardsAndWhiteboards} alt="Wizards and Whiteboards" />
						</span>
						<a href="#modal1" class="project modal-trigger">
                            <h2>Pain</h2>
							<div class="content">
								<p>Pursuing through the pain.</p>
							</div>
						</a>
					</article>
					<article class="style1">
						<span class="image">
							<img src={wizardsAndWhiteboards} alt="Wizards and Whiteboards" />
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
							<img src={wizardsAndWhiteboards} alt="Wizards and Whiteboards" />
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