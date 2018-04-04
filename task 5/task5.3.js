var N = +prompt("Enter Number N:", 9);

onload = function() {
    var table, row, cell;
    table = document.getElementById("tab").appendChild(document.createElement("table"));

    for( var i = 0; i < N; i++) {
        row = table.insertRow(i);

        for( var j = 0; j < N; j++) {
            if ( i == 0 ) {
                cell = row.appendChild(document.createElement("th"));
                cell.innerHTML = (j != 0) ? j + 1 : " ";
            }
            else{
                if (j == 0){
                    cell = row.appendChild(document.createElement("th"));
                    cell.innerHTML = i+1;}
                else{
                    cell = row.insertCell(j);
                    if (i == j) {
                        cell.style.color = "red";
                    }
                    cell.innerHTML = ( j + 1 ) * ( i + 1 );
                }
            }
        }
    };
 
 };

