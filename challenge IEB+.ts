function route(venues: number[], target: number): number[] {
  const seen = new Map<number, number>(); // value: index
  let n1: number, complement: number, j: number | undefined;

  for (let i = 0; i < venues.length; i++) {
    n1 = venues[i];
    complement = target - n1;

    if(complement <= 0 || complement >= target) // to avoid save unnecesary numbers
      continue;

    j = seen.get(complement);


    if (j !== undefined) {
      return [j, i];
    }

    if (!seen.has(n1)) seen.set(n1, i);
  }

  return [];
}

const venues = [120, 100, 39, 12039, 50, 0, 60];
const target = 100;

const [i, j] = route(venues, target)

if(!i || !j)
  console.log("No route found")
else
  console.log(`Route found for the target equal to ${target}. Venue ${i} with ${venues[i]} shares and venue ${j} with ${venues[j]} shares.`)