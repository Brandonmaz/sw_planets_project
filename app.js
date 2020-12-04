// I could have multiple ajax linking to each page.
// auto populate
$(() => {
      const $ul = $('<ul>').attr('id', 'planet').appendTo('body')
      // let pageNum = 1
      $('form').on('click', (event) => {
        event.preventDefault()

        const userInput = $('input').val()

        $.ajax({
          // increment on page
          url: `https://swapi.dev/api/planets/?page=1`,
          type: "GET",
          // data: {
          //   page: pageNum,
          // }
        }).then(
        (planets) => {
          //  // this will log the array with name, rotation_period, etc
          console.log(planets.results)

          // let planetInfo = Object.keys(planets.results[0])
          // console.log(planetInfo)

          // // this will log the name of the planet
          // console.log(planets.results[0][planetInfo[0]])
          // console.log(planets.results[0].name)

          // create a for loop that will
          for(let planet of planets.results){
            // logs name
            // console.log(planet.name)
            // $('.container').append(`<h1>${planet}`)
            // $('.container').append(`<h1>${planet.diameter}`)
            for(let p in planet){
              console.log(planet[p]);
              $('.container').append(`<h1>${planet[p]}`)
              
            }
          }

          // for(let i = 0; i < planets.results; i++){
          //   console.log(planet.results)
          //   $('.container').append(`<h1>${planet.name}`)
          // }


         // $('.container').append(`<h1>${planets.results[0][planetInfo[0]]}`)
         // $('.container').append(`<h1>${planets.results[0]}`)


          // This is giving me the first planet on the first array
          // $('.container').append(`<h1>${data.results[0].name}`)
          // $('.container').append(`<h1>${data.results[1].name}`)
          // $(".container").append(`<img width="50%" src="" alt="tatooine">`)
          // pageNum += 1
          // if(pageNum === 3){
          //   pageNum = 1
          // }
          // pageNum === 3 ? pageNum = 1 : null
      },
      (error) => {
        console.log(error);

      }
    )
  })
})



// // I could have multiple ajax linking to each page.
// // auto populate
// $(() => {
//       const $ul = $('<ul>').attr('id', 'planet').appendTo('body')
//       let pageNum = 1
//       $('form').on('submit', (e) => {
//         e.preventDefault()
//         $.ajax({
//           // increment on page
//           url: "https://swapi.dev/api/planets/",
//           type: "GET",
//           data: {
//             page: pageNum,
//           }
//         }).then(
//         (data) => {
//           console.log(data)
//
//           // This is giving me the first planet on the first array
//
//           $('.container').append(`<h1>${data.results[0].name}`)
//           $('.container').append(`<h1>${data.results[1].name}`)
//           // $('.container').append()
//           // $(".container").append(`<img width="50%" src="" alt="tatooine">`)
//           pageNum += 1
//           if(pageNum === 6){
//             pageNum = 1
//           }
//           // pageNum === 3 ? pageNum = 1 : null
//       },
//       (error) => {
//         console.log(error);
//
//       }
//     )
//   })
// })
