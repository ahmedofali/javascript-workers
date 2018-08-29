var first = document.querySelector('#first_number');
var second = document.querySelector('#second_number');

var result = document.querySelector('.result');

if (window.Worker) { // Check if Browser supports the Worker api.
	// Requires script name as input
    var myWorker = new Worker("worker.js");

    first.onchange = function ()
    {
        myWorker.postMessage( [ first.value, second.value ] );
    }

    second.onchange = function ()
    {
        myWorker.postMessage( [ first.value, second.value ] );
    }

    myWorker.onmessage = function( e ) 
    {
        result.textContent = e.data ;
        console.log( 'result should be updated' );
    }
}