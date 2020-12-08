// const images = [
//   "imgs/Tatooine.png",
//   "imgs/Alderaan",
//   "imgs/Yavin4.png",
//   "imgs/Hoth",
//   "imgs/Dagobah.jpg",
//   "imgs/Bespin.png",
//   "imgs/Endor.png",
//   "imgs/Naboo.png",
//   "imgs/Coruscant.png",
//   "imgs/Kamino.png",
// ]
const planetNames = [
  "Tatooine",
  "Alderaan",
  "Yavin4",
  "Hoth",
  "Dagobah",
  "Bespin",
  "Endor",
  "Naboo",
  "Coruscant",
  "Kamino",
]

$(() => {
  let currentImgIndex = 0
  let currentPlanet = 0

  // let $h3 = $(`<h3>${planetNames[currentPlanet]}</h3>`).css('color', '#fff').prependTo($('.container'))

  let numOfImages = $('.carousel-images').children().length - 1
  $('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

    if (currentImgIndex < numOfImages) {
      currentImgIndex++
      $(`<h3>${planetNames[3]}</h3>`).css('color', '#fff').prependTo($('.container'))
    } else {
      currentImgIndex = 0
      // currentPlanet = 0
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $.ajax({

    url: "https://swapi.dev/api/planets/?page=1",
    type: "GET",

  }).then(
    (data) => {

      const $div = $('<div>').addClass('divPlanets').appendTo('.container')
      $('.tatooine').appendTo('#tatooine')



      // let imageloop = planetNames.forEach((planet) => {
      //   return $(`<h3>${planet}</h3>`).css('color', 'white').prependTo($('.container'))
      // })
      let planetName = planetNames
      let planetIndex = 0
      $(`<div><h3>${planetName[planetIndex]}</h3></div>`).css('color', '#fff').prependTo($('.container'))


      for (let i = 0; i < 10; i++) {
        planetIndex+=1
        planetInfo = data.results[i]
        planetName = data.results[i].name
        console.log(data.results[i].name)

        const $name = $('<div>').addClass('planetName')
        $div.append($name)



        const $button = $('<button>').text(planetName).addClass(data.results[i].name)
        $name.append($button)
        // const $button = $('<button>').text(planetName).addClass('i')
        // $('.text').append($button)


        const $ul = $('<ul>').attr('id', 'planet')
        $name.append($ul)



        for (let j = 1; j < 9; j++) {

          let planetInfoName = Object.keys(data.results[j])
          // console.log(planetInfo[planetInfoName[j]])

          const $description =
            $('<li>').addClass('description').text(`${planetInfoName[j]}: ${planetInfo[planetInfoName[j]]}`)
          // console.log(`${planetInfoName[j]}: ${planetInfo[planetInfoName[j]]}`)



          $ul.append($description)
          $($button).on('click', (event) => {
            $($description).toggleClass()
          })
        }
      }

    }
  )
})
