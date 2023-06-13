const distanceFromHqInBlocks = (street)=>{
    return Math.abs(street - 42);
}
const distanceFromHqInFeet = (street)=>{
    return distanceFromHqInBlocks(street)*264;
}
const distanceTravelledInFeet = (start, destination) =>{
    return Math.abs(destination - start)*264;
}
const calculatesFarePrice = (start, destination) => {
    const distance =distanceTravelledInFeet(start, destination);
    var charge;
    if (distance<=400){
        charge=0;
    }
    else if( distance >400 && distance <2000){
        charge = (distance-400)*0.02;
    }
    else if (distance <=2500){
        charge = 25;
    }
    else {
        charge ="cannot travel that far";
    }
    return charge;
}