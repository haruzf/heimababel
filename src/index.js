import $ from 'jquery'

$(function() {
    $('li:odd').css('backgroundColor', 'lightgreen')
    $('li:even').css('backgroundColor', 'lightblue')
})