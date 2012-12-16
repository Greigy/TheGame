var dataFile : TextAsset;
private var returnChar = "\n"[0];
private var commaChar = ","[0];
var dataLine;
var i;

function Start()
{
	GetFile();
}

function GetFile() {
	print (dataFile.text);
	var dataLines = dataFile.text.Split(returnChar);
	var buildDataPairs = new ArrayList();
	for (dataLine in dataLines)
	{
		var dataPair = dataLine.Split(commaChar);
		print ('meeee' + dataPair);
		buildDataPairs.Add(dataPair);
	}
	var dataPairs = buildDataPairs.ToArray();
	
	print (dataPairs.length);
	for (i = 0; i <= 3; i += 1)
	{
		print (i);
		print(dataPairs[i][0]);
		print(dataPairs[i][1]);
		//print(dataPairs[i][i]);
		print('-+-');
	}

	// print(dataPairs[1][0]);print(dataPairs[0][0]);

}