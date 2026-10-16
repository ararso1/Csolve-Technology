<?php
/**
 * Csolve Technology — Astra child theme.
 *
 * @package Csolve_Technology
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CSOLVE_THEME_VERSION', '1.1.0' );
define( 'CSOLVE_THEME_DIR', get_stylesheet_directory() );
define( 'CSOLVE_THEME_URI', get_stylesheet_directory_uri() );

/**
 * Enqueue parent + child styles and homepage assets.
 */
function csolve_enqueue_assets() {
	wp_enqueue_style(
		'astra-parent',
		get_template_directory_uri() . '/style.css',
		array(),
		ASTRA_THEME_VERSION
	);

	wp_enqueue_style(
		'csolve-theme',
		get_stylesheet_uri(),
		array( 'astra-parent' ),
		CSOLVE_THEME_VERSION
	);

	wp_enqueue_style(
		'csolve-fonts',
		'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Sora:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	if ( is_front_page() ) {
		wp_enqueue_style(
			'csolve-home',
			CSOLVE_THEME_URI . '/assets/css/home.css',
			array( 'csolve-theme', 'csolve-fonts' ),
			CSOLVE_THEME_VERSION
		);

		wp_enqueue_script(
			'csolve-home',
			CSOLVE_THEME_URI . '/assets/js/home.js',
			array(),
			CSOLVE_THEME_VERSION,
			true
		);
	}

	if ( is_page_template( 'page-company-profile.php' ) || is_page( array( 'company-profile', 'our-journey', 'achievements' ) ) ) {
		wp_enqueue_style(
			'csolve-pages',
			CSOLVE_THEME_URI . '/assets/css/pages.css',
			array( 'csolve-theme', 'csolve-fonts' ),
			CSOLVE_THEME_VERSION
		);
	}
}
add_action( 'wp_enqueue_scripts', 'csolve_enqueue_assets', 15 );

/**
 * Soften Astra title area on the custom front page.
 */
function csolve_disable_page_title( $enabled ) {
	if ( is_front_page() ) {
		return false;
	}
	return $enabled;
}
add_filter( 'astra_the_title_enabled', 'csolve_disable_page_title' );

/**
 * Ensure Company Profile pages exist after theme updates / deploy.
 */
function csolve_ensure_profile_pages() {
	if ( get_option( 'csolve_profile_pages_v2' ) ) {
		return;
	}

	$pages = array(
		'company-profile' => array(
			'title'   => 'Company Profile',
			'excerpt' => 'An overview of Csolve Technology - who we are, what we build, and why we exist.',
			'content' => '<h2>Company overview</h2><p>Csolve Technology is an African technology company dedicated to building practical digital systems, educating the next generation of talent, and strengthening institutions through innovation.</p><p>We design software, AI solutions, e-learning platforms, e-commerce experiences, and secure infrastructure - always with a focus on usefulness, inclusion, and lasting impact.</p><h2>What defines us</h2><ul><li><strong>Builders</strong> - we ship systems organizations can run and grow.</li><li><strong>Teachers</strong> - we train people with skills that open real opportunities.</li><li><strong>Partners</strong> - we work alongside communities, schools, startups, and enterprises.</li></ul><h2>Where we create value</h2><p>From custom platforms and consulting to digital literacy and community technology programs, Csolve Technology connects product excellence with social purpose.</p>',
			'parent'  => 0,
		),
		'our-journey'     => array(
			'title'   => 'Our Journey',
			'excerpt' => 'The story of Csolve Technology: from practical digital solutions to community-scale impact.',
			'content' => '<h2>From practical tech to community-scale impact</h2><p>Csolve Technology began with a clear goal: make technology work for African organizations and learners.</p><h3>Foundation</h3><p>Early work focused on useful software, digital consulting, and hands-on training.</p><h3>Growth through education</h3><p>We scaled e-learning and skills programs - helping tens of thousands of people build careers in the digital economy.</p><h3>Landmark community investment</h3><p>The Csolve Digital Library initiative in Mechara-Micheta marks a long-term commitment to knowledge access and youth opportunity.</p><h3>Today</h3><p>We deliver platforms for education and enterprise under one brand: <strong>Csolve Technology</strong>.</p>',
			'parent'  => 'company-profile',
		),
		'achievements'    => array(
			'title'   => 'Achievements',
			'excerpt' => 'Milestones, scale, and results from Csolve Technology work across Africa.',
			'content' => '<h2>Impact that compounds</h2><ul><li><strong>50,000+</strong> people reached through training</li><li><strong>600+</strong> active e-learners</li><li>Custom platforms for education and enterprise</li><li>AI, consulting, and infrastructure engagements</li><li>Community technology initiatives including the Csolve Digital Library vision</li></ul>',
			'parent'  => 'company-profile',
		),
	);

	$ids = array();
	foreach ( $pages as $slug => $page ) {
		$existing = get_page_by_path( $slug === 'company-profile' ? 'company-profile' : 'company-profile/' . $slug );
		if ( $existing ) {
			$ids[ $slug ] = (int) $existing->ID;
			update_post_meta( $existing->ID, '_wp_page_template', 'page-company-profile.php' );
			continue;
		}

		$parent_id = 0;
		if ( ! empty( $page['parent'] ) && ! empty( $ids[ $page['parent'] ] ) ) {
			$parent_id = $ids[ $page['parent'] ];
		}

		$id = wp_insert_post(
			array(
				'post_title'   => $page['title'],
				'post_name'    => $slug,
				'post_content' => $page['content'],
				'post_excerpt' => $page['excerpt'],
				'post_status'  => 'publish',
				'post_type'    => 'page',
				'post_parent'  => $parent_id,
			),
			true
		);

		if ( ! is_wp_error( $id ) ) {
			$ids[ $slug ] = (int) $id;
			update_post_meta( $id, '_wp_page_template', 'page-company-profile.php' );
		}
	}

	update_option( 'csolve_profile_pages_v2', 1 );
	flush_rewrite_rules( false );
}
add_action( 'init', 'csolve_ensure_profile_pages', 20 );

/**
 * Prefer child theme front-page template over Elementor canvas for homepage.
 */
function csolve_front_page_template( $template ) {
	if ( is_front_page() ) {
		$custom = CSOLVE_THEME_DIR . '/front-page.php';
		if ( file_exists( $custom ) ) {
			return $custom;
		}
	}
	return $template;
}
add_filter( 'template_include', 'csolve_front_page_template', 99 );

/**
 * Replace legacy Damina custom logo with Csolve Technology wordmark.
 */
function csolve_custom_logo_html( $html ) {
	$home = esc_url( home_url( '/' ) );
	$name = esc_html( get_bloginfo( 'name', 'display' ) );
	return '<a href="' . $home . '" class="csolve-site-logo custom-logo-link" rel="home" aria-current="page"><span class="csolve-site-logo__mark">C</span><span class="csolve-site-logo__text">' . $name . '</span></a>';
}
add_filter( 'get_custom_logo', 'csolve_custom_logo_html', 20 );

/**
 * Sitewide brand chrome for header/footer.
 */
function csolve_enqueue_brand_chrome() {
	$css = '
	.csolve-site-logo {
		display: inline-flex !important;
		align-items: center;
		gap: 0.55rem;
		text-decoration: none !important;
		color: inherit;
	}
	.csolve-site-logo__mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 2px;
		background: #c9852a;
		color: #0b1f24;
		font-family: "Fraunces", Georgia, serif;
		font-weight: 700;
		font-size: 1.15rem;
		line-height: 1;
	}
	.csolve-site-logo__text {
		font-family: "Sora", system-ui, sans-serif;
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: -0.02em;
		color: #fff;
	}
	.site-header .csolve-site-logo,
	.site-header .csolve-site-logo:hover,
	.site-header .csolve-site-logo__text {
		color: #fff !important;
	}
	.site-header .custom-logo-link img,
	.ast-header-break-point .custom-logo-link img {
		display: none !important;
	}
	.site-header .site-title,
	.site-header .site-description,
	.ast-site-identity .site-title,
	.ast-site-identity .site-description {
		display: none !important;
	}
	';
	wp_add_inline_style( 'csolve-theme', $css );
}
add_action( 'wp_enqueue_scripts', 'csolve_enqueue_brand_chrome', 20 );
