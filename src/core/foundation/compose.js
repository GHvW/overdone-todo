const compose = (f, g) => (a) => f(g(a));

export { compose };
