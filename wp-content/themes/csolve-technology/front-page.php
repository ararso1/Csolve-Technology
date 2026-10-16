<?php
/**
 * Front page — Csolve Technology brand homepage.
 *
 * Custom brand sections first, then original Elementor content
 * (services, partners, news, etc.) so nothing is removed.
 *
 * @package Csolve_Technology
 */

get_header();

$contact = home_url( '/contact/' );
$about   = home_url( '/about/' );
$profile = home_url( '/company-profile/' );
$journey = home_url( '/company-profile/our-journey/' );
$impact  = home_url( '/company-profile/achievements/' );

$uploads = wp_get_upload_dir();
$base    = trailingslashit( $uploads['baseurl'] );

$hero_slides = array(
	array(
		'image' => $base . '2025/07/pexels-photo-1933900-1933900.jpg',
		'label' => 'Innovation',
		'alt'   => 'Technology workspace representing Csolve Technology innovation',
	),
	array(
		'image' => $base . '2025/04/20230209_151523-Copy.jpg',
		'label' => 'People',
		'alt'   => 'Csolve Technology team and community collaboration',
	),
	array(
		'image' => $base . '2025/04/IMG_20221031_103553_826.jpg',
		'label' => 'Community',
		'alt'   => 'Community engagement and digital skills programs',
	),
	array(
		'image' => $base . '2025/07/Gemini_Generated_Image_zfngrmzfngrmzfng.png',
		'label' => 'Impact',
		'alt'   => 'Digital transformation and education impact across Africa',
	),
);
?>

<main id="csolve-home" class="csolve-home" role="main">

	<!-- Hero: full-bleed image carousel — brand first -->
	<section class="csolve-hero" aria-label="Csolve Technology introduction">
		<div class="csolve-hero__carousel" aria-hidden="true">
			<?php foreach ( $hero_slides as $i => $slide ) : ?>
				<div
					class="csolve-hero__slide<?php echo 0 === $i ? ' is-active' : ''; ?>"
					style="background-image: url('<?php echo esc_url( $slide['image'] ); ?>');"
					data-slide="<?php echo esc_attr( (string) $i ); ?>"
					role="img"
					aria-label="<?php echo esc_attr( $slide['alt'] ); ?>"
				></div>
			<?php endforeach; ?>
			<div class="csolve-hero__veil"></div>
		</div>

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
				<a class="csolve-btn csolve-btn--ghost" href="<?php echo esc_url( $profile ); ?>">Company profile</a>
			</div>
		</div>

		<div class="csolve-hero__controls" aria-label="Hero slideshow controls">
			<div class="csolve-hero__dots" role="tablist" aria-label="Slide selection">
				<?php foreach ( $hero_slides as $i => $slide ) : ?>
					<button
						type="button"
						class="csolve-hero__dot<?php echo 0 === $i ? ' is-active' : ''; ?>"
						role="tab"
						aria-selected="<?php echo 0 === $i ? 'true' : 'false'; ?>"
						aria-label="<?php echo esc_attr( 'Show slide: ' . $slide['label'] ); ?>"
						data-goto="<?php echo esc_attr( (string) $i ); ?>"
					></button>
				<?php endforeach; ?>
			</div>
			<button type="button" class="csolve-hero__pause" aria-pressed="false" aria-label="Pause slideshow">
				<span class="csolve-hero__pause-label">Pause</span>
			</button>
		</div>

		<div class="csolve-hero__scroll" aria-hidden="true"><span></span></div>
	</section>

	<!-- Company Profile overview -->
	<section class="csolve-profile" id="company-profile" aria-labelledby="profile-heading">
		<div class="csolve-wrap">
			<header class="csolve-section-head reveal" data-reveal>
				<p class="csolve-eyebrow">Company profile</p>
				<h2 id="profile-heading">Who we are</h2>
				<p>
					Csolve Technology is an African technology company building practical software,
					AI, education platforms, and digital infrastructure that strengthen institutions
					and expand opportunity.
				</p>
			</header>

			<div class="csolve-profile__grid">
				<article class="csolve-profile__story reveal" data-reveal>
					<h3>Our journey</h3>
					<p>
						We began with a simple conviction: technology in Africa should be useful,
						teachable, and lasting. From custom systems and consulting to e-learning and
						community programs, we have grown into a partner for organizations that want
						real digital capability—not just tools on a shelf.
					</p>
					<p>
						Today we ship platforms for education and enterprise, train thousands of
						learners, and invest in landmark community projects such as the Csolve
						Digital Library—always under one brand: Csolve Technology.
					</p>
					<a class="csolve-text-link" href="<?php echo esc_url( $journey ); ?>">Read our full journey</a>
				</article>

				<aside class="csolve-profile__aside reveal" data-reveal>
					<div class="csolve-profile__fact">
						<span class="csolve-profile__fact-label">Focus</span>
						<span class="csolve-profile__fact-value">Software · AI · Education · Infrastructure</span>
					</div>
					<div class="csolve-profile__fact">
						<span class="csolve-profile__fact-label">Reach</span>
						<span class="csolve-profile__fact-value">Communities &amp; institutions across Africa</span>
					</div>
					<div class="csolve-profile__fact">
						<span class="csolve-profile__fact-label">Approach</span>
						<span class="csolve-profile__fact-value">Build · Train · Transform · Sustain</span>
					</div>
					<a class="csolve-btn csolve-btn--primary csolve-btn--block" href="<?php echo esc_url( $profile ); ?>">
						Explore company profile
					</a>
				</aside>
			</div>

			<div class="csolve-profile__links reveal" data-reveal>
				<a class="csolve-profile__link" href="<?php echo esc_url( $journey ); ?>">
					<span>Our Journey</span>
					<em>Milestones &amp; timeline</em>
				</a>
				<a class="csolve-profile__link" href="<?php echo esc_url( $impact ); ?>">
					<span>Achievements</span>
					<em>Impact &amp; results</em>
				</a>
				<a class="csolve-profile__link" href="<?php echo esc_url( $about ); ?>">
					<span>About Csolve</span>
					<em>Brand &amp; story</em>
				</a>
			</div>
		</div>
	</section>

	<!-- Mission / Vision / Core Values -->
	<section class="csolve-mv" id="mission-vision" aria-labelledby="mv-heading">
		<div class="csolve-wrap">
			<header class="csolve-section-head reveal" data-reveal>
				<p class="csolve-eyebrow">Purpose</p>
				<h2 id="mv-heading">Mission, vision &amp; core values</h2>
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

	<section class="csolve-values" id="values" aria-labelledby="values-heading">
		<div class="csolve-wrap">
			<header class="csolve-section-head reveal" data-reveal>
				<p class="csolve-eyebrow">How we work</p>
				<h2 id="values-heading">Core values</h2>
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

	<!-- Journey / milestones -->
	<section class="csolve-history" id="our-history" aria-labelledby="history-heading">
		<div class="csolve-wrap">
			<header class="csolve-section-head reveal" data-reveal>
				<p class="csolve-eyebrow">Milestones</p>
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

			<p class="csolve-history__more reveal" data-reveal>
				<a class="csolve-btn csolve-btn--ghost" href="<?php echo esc_url( $impact ); ?>">View achievements</a>
			</p>
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
				<a class="csolve-btn csolve-btn--ghost" href="<?php echo esc_url( $profile ); ?>">Company profile</a>
			</div>
		</div>
	</section>

	<!-- Preserve existing Elementor homepage sections (services, partners, news, etc.) -->
	<section class="csolve-legacy" id="what-we-deliver" aria-label="Csolve Technology services and updates">
		<div class="csolve-legacy__inner">
			<?php
			while ( have_posts() ) :
				the_post();
				if ( class_exists( '\Elementor\Plugin' ) ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					echo \Elementor\Plugin::$instance->frontend->get_builder_content_for_display( get_the_ID() );
				} else {
					the_content();
				}
			endwhile;
			?>
		</div>
	</section>

</main>

<?php
get_footer();
