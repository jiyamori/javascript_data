//destructure in object
 const band={
    bandName: "bts",
    famousSong: "butter",
    year: "2013",
    anotherSong: "dance",
 };

//  const bandName= band.bandName;
//  const famousSong = band.famousSong;
//  console.log(bandName,famousSong);

let {bandName:kpopband,famousSong, ...restdetail}=band;
bandName= "blackpink";
console.log(restdetail);