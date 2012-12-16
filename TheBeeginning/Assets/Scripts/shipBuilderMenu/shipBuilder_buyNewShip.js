#pragma strict

// control vars
var state : boolean = false;
var i : int = 0;
var scrollPosition : Vector2 = Vector2.zero;
var selectedVessel : String = '';

// position controllers
private var backX0 : int = 10;
private var backY0 : int = 10;
private var backX : int = 700;
private var backY : int = 400;

// available vessels
var newShips : GameObject[];

// players new one
var newPlayerVessel : GameObject;

// strings for information
var infoString : String = "";

function Start () {

}

function Update () {
	
}


function OnGUI () {
	
	if (state == true)
	{
		// Backdrop //
		GUI.Box ( Rect ( backX0, backY0, backX, backY)," ");
		
		// find out if a vessel currently exists
		newPlayerVessel = GameObject.FindWithTag("Player");
		// if it does, destroy it
		if (newPlayerVessel != null)
		{
			Destroy(newPlayerVessel);
		}
		
		// group the scrolling menu
		GUI.BeginGroup (new Rect (backX0 + 160, backY0 + 10, 800, 600));
			
			// scroller backdrop
			GUI.Box ( Rect (0, 0, 190, 270)," ");
			
			// test to see if we have anything for sale
			if (newShips.length > 0)
			{
				// setup the scrolling menu
				scrollPosition = GUI.BeginScrollView (Rect (10, 10, 170, 250), scrollPosition, Rect (0, 0, 150, (newShips.length * 50)));
					
					// populate a lits of available craft
					for (i=0; i < newShips.length; i += 1)
					{
						// Create New
						if (GUI.Button (Rect (0, (i * 50), 150, 40), newShips[i].name))
						{
	    					// create the vessel
	    					newPlayerVessel = Instantiate(newShips[i], Vector3(0,0,0), Quaternion.Euler(0, 0, 0));
	    					// tag the vessel
	    					newPlayerVessel.tag = "Player";
	    					// set the camera to look at the vessel
	    					GameObject.FindWithTag("MainCamera").GetComponent(MouseOrbit).target = newPlayerVessel.transform;
	    					// remember what we have just created
	    					selectedVessel = newShips[i].name;
	    					// set the new screen to main menu
	    					GetComponent(_shipBuilder_menuControl).screen = 0;
	    					// deactivate this menu
	    					state = false;
						}
					}
				// end the scrolling menu
				GUI.EndScrollView();
			}
			else
			{
				// setup the scrolling menu
				scrollPosition = GUI.BeginScrollView (Rect (10, 10, 170, 250), scrollPosition, Rect (0, 0, 150, 100));
					// place a button telling us nothing is available
					if (GUI.Button (Rect (10, 10,150,40), "Nothing Available"))
					{
    			    	// set the new screen to main menu
	    				GetComponent(_shipBuilder_menuControl).screen = 0;
	    				// deactivate this menu
	    				state = false;
					}
					
				// end the scrolling menu
				GUI.EndScrollView();
			}
		
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
	}
}
