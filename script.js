const types = ['online_throttling_100_per_hour',  //fastest to slowest
	'online_no_throttling_10_per_second',
	'offline_slow_hashing_1e4_per_second',
	'offline_fast_hashing_1e10_per_second',
];
const danger = ['very risky', 'risky', 'medium', 'safe', 'very safe'];

function showPass(show){
	document.getElementById("pass").type = show ? "text" : "password";
	console.log("show/hide password");
}

function getStrength() {
	let info = zxcvbn(document.getElementById("pass").value);
	//let guesses = info.guesses;
	let str = info.crack_times_display[types[1]];
	let risk = danger[info.score];

	let warn = info.feedback.warning;
	if (warn === "")
		warn = null;

	let sugg = info.feedback.suggestions[0];

	let out = 'It will take <b>' + str + '</b> to guess your password.';
	out += '<br>Danger Level: <b>' + risk + '</b><br>';

	if (warn)
		out += '<br><b>Warning</b>: ' + warn;
	if (sugg)
		out += '<br><b>Suggestion</b>: ' + sugg;

	document.getElementById("results").innerHTML = out;
	document.getElementById("results-container").style.display = 'block';

	console.log(info);
}
