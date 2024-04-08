// import { useState, useEffect } from 'react' 

// const SearchBar = () => {

//     const [content, setContent] = useState('')
//     const [results, setResults] = useState([])
//     const [flag, setFlag] = useState(false)

//     useEffect(() => {
//         let url = '';
//         if (content != '') {
//             url = "http://localhost:4000/users/getEmailByRegex/hi?search=" + content
//         } else {
//             url = "http://localhost:4000/users/getEmailByRegex/hi"
//         }
//         fetch(url, {
//             "method": "GET",
//             "mode": "cors",
//         }).then((res) => {
//             return res.json()
//         }).then((res) => {
//             console.log(res)
//             setResults([])
//             setResults(res)
//             setFlag(true)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }, [content])

//     function render(results) {
//         if (flag == true) {
//             while (document.getElementById('render-results').firstChild) {
//                 const el = document.getElementById('render-results')
//                 el.removeChild(el.lastChild)
//             }
//         }
//         for (let i = 0; i < results.length; i++) {
//             if (document.getElementById('render-results').childElementCount < results.length) {
//                 const listEl = document.createElement("li")
//                 listEl.innerText = results[i].email
//                 document.getElementById('render-results').appendChild(listEl)
//             }
//         }
//     }

//     return(<>
//         <input type="text" onChange={(e) => setContent(e.target.value)}></input>
//         <ul id='render-results'>{render(results)}</ul>
//     </>)
// }

// export default SearchBar;