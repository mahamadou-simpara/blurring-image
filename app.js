const body = document.querySelector('body');
const percentage = document.querySelector('div');

console.log(body);
console.log(percentage);

let load = 0;

setInterval(blurring, 30)

function blurring (){
    load++;

    // console.log(load);

    if(load > 99){
        load = 100;
    };
    percentage.innerHTML = `${load}%`;
    percentage.style.opacity = mapRange(load, 0, 100, 100, 0) + '%';
    body.style.backdropFilter = `blur(${mapRange(load, 0, 100, 50, 0)}px)`;
}

function mapRange(value, inMin, inMax, outMin, outMax) {
    // Calculate the input range and output range spans
    const inRange = inMax - inMin;
    const outRange = outMax - outMin;
  
    // Normalize the input value within the input range
    const normalizedValue = (value - inMin) / inRange;
  
    // Map the normalized value to the output range
    const mappedValue = (normalizedValue * outRange) + outMin;
  
    // Return the mapped value
    return mappedValue;
  }