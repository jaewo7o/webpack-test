import { sum } from './math'
import './app.css'
import webpackImage from './webpack.png'

window.addEventListener('DOMContentLoaded', () => {
    const param1 = 2
    const param2 = 3
    const result = sum(param1, param2)
    const el = document.querySelector('#app')
    el.innerHTML = `<h1> ${param1} + ${param2} : ${result} </h1>
    <img src="${webpackImage}" alt="webpack image" />
    `
})