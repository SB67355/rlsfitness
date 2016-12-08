/*
Author       : Syed Ekram.
Template Name: Jacqueline - Multipurpose/One-Page Business Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
	$(document).ready(function(){
	
	/*START CONTACT MAP JS*/
		var contact = {"lat":"53.810246", "lon":"-9.534854"}; //Change a map coordinate here!
		try {
			$('.map').gmap3({
				action: 'addMarker',
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 14
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);
		} catch(err) {

		}
	   /*END CONTACT MAP JS*/

	}); 	

	
})($);


  

