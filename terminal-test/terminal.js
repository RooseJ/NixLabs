//Terminal commands
var nameID = 'Houston'
var selector = '>'
var term = document.getElementById('terminalHeader')
term.innerHTML = nameID
$('#terminalBody').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Welcome to this terminal.');
    }
}, {
    greetings: 'Welcome to Cisco XV201',
    name: nameID,
    prompt: nameID + ' ' + selector
});


