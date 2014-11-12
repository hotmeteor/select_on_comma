Selectize.define('selectOnComma', function(options) {

    var self = this;

    options = $.extend({
        selectOnComma: true,
    }, options);

    this.onKeyDown = (function(e) {
        var original = self.onKeyDown;

        return function(e) {
            var index, option;
            if (e.keyCode === 188) {
                if (self.settings.selectOnComma && self.isOpen && self.$activeOption) {
                    self.onOptionSelect({
                        currentTarget: self.$activeOption
                    });
                    e.preventDefault();
                }
                if (self.settings.create && self.createItem()) {
                    e.preventDefault();
                }
                return;
            }
            return original.apply(this, arguments);
        };
    })();

});