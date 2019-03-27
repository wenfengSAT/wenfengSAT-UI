function fPopUpCalendarDlg(ctrlobj)
{
	showx = event.screenX - event.offsetX + 25; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	retval = window.showModalDialog("/js/CalendarDlg.htm", "", "dialogWidth:195px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no;" );
	if( retval != null ){
		ctrlobj.value = retval;
	}else{
		//alert("canceled");
	}
}
