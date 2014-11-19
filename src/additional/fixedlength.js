$.validator.addMethod("fixedlength", function(value, element, param) {
  var length = $.isArray( value ) ? value.length : this.getLength( value, element );
  return this.optional( element ) || length === param;
}, "please enter {0} characters");
