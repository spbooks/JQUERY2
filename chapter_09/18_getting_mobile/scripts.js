function doOneUp(which, callback) {
	$(which).next().show().animate({
    		top: "-=50px",
    		opacity: "toggle"
    	}, 1000,
		function() {
  			$(this).css("top", "").hide("slow", callback);
		});
}

function Trumps () {
	this.datastore = {
		games: {
			win: 0,
			draw: 0,
			loss: 0,
			total: 0,
			last: null
		},
		tally: {
			wins: 0,
			losses: 0
		}
	};

	this.gameover = function () {
		var wins = TRUMPS.datastore.tally.wins, // TRUMPS, not this, due to two call sources
			losses = TRUMPS.datastore.tally.losses,
			result = (wins > losses) ? "win" : (wins === losses) ? "draw" : "loss";

		TRUMPS.datastore.games[result] += 1;
		TRUMPS.datastore.games["total"] += 1;
		TRUMPS.datastore.games["last"] = result;
		
		$.mobile.showPageLoadingMsg();

		setTimeout(function() {
			$.mobile.changePage("#results");
			TRUMPS.result();
		}, 999);
	};

	this.prompt = function () {
		setTimeout(function() {						
			$("#home").find("a").fadeIn("slow");
		}, 3000);
	};

	this.reset = function () {
		var switches = ["#flip-a", "#flip-b"],
			length = switches.length,
			current, i;

		for (i = 0; i < length; i += 1) {
			current = $(switches[i]);
			current[0].selectedIndex = 0;
			current.slider("refresh").next().find(".ui-slider-label-a").text(random());
		}
		
		function random () {
			return Math.floor(Math.random() * 11)
		};
	};

	this.result = function () {
		var result = TRUMPS.datastore.games.last,
			salutation = (result !== "loss") ? "Congratulations!" : "Sorry about that!",
			total = TRUMPS.datastore.games.total,
			wins = TRUMPS.datastore.games.win,
			draws = TRUMPS.datastore.games.draw,
			losses = TRUMPS.datastore.games.loss,
			played = (total === 1) ? "one game" : total + " games",
			record;

		if (wins === total) {
			record = "all";
		}
		else if (losses === total) {
			record = "none";
		}
		else if (wins > (draws + losses)) {
			record = "most";
		}
		else if (losses > (draws + wins)) {
			record = "some";
		}
		else {
			record = "a few";
		}

		$("#results").find("h2").text(salutation);					
		$("#results").find("h3").find("span").text(result);					
		$("#results").find("p").find("b").text(played);				
		$("#results").find("p").find("span").text(record);

		$.mobile.hidePageLoadingMsg();					
	};

	this.scored = function (which) {
		var result = ($(which).find(".ui-btn-text").text() === "WIN") ? "wins" : "losses";

		this.datastore.tally[result] += 1;

		if (this.datastore.tally[result] > 2) {
			this.gameover();
		}
	};

	this.set = function () {
		$(document).bind("mobileinit", function() {
			$.mobile.touchOverflowEnabled = true;
		});

		$("#home").bind("swipe", function(event) {
			document.location = "#albums";
		});

		$("#albums").bind("vclick", function(event) {
			$("#home").find(".ui-btn-text").text("NEW GAME");
		}).find("ul").find("a").each(function(i) {
			var albums = [
				"0_debut",
				"1_thisis",
				"2_awkward",		
				"3_bestof",
			];

			$(this).bind("tap", function(event) {
				$("#album").css("background-image", ["url(graphics/albums/", albums[i], ".png)"].join(""));
			});
		});

		$("#album").bind("pagebeforehide", function() {
			TRUMPS.reset();
		});

		$(".score").click(function(event) {
			doOneUp(this);
			TRUMPS.scored(this);

			event.preventDefault();
		}).after("<span class='oneup'>+1</span>");

		$("#gameover").bind("tap", this.gameover);// assign, not invoke

		$("#results").find("a").bind("tap", function() {// reset the datastore
			TRUMPS.datastore.tally.wins = 0;
			TRUMPS.datastore.tally.losses = 0;
		})
	};

	this.init = function () {
		this.prompt();					
		this.set();
	}
}

var TRUMPS = new Trumps();

$(document).ready(function (event) {
	TRUMPS.init();
});