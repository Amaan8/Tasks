console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    })

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'));

    let ticket = await promiseWifeBringingTicks;

    console.log(`Wife: I have the ${ticket}`);
    console.log('Husband: We should go in');
    console.log('Wife: No, I am hungry');

    let popcorn = await getPopcorn;

    console.log(`Husband: I got some ${popcorn}`);
    console.log('Husband: We should go in');
    console.log('Wife: I need butter on my popcorn');

    let butter = await addButter;

    console.log(`Husband: I got some ${butter} on popcorn`);
    console.log('Wife: I also need cold drinks');

    let coldDrinks = await getColdDrinks;

    console.log(`Husband: I got ${coldDrinks}`);
    console.log('Husband: Anything else darling?');
    console.log('Wife: Lets go we are getting late');
    console.log('Husband: Thank you for the reminder *grins*');

    return ticket;
}

preMovie().then((m) => console.log(`Person3: shows ${m}`));

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');