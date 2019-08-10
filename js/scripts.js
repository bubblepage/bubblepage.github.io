$('[lang="eng"]').hide();

$('#switch-lang').click(function() {
  $('[lang="eng"]').toggle();
  $('[lang="ru"]').toggle();
});