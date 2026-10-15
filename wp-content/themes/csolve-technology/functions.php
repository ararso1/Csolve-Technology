<?php
/**
 * Csolve Technology — Astra child theme.
 *
 * @package Csolve_Technology
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CSOLVE_THEME_VERSION', '1.0.2' );
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
