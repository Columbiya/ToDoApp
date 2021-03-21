function* generator() {
    let id = 0;
    while(true) {
        id++;
        yield id;
    }
}

export const idGenerator = generator();

export default generator;