//Dates

function get_day_of_week_after_tomorrow() {

	var weekdays = new Array(7);
	weekdays[0] = "Sunday";
	weekdays[1] = "Monday";
	weekdays[2] = "Tuesday";
	weekdays[3] = "Wednesday";
	weekdays[4] = "Thursday";
	weekdays[5] = "Friday";
	weekdays[6] = "Saturday";

	var current_date = new Date();

	weekday_value = (current_date.getDay()) + 2;

	document.write(weekdays[weekday_value]);
}
