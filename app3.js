// I could have multiple ajax linking to each page.
// auto populate
const images = [
  "imgs/Tatooine.png",
  "imgs/Alderaan.jpg",
  "imgs/Yavin4.png",
  "imgs/Hoth.jpg",
  "imgs/Dagobah.jpg",
  "imgs/Bespin.png",
  "imgs/Endor.png",
  "imgs/Naboo.png",
  "imgs/Coruscant.png",
  "imgs/Kamino.png",
]

$(() => {

    const $div = $('<div>').addClass('planets').appendTo('.container')

    // $('form').on('click', (event) => {
    //   event.preventDefault()

    // const userInput = $('input').val()



    $.ajax({

      url: "https://swapi.dev/api/planets/?page=1",
      // url: `https://swapi.dev/api/planets/${$(event.target).val()}`,
      type: "GET",
      // data: {
      //
      // }
    }).then(
      (data) => {
        // console.log(data)


        for (let i = 0; i < 10; i++) {

          // variable that produces th ename of the planet
          const $name = $('<div>').addClass(data.results[i].name)
          $div.append($name)

          const $button = $(`<button><img src=${images[i]} alt="planetImg"></button>`).addClass('myButton')
          $name.append($button)

          const $ul = $('<ul>').attr('id', 'planet').appendTo($name)


          for (let j = 1; j < 9; j++) {
            let planetInfo = Object.keys(data.results[j])
            // console.log(planetInfo[j])

            const $description =
              $('<li>').addClass('description').attr('id', planetInfo[j]).text(`${planetInfo[j]}: ${data.results[i][planetInfo[j]]}`)

            $ul.append($description)
            $($button).on('click', (event) => {
              $($description).toggleClass()
            })
          }
        }
      }
    )

})

// pageNum += 1
// if(pageNum === 3){
//   pageNum = 1
// }
// pageNum === 3 ? pageNum = 1 : null
