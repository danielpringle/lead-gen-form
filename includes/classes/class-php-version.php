<?php
/**
 * Check PHP version
 *
 * Plugin functionality is
 * disabled if the minimum version is not met.
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

final class PHP_Version {

	/**
	 * Minimum PHP version
	 *
	 * @since  1.0.0
	 * @access protected
	 * @var    string The version number.
	 */
	protected $minimum = '7.4'; //AC_REQUIRES_PHP;

	/**
	 * Instance of the class
	 *
	 * This method can be used to call an instance
	 * of the class from outside the class.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return object Returns an instance of the class.
	 */
	public static function instance() {
		return new self;
	}

	/**
	 * Minimum PHP version
	 *
	 * @since  1.0.0
	 * @access public
	 * @return self
	 */
	public function minimum() {
		return $this->minimum;
	}

	/**
	 * Version compare
	 *
	 * @since  1.0.0
	 * @access public
	 * @return boolean Returns true if the minimum is met.
	 */
	public function version() {

		// Compare versions.
		if ( version_compare( phpversion(), $this->minimum(), '<' ) ) {

			// Return false if the minimum is not met.
			return false;
		}

		// Return true by default.
		return true;
	}
}

/**
 * Instance of the class
 *
 * @since  1.0.0
 * @access public
 * @return object PHP_Version Returns an instance of the class.
 */
function php() {
	return PHP_Version :: instance();
}