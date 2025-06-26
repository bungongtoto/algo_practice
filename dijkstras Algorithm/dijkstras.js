function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const priorityQueue = [];
  // Initialize distances
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  priorityQueue.push([start, 0]);

  while (priorityQueue.length > 0) {
    // Get node with smallest distance
    priorityQueue.sort((a, b) => a[1] - b[1]); // simple priority queue
    const [currentNode, currentDist] = priorityQueue.shift();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    for (let neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const newDist = currentDist + distance;

      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        priorityQueue.push([neighbor, newDist]);
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const shortestPaths = dijkstra(graph, "A");
console.log(shortestPaths);
