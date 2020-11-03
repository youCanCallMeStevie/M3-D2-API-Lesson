window.onload = function () {
    let heartOutline = document.querySelector(".loved-track .far.fa-heart");
    let heartFilled = document.querySelector(".loved-track .fas.fa-heart");
    heartFilled.addEventListener("click", function () {
      if (!heartFilled.classList.contains("active")) {
        heartFilled.classList.toggle("active");
        heartFilled.style.opacity = 1;
        heartOutline.style.opacity = 0;
      } else {
        heartFilled.classList.toggle("active");
        heartFilled.style.opacity = 0;
        heartOutline.style.opacity = 1;
      }
    });
    fetchData('eminem')
       }
  
       const fetchData = (param) => {
         let parent = document.querySelector(".highlighted-albums")
         let cardRow = []
        fetch(`https://rapidapi.p.rapidapi.com/search?q=${param}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "4bb20f6604msh9b222051d03b6c2p1fd59ajsn582121b526ed",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
          }
        })
        .then(response => response.json()).then(parsedJson=> {
    
          parsedJson.data.forEach(element => {
            console.log(element)
            let card = ` <div class="trending card col-3">
            <img
              class="card-img-top"
              src="${element.album.cover_xl}"
              alt="spotify_playlist_1"
            />
            <i class="spotify-card-icon fab fa-spotify"></i>
            <span class="overlay-icons"
              ><i class="heart far fa-heart fa-sm mr-3"></i
              ><i class="play fas fa-play fa-1x mr-3"></i
              ><i class="fa fa-ellipsis-h fa-sm"></i>
            </span>
            <div>
              <h6>${element.title}</h6>
            </div>
          </div>`
          cardRow.push(card)
          });
          parent.innerHTML = cardRow.join('')
        })
        .catch(err => {
          console.error(err);
        });
       };
  
  
  
    let muted = document.querySelector(".player-volume .fas.fa-volume-mute");
    let volMax = document.querySelector(".player-volume .fas.fa-volume-up");
    let vol = document.getElementById("nowplayingVolume");
    muted.addEventListener("click", function () {
      if (!muted.classList.contains("active")) {
        console.log("going mute");
        muted.classList.toggle("active");
        muted.style.opacity = 1;
        volMax.style.opacity = 0;
        vol.style.width = "0%";
      } else {
        muted.classList.toggle("active");
        muted.style.opacity = 0;
        volMax.style.opacity = 1;
        vol.style.width = "100%";
      }
    });
  
    let cardHeartOutline = document.querySelectorAll(".overlay-icons .heart");
    for (let i = 0; i < cardHeartOutline.length; i++) {
      cardHeartOutline[i].addEventListener("click", function () {
        if (cardHeartOutline[i].classList.contains("far")) {
          cardHeartOutline[i].classList.toggle("fas");
        } else {
          cardHeartOutline[i].classList.toggle("far");
        }
      });
    }
  
  
    const listAlbums = (param) => {
      let parent = document.querySelector(".listed-albums-container")
      let albumList = []
     fetch(`https://rapidapi.p.rapidapi.com/search?q=${param}`, {
       "method": "GET",
       "headers": {
         "x-rapidapi-key": "4bb20f6604msh9b222051d03b6c2p1fd59ajsn582121b526ed",
         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
       }
     })
     .then(response => response.json()).then(parsedJson=> {
  
       parsedJson.data.forEach(element => {
         console.log(element)
         let album = ` <div class="listed-albums col">
           <h6>${element.title}</h6>
       </div>`
       albumList.push(album)
       });
       parent.innerHTML = albumList.join('')
     })
     .catch(err => {
       console.error(err);
     });
    };
  
    function uniqueAlbums() {
      let parent = document.querySelector(".unique-albums")
      let differentAlbums = document.getElementsByClassName("card-img-top")
        .length;
        alert(
        "There are " + differentAlbums + " different albums on this page."
      );
    }
  