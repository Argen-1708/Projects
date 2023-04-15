// class Comment {
//     constructor(text){
//         this.text= text
//         this.votesQty = 0
//     }
//     upvote(){
//         this.votesQty += 1 
//     }
// }
// const firstComment = new Comment ('first comment')
// const secondComment = new Comment('second Comment')
// const thitdComment = new Comment ('third comment')
// firstComment.votesQty
// firstComment.upvote()
// // firstComment.votesQty
// // firstComment.upvote()
// // console.log(firstComment.votesQty)
// // firstComment.upvote()
// // console.log(firstComment.votesQty)
// // secondComment.votesQty
// // console.log(secondComment.votesQty)
// // secondComment.upvote()
// // console.log(secondComment.votesQty)
// console.log(firstComment.text)
// console.log(Comment)
// class Commet {
//     constructor(text){
//         this.text = text
//         this.votesqty = 0 
//     }
//     upvote() {
//         this.votesqty+=1
//     }
//     static mergeComment(first,second){
//         return `${first} ${second} `
//     }
// }
// Commet.mergeComment('first commet.', 'second commet')
// const Argen = 'Argen'
// //console.log(Argen.toUpperCase)
// // console.log(22)
// fetch('https://jsonplaceholder.typicode.com/')
// .then(response => {
//     console.log(response)
//     return response.json
// })
// .then(json => console.log(json))
// .catch(error => console.error(error))
// const getData = (url)=>
// new Promise((resolve,reject)=>
// fetch(url)
// .then(response => response.json())
// .then(json => resolve(json))
// .catch(error => reject(error))
// )
// getData('https://jsonplaceholder.typicode.com/')
// .then(data=>console.log(data))
// .catch(error => console.log(error.message))
// const asyncFn = async ()=>{
//     return 10 
// }
// asyncFn()
// .then(value => console.log(value))
// const Timepromise = ()=>
// new Promise((resolve, reject) => 
//     setTimeout(()=> resolve(),2000))
//     const asyncFn = async () =>{
//         console.log('Timer Starts')
//         const StartTime = perfomance.now()
//         await Timepromise ()
//         const endTime = perfomance.now()
//         console.log('Timer starts', endTime - StartTime)
//     }
//     asyncFn()
//     const timerPromise = () =>
// new Promise ((resolve, reject) =>
// setTimeout ( () => resolve () , 2000))

// const asyncFn = async () => {
// console. log ('Timer starts')
// const startTime = performance. now ( )
// await timerPromise ()
// const endTime = performance. now ( )
// console. log ('Timer ended', endTime - startTime)
// }
// asyncFn()
// const getData = async (url)=>{
//     const res = await fetch(url)
//     const json = await res.json()
//     return json 
// }
// const url = 'https://jsonplaceholder.typicode.com/'
// const data = await getData(url)
try{
    const data = await getData()
    console.log(data)
}catch(error){
    console.log(error.message)
}