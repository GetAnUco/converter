var feeInput = $('#fee'),
    buffer = $('#fee-buffer'),
    selector1 = $('#selector1'),
    selector2 = $('#selector2'),
    currInput = parseFloat($('#currencyInput').val());

function swapAction() {
    var swap = selector1.val();
    selector1.val(selector2.val());
    selector2.val(swap);
}

feeInput.on('focus', function () {
    if (feeInput.val() == 0.00) {
        feeInput.val('');
    }
});

feeInput.on('blur', function () {
    if (feeInput.val() == '') {
        feeInput.val('0.00');
    }
    feeInput.val(parseFloat(feeInput.val()).toFixed(2));
    bufferAction();
});

feeInput.on('input', function () {
    buffer.text(feeInput.val());
    feeInput.width(buffer.width());
});

function bufferAction() {
	buffer.text(feeInput.val());
    feeInput.width(buffer.width());
}

feeInput.on('keypress', function (key) {
    var char = key.charCode;
    if (feeInput.val().length === 5) {
        return false;
    }
    if (char > 57 || char < 48) {
        if ((char === 44 || char === 46) && (buffer.text().indexOf(".") < 0)) {
        	var a = feeInput.val() + '.';
        	feeInput.val(a);
        	bufferAction();
            return false;
        }
        return false;
    } else if ((feeInput.val().length === 2) && (buffer.text().indexOf(".") < 0)) {
    	return false;
	}
});

feeInput.on('keyup', function() {
    //if(feeInput.text().length === 0) {
    //    $num.text($in.text());
	//}
    var curVal = currInput;
    var persVal = parseFloat(feeInput.val());
    var finVal = curVal * ((100 - persVal) / 100);
    if (!Number.isNaN(finVal) && finVal > 0) {
        $('#currencyInput').val(finVal.toFixed(6));
    }
});

