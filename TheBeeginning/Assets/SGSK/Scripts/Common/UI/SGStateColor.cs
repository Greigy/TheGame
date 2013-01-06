﻿using UnityEngine;

/// <summary>
/// Changes the color of the widget based on whether the current state matches the active state.
/// Tip: Use UISetState to change the state of a remote widget that has UIStateColor attached.
/// </summary>

[RequireComponent(typeof(SGWidget))]
[AddComponentMenu("UI/State Color")]
public class SGStateColor : MonoBehaviour
{
	public int currentState = 0;
	public int activeState = 0;
	public Color activeColor = Color.white;
	public Color inactiveColor = Color.white;
	public float animationSpeed = 10f;

	SGWidget mWidget;

	void Start ()
	{
		mWidget = GetComponent<SGWidget>();
	}

	void OnState (int state)
	{
		currentState = state;
	}

	void Update ()
	{
		Color c = (currentState == activeState) ? activeColor : inactiveColor;
		mWidget.color = Color.Lerp(mWidget.color, c, Mathf.Clamp01(Time.deltaTime * animationSpeed));
	}
}