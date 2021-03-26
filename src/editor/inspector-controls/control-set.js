/**
 * External dependencies
 */
import { assign, isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Flex,
	FlexItem,
	FlexBlock,
	MenuGroup,
	MenuItem,
	Popover,
	Slot,
	withFilters,
} from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { useState } from '@wordpress/element';
import { Icon, moreHorizontalMobile, check, info } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import UserRole from './user-role';
import DateTime from './date-time';
import ScreenSize from './screen-size';
import WPFusion from './wp-fusion';
import {
	NoticeBlockControlsDisabled,
	TipControlSet,
} from './utils/notices-tips';
import icons from './../../utils/icons';

/**
 * Render a control set
 *
 * @since 1.6.0
 * @param {Object} props All the props passed to this function
 * @return {string}		 Return the rendered JSX
 */
export default function ControlSet( props ) {
	const [ popoverOpen, setPopoverOpen ] = useState( false );
	const [ tipsPopoverOpen, setTipsPopoverOpen ] = useState( false );
	const {
		setAttributes,
		settings,
		variables,
		enabledControls,
		blockAtts,
		controlSetAtts,
	} = props;
	const settingsUrl = variables?.pluginVariables.settingsUrl ?? ''; // eslint-disable-line
	const noControls =
		enabledControls.length === 1 &&
		enabledControls.includes( 'hide_block' );

	if ( noControls ) {
		return null;
	}

	let controls = [
		{
			slug: 'dateTime',
			name: __( 'Date & Time', 'block-visibility' ),
			active: controlSetAtts?.controls.hasOwnProperty( 'dateTime' ),
			enable: enabledControls.includes( 'date_time' ),
		},
		{
			slug: 'userRole',
			name: __( 'User Role', 'block-visibility' ),
			active: controlSetAtts?.controls.hasOwnProperty( 'userRole' ),
			enable: enabledControls.includes( 'visibility_by_role' ),
		},
		{
			slug: 'screenSize',
			name: __( 'Screen Size', 'block-visibility' ),
			active: controlSetAtts?.controls.hasOwnProperty( 'screenSize' ),
			enable: enabledControls.includes( 'screen_size' ),
		},
		{
			slug: 'wpFusion',
			name: __( 'WP Fusion', 'block-visibility' ),
			icon: icons.wpFusion,
			active: controlSetAtts?.controls.hasOwnProperty( 'wpFusion' ),
			enable: true,
		},
	];

	// Filter allows the pro plugin to add new visibility controls.
	controls = applyFilters(
		'blockVisibility.visibilityControls',
		controls,
		controlSetAtts,
		enabledControls
	);

	function toggleControls( control ) {
		if ( control.active ) {
			delete controlSetAtts.controls[ control.slug ];
		} else if ( ! controlSetAtts.controls[ control.slug ] ) {
			controlSetAtts.controls[ control.slug ] = {};
		}

		blockAtts.controlSets[ controlSetAtts.id ] = controlSetAtts;

		setAttributes( {
			blockVisibility: assign(
				{ ...blockAtts },
				{ controlSets: blockAtts.controlSets }
			),
		} );
	}

	function setControlAtts( control, values ) {
		controlSetAtts.controls[ control ] = values;

		blockAtts.controlSets[ controlSetAtts.id ] = controlSetAtts;

		setAttributes( {
			blockVisibility: assign(
				{ ...blockAtts },
				{ controlSets: blockAtts.controlSets }
			),
		} );
	}

	// Provides an entry point to slot in additional settings.
	const AdditionalControlSetControls = withFilters(
		'blockVisibility.addControlSetControls'
	)( ( props ) => <></> ); // eslint-disable-line

	return (
		<div className="block-visibility__control-set">
			<Flex className="block-visibility__control-set-header">
				<FlexBlock>
					<h3>
						{ __( 'Controls', 'block-visibility' ) }
						<Button
							label={ __( 'Quick Tips', 'block-visibility' ) }
							icon={ info }
							className="control-tips"
							onClick={ () =>
								setTipsPopoverOpen( ( open ) => ! open )
							}
							isSmall
						/>
						{ tipsPopoverOpen && (
							<Popover
								className="block-visibility__control-popover tips"
								focusOnMount="container"
								onClose={ () => setTipsPopoverOpen( false ) }
							>
								<TipControlSet { ...props } />
							</Popover>
						) }
					</h3>
				</FlexBlock>
				<FlexItem>
					<Button
						label={ __(
							'Configure Visibility Controls',
							'block-visibility'
						) }
						icon={ moreHorizontalMobile }
						className="control-ellipsis"
						onClick={ () => setPopoverOpen( ( open ) => ! open ) }
					/>
					{ popoverOpen && (
						<Popover
							className="block-visibility__control-popover"
							focusOnMount="container"
							onClose={ () => setPopoverOpen( false ) }
						>
							<MenuGroup
								label={ __(
									'Enabled Controls',
									'block-visibility'
								) }
							>
								{ controls.map( ( control ) => {
									if ( ! control.enable ) {
										return null;
									}

									return (
										<MenuItem
											key={ control.slug }
											icon={ control.active ? check : '' }
											onClick={ () =>
												toggleControls( control )
											}
										>
											{ control.name }
											{ control.icon && (
												<Icon
													className="control-branding-icon"
													icon={ control.icon }
												/>
											) }
										</MenuItem>
									);
								} ) }
							</MenuGroup>
						</Popover>
					) }
				</FlexItem>
			</Flex>
			<Slot name="ControlSetControlsTop" />
			<DateTime
				settings={ settings }
				variables={ variables }
				enabledControls={ enabledControls }
				setControlAtts={ setControlAtts }
				controlSetAtts={ controlSetAtts }
				{ ...props }
			/>
			<div className="logic-operator"><span>AND</span></div>
			<UserRole
				settings={ settings }
				variables={ variables }
				enabledControls={ enabledControls }
				setControlAtts={ setControlAtts }
				controlSetAtts={ controlSetAtts }
				{ ...props }
			/>
			<div className="logic-operator"><span>AND</span></div>
			<WPFusion
				settings={ settings }
				variables={ variables }
				enabledControls={ enabledControls }
				setControlAtts={ setControlAtts }
				controlSetAtts={ controlSetAtts }
				{ ...props }
			/>
			<div className="logic-operator"><span>AND</span></div>
			<ScreenSize
				settings={ settings }
				enabledControls={ enabledControls }
				setControlAtts={ setControlAtts }
				controlSetAtts={ controlSetAtts }
				{ ...props }
			/>
			<Slot name="ControlSetControlsBottom" />
			<AdditionalControlSetControls
				settings={ settings }
				enabledControls={ enabledControls }
				setControlAtts={ setControlAtts }
				controlSetAtts={ controlSetAtts }
				{ ...props }
			/>
			{ ! noControls && isEmpty( controlSetAtts.controls ) && (
				<NoticeBlockControlsDisabled settingsUrl={ settingsUrl } />
			) }
		</div>
	);
}
