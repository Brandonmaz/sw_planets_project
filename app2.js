// I could have multiple ajax linking to each page.
// auto populate
$(() => {

      const $div = $('<div>').addClass('planets').appendTo('.container')


      // const $ul = $('<ul>').appendTo()
      // let pageNum = 1
      $('form').on('click', (event) => {
        event.preventDefault()

        const userInput = $('input').val()


      const carousel = () => {
        $.ajax({

          url: "https://swapi.dev/api/planets/?page=1",
          // url: `https://swapi.dev/api/planets/${$(event.target).val()}`,
          type: "GET",
          // data: {
          //   "$limit" : userInput
          // }
        }).then(
        (data) => {
            // console.log(data)


          for(let i = 0; i < 10; i++){

            // variable that produces th ename of the planet
            const $name = $('<div>').text(data.results[i].name).addClass(data.results[i].name)
            $div.append($name)

            const $button = $('<button>').text('DESCRIPTION').addClass('myButton')
            $name.append($button)

            const $ul = $('<ul>').attr('id', 'planet').appendTo($name)


              for(let j = 1; j < 9 ; j++){
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
            // pageNum += 1
            // if(pageNum === 3){
            //   pageNum = 1
            // }
            // pageNum === 3 ? pageNum = 1 : null
        }
      )
    })
  }
})















// // I could have multiple ajax linking to each page.
// // auto populate
// $(() => {
//       const $ul = $('<ul>').attr('id', 'planet').appendTo('body')
//       // let pageNum = 1
//       $('form').on('submit', (event) => {
//         event.preventDefault()
//
//         const userInput = $('input').val()
//
//         $.ajax({
//           // increment on page
//           url: `https://swapi.dev/api/planets/?page=1${$(event.target).val()}`,
//           type: "GET",
//           // data: {
//           //   page: pageNum,
//           // }
//         }).then(
//         (planets) => {
//           //  // this will log the array with name, rotation_period, etc
//           console.log(planets.results)
//
//           // let planetInfo = Object.keys(planets.results[0])
//           // console.log(planetInfo)
//
//           // // this will log the name of the planet
//           // console.log(planets.results[0][planetInfo[0]])
//           // console.log(planets.results[0].name)
//
//           // create a for loop that will
//           for(let planet of planets.results){
//             // logs name
//             // console.log(planet.name)
//             // $('.container').append(`<h1>${planet}`)
//             // $('.container').append(`<h1>${planet.diameter}`)
//             for(let p in planet){
//               console.log(planet);
//               $('.container').append(`<h1>${planet[p]}`)
//
//             }
//           }
//
//          // $('.container').append(`<h1>${planets.results[0][planetInfo[0]]}`)
//          // $('.container').append(`<h1>${planets.results[0]}`)
//
//
//           // This is giving me the first planet on the first array
//           // $('.container').append(`<h1>${data.results[0].name}`)
//           // $('.container').append(`<h1>${data.results[1].name}`)
//           // $(".container").append(`<img width="50%" src="" alt="tatooine">`)
//           // pageNum += 1
//           // if(pageNum === 3){
//           //   pageNum = 1
//           // }
//           // pageNum === 3 ? pageNum = 1 : null
//       },
//       (error) => {
//         console.log(error);
//
//       }
//     )
//   })
// })

// ===========================================================================
// FINAL
// ===========================================================================
// // I could have multiple ajax linking to each page.
// // auto populate
// $(() => {
//
//       const $div = $('<div>').addClass('planets').appendTo('.container')
//
//
//       // const $ul = $('<ul>').appendTo()
//       // let pageNum = 1
//       $('form').on('click', (event) => {
//         event.preventDefault()
//
//         const userInput = $('input').val()
//
//         $.ajax({
//
//           url: "https://swapi.dev/api/planets/?page=1",
//           // url: `https://swapi.dev/api/planets/${$(event.target).val()}`,
//           type: "GET",
//           // data: {
//           //   "$limit" : userInput
//           // }
//         }).then(
//         (data) => {
//             // console.log(data)
//
//
//           for(let i = 0; i < 10; i++){
//
//             // variable that produces th ename of the planet
//             const $name = $('<div>').text(data.results[i].name).addClass(data.results[i].name)
//             $div.append($name)
//
//             const $button = $('<button>').text('DESCRIPTION').addClass('myButton')
//             $name.append($button)
//
//             const $ul = $('<ul>').attr('id', 'planet').appendTo($name)
//
//               for(let j = 1; j < 9 ; j++){
//                 let planetInfo = Object.keys(data.results[j])
//                 // console.log(planetInfo[j])
//
//                 const $description =
//                 $('<li>').addClass('description').attr('id', planetInfo[j]).text(`${planetInfo[j]}: ${data.results[i][planetInfo[j]]}`)
//
//                 $ul.append($description)
//                 $($button).on('click', (event) => {
//                 $description.toggleClass()
//                 })
//           }
//         }
//       },
//       (error) => {
//         console.log(error);
//
//       }
//     )
//   })
// })
