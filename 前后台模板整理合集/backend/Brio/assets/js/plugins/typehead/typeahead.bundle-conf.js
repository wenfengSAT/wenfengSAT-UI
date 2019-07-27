var engine = new Bloodhound({
    datumTokenizer: function(d) { return d.value; },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [{ value: 'dog animal' }, { value: 'pig animal' }, { value: 'moose animal' }, { value: 'bird ' }]
  });

  engine.initialize();


  $('.typeahead').typeahead(null, {
    name:'animals',
    source: engine.ttAdapter()
  })