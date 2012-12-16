#pragma strict
// control vars
var state : boolean = false;
// start x,y
var startX : int;
var startY : int;
// players new one
var newPlayerVessel : GameObject;

var scrollPosition : Vector2 = Vector2.zero;

function Start () {

}

function Update () {
	
}


function OnGUI () {
	
	if (state == true)
	{
		newPlayerVessel = GameObject.FindWithTag("Player");
		if (newPlayerVessel != null)
		{
			if (GUI.Button (Rect (startX + 10, startY + 10, 150, 40), "Stub"))
			{
				Destroy(newPlayerVessel);
				GetComponent(_shipBuilder_menuControl).screen = 0;
				state = false;
			}
		}
		else
		{
			if (GUI.Button (Rect (startX + 10, startY + 10, 150, 40), "Stub"))
			{
				GetComponent(_shipBuilder_menuControl).screen = 0;
				state = false;
			}
		}
	}
}



   

    