// const images = [
//   "imgs/Tatooine.png",
//   "imgs/Alderaan.jpg",
//   "imgs/Yavin4.png",
//   "imgs/Hoth.jpg",
//   "imgs/Dagobah.jpg",
//   "imgs/Bespin.png",
//   "imgs/Endor.png",
//   "imgs/Naboo.png",
//   "imgs/Coruscant.png",
//   "imgs/Kamino.png",
// ]
const planetNames = [
  "Alderaan",
  "Yavin4",
  "Hoth",
  "Dagobah",
  "Bespin",
  "Endor",
  "Naboo",
  "Coruscant",
  "Kamino",
  "Tatooine",
]

$(() => {
  let index = 0
  let currentImgIndex = 0
  let numOfImages = $('.carousel-images').children().length - 1
  $('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    $('#planet').text(planetNames[index])
    if (currentImgIndex < numOfImages) {
      currentImgIndex++
      index++
    } else {
      currentImgIndex = 0
      index = 0
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $.ajax({

    url: "https://swapi.dev/api/planets/?page=1",
    type: "GET",

  }).then(
    (data) => {

      const $div = $('<div>').addClass('divPlanets').appendTo('.container')


      for (let i = 0; i < 10; i++) {

        let planetInfo = data.results[i]
        let planetName = data.results[i].name
        // console.log(data.results[i].name)

        const $button = $('<button class="openModal">').attr('id', planetName).text(planetName)
        $div.append($button)

        const $divModal = $('<div>').attr('id', 'modal')
        $div.append($divModal)

        const $divModalText = $('<div>').attr('id', 'modal-textbox')
        $divModal.append($divModalText)

        const $a = $('<a>').addClass('close').attr('href', '#').text('Close').appendTo($divModalText)

        for (let j = 1; j < 9; j++) {

          let planetInfoName = Object.keys(data.results[j])
          // console.log(planetInfoName);
          // console.log(planetInfo[planetInfoName[j]])

          // const $description =
          //   $('<li>').addClass('description').text(`${planetInfoName[j]}: ${planetInfo[planetInfoName[j]]}`)
          // console.log(`${planetInfoName[j]}: ${planetInfo[planetInfoName[j]]}`)

          const $li = $('<li>').addClass('description').text(`${planetInfoName[j]}: ${planetInfo[planetInfoName[j]]}`).appendTo($divModalText)
          console.log($li);

          // this is my modal section where all the planet info is and my working buttons

          // const $openModal =

          const $modal = $('#modal')
          const $closeBtn = $('.close')

          $($button).on('click', () => {
            $modal.empty()
            $modal.append($div)
            $('#modal').removeClass()
          })


        //   const openModal = (event) => {
        //     $modal.css('display', 'block')
        //   }
        //   const closeModal = () => {
        //     $modal.css('display', 'none')
        //   }
        //   $button.on('click', (openModal) => {
        //     $modal.css('display', 'block')
        //   }
        // )
        //   $closeBtn.on('click', (closeModal) => {
        //     $modal.css('display', 'none')
        //   })


          // $ul.append($description)
          // $($button).on('click', (event) => {
          // $($li).toggleClass()
          // })
        }
      }
    }
  )
})
