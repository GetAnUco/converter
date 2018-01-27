var feeInput = $('#fee'),
	buffer = $('#fee-buffer'),
	selector1 = $('#selector1'),
	selector2 = $('#selector2');

function swapAction() {
	var swap = selector1.val();
	selector1.val(selector2.val());
	selector2.val(swap);
}

feeInput.on('keypress', function(key) {
    var char = key.charCode;
    if (char > 57 || char < 48 || buffer.text().length === 5) {
    	if ((char === 44 || char === 46) && (buffer.text().indexOf(".") < 0)) {
    		feeInput.val(buffer.text() + ".");
    		return false;
    	}
    return false;
  }
});

feeInput.on('keyup', function() {
    if(feeInput.text().length === 0) {
        $num.text($in.text());
	}
    var curVal = parseInt($in.text());
    var persVal = parseFloat($buffer.text());
    var finVal = curVal * ((100 - persVal) / 100);
    if (!Number.isNaN(finVal)) {
        $num.text(Math.ceil((finVal)*100)/100);
    }
});
 
feeInput.on('feeInput', function() {
    buffer.text(feeInput.val());
    feeInput.width(buffer.width());
});