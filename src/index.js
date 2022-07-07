import $ from 'jquery'
import './css/1.css'
// import './css/1.less'
// import './css/1.scss'
// import App from './components/App.vue'

$(function() {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'lightblue')
})