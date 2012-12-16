#pragma strict
var skyboxMaterial : Material[];

function Start () {
	
	RenderSettings.skybox =skyboxMaterial[Random.Range(0 ,(skyboxMaterial.Length))];
}

function Update () {

}