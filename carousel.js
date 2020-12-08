$(() => {
  let currentImgIndex = 0
  let numOfImages = $('.carousel-images').children().length - 1
  $('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex < numOfImages) {
      currentImgIndex++
    } else {
      currentImgIndex = 0
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

        const $name = $('<div>').addClass('planetName')
        $div.append($name)

        const $button = $('<button>').text(planetName).addClass('button')
        $name.append($button)

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
