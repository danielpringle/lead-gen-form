<?php

namespace WFRF_Core\Admin;
use WFRF_Core\Admin as Admin;
class AdminSubMenu extends AdminMenu {

	function __construct( $options, Admin\AdminMenu $parent ){
		parent::__construct( $options );

		$this->parent_id = $parent->settings_id;
	}

}