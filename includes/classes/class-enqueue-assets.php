<?php
/**
 * Assets class
 *
 * Methods for enqueueing and printing assets
 * such as JavaScript and CSS files.
 *
 * @package    WFRF_Core
 * @subpackage Classes
 * @category   Core
 * @since      1.0.0
 */

namespace WFRF_Core\Classes;

// Restrict direct access.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

class EnqueueAssets {

	/**
	 * Plugin version
	 *
	 * @since  1.0.0
	 * @access private
	 * @var    string The version number.
	 */
	private $version = AC_VERSION;

	/**
	 * Plugin version
	 *
	 * @since  1.0.0
	 * @access public
	 * @return string Returns the version number.
	 */
	public function version() {
		return $this->version;
	}

	public function __construct() {

        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_plugin_scripts_styles' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_plugin_admin_scripts_styles' ] );
	}

	public function enqueue_plugin_scripts_styles() {

		// Instantiate the Assets class.
		$asset_versioning = new AssetVersioning;
		
		wp_enqueue_style( 
            'wf-register-form-styles',
            AC_URL . 'assets/css/wf-register-form.css',
            array(),
			$asset_versioning->version_control(), //filemtime(AC_PATH . 'assets/css/wf-register-form.css'),//date("Y-m-d-h:i-s"), //filemtime(DPT_URL . 'assets/css/cat-style.css'),
            false 
            );

			wp_enqueue_script(
				'wf-register-form-script', 
				AC_URL . 'assets/js/wf-register-form.js',
				[ 'jquery' ],
				filemtime(AC_PATH . 'assets/js/wf-register-form.js'),
				true 
			);


			//wp_enqueue_style('flex-slider-style', 'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/flexslider.css');
			//wp_enqueue_script('flex-slider-script', 'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/jquery.flexslider.min.js', array('jquery'), NULL, true);
			wp_enqueue_script('az_flexslider_scripts', AC_URL . 'assets/js/flex-slider.js', array('jquery'), '1.0.1', true); 
			// wp_enqueue_script('invd_flexslider_accessibility_scripts', get_theme_file_uri('/dist/js/slider-accesibility.js'), NULL, '1.0', true); 
			wp_enqueue_script('az_flexslider_product_support', AC_URL . 'assets/js/flex-slider-product-support.js', array('jquery'), '1.0.1', true); 
		
		/**
		 * Product loop ajax
		 */	

		 if ( is_shop() || is_product_category() ){

			wp_enqueue_script(
				'az-product-ajax', 
				AC_URL . 'assets/js/az-product-ajax.js',
				[ 'jquery' ],
				filemtime(AC_PATH . 'assets/js/az-product-ajax.js'),
				true 
			);
			wp_localize_script( 'az-product-ajax', 'az_fetch_products', array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				//'currentCat' => get_queried_object()
			));
		 } 


		

		/**
		 * Resource loop ajax
		 */
		 if ( is_post_type_archive( 'resources' )|| is_page( 'resources' )){
			wp_enqueue_script(
				'az-resource-ajax', 
				AC_URL . 'assets/js/az-resource-ajax.js',
				[ 'jquery' ],
				filemtime(AC_PATH . 'assets/js/az-resource-ajax.js'),
				true 
			);
			wp_localize_script( 'az-resource-ajax', 'az_fetch_resources', array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
			));  

		 }
 


		/**
		 * Blog loop ajax
		 */

		 if ( is_home() || is_page( 'blog' ) ){

			wp_enqueue_script(
				'az-blog-ajax', 
				AC_URL . 'assets/js/az-blog-ajax.js',
				[ 'jquery' ],
				filemtime(AC_PATH . 'assets/js/az-blog-ajax.js'),
				true 
			);
			wp_localize_script( 'az-blog-ajax', 'az_fetch_blogs', array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				//'currentCat' => get_queried_object()
			));  
		 } 

		/**
		 * Events loop ajax
		 */
		if ( is_post_type_archive( 'events' )|| is_page( 'events' )){
			wp_enqueue_script(
				'az-events-ajax', 
				AC_URL . 'assets/js/az-events-ajax.js',
				[ 'jquery' ],
				filemtime(AC_PATH . 'assets/js/az-events-ajax.js'),
				true 
			);
			wp_localize_script( 'az-events-ajax', 'az_fetch_events', array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
			));  

		 }

		/**
		 * Webinars loop ajax
		 */
		if ( is_post_type_archive( 'webinars' )|| is_page( 'webinars' )){
			wp_enqueue_script(
				'az-webinars-ajax', 
				AC_URL . 'assets/js/az-webinars-ajax.js',
				[ 'jquery' ],
				filemtime(AC_PATH . 'assets/js/az-webinars-ajax.js'),
				true 
			);
			wp_localize_script( 'az-webinars-ajax', 'az_fetch_webinars', array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
			));  

		 }

		/**
		 * PR loop ajax
		 */

		 if ( is_post_type_archive( 'press-release' )|| is_page( 'press-release' ) || is_page( 'press-releases' )){

			wp_enqueue_script(
				'az-pr-ajax', 
				AC_URL . 'assets/js/az-pr-ajax.js',
				[ 'jquery' ],
				filemtime(AC_PATH . 'assets/js/az-pr-ajax.js'),
				true 
			);
			wp_localize_script( 'az-pr-ajax', 'az_fetch_pr', array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				//'currentCat' => get_queried_object()
			));  
		 } 


		/**
		 *  Slick Slider
		 */

		wp_enqueue_style( 
			'slick-css',
			AC_URL . 'assets/css/slick/slick.css',
			[], 
			false,
			'all'
			);

			wp_enqueue_style(
				'slick-theme-css', 
				AC_URL . 'assets/css/slick/slick-theme.css',
				['slick-css'], 
				false, 
				'all' 
			);


			wp_enqueue_script(
			'slick-js', 
			AC_URL . 'assets/js/slick/slick.min.js',
			[ 'jquery' ],
			filemtime(AC_PATH . 'assets/js/slick/slick.min.js'),
			true 
			);

			wp_enqueue_script(
				'slick-carousel',
				AC_URL . 'assets/js/slick/slick-carousel.js',
				['jquery', 'slick-js'],
				filemtime( AC_URL . 'assets/js/slick/slick-carousel.js' ),
					true 
			);



	}

	/**
	 * Enqueue admin scripts and styles
	 */
	public function enqueue_plugin_admin_scripts_styles( $hook ) {
		$screen = get_current_screen();

		// Instantiate the Assets class.
		$asset_versioning = new AssetVersioning;

		if ( 'dashboard' === $screen->id ) {
			
		}

		wp_enqueue_script(
			'wf-register-form-admin-script', 
			AC_URL . 'assets/js/wf-register-form-admin' . $asset_versioning->suffix() . '.js',
			[ 'jquery' ],
			$asset_versioning->version_control(),
			true 
		);

	}

}