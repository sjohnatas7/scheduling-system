frappe.listview_settings["Event"] = {
	add_fields: ["starts_on", "ends_on"],
	onload: function () {
		frappe.route_options = {
			status: "Open",
		};

		window.location.href = "/app/event/view/calendar/default";
	},
};
