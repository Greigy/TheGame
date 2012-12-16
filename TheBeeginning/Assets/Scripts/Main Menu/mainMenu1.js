#pragma strict
// variables
private var screenX : int;
private var screenY : int;
private var scrollPosition : Vector2 = Vector2.zero;
private var scrollPosition1 : Vector2 = Vector2.zero;
private var userName : String;
// control vars
var state : boolean = true;

function Start () {
	screenX = Screen.width;
	screenY = Screen.height;
	userName = "user name";
}

function Update () {

}

function OnGUI () {
	
	if (state == true)
	{
		// group the character menu
		GUI.BeginGroup (new Rect (15, 15, 120, screenY - 15));
			
			// backdrop
			GUI.Box ( Rect (0, 0, 120, screenY - 15),"");
			
			// setup the scrolling menu
			scrollPosition = GUI.BeginScrollView (Rect (10, 5, 110, screenY - 25), scrollPosition, Rect (0, 0, 90, 835), false, true);			
			
				
				
				if (GUI.Button( Rect ( 0, 5, 90, 90), "Hyperion"))	
				{
				}
				
				if (GUI.Button( Rect ( 0, 105, 90, 90), "Imperium"))
				{
				}
				
				if (GUI.Button( Rect ( 0, 210, 90, 90), "Systems Alliance"))
				{
				}	
			
				if (GUI.Button( Rect ( 0, 315, 90, 90), "Enon"))
				{
				}
				
				if (GUI.Button( Rect ( 0, 420, 90, 90), "Acataur"))
				{
				}
					
				if (GUI.Button( Rect ( 0, 525, 90, 90), "Ultasol"))
				{
				}
				
				if (GUI.Button( Rect ( 0, 630, 90, 90), "Sc'rah"))
				{
				}
				
				if (GUI.Button( Rect ( 0, 735, 90, 90), "Trader"))
				{
				}
				
			// end the scrolling menu
			GUI.EndScrollView();
		
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
		
		
		// ===================================
		// group the player name
		GUI.BeginGroup (new Rect ((screenX / 2) - ((screenX / 3) / 2), 20, screenX, screenY / 15));
			
			// backdrop
			GUI.Box ( Rect (0, 0, screenX / 3, screenY / 15), userName);
			
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
		
		
		// ===================================
		// group the stats
		GUI.BeginGroup (new Rect ((screenX - 270), 20, 250, 300));
			
			// backdrop
			GUI.Box ( Rect (0, 0, 250, 300), "");
			// title
			GUI.Box ( Rect (5, 5, 240, 30), "Race Traits");
			// stats
			GUI.Box ( Rect (5, 40, 240, 255), "Race Traits");
			
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
		
		
		// ===================================
		// group the history
		GUI.BeginGroup (new Rect ((screenX - 270), (screenY - 440), 250, 290));
			
			// backdrop
			GUI.Box ( Rect (0, 0, 250, 290), "");
			
			// setup the scrolling menu
			scrollPosition1 = GUI.BeginScrollView (Rect (5, 5, 240, 280), scrollPosition1, Rect (0, 0, 90, 835), false, true);
				
				// information
				GUI.Box ( Rect (0, 0, 240, 835), "History");
				
			// end the scrolling menu
			GUI.EndScrollView();	
			
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
		
		
		// ===================================
		// group the menu
		GUI.BeginGroup (new Rect ((screenX / 2) - ((screenX / 3) / 2), 20, screenX, screenY / 15));
			
			// backdrop
			GUI.Box ( Rect (0, 0, screenX / 3, screenY / 15), userName);
			
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();


	}
}