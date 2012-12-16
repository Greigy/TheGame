#pragma strict

@script RequireComponent(shipBuilder_mainMenu)
@script RequireComponent(shipBuilder_saveShip)
@script RequireComponent(shipBuilder_loadShip)
@script RequireComponent(shipBuilder_upgradeShip)
@script RequireComponent(shipBuilder_buyNewShip)
@script RequireComponent(shipBuilder_hanger)
//@script RequireComponent(shipBuilder_upgradeShip)
//@script RequireComponent(shipBuilder_upgradeShip)
//@script RequireComponent(shipBuilder_upgradeShip)
//@script RequireComponent(shipBuilder_upgradeShip)
//@script RequireComponent(shipBuilder_upgradeShip)

// menu selector
var screen : int = 0;

function Start () {

}

function Update () {
	
	// control which screen is visible
	switch (screen)
	{
		// main menu
		case 0:
		GetComponent(shipBuilder_mainMenu).state = true;
		break;
		
		// create new
		case 1:
		GetComponent(shipBuilder_buyNewShip).state = true;
		break;
		
		// upgrade
		case 2:
		GetComponent(shipBuilder_upgradeShip).state = true;
		break;
		
		// load
		case 3:
		GetComponent(shipBuilder_loadShip).state = true;
		break;
		
		// save
		case 4:
		GetComponent(shipBuilder_saveShip).state = true;
		break;
		
		// create new
		case 5:
		break;
	}
}