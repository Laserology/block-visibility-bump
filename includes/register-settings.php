<?php
/**
 * Register the plugin settings
 *
 * @package block-visibility
 * @since   1.0.0
 */

namespace BlockVisibility;

defined( 'ABSPATH' ) || exit;

/**
 * Register plugin settings.
 *
 * @since 1.0.0
 */
function register_settings() {

	$settings = array(
		'visibility_controls' => array(
			'type'       => 'object',
			'properties' => array(
				'hide_block'         => array(
					'type'       => 'object',
					'properties' => array(
						'enable' => array(
							'type' => 'boolean',
						),
					),
				),
				'visibility_by_role' => array(
					'type'       => 'object',
					'properties' => array(
						'enable'            => array(
							'type' => 'boolean',
						),
						'enable_user_roles' => array(
							'type' => 'boolean',
						),
					),
				),
				'date_time'          => array(
					'type'       => 'object',
					'properties' => array(
						'enable'            => array(
							'type' => 'boolean',
						),
						'enable_scheduling' => array(
							'type' => 'boolean',
						),
					),
				),
				'screen_size'        => array(
					'type'       => 'object',
					'properties' => array(
						'enable'                   => array(
							'type' => 'boolean',
						),
						'breakpoints'              => array(
							'type'       => 'object',
							'properties' => array(
								'extra_large' => array(
									'type' => 'string',
								),
								'large'       => array(
									'type' => 'string',
								),
								'medium'      => array(
									'type' => 'string',
								),
								'small'       => array(
									'type' => 'string',
								),
							),
						),
						'controls'                 => array(
							'type'       => 'object',
							'properties' => array(
								'extra_large' => array(
									'type' => 'boolean',
								),
								'large'       => array(
									'type' => 'boolean',
								),
								'medium'      => array(
									'type' => 'boolean',
								),
								'small'       => array(
									'type' => 'boolean',
								),
								'extra_small' => array(
									'type' => 'boolean',
								),
							),
						),
						'enable_advanced_controls' => array(
							'type' => 'boolean',
						),
						'enable_frontend_css'      => array(
							'type' => 'boolean',
						),
					),
				),
				// Third-party Integrations
				'wp_fusion'         => array(
					'type'       => 'object',
					'properties' => array(
						'enable' => array(
							'type' => 'boolean',
						),
					),
				),
			),
		),
		'disabled_blocks'     => array(
			'type'  => 'array',
			'items' => array(
				'type' => 'string',
			),
		),
		'plugin_settings'     => array(
			'type'       => 'object',
			'properties' => array(
				'enable_contextual_indicators'  => array(
					'type' => 'boolean',
				),
				'enable_toolbar_controls'       => array(
					'type' => 'boolean',
				),
				'enable_editor_notices'         => array(
					'type' => 'boolean',
				),
				'enable_user_role_restrictions' => array(
					'type' => 'boolean',
				),
				'enabled_user_roles'            => array(
					'type'  => 'array',
					'items' => array(
						'type' => 'string',
					),
				),
				'enable_full_control_mode'      => array(
					'type' => 'boolean',
				),
				'remove_on_uninstall'           => array(
					'type' => 'boolean',
				),
			),
		),
	);

	$settings = apply_filters( 'block_visibility_settings', $settings );

	$defaults = array(
		'visibility_controls' => array(
			'hide_block'         => array(
				'enable' => true,
			),
			'visibility_by_role' => array(
				'enable'            => true,
				'enable_user_roles' => true,
			),
			'date_time'          => array(
				'enable'            => true,
				'enable_scheduling' => true,
			),
			'screen_size'        => array(
				'enable'                   => true,
				'breakpoints'              => array(
					'extra_large' => '1200px',
					'large'       => '992px',
					'medium'      => '768px',
					'small'       => '576px',
				),
				'controls'                 => array(
					'extra_large' => true,
					'large'       => true,
					'medium'      => true,
					'small'       => true,
					'extra_small' => true,
				),
				'enable_advanced_controls' => false,
				'enable_frontend_css'      => true,
			),
		),
		'disabled_blocks'     => array(),
		'plugin_settings'     => array(
			'enable_contextual_indicators'  => true,
			'enable_toolbar_controls'       => true,
			'enable_editor_notices'         => true,
			'enable_user_role_restrictions' => false,
			'enabled_user_roles'            => array(),
			'enable_full_control_mode'      => false,
			'remove_on_uninstall'           => false,
		),
	);

	$defaults = apply_filters( 'block_visibility_setting_defaults', $defaults );

	register_setting(
		'block_visibility',
		'block_visibility_settings',
		array(
			'description'  => __(
				'Settings for the Block Visibility plugin.',
				'block-visibility'
			),
			'type'         => 'object',
			'show_in_rest' => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => $settings,
				),
			),
			'default'      => $defaults,
		)
	);
}
add_action( 'rest_api_init', __NAMESPACE__ . '\register_settings' );
add_action( 'admin_init', __NAMESPACE__ . '\register_settings' );
