import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
// import App from './components/App.vue'

$(function() {
    $('li:odd').css('backgroundColor', 'orange')
    $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
    static info = 'aaabca'
}

console.log(Person.info);