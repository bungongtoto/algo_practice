const testGraph = require("../graphs/testGraph.js");

const breathFirstTraversal = (start) => {
  const vistedVertex = [start];
  const visitQueue = [];
  visitQueue.push(start);

  while (visitQueue.length > 0) {
    const currentVertex = visitQueue.shift();
    console.log(currentVertex.data);

    currentVertex.edges.forEach((edge) => {
      const neighbor = edge.end;

      if (!vistedVertex.includes(neighbor)) {
        visitQueue.push(neighbor);
        vistedVertex.push(neighbor);
      }
    });
  }
};

breathFirstTraversal(testGraph.vertices[0]);
