using UnityEngine;
using System.Collections.Generic;

/// <summary>
/// This class facilitates dynamic order-of-execution support for scripts' Update,
/// FixedUpdate, and LateUpdate functions.
/// </summary>

[AddComponentMenu("Internal/Update Manager")]
public class SGUpdateManager : MonoBehaviour
{
	static SGUpdateManager mInstance = null;
	
	public delegate bool UpdateCallback();

	class Entry
	{
		public int level;
		public MonoBehaviour mb;
		public UpdateCallback callback;
	}

	/// <summary>
	/// Function used to sort entries.
	/// </summary>

	static int Comparer (Entry a, Entry b)
	{
		if (a.level > b.level) return -1;
		if (a.level < b.level) return 1;
		return 0;
	}

	List<Entry> mUpdate = new List<Entry>();
	List<Entry> mLate = new List<Entry>();
	
	/// <summary>
	/// Ensure that there is an instance of this class somewhere in the scene.
	/// </summary>
	
	static void CreateInstance()
	{
		if (mInstance == null)
		{
			GameObject go = new GameObject("_SGUpdateManager");
			mInstance = go.AddComponent<SGUpdateManager>();
			DontDestroyOnLoad(go);
		}
	}

	/// <summary>
	/// Register a new update function at the specified level (executed low to high).
	/// </summary>

	static public void AddUpdate (int level, MonoBehaviour mb, UpdateCallback callback)
	{
		if (Application.isPlaying)
		{
			CreateInstance();
			AddUpdate(mInstance.mUpdate, level, mb, callback);
		}
	}

	/// <summary>
	/// Register a new late update function at the specified level (executed low to high).
	/// </summary>

	static public void AddLateUpdate (int level, MonoBehaviour mb, UpdateCallback callback)
	{
		if (Application.isPlaying)
		{
			CreateInstance();
			AddUpdate(mInstance.mLate, level, mb, callback);
		}
	}

	/// <summary>
	/// Helper function that checks to see if an entry already exists before adding it.
	/// </summary>

	static void AddUpdate (List<Entry> list, int level, MonoBehaviour mb, UpdateCallback cb)
	{
		// Try to find an existing entry
		foreach (Entry e in list)
		{
			if (e.mb == mb && e.callback == cb)
			{
				e.level = level;
				return;
			}
		}

		// Add a new entry
		Entry ent = new Entry();
		ent.level = level;
		ent.mb = mb;
		ent.callback = cb;
		list.Add(ent);
		list.Sort(Comparer);
	}

	void Update()
	{
		for (int i = mUpdate.Count; i > 0; )
		{
			Entry ent = mUpdate[--i];
			if (ent.mb == null) mUpdate.RemoveAt(i);
			else if (!ent.mb.gameObject.active || !ent.mb.enabled) continue;
			else if (!ent.callback()) mUpdate.RemoveAt(i);
		}
		DeleteIfEmpty();
	}

	void LateUpdate()
	{
		for (int i = mLate.Count; i > 0; )
		{
			Entry ent = mLate[--i];
			if (ent.mb == null) mLate.RemoveAt(i);
			else if (!ent.mb.gameObject.active || !ent.mb.enabled) continue;
			else if (!ent.callback()) mLate.RemoveAt(i);
		}
		DeleteIfEmpty();
	}

	void DeleteIfEmpty()
	{
		if (mUpdate.Count == 0 && mLate.Count == 0)
		{
			Destroy(this);
		}
	}

	void OnDestroy ()
	{
		mInstance = null;
	}

	void OnApplicationQuit ()
	{
		Tools.Broadcast("End");
	}
}