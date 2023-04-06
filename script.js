

document.querySelector('.btn').addEventListener('clicked', function() {
    console.log('Button was clicked.');
});



/*// budget controller

var budgetController = (function() {

})();

/// ui contrroller

var UIController = (function() {

})();


/// global app controller

var budgetController = (function(budgetCtrl, UICtrl) {
    document.querySelector('.btn').addEventListener('click', function() {
        console.log('Button was clicked.');
    });

})(budgetController, UIController);