async function fetchData(dist: number): Promise<any> {
  return fetch("https://creativecommons.tankerkoenig.de/json/list.php?lat=50.985031&lng=6.514630&rad=" + dist + "&sort=price&type=e10&apikey=" + process.env.REACT_APP_TANKERKOENIG_API_KEY);
}

export {
  fetchData
}