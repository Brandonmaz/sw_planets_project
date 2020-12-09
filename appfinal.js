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



        const $name = $('<div>').addClass('planetName')
        $div.append($name)

        // const $button = $('<button>').text(planetName).addClass('i')
        // $name.append($button)
        const $button = $('<button>').addClass('openModal').text(planetName)
        $name.append($button)

        const $b = $('<div>').appendTo('body')

        const $divModal = $('<div>').attr('id', 'modal')
        $b.append($divModal)

        const $divModalText = $('<div>').addClass('modal-textbox')
        $divModal.append($divModalText)

        const $a = $('<button>').addClass('close').attr('href', '#').text('Close').appendTo($divModalText)


        const $ul = $('<ul>').attr('id', 'planet')
        $name.append($ul)



        for (let j = 1; j < 9; j++) {

          let planetInfoName = Object.keys(data.results[j])
          // console.log(planetInfo[planetInfoName[j]])

          const $li = $('<li>').text(`${planetInfoName[j]}: ${planetInfo[planetInfoName[j]]}`).appendTo($divModalText)

          // this is my modal section where all the planet info is and my working buttons
          const $openBtn = $('.openModal')
          const $modal = $('#modal')
          const $closeBtn = $('.close')

          const openModal = (event) => {
            // event.currentTarget
            $modal.css('display', 'block')
          }
          const closeModal = () => {
            $modal.css('display', 'none')
          }
          $openBtn.on('click', openModal)

          $a.on('click', closeModal)


          // $ul.append($description)
          // $($button).on('click', (event) => {
          // $($li).toggleClass()
          // })
        }
      }
    }
  )
})
