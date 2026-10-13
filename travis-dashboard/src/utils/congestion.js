export function getStatus(value){
    if (value < 30){
        return "Free Flow";
    }
    if (value < 70){
        return "Moderate";
    }
    return "Heavy";
}

export function getColor(value){
    if (value < 39){
        return "#228B22";
    }

    if (value < 74){
        return "#FFFF00";
    }

    return "#FF0000";
}