var jsdom = require('jsdom');
var html = require('./testhtml.js');

function getElsByClass (node, className) {
    //for every child of node
    //check to see if it's got the class className
    //if it has, add it to an object
    return node;   
}


//for every child of document, call getElsByClass. 





    jsdom.env(
        html,
        function (err, window) {
            console.log(
            window.document.getElementsByClassName('a')[0].children
            );
        }
    )


module.exports = getElsByClass;

