function main(){
    let color=prompt("Enter color name");
    switch(color){
        case "red":
            console.log("STOP ");
            break;
        case "orange":
            console.log("GET READY ");
            break;  
        case "red":
            console.log("START ");
            break;   
        default:
            console.log(`Invalid color...`)      
    }
}
main();