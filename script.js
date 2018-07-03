// coded by @SamAI-Software
const projectName = 'survey-form';
localStorage.setItem('example_project', 'Survey Form');

var button = document.getElementById('submit');
button.onclick = function (e) {
  e.preventDefault();

  // var name = document.getElementById('name').value;
  // var email = document.getElementById('email').value;
  // var select = document.getElementsByClassName('dropdown')[0].value;
  // var selecttwo = document.getElementsByClassName('dropdown')[1].value;
  // alert(name + '  ' + email + '  ' + select + '  ' + selecttwo);

  alert('The form was submitted');
}
