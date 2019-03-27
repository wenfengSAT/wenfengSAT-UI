function head(theName,imgName)
	{
	if(document.all[theName].style.display=="none")
		{

		document.all[theName].style.display="";
		document.all[imgName].src="../../../images/kh_2_06.gif";

		}
	else
		{
		document.all[theName].style.display="none";
		document.all[imgName].src="../../../images/kh_06.gif";
		}
	}
