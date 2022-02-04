import React from "react";

const ShowLink = ({ source, destination, names, data }) => {
  console.log(names, data);
  console.log(source, destination);

  let links = [];
  names.map((name) =>
    links.push([data.indexOf(name.name1), data.indexOf(name.name2)])
  );
  console.log(links);

  let sourceIndex = data.indexOf(source);
  let destinationIndex = data.indexOf(destination);
  console.log(sourceIndex, destinationIndex);

  //make the graph
  let v;
  let adjList;
  function Graph(vertices) {
    v = vertices;
    initAdjList();
  }

  function initAdjList() {
    adjList = new Array(v);
    for (let i = 0; i < v; i++) {
      adjList[i] = [];
    }
  }

  function addEdge(u, v) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  Graph(data.length);
  links.map((arr) => addEdge(arr[0], arr[1]));

  console.log(adjList);

  // show the links
  function allPathsSourceTarget(graph) {
    const queue = [[sourceIndex]];
    let res = [];
    let visited = new Set();

    while (queue.length) {
      const path = queue.shift();
      console.log(path);
      const current = path[path.length - 1];
      console.log(current);

      if (current == destinationIndex) {
        res.push(path);
        console.log(res);
        continue;
      }

      for (let i = 0; i < graph[current].length; i++) {
        if (!visited.has(graph[current][i])) {
          visited.add(current);
          path.push(graph[current][i]);
          console.log(path);
          queue.push([...path]);
          console.log(queue);
          path.pop();
        }
      }
    }
    return res;
  }

  let results = allPathsSourceTarget(adjList);
  console.log(results);

  return (
    <div>
      {/* {results.map((result) => (
        <div>{result.map((char) => data[char] + ">")}</div>
      ))}
      <br /> */}
      {results.map((result) => (
        <div>{result.map((char) => data[char]).join(" > ")}</div>
      ))}
      <br />
    </div>
  );
};

export default ShowLink;