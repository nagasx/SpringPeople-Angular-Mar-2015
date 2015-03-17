function getAdder(){
    var subscriptionFns = [];
    function addSubscriber (fn){
        subscriptionFns.push(fn);
    }
    function add(x,y){
        setTimeout(function(){
            console.log("returning result");
            var result = x + y;
            for(var i=0; i<subscriptionFns.length; i++)
                subscriptionFns[i](result);
        },5000);
    }
    return {
        addSubscriber : addSubscriber,
        add : add
    }
}
