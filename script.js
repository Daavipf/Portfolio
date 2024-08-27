function openTab(tabId) {
  var tabs = document.querySelectorAll(".tab")
  tabs.forEach(function (tab) {
    tab.classList.remove("active")
  })

  var tab = document.getElementById(tabId)
  tab.classList.add("active")

  var sidebar = document.querySelector(".sidebar")
  sidebar.classList.add("active")
}

function clearSidebar() {
  var sidebar = document.querySelector(".sidebar")
  sidebar.classList.remove("active")
}

const thumbnail = document.querySelector('.thumbnail');
const img = thumbnail.querySelector('img');

thumbnail.addEventListener('mouseenter', () => {
    const imgHeight = img.offsetHeight;
    const containerHeight = thumbnail.offsetHeight;
    const scrollDistance = imgHeight - containerHeight;

    img.style.transform = `translateY(-${scrollDistance}px)`;
});

thumbnail.addEventListener('mouseleave', () => {
    img.style.transform = 'translateY(0)';
});

document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tabs-button');
  const tabContents = document.querySelectorAll('.tabs-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      // Remove a classe 'active' de todos os botões e conteúdos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Adiciona a classe 'active' ao botão clicado e ao conteúdo correspondente
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
});
