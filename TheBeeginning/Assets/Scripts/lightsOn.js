#pragma strict

var flicker : boolean = false;
var maxFlicker : int = 0;
var flickerCount : int = 0;
var flickerTimer : int = 0;
var switchTime : int = 100;
var timer : int = 0;
var onOff : boolean = false;

function Start () {
	maxFlicker = Random.Range(7, 20);
}

function Update () {
	
	if (timer >= switchTime)
	{
		if (flicker == true && flickerCount < maxFlicker)
		{
			// make sure the flicks dont happen instantly
			if (flickerTimer <= 0)
			{
				// turn off if off, turn on if on
				if (onOff == false)
				{
					print ('a');
					// flick off
					light.enabled = true;
					onOff = true;
					flickerTimer = Random.Range(2, 20);
				} else {
					// flick on
					light.enabled = false;
					onOff = false;
					print ('b');
					flickerTimer = Random.Range(2, 20);
				}
				// count the number of times we have flickered
				flickerCount += 1;
			}
			// continue the count for timing
			flickerTimer -= 1;
		} else {
			// just turn on the light
			light.enabled = true;
		}
	} else {
		// wait a little longer
		timer += 1;
	}
}