document.addEventListener("DOMContentLoaded", function () {
  function fetchBlague(type) {
      return fetch(`https://www.blagues-api.fr/api/type/${type}/random`, {
          headers: {
              'Authorization': 'Bearer {API_KEY}'
          }
      })
      .then(response => response.json())
      .then(data => {
          document.getElementById('blague').innerText = data.joke;
          document.getElementById('reponse').innerText = data.answer;
      })
      .catch(error => console.error('Erreur lors de la récupération de la blague :', error));
  }

  document.getElementById('btn').addEventListener('click', () => {
      const optionSource = document.querySelector('input[name="optionSource"]:checked').value;
      fetchBlague(optionSource);
  });

  // Affichage de la blague au chargement de la page
  fetchBlague('dark');
});
