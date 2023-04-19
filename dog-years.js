function dogYears(planet, ageInSeconds) {
    const EARTH_YEAR_SECONDS = 31557600;
    const DOG_YEAR_FACTOR = 7;
    let orbitalPeriod;
    switch (planet) {
      case "earth":
        orbitalPeriod = 1;
        break;
      case "mercury":
        orbitalPeriod = 0.2408467;
        break;
      case "venus":
        orbitalPeriod = 0.61519726;
        break;
      case "mars":
        orbitalPeriod = 1.8808158;
        break;
      case "jupiter":
        orbitalPeriod = 11.862615;
        break;
      case "saturn":
        orbitalPeriod = 29.447498;
        break;
      case "uranus":
        orbitalPeriod = 84.016846;
        break;
      case "neptune":
        orbitalPeriod = 164.79132;
        break;
      default:
        throw new Error("Invalid planet name");
    }
    const earthYears = ageInSeconds / EARTH_YEAR_SECONDS;
    const dogYears = earthYears / orbitalPeriod * DOG_YEAR_FACTOR;
    return Math.round(dogYears * 100) / 100;
  }