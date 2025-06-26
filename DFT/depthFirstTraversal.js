const testGraph = require("../graphs/testGraph.js");

const depthFirstTraversal = (start) => {
  const vistedVertex = [start];
  const visitStack = [];

  visitStack.unshift(start);

  while (visitStack.length > 0) {
    const currentVertex = visitStack.shift();

    console.log(currentVertex.data);

    currentVertex.edges.forEach((edge) => {
      const neighbor = edge.end;

      if (!vistedVertex.includes(neighbor)) {
        visitStack.unshift(neighbor);
        vistedVertex.push(neighbor);
      }
    });
  }
};

depthFirstTraversal(testGraph.vertices[0]);
