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
                            <h2>Wizards and Whiteboards</h2>
							<div class="content">
								<p>RPG game to practice algorithm challenges.</p>
							</div>
						</a>
					</article>
					<article class="style1">
						<span class="image">
							<img src={wizardsAndWhiteboards} alt="Wizards and Whiteboards" />
						</span>
						<a href="#modal1" class="project modal-trigger">
                            <h2>Wizards and Whiteboards</h2>
							<div class="content">
								<p>RPG game to practice algorithm challenges.</p>
							</div>
						</a>
					</article>
					<article class="style1">
						<span class="image">
							<img src={wizardsAndWhiteboards} alt="Wizards and Whiteboards" />
						</span>
						<a href="#modal1" class="project modal-trigger">
                            <h2>Wizards and Whiteboards</h2>
							<div class="content">
								<p>RPG game to practice algorithm challenges.</p>
							</div>
						</a>
					</article>
            </section>
        </div>
    )
}