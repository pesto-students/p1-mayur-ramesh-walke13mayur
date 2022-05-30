let v;
let EmptyArray;
//defining function to create graph
function Graph(vertices) {
    v = vertices;
    EmptyList();
}
//defining empty list for number of vertices
function EmptyList() {
    EmptyArray = new Array(v);
    for (let i = 0; i < v; i++) {
        EmptyArray[i] = [];
    }
}
//defining function to add edge
function AddEdge(source, v) {

    EmptyArray[source].push(v);
}
//function to identify path
function FindPath(source, destination) {
    let ifVisited = new Array(v);
    for (let i = 0; i < v; i++)
        ifVisited[i] = false;
    let pathList = [];


    pathList.push(source);

    PrintPath(source, destination, ifVisited, pathList);
}
//function to push data inn form of array 
function PrintPath(source, destination, ifVisited, localPathList) {
    if (source == (destination)) {
        console.log(localPathList);
        return;
    }

    ifVisited[source] = true;

    for (let i = 0; i < EmptyArray[source].length; i++) {
        if (!ifVisited[EmptyArray[source][i]]) {
            localPathList.push(EmptyArray[source][i]);
            PrintPath(EmptyArray[source][i], destination, ifVisited, localPathList);
            localPathList.splice(localPathList.indexOf(EmptyArray[source][i]), 1);
        }
    }

    ifVisited[source] = false;
}
/*
                0 -------> 1
                |          |
                |          |
                V          V
                2 -------> 3
*/
//example one
//creating graph and edges
Graph(4);
AddEdge(0, 1); 
AddEdge(0, 2);
AddEdge(1, 3);
AddEdge(2, 3);
//defining source and destination
let source = 0;
let destination = 3;
console.log("Graph 1")
FindPath(source, destination);

/*
    -------------------------|
    |                        |
    |       0 -------------->1 -----
    |       | \ ___      ___/       |
    |       |      |    |           |
    |       V      V <__|           V
    |-----> 4 <--- 3 <------------- 2
*/
Graph(5);
AddEdge(0, 4);
AddEdge(0, 3);
AddEdge(0, 1);
AddEdge(1, 3);
AddEdge(1, 2);
AddEdge(1, 4);
AddEdge(2, 3);
AddEdge(3, 4);
//defining source and destination
let source1 = 0;
let destination1 = 4;
console.log("Graph 2")
FindPath(source1, destination1);