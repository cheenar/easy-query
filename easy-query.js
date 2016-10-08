function lengthOfJson(input)
{
	var count = 0;
	for(var kreme in input) {
  	count++;
	}
	return count;
}

function insertData(tableName, keypair)
{
	var returnString = "INSERT INTO `sql9139285`.`" + tableName + "` (";
	var values = " VALUES (";
	var maxLength = 0;

	var count = lengthOfJson(keypair);

	for(var key in keypair)
	{
		if(!keypair.hasOwnProperty(key)) continue;

		var evalulated = keypair[key];

		if(maxLength+1 == count)
		{
			returnString += "`";
			returnString += key += "`)";

			values += "'";
			values += evalulated += "');";
		}
		else {
			returnString += "`";
			returnString += key += "`,";

			values += "'";
			values += evalulated += "',";
		}
		maxLength++;
	}
	returnString += values;
	console.log(returnString);

	return returnString;
}
