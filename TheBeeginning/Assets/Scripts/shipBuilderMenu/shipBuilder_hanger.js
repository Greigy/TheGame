#pragma strict
// menu selector
var screen : int = 0;
// available ships
var newShips : GameObject[];
// players new one
var newPlayerVessel : GameObject;
// control vars
var i : int = 0;
var state : boolean = false;
// start x,y
var startX : int;
var startY : int;
var backX : int;
var backY : int;

var scrollPosition : Vector2 = Vector2.zero;

function Start () {

}

function Update () {
	
}


function OnGUI () {
	
	if (state == true)
	{
		// Backdrop //
		GUI.Box ( Rect ( startX, startY, backX, backY)," ");
	
		newPlayerVessel = GameObject.FindWithTag("Player");
		if (newPlayerVessel != null)
		{
			Destroy(newPlayerVessel);
		}
		// setup the scrolling menu
		GUI.Box ( Rect ( startX + 165, startY + 5, 180, 260)," ");
		scrollPosition = GUI.BeginScrollView (Rect (startX + 170, startY + 10, 170, 250), scrollPosition, Rect (0, 0, 150, (newShips.length * 50)));
		
		
		for (i=0; i < newShips.length; i += 1)
		{
			// Create New
			if (GUI.Button (Rect (0, (i * 50), 150, 40), newShips[i].name))
			{	
    			GetComponent(_shipBuilder_menuControl).screen = 0;
    			newPlayerVessel = Instantiate(newShips[i], Vector3(0,0,0), Quaternion.Euler(0, 0, 0));
    			newPlayerVessel.tag = "Player";
    			GameObject.FindWithTag("MainCamera").GetComponent(MouseOrbit).target = newPlayerVessel.transform;
    			state = false;
			}
		}
		// end the scrolling menu
		GUI.EndScrollView();
	}
}



   

    