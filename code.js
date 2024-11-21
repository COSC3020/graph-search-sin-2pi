function depthFirstSearch(graph, startNode, targetNode) {
  checked = [];

  function mylittlehelper(node) {
    checked[node] = true;

    if (node === targetNode) {

      return [node];
    }


    const neighbors = graph[node];

    for (let i = 0; i < neighbors.length; i++) {

      next = neighbors[i];

      if (!checked[next]) {

        thisIsTheWay = mylittlehelper(next);

        if (thisIsTheWay.length > 0) {

          return [node].concat(thisIsTheWay);

        }
      }
    }
    return [];
  }

  return mylittlehelper(startNode);
}
