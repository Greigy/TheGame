#pragma strict

// control vars
var state : boolean = false;

// position controllers
private var backX0 : int = 10;
private var backY0 : int = 10;
private var backX : int = 170;
private var backY : int = 210;




function Start () {
	
}

function Update () {
	
}


function OnGUI () {
	
	
	if (state == true)
	{
		// Backdrop //
		GUI.Box ( Rect ( backX0, backY0, backX, backY)," ");
		
		// Create New
		if (GUI.Button (Rect (backX0 + 10, backY0 + 10,150,40), "Buy New"))
		{
    		    GetComponent(_shipBuilder_menuControl).screen = 1;
				state = false;
		}
		
		// Upgrade
		if (GUI.Button (Rect (backX0 + 10, backY0 + 60,150,40), "Upgrade"))
		{
	    	    GetComponent(_shipBuilder_menuControl).screen = 2;
				state = false;
		}
		
		// Load
		if (GUI.Button (Rect (backX0 + 10, backY0 + 110,150,40), "Load"))
		{
		    	GetComponent(_shipBuilder_menuControl).screen = 3;
				state = false;
		}
		
		// Save
		if (GUI.Button (Rect (backX0 + 10, backY0 + 160,150,40), "Save"))
		{
	    	    GetComponent(_shipBuilder_menuControl).screen = 4;
				state = false;
		}
	}
}