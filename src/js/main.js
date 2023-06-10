const moreOptions = document.querySelector("#bmore");
const bShowMobilelinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

bShowMobilelinks.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});

const videos = [
  {
    id: "97kSezL5meU",
  },
  {
    id: "1cqoStwg1Vg",
  },
  {
    id: "yzEXI3iQO1A",
  },

];

const sliderContainer = document.querySelector('#slider')
const currentContainer = document.querySelector('#current')
const videosContainer = document.querySelector('#videos-container')
const bNext = document.querySelector('#next')
const bPrev = document.querySelector('#prev')
let current = 0;

bNext.addEventListener("click", (e) => {
  let changed = current;
  current = current + 1 < videos.length ? current + 1: current;
  if (current != changed) {
    renderCurrentVideo(videos[current].id);  
  }

});

bPrev.addEventListener("click", (e) => {
  let changed = current;
  current = current - 1 >= 0 ? current - 1 : current;
  if (current != changed) {
    renderCurrentVideo(videos[current].id);
  }    
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id){
  currentContainer.innerHTML = `<iframe width="100%" height="480" src="https://www.youtube.com/embed/${id}" title="LATAM Logra el MAYOR RECORD MUNDIAL de Warzone 2 *121 KILLS*" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

}

function renderVideos(){
  const html = videos.map((video, index) => {
    return `<div class="item">
     <a href="#" data-id="${index}">
        <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
     </a>
    </div>`;
  });

  videosContainer.innerHTML = html.join("");

  document.querySelectorAll('.item a').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const id = +item.getAttribute('data-id');
      current = id;
      renderCurrentVideo(videos[current].id);
    })
  })
}
