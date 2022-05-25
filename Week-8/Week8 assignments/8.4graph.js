//adding edges
function addEdge(start, end) {
    TempArray[start].push(end);
    TempArray[end].push(start);

}
//function to find path
//marking node as visited 
function PathFinder(source, destination) {
    if (source == destination)
        return true;
    var VisitedVertex = new Array(NoOfVertices).fill(false);
    var TempQueue = new Array();
    VisitedVertex[source] = true;
    TempQueue.push(source);
    while (TempQueue.length != 0) {
        source = TempQueue.pop();
        for (let i = 0; i < TempArray[source].length; i++) {
            if (TempArray[source][i] == destination)
                return true;
            if (!VisitedVertex[TempArray[source][i]]) {
                VisitedVertex[TempArray[source][i]] = true;
                TempQueue.push(TempArray[source][i]);
            }
        }
    }
    return false;
}
//function to convert 2D array into edges
function ArrayToEdge(arrayEdge) {
    let k = 0;
    let node1 = [];
    let node2 = [];

    //separating source and destination in different array and calling function addedge on those two array
    for (let i = 0; i < arrayEdge.length; i++) {
        node1[k++] = arrayEdge[i][0]
    }
    k = 0;
    for (let i = 0; i < arrayEdge.length; i++) {
        node2[k++] = arrayEdge[i][1]
    }
    for (let i = 0; i < node1.length; i++) {
        addEdge(node1[i], node2[i])
    }
}
//defining inputs
const NoOfVertices = 6;
let TempArray = new Array();
for (var i = 0; i < NoOfVertices; i++)
    TempArray.push(new Array());
let arrayEdge = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]]
var source = 0, destination = 2;
ArrayToEdge(arrayEdge)
//checking if path exists between sourcec and destination
if (PathFinder(source, destination))
    console.log(true);
else
    console.log(false); 