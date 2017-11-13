var Pagination = {
	Source: {}, //References the original jQuery object
	Init: function(obj, items, size = 10, page = 1, step = 3) {
		Pagination.count = Math.ceil(items / size); //Nº of pages
		Pagination.size = size; //Nº Items per page
		Pagination.page = page; //Current {Active} Page Number
		Pagination.step = step; //Nº Page Numbers displayed to each side from the center
		Pagination.range = Pagination.step * 2; //Nº Page Numbers displayed by the step
		Source = obj;
		Pagination.Rebuild();
	},
	Rebuild: function() {
		Source.empty(); //Clear all content  
		Pagination.Prev(); //Add The '<' Button

		//Algorithm that builds the numeric sequence accordingly
		if (Pagination.count < Pagination.range + 6) {
			Pagination.AddPages(1, Pagination.count);
		} else if (Pagination.page < Pagination.range + 1) {
			Pagination.AddPages(1, Pagination.range + 3);
			Pagination.Last();
		} else if (Pagination.page > Pagination.count - Pagination.range) {
			Pagination.First();
			Pagination.AddPages(Pagination.count - Pagination.range - 2, Pagination.count);
		} else {
			Pagination.First();
			Pagination.AddPages(Pagination.page - Pagination.step, Pagination.page + Pagination.step);
			Pagination.Last();
		}

		Pagination.SetActive(); //Highlight the Current Page
		Pagination.Next(); //Add The '>' Button

		//Your code to manage the page content goes here
		printContent();
	},
	SetActive: function() {
		Source.children('a').each(function() {
			if (this.text == Pagination.page)
				this.className = 'active';
			});
	},
	//ADD PAGES
	Prev: function() {
		$("<a>", { text: '\u25c4', click: Pagination.ClickPrev }).appendTo(Source);
	},
	Next: function() {
		$("<a>", { text: '\u25BA', click: Pagination.ClickNext }).appendTo(Source);
	},
	AddPages: function(start, end) {
		for (var i = start; i <= end; i++)
			$("<a>", { text: i, click: Pagination.ClickPage }).appendTo(Source);
	},
	First: function() {
		$("<a>", { text: '1', click: Pagination.ClickPage }).appendTo(Source);
		$("<i>", { text: '...' }).appendTo(Source);
	},
	Last: function() {
		$("<i>", { text: '...' }).appendTo(Source);
		$("<a>", { text: Pagination.count, click: Pagination.ClickPage }).appendTo(Source);
	},
	//CLICK EVENTS
	ClickPage: function() {
		if (Pagination.page !== this.text) {
			Pagination.page = Number(this.text);
			Pagination.Rebuild();
		}
	},
	ClickPrev: function() {
		if (Pagination.page > 1) {
			Pagination.page--;
			Pagination.Rebuild();
		}
	},
	ClickNext: function() {
		if (Pagination.page < Pagination.count) {
			Pagination.page++;
			Pagination.Rebuild();
		}
	}
};