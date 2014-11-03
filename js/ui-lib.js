/**
 * ui-lib v1.0.0
 * 
 * @author qianlw
 * 
 * @date 2014-10-10
 * 
 * @update 2014-10-11
 */

;(function($) {
	var box = $(".ui-radiobox");

	box.each(function() {
		var $this = $(this),
			id = $this.attr("data-id") || '',
			name = $this.attr("data-name") || '',
			radio = $this.find(".ui-radio"),
			hide;

		$this.prepend("<input type='radio' id='" + id + "' name='" + name + "' />");
		hide = $this.children("input[type='radio']");

		radio.each(function() {
			var _this = $(this),
				CSS_CHECKED = "checked";

			if (_this.hasClass(CSS_CHECKED)) {
				hide.trigger("click");
				hide.val(_this.attr("data-val"));
			}

			_this.on("click", function() {
				radio.removeClass(CSS_CHECKED);
 			_this.addClass(CSS_CHECKED);
 			hide.trigger("click");
 			hide.val(_this.attr("data-val"));
			});
		});
	});
})(jQuery);

(function($) {
	$(".ui-checkbox").each(function() {
		var $this = $(this),
			id = $this.attr("data-id") || '',
			name = $this.attr("data-name") || '',
			value = $this.attr("data-val") || '',
			hide,
			CSS_CHECKED = "checked";

		$this.append("<input type='checkbox' id='" + id + "' name='" + name + "' value='" + value + "' />");
		hide = $this.children("input[type='checkbox']");

		hide.on("click", function(event) {
			event.stopPropagation();
		});

		if ($this.hasClass(CSS_CHECKED)) {
			hide.trigger("click");
		}

		$this.on("click", function() {
			var flag = $this.hasClass(CSS_CHECKED);

			if (flag) {
				$this.removeClass(CSS_CHECKED);
			} else {
				$this.addClass(CSS_CHECKED);
			}
			hide.trigger("click");
		});
	});
})(jQuery);

//label绑定
(function($) {
	$("label").each(function() {
		var $this = $(this),
			id = $this.attr("for");

		$this.on("click", function(event) {
			$("#" + id).trigger("click");
			event.preventDefault();
		});
	});
})(jQuery);