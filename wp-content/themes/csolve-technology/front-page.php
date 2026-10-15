<?php
/**
 * Front page — Csolve Technology brand homepage.
 *
 * @package Csolve_Technology
 */

get_header();

$contact = home_url( '/contact/' );
$about   = home_url( '/about/' );
?>

<main id="csolve-home" class="csolve-home" role="main">

	<!-- Hero: one composition — brand first -->
	<section class="csolve-hero" aria-label="Csolve Technology introduction">
		<div class="csolve-hero__bg" aria-hidden="true"></div>
		<div class="csolve-hero__grid" aria-hidden="true"></div>
		<div class="csolve-hero__inner">
			<p class="csolve-hero__brand reveal" data-reveal>Csolve Technology</p>
			<h1 class="csolve-hero__headline reveal" data-reveal>
				We build more than systems
			</h1>
			<p class="csolve-hero__lead reveal" data-reveal>
				Empowering people and organizations across Africa through innovation,
				education, and digital transformation.
			</p>
			<div class="csolve-hero__cta reveal" data-reveal>
				<a class="csolve-btn csolve-btn--primary" href="<?php echo esc_url( $contact ); ?>">Start a project</a>
				<a class="csolve-btn csolve-btn--ghost" href="#our-history">Our journey</a>
			</div>
		</div>
		<div class="csolve-hero__scroll" aria-hidden="true">
			<span></span>
		</div>
	</section>

	<!-- Mission / Vision -->
	<section class="csolve-mv" id="mission-vision" aria-labelledby="mv-heading">
		<div class="csolve-wrap">
			<header class="csolve-section-head reveal" data-reveal>
				<p class="csolve-eyebrow">Purpose</p>
				<h2 id="mv-heading">Mission &amp; vision</h2>
				<p>Clarity of purpose guides every product, partnership, and community program we deliver.</p>
			</header>
			<div class="csolve-mv__grid">
				<article class="csolve-mv__card reveal" data-reveal>
					<span class="csolve-mv__label">Mission</span>
					<h3>Technology that serves people</h3>
					<p>
						To design and deliver practical software, AI, and consulting solutions that solve
						real challenges, strengthen institutions, and expand opportunity across Africa.
					</p>
				</article>
				<article class="csolve-mv__card csolve-mv__card--accent reveal" data-reveal>
					<span class="csolve-mv__label">Vision</span>
					<h3>A digitally empowered Africa</h3>
					<p>
						A future where every community can access the tools, skills, and infrastructure
						needed to learn, build, and thrive in the digital economy.
					</p>
				</article>
			</div>
		</div>
	</section>

	<!-- Values -->
	<section class="csolve-values" id="values" aria-labelledby="values-heading">
		<div class="csolve-wrap">
			<header class="csolve-section-head reveal" data-reveal>
				<p class="csolve-eyebrow">How we work</p>
				<h2 id="values-heading">Our values</h2>
				<p>These principles shape our culture, our code, and our commitment to clients and communities.</p>
			</header>
			<ul class="csolve-values__list">
				<li class="reveal" data-reveal>
					<strong>Innovation</strong>
					<span>We build modern, useful technology—never novelty for its own sake.</span>
				</li>
				<li class="reveal" data-reveal>
					<strong>Impact</strong>
					<span>Success is measured in lives improved, skills gained, and systems that last.</span>
				</li>
				<li class="reveal" data-reveal>
					<strong>Integrity</strong>
					<span>Transparent partnerships and dependable delivery, every engagement.</span>
				</li>
				<li class="reveal" data-reveal>
					<strong>Inclusion</strong>
					<span>Solutions designed for diverse communities, languages, and contexts.</span>
				</li>
				<li class="reveal" data-reveal>
					<strong>Excellence</strong>
					<span>Craftsmanship in product, process, and people development.</span>
				</li>
			</ul>
		</div>
	</section>

	<!-- Our History -->
	<section class="csolve-history" id="our-history" aria-labelledby="history-heading">
		<div class="csolve-wrap">
			<header class="csolve-section-head reveal" data-reveal>
				<p class="csolve-eyebrow">Our history</p>
				<h2 id="history-heading">The Csolve journey</h2>
				<p>
					From hands-on digital solutions to community-scale education initiatives,
					our story is one of building capability where it matters most.
				</p>
			</header>

			<ol class="csolve-timeline">
				<li class="csolve-timeline__item reveal" data-reveal>
					<div class="csolve-timeline__year">Origins</div>
					<div class="csolve-timeline__body">
						<h3>Building the foundation</h3>
						<p>
							Csolve Technology grew from a commitment to practical African tech—
							software, training, and consulting that organizations could actually use.
						</p>
					</div>
				</li>
				<li class="csolve-timeline__item reveal" data-reveal>
					<div class="csolve-timeline__year">Scale</div>
					<div class="csolve-timeline__body">
						<h3>Education &amp; skills at scale</h3>
						<p>
							We expanded into e-learning and workforce programs, helping tens of thousands
							of learners gain digital skills and connecting institutions to modern platforms.
						</p>
					</div>
				</li>
				<li class="csolve-timeline__item reveal" data-reveal>
					<div class="csolve-timeline__year">2025–26</div>
					<div class="csolve-timeline__body">
						<h3>Csolve Digital Library</h3>
						<p>
							We launched the Csolve Digital Library initiative in Mechara-Micheta—
							a landmark investment in knowledge, creativity, and opportunity for youth
							and the wider community.
						</p>
					</div>
				</li>
				<li class="csolve-timeline__item reveal" data-reveal>
					<div class="csolve-timeline__year">Today</div>
					<div class="csolve-timeline__body">
						<h3>Systems that serve society</h3>
						<p>
							From school management platforms to enterprise digital transformation,
							we continue to ship tools that improve education, operations, and livelihoods—
							under the Csolve Technology brand.
						</p>
					</div>
				</li>
			</ol>

			<div class="csolve-milestones reveal" data-reveal>
				<div class="csolve-milestone">
					<span class="csolve-milestone__num" data-count="50000">0</span>
					<span class="csolve-milestone__suffix">+</span>
					<span class="csolve-milestone__label">People trained</span>
				</div>
				<div class="csolve-milestone">
					<span class="csolve-milestone__num" data-count="600">0</span>
					<span class="csolve-milestone__suffix">+</span>
					<span class="csolve-milestone__label">Active e-learners</span>
				</div>
				<div class="csolve-milestone">
					<span class="csolve-milestone__num" data-count="130">0</span>
					<span class="csolve-milestone__suffix">M+</span>
					<span class="csolve-milestone__label">ETB library vision</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Closing CTA -->
	<section class="csolve-close" aria-labelledby="close-heading">
		<div class="csolve-wrap csolve-close__inner reveal" data-reveal>
			<p class="csolve-eyebrow">Next chapter</p>
			<h2 id="close-heading">Let’s build what comes next</h2>
			<p>
				Whether you need a platform, a transformation partner, or a community technology program—
				Csolve Technology is ready to work with you.
			</p>
			<div class="csolve-hero__cta">
				<a class="csolve-btn csolve-btn--primary" href="<?php echo esc_url( $contact ); ?>">Contact us</a>
				<a class="csolve-btn csolve-btn--ghost" href="<?php echo esc_url( $about ); ?>">About Csolve</a>
			</div>
		</div>
	</section>

</main>

<?php
get_footer();
