function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end)*264;
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end); 
    if (feet < 400) {
        return 0;
    }  else if (feet < 2000) {
        return (feet - 400)*0.02;
    }  else if (feet < 2500) {
        return 25;
    }  else if (feet >2500) {
        return 'cannot travel that far';
    }
}