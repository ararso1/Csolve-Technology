<?php
/**
 * Template Name: Company Profile
 * Dedicated company profile pages for Csolve Technology.
 *
 * @package Csolve_Technology
 */

get_header();

$profile = home_url( '/company-profile/' );
$journey = home_url( '/company-profile/our-journey/' );
$impact  = home_url( '/company-profile/achievements/' );
$contact = home_url( '/contact/' );
$slug    = get_post_field( 'post_name', get_queried_object_id() );
?>

<main class="csolve-page csolve-profile-page" id="main">
	<section class="csolve-page-hero">
		<div class="csolve-wrap">
			<p class="csolve-eyebrow">Csolve Technology</p>
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<h1><?php the_title(); ?></h1>
				<?php if ( has_excerpt() ) : ?>
					<p class="csolve-page-hero__lead"><?php echo esc_html( get_the_excerpt() ); ?></p>
				<?php endif; ?>
			<?php endwhile; ?>
		</div>
	</section>

	<nav class="csolve-profile-nav" aria-label="Company profile sections">
		<div class="csolve-wrap csolve-profile-nav__inner">
			<a class="<?php echo 'company-profile' === $slug ? 'is-active' : ''; ?>" href="<?php echo esc_url( $profile ); ?>">Overview</a>
			<a class="<?php echo 'our-journey' === $slug ? 'is-active' : ''; ?>" href="<?php echo esc_url( $journey ); ?>">Our Journey</a>
			<a class="<?php echo 'achievements' === $slug ? 'is-active' : ''; ?>" href="<?php echo esc_url( $impact ); ?>">Achievements</a>
		</div>
	</nav>

	<section class="csolve-page-body">
		<div class="csolve-wrap csolve-page-body__grid">
			<article class="csolve-page-content">
				<?php
				rewind_posts();
				while ( have_posts() ) :
					the_post();
					the_content();
				endwhile;
				?>
			</article>

			<aside class="csolve-page-aside">
				<div class="csolve-page-aside__block">
					<h2>At a glance</h2>
					<ul>
						<li>Software, AI &amp; digital systems</li>
						<li>E-learning &amp; skills programs</li>
						<li>Consulting &amp; infrastructure</li>
						<li>Community technology initiatives</li>
					</ul>
				</div>
				<div class="csolve-page-aside__block">
					<h2>Work with us</h2>
					<p>Ready to build platforms, train teams, or grow your digital presence?</p>
					<a class="csolve-btn csolve-btn--primary" href="<?php echo esc_url( $contact ); ?>">Contact Csolve</a>
				</div>
			</aside>
		</div>
	</section>
</main>

<?php
get_footer();
