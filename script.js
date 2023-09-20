function insert_Row() {
    //Write your code here
  var table=document.getElementById("sampleTable");

	//Insert a new row at the top of table(index 0)
	var newRow=table.insertRow(0);

	//insert cells into the new row
	var cell1 = newRow.insertCell(0);
	var cell2 =newRow.insertCell(1);


	//set he content (you can customize this)
	cell1.innerHTML ="New cell1";
	cell2.innerHTML ="New cell2";
}
