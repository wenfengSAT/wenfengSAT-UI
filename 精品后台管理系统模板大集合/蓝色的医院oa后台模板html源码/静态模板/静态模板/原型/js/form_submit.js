function form_submit(form,action)
{
	 if(checkAll(form))
	 {
	  form.action=action;
	  form.submit();
	 }
}

