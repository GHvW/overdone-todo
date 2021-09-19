const partition = (predicate, collection) => {
  return collection.reduce(
    (state, next) => {
      if (predicate(next)) {
        state.matches.push(next);
      } else {
        state.nonMatches.push(next);
      }
      return state;
    },
    { matches: [], nonMatches: [] }
  );
};

// type PartitionState<A> = { matches: Array<A>, nonMatches: Array<A> };
// partitionState: { matches, nonMatches };

// type Predicate = (Data) => boolean
// signature: (Predicate) => (State, Data) => State
const partitioner = (predicate) => (partitionState, next) => {
  return predicate(next)
    ? {
        matches: [...partitionState.matches, next],
        nonMatches: partitionState.nonMatches
      }
    : {
        matches: partitionState.matches,
        nonMatches: [...partitionState.nonMatches, next]
      };
};

const partition2 = (predicate, collection) => {
  return collection.reduce(partitioner(predicate), {
    matches: [],
    nonMatches: []
  });
};

const isEvenPartitioner = [
  partitioner((x) => x % 2 === 0),
  {
    matches: [],
    nonMatches: []
  }
];

Array.prototype.reduce.apply(
  [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14],
  isEvenPartitioner
);

const partitionBy = (predicate) => {
  return [
    partitioner(predicate),
    {
      matches: [],
      nonMatches: []
    }
  ];
};

const isOddPartitioner = partitionBy((it) => it % 2 !== 0);
