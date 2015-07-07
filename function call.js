function X (handsome, funny, mercedes){
X.handsome = handsome;
X.funny = funny;
X.mercedes = mercedes;
}

function happy (X){
    return (X.handsome && X.mercedes && X.funny);
}
function comfortable (X){
    return (X.handsome && X.mercedes &&! X.funny);
}
function try (X){
    return (!X.handsome && !X.mercedes && X,funny);
}

if happy (X){
    console.log("I am happy");
}
if comfortable (X){
    console.log ("I am comfortable");
}
if try (X){
    console.log ("I will try");
}