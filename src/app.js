import { sum } from './math'
import './app.css'
import webpackImage from './webpack.png'

window.addEventListener('DOMContentLoaded', () => {
    const result = sum(1, 2)
    const el = document.querySelector('#app')
    el.innerHTML = `<h1> result : ${result} </h1>
    <img src="${webpackImage}" alt="webpack image" />
    `
})