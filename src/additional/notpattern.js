/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.notpattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.notpattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.notpattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
;(function($) {
  var notpattern = function(value, element, param) {
    if (this.optional(element)) {
      return true;
    }
    if (typeof param === "string") {
      param = new RegExp("^(?:" + param + ")$");
    }
    return !param.test(value);
  };
  $.validator.addMethod("notpattern", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern1", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern2", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern3", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern4", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern5", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern6", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern7", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern8", notpattern, "Invalid format.");
  $.validator.addMethod("notpattern9", notpattern, "Invalid format.");
})(jQuery);
