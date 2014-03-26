// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.Appwarp = function(runtime)
{
	this.runtime = runtime;
};

var pluginProto = cr.plugins_.Appwarp.prototype;

(function ()
{
	/////////////////////////////////////
	// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
	//                            vvvvvvvv
	function connection_reponse(res)
	{
		function connection_inside(res){return res;}
		return connection_inside(res);
	}
	
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		
		this.GetLiveLobbyInfo_Result  	  =99;
		this.GetLiveLobbyInfo_Owner		  ="";
		this.GetLiveLobbyInfo_IdLobby	  ="";
		this.GetLiveLobbyInfo_Name		  ="";
		this.GetLiveLobbyInfo_MaxUsers	  =0;
		this.GetLiveLobbyInfo_Data	 	  ="";
		this.GetLiveLobbyInfo_Properties  ="";
		this.GetLiveLobbyInfo_Users		  ="";
		this.GetLiveLobbyInfo_UsersNumber =0;
		
		this.JoinLobby_Result 		 = 99;
		this.LeaveLobby_Result 		 = 99;
		this.SubscribeLobby_Result	 = 99;
		this.UnsubscribeLobby_Result = 99;
		
		this.GetAllRooms_Result				 =99;
		this.GetAllRooms_RoomsIdsArray		 ={};
		this.GetAllRooms_RoomsIdsArrayLength =0;
		
		this.GetMatchedRooms_Result 			=99;  
		this.GetMatchedRooms_RoomIdsArray	   	="";
		this.GetMatchedRooms_RoomIdsArrayLength =0;
		
		this.GetLiveRoomInfo_Result      =99;
		this.GetLiveRoomInfo_RoomId      ="";
		this.GetLiveRoomInfo_Name        ="";
		this.GetLiveRoomInfo_MaxUsers    =0;
		this.GetLiveRoomInfo_Owner	     ="";
		this.GetLiveRoomInfo_Users 		 ="";
		this.GetLiveRoomInfo_UsersLength =0;
		this.GetLiveRoomInfo_Data		 ="";
		this.GetLiveRoomInfo_Properties	 ="";
		
		this.SetCustomRoomData_Result =99;
		this.SetCustomRoomData_RoomId ="";
		this.UpdateProperty_Result = 99;
		this.UpdateProperty_RoomId = "";
		this.UnlockProperties_Result =99;
		this.LockProperties_Result	 =99;
		
		this.JoinRoom_Result  		  =99;
		this.JoinRoom_RoomId		  ="";
		this.JoinRoom_Name  	 	  ="";
		this.JoinRoom_MaxUsers		  =0;
		this.JoinRoom_Owner	  		  ="";
		this.LeaveRoom_Result  		  =99;
		this.LeaveRoom_RoomId  		  ="";
		this.LeaveRoom_Name     	  ="";
		this.LeaveRoom_MaxUsers		  =0;
		this.LeaveRoom_Owner	      ="";
		this.SubscribeRoom_Result     =99;
		this.SubscribeRoom_RoomId     ="";
		this.SubscribeRoom_Name       ="";
		this.SubscribeRoom_MaxUsers   =0;
		this.SubscribeRoom_Owner	  ="";
		this.UnsubscribeRoom_Result   =99;
		this.UnsubscribeRoom_RoomId   ="";
		this.UnsubscribeRoom_Name     ="";
		this.UnsubscribeRoom_MaxUsers =0;
		this.UnsubscribeRoom_Owner	  ="";

		this.CreateRoom_RoomId ="";
		this.CreateRoom_Result =99;
		this.DeleteRoom_RoomId ="";
		this.DeleteRoom_Result =99;
		
		this.RoomCreated_RoomId   ="";
		this.RoomCreated_MaxUsers =0;
		this.RoomCreated_Name     ="";
		this.RoomCreated_Owner    ="";
		this.RoomCreated_Result   =99;
		this.RoomDestroyed_RoomId	="";
		this.RoomDestroyed_MaxUsers =0;
		this.RoomDestroyed_Name     ="";
		this.RoomDestroyed_Owner    ="";
		this.RoomDestroyed_Result   =99;
		
		this.UserJoinedLobby_MaxUsers  =0;
		this.UserJoinedLobby_User	   ="";
		this.UserJoinedLobby_Name	   ="";
		this.UserJoinedLobby_Owner	   ="";
		this.UserJoinedLobby_Result	   =99;
		this.UserJoinedLobby_IsPrimary ="";
		this.UserJoinedLobby_LobbyId   ="";
		this.UserLeftLobby_MaxUsers  =0;
		this.UserLeftLobby_User	     ="";
		this.UserLeftLobby_Name	     ="";
		this.UserLeftLobby_Owner	 ="";
		this.UserLeftLobby_Result	 =99;
		this.UserLeftLobby_IsPrimary ="";
		this.UserLeftLobby_LobbyId   ="";
		

		this.GetOnlineUsers_Result   		 =99;
		this.GetOnlineUsers_Usernames   	 ="";
		this.GetOnlineUsers_UsernamesLength  =0;
		this.GetLiveUserInfo_Result			 =99;
		this.GetLiveUserInfo_LocationId	 	 ="";
		this.GetLiveUserInfo_Name			 ="";
		this.GetLiveUserInfo_CustomData		 ="";
		this.GetLiveUserInfo_IsLobby		 ="";
		this.SetCustomUserData_Result		 =99;

		this.SendChat_Result 		=99;
		this.SendPrivateChat_Result =99;
		this.SendUpdate_Result		=99;
		this.SendMove_Result		=99;
		
		this.UserLeftRoom_MaxUsers   =0;
		this.UserLeftRoom_Name       ="";
		this.UserLeftRoom_Owner   	 ="";
		this.UserLeftRoom_Result   	 =99;
		this.UserLeftRoom_RoomId  	 ="";
		this.UserLeftRoom_User     	 ="";
		this.UserJoinedRoom_User     ="";	
		this.UserJoinedRoom_MaxUsers =0;
		this.UserJoinedRoom_Name     ="";
		this.UserJoinedRoom_Owner	 ="";
		this.UserJoinedRoom_Result   =99;
		this.UserJoinedRoom_RoomId   ="";
		
		this.ChatReceived_Sender  ="";
		this.ChatReceived_Message ="";
		this.ChatReceived_IsLocationLobby = "";
		this.PrivateChatReceived_Sender="";
		this.PrivateChatReceived_Message="";
		
		this.MoveCompleted_Data	    ="";
		this.MoveCompleted_NextTurn ="";
		this.MoveCompleted_RoomId   ="";
		this.MoveCompleted_Sender   ="";
		
		
		this.UpdatePeersReceived;
	};
	///////////////////////////////////////
	
	var instanceProto = pluginProto.Instance.prototype;
	instanceProto.onInitialize = function(api,key)
	{
		var aze = this ;
		AppWarp.WarpClient.initialize(api, key);
		this._warpclient = AppWarp.WarpClient.getInstance();
		
		////////////////////////////////////////
		///// Connection Response Listner //////
		///////////////////////////////////////
		
		this._warpclient.setResponseListener(AppWarp.Events.onConnectDone, function(res)
		{
			if(res == AppWarp.ResultCode.Success)
			{
				aze.runtime.trigger(pluginProto.cnds.onConnectDone ,aze);
			}else
			{
				aze.runtime.trigger(pluginProto.cnds.ConnectionError,aze);
			}
		});
		this._warpclient.setResponseListener(AppWarp.Events.onDisconnectDone, function()
		{
			aze.runtime.trigger(pluginProto.cnds.Disconnected ,aze);
		});
		
		////////////////////////////////////////
		///// Lobby Response Listner //////////
		///////////////////////////////////////
		
		this._warpclient.setResponseListener(AppWarp.Events.onJoinLobbyDone, function(lobby)
		{
			aze.JoinLobby_Result = lobby.getResult();
			aze.runtime.trigger(pluginProto.cnds.onJoinLobbyDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onLeaveLobbyDone, function(lobby)
		{
			aze.LeaveLobby_Result = lobby.getResult();
			aze.runtime.trigger(pluginProto.cnds.onLeaveLobbyDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onSubscribeLobbyDone, function(lobby)
		{
			aze.SubscribeLobby_Result = lobby.getResult();
			aze.runtime.trigger(pluginProto.cnds.onSubscribeLobbyDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onUnsubscribeLobbyDone, function(lobby)
		{
			aze.UnsubscribeLobby_Result = lobby.getResult();
			aze.runtime.trigger(pluginProto.cnds.onUnsubscribeLobbyDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onGetLiveLobbyInfoDone, function(lobby)
		{
			aze.GetLiveLobbyInfo_Result  	 = lobby.getResult();
			aze.GetLiveLobbyInfo_Owner		 = lobby.getRoom().getOwner();
			aze.GetLiveLobbyInfo_Name		 = lobby.getRoom().getName();
			aze.GetLiveLobbyInfo_MaxUsers	 = lobby.getRoom().getMaxUsers();
			aze.GetLiveLobbyInfo_Data	 	 = lobby.getCustomData();
			aze.GetLiveLobbyInfo_Properties  = JSON.parse(lobby.getProperties());
			aze.GetLiveLobbyInfo_IdLobby	 = lobby.getRoom().getRoomId();
			aze.GetLiveLobbyInfo_Users		 = lobby.getUsers();
			aze.GetLiveLobbyInfo_UsersNumber = aze.GetLiveLobbyInfo_Users.length;
			aze.runtime.trigger(pluginProto.cnds.onGetLiveLobbyInfoDone,aze);
		});	
		this._warpclient.setNotifyListener(AppWarp.Events.onUserLeftLobby, function(lobby)
		{
			aze.UserLeftLobby_MaxUsers  =lobby.getMaxUsers();
			aze.UserLeftLobby_User		=lobby.json.user;
			aze.UserLeftLobby_Name		=lobby.getName();
			aze.UserLeftLobby_Owner		=lobby.getOwner();
			aze.UserLeftLobby_Result	=lobby.getResult();
			aze.UserLeftLobby_LobbyId	=lobby.getLobbyId();
			if(lobby.getIsPrimary()){aze.UserLeftLobby_IsPrimary="true";}else{aze.UserLeftLobby_IsPrimary="false";}
			aze.runtime.trigger(pluginProto.cnds.onUserLeftLobby,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onUserJoinedLobby, function(lobby)
		{
			aze.UserJoinedLobby_MaxUsers=lobby.getMaxUsers();
			aze.UserJoinedLobby_User=lobby.json.user;
			aze.UserJoinedLobby_Name=lobby.getName();
			aze.UserJoinedLobby_Owner=lobby.getOwner();
			aze.UserJoinedLobby_Result=lobby.getResult();
			if(lobby.getIsPrimary()){aze.UserJoinedLobby_IsPrimary="true";}else{aze.UserJoinedLobby_IsPrimary="false";}
			aze.UserJoinedLobby_LobbyId=lobby.getLobbyId();
			aze.runtime.trigger(pluginProto.cnds.onUserJoinedLobby,aze);
		});
		////////////////////////////////////////
		///// Room Response Listner ///////////
		///////////////////////////////////////
		
		this._warpclient.setResponseListener(AppWarp.Events.onJoinRoomDone, function(room)
		{
			aze.JoinRoom_Result   =room.getResult();
			aze.JoinRoom_RoomId	  =room.getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onJoinRoomDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onLeaveRoomDone, function(room)
		{
			aze.LeaveRoom_Result   =room.getResult();
			aze.LeaveRoom_RoomId   =room.getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onLeaveRoomDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onSubscribeRoomDone, function(room)
		{
			aze.SubscribeRoom_Result   =room.getResult();
			aze.SubscribeRoom_RoomId   =room.getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onSubscribeRoomDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onUnsubscribeRoomDone, function(room)
		{
			aze.UnsubscribeRoom_Result   =room.getResult();
			aze.UnsubscribeRoom_RoomId   =room.getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onUnsubscribeRoomDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onGetLiveRoomInfoDone, function(room)
		{	
			aze.GetLiveRoomInfo_Result      = room.getRoom().getResult();
			aze.GetLiveRoomInfo_RoomId      = room.getRoom().getRoomId();
			aze.GetLiveRoomInfo_Name        = room.getRoom().getName();
			aze.GetLiveRoomInfo_MaxUsers    = room.getRoom().getMaxUsers();
			aze.GetLiveRoomInfo_Owner	    = room.getRoom().getOwner()
			aze.GetLiveRoomInfo_Users 		= room.getUsers();
			aze.GetLiveRoomInfo_UsersLength = room.getUsers().length;
			aze.GetLiveRoomInfo_Data		= room.getCustomData();
			aze.GetLiveRoomInfo_Properties	= JSON.parse(room.getProperties());
			aze.runtime.trigger(pluginProto.cnds.onGetLiveRoomInfoDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onGetAllRoomsDone, function(rooms)
		{
			aze.GetAllRooms_Result				=rooms.getResult();
			aze.GetAllRooms_RoomsIdsArray		=rooms.getRoomIds();
			aze.GetAllRooms_RoomsIdsArrayLength =aze.GetAllRooms_RoomsIdsArray.length;
			aze.runtime.trigger(pluginProto.cnds.onGetAllRoomsDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onGetMatchedRoomsDone, function(rooms)
		{
			aze.GetMatchedRooms_Result 			   = rooms.getResult();
			aze.GetMatchedRooms_RoomIdsArray	   = rooms.getRooms();
			aze.GetMatchedRooms_RoomIdsArrayLength = aze.GetMatchedRooms_RoomIdsArray.length;
			aze.runtime.trigger(pluginProto.cnds.onGetMatchedRoomsDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onSetCustomRoomDataDone, function(room)
		{
			aze.SetCustomRoomData_Result = room.getResult();
			aze.SetCustomRoomData_RoomId = room.getRoom().getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onSetCustomRoomDataDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onUpdatePropertyDone, function(room)
		{
			aze.UpdateProperty_Result = room.getResult();
			aze.UpdateProperty_RoomId = room.getRoom().getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onUpdatePropertyDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onLockPropertiesDone, function(res)
		{
			aze.LockProperties_Result = res;
			aze.runtime.trigger(pluginProto.cnds.onLockPropertiesDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onUnlockPropertiesDone, function(res)
		{
			aze.UnlockProperties_Result = res;
			aze.runtime.trigger(pluginProto.cnds.onUnlockPropertiesDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onCreateRoomDone, function(room)
		{	
			aze.CreateRoom_RoomId = room.getRoomId();
			aze.CreateRoom_Result = room.getResult();
			aze.runtime.trigger(pluginProto.cnds.onCreateRoomDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onDeleteRoomDone, function(room)
		{
			aze.DeleteRoom_RoomId = room.getRoomId();
			aze.DeleteRoom_Result = room.getResult();
			aze.runtime.trigger(pluginProto.cnds.onDeleteRoomDone,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onRoomCreated, function(room)
		{
			aze.RoomCreated_MaxUsers =room.getMaxUsers();
			aze.RoomCreated_Name     =room.getName();
			aze.RoomCreated_Owner    =room.getOwner();
			aze.RoomCreated_Result   =room.getResult();
			aze.RoomCreated_RoomId   =room.getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onRoomCreated,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onRoomDestroyed, function(room)
		{
			aze.RoomDestroyed_MaxUsers =room.getMaxUsers();
			aze.RoomDestroyed_Name     =room.getName();
			aze.RoomDestroyed_Owner    =room.getOwner();
			aze.RoomDestroyed_Result   =room.getResult();
			aze.RoomDestroyed_RoomId   =room.getRoomId();
			aze.runtime.trigger(pluginProto.cnds.onRoomDestroyed,aze);	
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onUserLeftRoom, function(room)
		{
			aze.UserLeftRoom_User	  =room.json.user;
			aze.UserLeftRoom_MaxUsers =room.getMaxUsers();
			aze.UserLeftRoom_Name	  =room.getName();
			aze.UserLeftRoom_Owner    =room.getOwner();
			aze.UserLeftRoom_Result   =room.getResult();
			aze.UserLeftRoom_RoomId   =room.getRoomId().toString();
			aze.runtime.trigger(pluginProto.cnds.onUserLeftRoom,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onUserJoinedRoom, function(room)
		{	
			aze.UserJoinedRoom_User	    =room.json.user;
			aze.UserJoinedRoom_MaxUsers =room.getMaxUsers();
			aze.UserJoinedRoom_Name     =room.getName();
			aze.UserJoinedRoom_Owner	=room.getOwner();
			aze.UserJoinedRoom_Result	=room.getResult();
			aze.UserJoinedRoom_RoomId	=room.getRoomId().toString();
			aze.runtime.trigger(pluginProto.cnds.onUserJoinedRoom,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onUserChangeRoomProperty, function(rooms)
		{
			aze.runtime.trigger(pluginProto.cnds.onUserChangeRoomProperty,aze);
		});
		////////////////////////////////////////
		///// User Response Listner ///////////
		///////////////////////////////////////
		
		this._warpclient.setResponseListener(AppWarp.Events.onGetOnlineUsersDone, function(users)
		{
			aze.GetOnlineUsers_Result   		 = users.getResult();
			aze.GetOnlineUsers_Usernames   		 = users.getUsernames();
			aze.GetOnlineUsers_UsernamesLength   = users.getUsernames().length;
			aze.runtime.trigger(pluginProto.cnds.onGetOnlineUsersDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onGetLiveUserInfoDone, function(user)
		{
			aze.GetLiveUserInfo_Result		= user.getResult();
			aze.GetLiveUserInfo_LocationId	= user.getLocationId();
			aze.GetLiveUserInfo_Name		= user.getName();
			aze.GetLiveUserInfo_CustomData	= user.getCustomData();
			if(user.isLobby())aze.GetLiveUserInfo_IsLobby = "true";else aze.GetLiveUserInfo_IsLobby = "false";
			aze.runtime.trigger(pluginProto.cnds.onGetLiveUserInfoDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onSetCustomUserDataDone, function(user)
		{
			aze.SetCustomUserData_Result = user.getResult()
			aze.runtime.trigger(pluginProto.cnds.onSetCustomUserDataDone,aze);
		});
		
		////////////////////////////////////////
		///////////////////////////////////////
		
		this._warpclient.setResponseListener(AppWarp.Events.onSendChatDone, function(res)
		{
			aze.SendChat_Result = res;
			aze.runtime.trigger(pluginProto.cnds.onSendChatDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onSendPrivateChatDone, function(res)
		{
			aze.SendPrivateChat_Result=res;
			aze.runtime.trigger(pluginProto.cnds.onSendPrivateChatDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onSendUpdateDone, function(res)
		{
			aze.SendUpdate_Result=res;
			aze.runtime.trigger(pluginProto.cnds.onSendUpdateDone,aze);
		});
		this._warpclient.setResponseListener(AppWarp.Events.onSendMoveDone, function(res)
		{
			aze.SendMove_Result=res;
			aze.runtime.trigger(pluginProto.cnds.onsendmovedone,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onChatReceived, function(chat)
		{
			aze.ChatReceived_Sender  =chat.getSender();
			aze.ChatReceived_Message =chat.getChat();
			if(chat.getIsLocationLobby()){aze.ChatReceived_IsLocationLobby = "true";}else{aze.ChatReceived_IsLocationLobby = "false";}
			aze.runtime.trigger(pluginProto.cnds.onChatReceived,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onUpdatePeersReceived, function(update,sender)
		{
			var charname ="";
			for (var i=0, strLen=update.length; i<strLen; i++) {
				charname += String.fromCharCode(update[i]);
			}
			aze.UpdatePeersReceived = eval('(' + charname + ')');
			aze.runtime.trigger(pluginProto.cnds.onUpdatePeersReceived,aze);
		});
		
		this._warpclient.setNotifyListener(AppWarp.Events.onPrivateChatReceived, function(sender,message)
		{
			aze.PrivateChatReceived_Sender=sender;
			aze.PrivateChatReceived_Message=message;
			aze.runtime.trigger(pluginProto.cnds.onPrivateChatReceived,aze);
		});
		this._warpclient.setNotifyListener(AppWarp.Events.onMoveCompleted, function(data)
		{
			var charchar=data.json.moveData;
			while(charchar.indexOf("'")!=-1)charchar=charchar.replace("'",'"');
			if(charchar!="")aze.MoveCompleted_Data= JSON.parse(charchar);
			aze.MoveCompleted_NextTurn = data.getNextTurn();
			aze.MoveCompleted_RoomId   = data.json.id;
			aze.MoveCompleted_Sender   = data.getSender();
			aze.runtime.trigger(pluginProto.cnds.onMoveCompleted,aze);
		});
		
		
		aze.runtime.trigger(pluginProto.cnds.onInitializeDone ,aze);
	};

	instanceProto.onCreate = function()
	{
	};

	
	instanceProto.onDestroy = function ()
	{
	};
	
	// called when saving the full state of the game
	instanceProto.saveToJSON = function ()
	{
		// return a Javascript object containing information about your object's state
		// note you MUST use double-quote syntax (e.g. "property": value) to prevent
		// Closure Compiler renaming and breaking the save format
		return {
			// e.g.
			//"myValue": this.myValue
		};
	};
	
	// called when loading the full state of the game
	instanceProto.loadFromJSON = function (o)
	{
		// load from the state previously saved by saveToJSON
		// 'o' provides the same object that you saved, e.g.
		// this.myValue = o["myValue"];
		// note you MUST use double-quote syntax (e.g. o["property"]) to prevent
		// Closure Compiler renaming and breaking the save format
	};
	instanceProto.draw = function(ctx)
	{
	};
	instanceProto.drawGL = function (glw)
	{
	};
	instanceProto.getDebuggerValues = function (propsections)
	{
		// Append to propsections any debugger sections you want to appear.
		// Each section is an object with two members: "title" and "properties".
		// "properties" is an array of individual debugger properties to display
		// with their name and value, and some other optional settings.
		propsections.push({
			"title": "My debugger section",
			"properties": [
				// Each property entry can use the following values:
				// "name" (required): name of the property (must be unique within this section)
				// "value" (required): a boolean, number or string for the value
				// "html" (optional, default false): set to true to interpret the name and value
				//									 as HTML strings rather than simple plain text
				// "readonly" (optional, default false): set to true to disable editing the property
				
				// Example:
				// {"name": "My property", "value": this.myValue}
			]
		});
	};
	
	instanceProto.onDebugValueEdited = function (header, name, value)
	{
		// Called when a non-readonly property has been edited in the debugger. Usually you only
		// will need 'name' (the property name) and 'value', but you can also use 'header' (the
		// header title for the section) to distinguish properties with the same name.
		if (name === "My property")
			this.myProperty = value;
	};
	/**END-PREVIEWONLY**/
	//////////////////////////////////////
	
	
	/*****************************************/
	/*********** Conditions *****************/
	/***************************************/
		function Cnds() {};
	////////////////////////////////////////
	////////// Connection Conditions //////
	///////////////////////////////////////
		Cnds.prototype.onInitializeDone = function ()
		{
			return true;
		};
		Cnds.prototype.onConnectDone = function ()
		{
			return true;
		};
		Cnds.prototype.ConnectionError = function ()
		{
			return true;
		};
		Cnds.prototype.onDisconnectDone = function ()
		{
			return true;
		};
	////////////////////////////////////////
	////////// Lobby Conditions ///////////
	///////////////////////////////////////
		Cnds.prototype.onJoinLobbyDone = function ()
		{
			return true;
		};		
		Cnds.prototype.onLeaveLobbyDone = function ()
		{
			return true;
		};
		Cnds.prototype.onSubscribeLobbyDone = function ()
		{
			return true;
		};
		Cnds.prototype.onUnsubscribeLobbyDone = function ()
		{
			return true;
		};
		Cnds.prototype.onGetLiveLobbyInfoDone = function ()
		{
			return true;
		};
		Cnds.prototype.onUserLeftLobby = function ()
		{
			return true;
		};
		Cnds.prototype.onUserJoinedLobby = function ()
		{
			return true;
		};
	////////////////////////////////////////
	////////// Room Conditions ////////////
	///////////////////////////////////////
		Cnds.prototype.onJoinRoomDone = function ()
		{
			return true;
		};
		Cnds.prototype.onLeaveRoomDone = function ()
		{
			return true;
		};
		Cnds.prototype.onSubscribeRoomDone = function ()
		{
			return true;
		};
		Cnds.prototype.onUnsubscribeRoomDone = function ()
		{
			return true;
		};
		Cnds.prototype.onGetLiveRoomInfoDone = function ()
		{
			return true;
		};
		Cnds.prototype.onSetCustomRoomDataDone = function ()
		{
			return true;
		};
		Cnds.prototype.onUpdatePropertyDone = function ()
		{
			return true;
		};
		Cnds.prototype.onLockPropertiesDone = function ()
		{
			return true;
		};
		Cnds.prototype.onUnlockPropertiesDone = function ()
		{
			return true;
		};
		Cnds.prototype.onCreateRoomDone = function ()
		{
			return true;
		};
		Cnds.prototype.onDeleteRoomDone = function ()
		{
			return true;
		};
		Cnds.prototype.onGetAllRoomsDone = function ()
		{
			return true;
		};
		Cnds.prototype.onGetMatchedRoomsDone = function ()
		{
			return true;
		};
		Cnds.prototype.onRoomCreated = function ()
		{
			return true;
		};
		Cnds.prototype.onRoomDestroyed = function ()
		{
			return true;
		};
		Cnds.prototype.onUserChangeRoomProperty = function ()
		{
			return true;
		};
	////////////////////////////////////////
	////////// User Conditions ////////////
	///////////////////////////////////////
		Cnds.prototype.onGetOnlineUsersDone = function ()
		{
			return true;
		};
		Cnds.prototype.onGetLiveUserInfoDone = function ()
		{
			return true;
		};
		Cnds.prototype.onSetCustomUserDataDone = function ()
		{
			return true;
		};
		Cnds.prototype.onSendChatDone = function ()
		{
			return true;
		};
		Cnds.prototype.onSendPrivateChatDone = function ()
		{
			return true;
		};
		Cnds.prototype.onSendUpdateDone = function ()
		{
			return true;
		};
		Cnds.prototype.onsendmovedone = function ()
		{
			return true;
		};
		Cnds.prototype.onStartGameDone = function ()
		{
			return true;
		};
		Cnds.prototype.onStopGameDone = function ()
		{
			return true;
		};
		Cnds.prototype.onGetMoveHistoryDone = function ()
		{
			return true;
		};
		Cnds.prototype.onUserLeftRoom = function ()
		{
			return true;
		};
		Cnds.prototype.onUserJoinedRoom = function ()
		{
			return true;
		};
		Cnds.prototype.onChatReceived = function ()
		{
			return true;
		};
		Cnds.prototype.onUpdatePeersReceived = function ()
		{
			return true;
		};
		Cnds.prototype.onPrivateChatReceived = function ()
		{
			return true;
		};
		Cnds.prototype.onMoveCompleted = function ()
		{
			return true;
		};
		Cnds.prototype.onGameStarted = function ()
		{
			return true;
		};
		Cnds.prototype.onGameStopped = function ()
		{
			return true;
		};
		pluginProto.cnds = new Cnds();
		
		
		
		
	/*****************************************/
	/*********** Actions ********************/
	/***************************************/
		function Acts() {};
	
	////////////////////////////////////////
	////////// Connection Actions /////////
	///////////////////////////////////////
		Acts.prototype.Initialize = function (apiKey,secretkey)
		{
			if(apiKey!="" && secretkey!="")
			{
				apiKey = apiKey.toString();
				secretkey = secretkey.toString();
				this.onInitialize(apiKey,secretkey);
			}else
			{
				alert("You should put the apiKey and the secretKey");
			}
		}
		Acts.prototype.Connect = function (nameId)
		{
			nameId = nameId.toString();
			this._warpclient.connect(nameId);
		};
		Acts.prototype.Disconnect = function()
		{
			this._warpclient.disconnect();
		};
	////////////////////////////////////////
	////////// Lobby Actions //////////////
	///////////////////////////////////////
		Acts.prototype.joinLobby = function ()
		{
			this._warpclient.joinLobby();
		};
		Acts.prototype.leaveLobby = function ()
		{
			this._warpclient.leaveLobby();
		};
		Acts.prototype.subscribeLobby = function ()
		{
			this._warpclient.subscribeLobby();
		};
		Acts.prototype.unsubscribeLobby = function ()
		{
			this._warpclient.unsubscribeLobby();
		};
		Acts.prototype.getLiveLobbyInfo = function ()
		{
			this._warpclient.getLiveLobbyInfo();
		};
	////////////////////////////////////////
	////////// Room Actions ///////////////
	///////////////////////////////////////
		Acts.prototype.joinRoom = function (RoomID)
		{
			this._warpclient.joinRoom(RoomID);
		};
		Acts.prototype.joinRoomInRange = function (MinPlayers,MaxPlayers,Preferred)
		{
			this._warpclient.joinRoomInRange(MinPlayers,MaxPlayers,Preferred);
		};
		Acts.prototype.joinRoomWithProperties = function (tableProperties)
		{
			this._warpclient.joinRoomWithProperties(tableProperties);
		};
		Acts.prototype.leaveRoom = function (RoomID)
		{
			this._warpclient.leaveRoom(RoomID);
		};
		Acts.prototype.createRoom = function (Name,Owner,MaxUsers,tableproperties)
		{
			this._warpclient.createRoom(Name,Owner,MaxUsers,tableproperties);
		};	
		Acts.prototype.createTurnRoom = function (Name ,Owner , MaxUsers , TableProperties , TurnTime )
		{
			this._warpclient.createTurnRoom(Name ,Owner , MaxUsers , TableProperties , TurnTime );
		};
		Acts.prototype.deleteRoom = function (RoomID)
		{
			this._warpclient.deleteRoom(RoomID);
		};
		Acts.prototype.subscribeRoom = function (RoomID)
		{
			this._warpclient.subscribeRoom(RoomID);
		};
		Acts.prototype.unsubscribeRoom = function (RoomID)
		{
			this._warpclient.unsubscribeRoom(RoomID);
		};
		Acts.prototype.SetCustomRoomData = function (Username,CustomData)
		{
			this._warpclient.setCustomRoomData(Username,CustomData);
		};
		Acts.prototype.updateRoomProperties = function (roomID, tableProperties, removeArray)
		{
			this._warpclient.updateRoomProperties(roomID, tableProperties, removeArray);  
		};
		Acts.prototype.getAllRooms = function ()
		{
			this._warpclient.getAllRooms();
		};
		
		Acts.prototype.getLiveRoomInfo = function (RoomID)
		{
			this._warpclient.getLiveRoomInfo(RoomID);
		};
		
		Acts.prototype.getRoomsInRange = function (minJoinedUsers,maxJoinedUsers) 
		{
			this._warpclient.getRoomsInRange(minJoinedUsers,maxJoinedUsers);
		};
		
		Acts.prototype.getRoomsWithProperties = function (properties) 
		{
			this._warpclient.getRoomsWithProperties(properties);
		};
		
		Acts.prototype.lockProperties = function (properties) 
		{
			this._warpclient.lockProperties(properties);
		};
		
		Acts.prototype.unlockProperties = function (properties) 
		{
			this._warpclient.unlockProperties(properties);
		};
		Acts.prototype.startGame = function () 
		{
			this._warpclient.startGame();
		};
		Acts.prototype.stopGame = function () 
		{
			this._warpclient.stopGame();
		};
		
	////////////////////////////////////////
	////////// User Actions ///////////////
	///////////////////////////////////////
		Acts.prototype.sendChat = function (Message)
		{
			this._warpclient.sendChat(Message);
		};
		
		Acts.prototype.sendPrivateChat = function (ToUser,Message)
		{
			this._warpclient.sendPrivateChat(ToUser,Message);
		};
		
		Acts.prototype.sendUpdate = function (update)
		{
			var t = [];
			for (var i=0, strLen=update.length; i<strLen; i++) {
				t[i] = update.charCodeAt(i);
			}
			var x = new Uint8Array(update.length);
			for (var i=0, strLen=update.length; i<strLen; i++) {
				x[i] = t[i];
			}
			this._warpclient.sendUpdatePeers(x);
		};
		
		Acts.prototype.getLiveUserInfo = function (Username)
		{
			this._warpclient.getLiveUserInfo(Username);
		};
		
		Acts.prototype.getOnlineUsers = function ()
		{
			this._warpclient.getOnlineUsers();
		};
		
		Acts.prototype.setCustomUserData = function (RoomID,CustomData)
		{
			this._warpclient.setCustomUserData(RoomID,CustomData);
		};
		
		Acts.prototype.sendMove = function (Data)
		{
			this._warpclient.sendMove(Data);
		};
		
		pluginProto.acts = new Acts();
		
		
		
		
		
		
		
		
		
		
	/*****************************************/
	/*********** Expressions ****************/
	/***************************************/
	pluginProto.exps = {};
	var exps = pluginProto.exps;
	////////////////////////////////////////
	////////// Connection exps ////////////
	///////////////////////////////////////
	exps.ConnectionStatus = function(result)
	{
		result.set_int(this.ConnectionStatus);
	};
	////////////////////////////////////////
	////////// Lobby exps /////////////////
	///////////////////////////////////////
		
		exps.GetLiveLobbyInfo_Result = function(result)
		{
			result.set_int(this.GetLiveLobbyInfo_Result);
		};
		exps.GetLiveLobbyInfo_Owner = function(result)
		{
			result.set_string(this.GetLiveLobbyInfo_Owner);
		};
		exps.GetLiveLobbyInfo_IdLobby = function(result)
		{
			result.set_string(this.GetLiveLobbyInfo_IdLobby);
		};
		exps.GetLiveLobbyInfo_Name = function(result)
		{
			result.set_string(this.GetLiveLobbyInfo_Name);
		};
		exps.GetLiveLobbyInfo_MaxUsers = function(result)
		{
			result.set_int(this.GetLiveLobbyInfo_MaxUsers);
		};
		exps.GetLiveLobbyInfo_Data = function(result)
		{
			result.set_string(this.GetLiveLobbyInfo_Data);
		};
		exps.GetLiveLobbyInfo_Properties = function(result,i)
		{
			if(this.GetLiveLobbyInfo_Properties[i])result.set_string(this.GetLiveLobbyInfo_Properties[i]);
			else result.set_string("undefined");
		};
		exps.GetLiveLobbyInfo_Users = function(ret,i)
		{
			if (i < this.GetLiveLobbyInfo_Users.length)ret.set_string(this.GetLiveLobbyInfo_Users[i]);
			else ret.set_string("null");
		};
		exps.GetLiveLobbyInfo_UsersNumber = function(result)
		{
			result.set_int(this.GetLiveLobbyInfo_UsersNumber);
		};

		exps.JoinLobby_Result = function(result)
		{
			result.set_int(this.JoinLobby_Result);
		};
		exps.LeaveLobby_Result = function(result)
		{
			result.set_int(this.JoinLobby_Result);
		};
		exps.SubscribeLobby_Result = function(result)
		{
			result.set_int(this.JoinLobby_Result);
		};
		exps.UnsubscribeLobby_Result = function(result)
		{
			result.set_int(this.JoinLobby_Result);
		};
		
		//--//
		exps.UserJoinedLobby_MaxUsers = function(result)
		{
			result.set_int(this.UserJoinedLobby_MaxUsers);
		};
		exps.UserJoinedLobby_LobbyId = function(result)
		{
			result.set_string(this.UserJoinedLobby_LobbyId);
		};
		exps.UserJoinedLobby_IsPrimary = function(result)
		{
			result.set_string(this.UserJoinedLobby_IsPrimary);
		};
		exps.UserJoinedLobby_Owner = function(result)
		{
			result.set_string(this.UserJoinedLobby_Owner);
		};
		exps.UserJoinedLobby_Result = function(result)
		{
			result.set_int(this.UserJoinedLobby_Result);
		};
		exps.UserJoinedLobby_Name = function(result)
		{
			result.set_string(this.UserJoinedLobby_Name);
		};
		exps.UserJoinedLobby_User = function(result)
		{
			result.set_string(this.UserJoinedLobby_User);
		};
		//--//
		
		//--//
		exps.UserLeftLobby_MaxUsers = function(result)
		{
			result.set_int(this.UserLeftLobby_MaxUsers);
		};
		exps.UserLeftLobby_LobbyId = function(result)
		{
			result.set_string(this.UserLeftLobby_LobbyId);
		};
		exps.UserLeftLobby_IsPrimary = function(result)
		{
			result.set_string(this.UserLeftLobby_IsPrimary);
		};
		exps.UserLeftLobby_Owner = function(result)
		{
			result.set_string(this.UserLeftLobby_Owner);
		};
		exps.UserLeftLobby_Result = function(result)
		{
			result.set_int(this.UserLeftLobby_Result);
		};
		exps.UserLeftLobby_Name = function(result)
		{
			result.set_string(this.UserLeftLobby_Name);
		};
		exps.UserLeftLobby_User = function(result)
		{
			result.set_string(this.UserLeftLobby_User);
		};
		//--//
		
	////////////////////////////////////////
	////////// Room exps //////////////////
	///////////////////////////////////////
	
		exps.GetAllRooms_RoomsIdsArray = function(ret,i)
		{
			if (i < this.GetAllRooms_RoomsIdsArray.length)ret.set_string(this.GetAllRooms_RoomsIdsArray[i]);
			else ret.set_string("null");
		};
		exps.GetAllRooms_RoomsIdsArrayLength = function(result)
		{
			result.set_int(this.GetAllRooms_RoomsIdsArrayLength);
		};
		exps.GetAllRooms_Result	 = function(result)
		{
			result.set_int(this.GetAllRooms_Result);
		};
		//--//
		exps.GetMatchedRooms_Result	 = function(result)
		{
			result.set_int(this.GetMatchedRooms_Result);
		};
		exps.GetMatchedRooms_RoomIdsArray = function(ret,i)
		{
			if (i < this.GetMatchedRooms_RoomIdsArray.length && i>-1)ret.set_string(this.GetMatchedRooms_RoomIdsArray[i].id);
			else ret.set_string("null");
		};
		exps.GetMatchedRooms_RoomIdsArrayLength = function(result)
		{
			result.set_int(this.GetMatchedRooms_RoomIdsArrayLength);
		};
		//--//
		exps.SetCustomRoomData_Result	 = function(result)
		{
			result.set_int(this.SetCustomRoomData_Result);
		};
		exps.SetCustomRoomData_RoomId = function(result)
		{
			result.set_string(this.SetCustomRoomData_RoomId);
		};
		//--//
		exps.UpdateProperty_Result	 = function(result)
		{
			result.set_int(this.UpdateProperty_Result);
		};
		exps.UpdateProperty_RoomId = function(result)
		{
			result.set_string(this.UpdateProperty_RoomId);
		};
		//--//
		exps.LockProperties_Result	 = function(result)
		{
			result.set_int(this.LockProperties_Result);
		};
		exps.UnlockProperties_Result	 = function(result)
		{
			result.set_int(this.UnlockProperties_Result);
		};
		//--//
		exps.GetLiveRoomInfo_Result	 = function(result)
		{
			result.set_int(this.GetLiveRoomInfo_Result);
		};
		exps.GetLiveRoomInfo_RoomId = function(result)
		{
			result.set_string(this.GetLiveRoomInfo_RoomId);
		};
		exps.GetLiveRoomInfo_Name = function(result)
		{
			result.set_string(this.GetLiveRoomInfo_Name);
		};
		exps.GetLiveRoomInfo_MaxUsers	 = function(result)
		{
			result.set_int(this.GetLiveRoomInfo_MaxUsers);
		};
		exps.GetLiveRoomInfo_Owner = function(result)
		{
			result.set_string(this.GetLiveRoomInfo_Owner);
		};
		exps.GetLiveRoomInfo_Users = function(ret,i)
		{
			if (i < this.GetLiveRoomInfo_Users.length && i>-1)ret.set_string(this.GetLiveRoomInfo_Users[i]);
			else ret.set_string("null");
		};
		exps.GetLiveRoomInfo_UsersLength = function(result)
		{
			result.set_int(this.GetLiveRoomInfo_UsersLength);
		};
		exps.GetLiveRoomInfo_Data = function(result)
		{
			result.set_string(this.GetLiveRoomInfo_Data);
		};
		exps.GetLiveRoomInfo_Properties = function(result,i)
		{
			if(this.GetLiveRoomInfo_Properties[i])result.set_string(this.GetLiveRoomInfo_Properties[i]);
			else result.set_string("undefined");
		};
		
		//--//
		exps.JoinRoom_RoomId = function(result)
		{
			result.set_string(this.JoinRoom_RoomId);
		};
		exps.JoinRoom_Result = function(result)
		{
			result.set_int(this.JoinRoom_Result);
		};
		exps.LeaveRoom_RoomId = function(result)
		{
			result.set_string(this.LeaveRoom_RoomId);
		};
		exps.LeaveRoom_Result = function(result)
		{
			result.set_int(this.LeaveRoom_Result);
		};
		exps.SubscribeRoom_RoomId = function(result)
		{
			result.set_string(this.SubscribeRoom_RoomId);
		};
		exps.SubscribeRoom_Result = function(result)
		{
			result.set_int(this.SubscribeRoom_Result);
		};
		exps.UnsubscribeRoom_RoomId = function(result)
		{
			result.set_string(this.UnsubscribeRoom_RoomId);
		};
		exps.UnsubscribeRoom_Result = function(result)
		{
			result.set_int(this.UnsubscribeRoom_Result);
		};
		//--//
		exps.CreateRoom_RoomId = function(result)
		{
			result.set_string(this.CreateRoom_RoomId);
		};
		exps.CreateRoom_Result = function(result)
		{
			result.set_int(this.CreateRoom_Result);
		};
		exps.DeleteRoom_RoomId = function(result)
		{
			result.set_string(this.DeleteRoom_RoomId);
		};
		exps.DeleteRoom_Result = function(result)
		{
			result.set_int(this.DeleteRoom_Result);
		};
		//--//
		exps.RoomCreated_RoomId = function(result)
		{
			result.set_string(this.RoomCreated_RoomId);
		};
		exps.RoomCreated_Name = function(result)
		{
			result.set_string(this.RoomCreated_Name);
		};
		exps.RoomCreated_Owner = function(result)
		{
			result.set_string(this.RoomCreated_Owner);
		};
		exps.RoomCreated_MaxUsers = function(result)
		{
			result.set_int(this.RoomCreated_MaxUsers);
		};
		exps.RoomCreated_Result = function(result)
		{
			result.set_int(this.RoomCreated_Result);
		};
		//--//
		
		//--//
		exps.RoomDestroyed_RoomId = function(result)
		{
			result.set_string(this.RoomDestroyed_RoomId);
		};
		exps.RoomDestroyed_Name = function(result)
		{
			result.set_string(this.RoomDestroyed_Name);
		};
		exps.RoomDestroyed_Owner = function(result)
		{
			result.set_string(this.RoomDestroyed_Owner);
		};
		exps.RoomDestroyed_MaxUsers = function(result)
		{
			result.set_int(this.RoomDestroyed_MaxUsers);
		};
		exps.RoomDestroyed_Result = function(result)
		{
			result.set_int(this.RoomDestroyed_Result);
		};
		//--//
		
		//--//
		exps.UserLeftRoom_MaxUsers = function(result)
		{
			result.set_int(this.UserLeftRoom_MaxUsers);
		};
		exps.UserLeftRoom_Name = function(result)
		{
			result.set_string(this.UserLeftRoom_Name);
		};
		exps.UserLeftRoom_Owner = function(result)
		{
			result.set_string(this.UserLeftRoom_Owner);
		};
		exps.UserLeftRoom_Result = function(result)
		{
			result.set_int(this.UserLeftRoom_Result);
		};
		exps.UserLeftRoom_RoomId = function(result)
		{
			result.set_string(this.UserLeftRoom_RoomId);
		};
		exps.UserLeftRoom_User = function(result)
		{
			result.set_string(this.UserLeftRoom_User);
		};
		//--//
		
		//--//
		exps.UserJoinedRoom_MaxUsers = function(result)
		{
			result.set_int(this.UserJoinedRoom_MaxUsers);
		};
		exps.UserJoinedRoom_Name = function(result)
		{
			result.set_string(this.UserJoinedRoom_Name);
		};
		exps.UserJoinedRoom_Owner = function(result)
		{
			result.set_string(this.UserJoinedRoom_Owner);
		};
		exps.UserJoinedRoom_Result = function(result)
		{
			result.set_int(this.UserJoinedRoom_Result);
		};
		exps.UserJoinedRoom_RoomId = function(result)
		{
			result.set_string(String(this.UserJoinedRoom_RoomId));
		};
		exps.UserJoinedRoom_User = function(result)
		{
			result.set_string(this.UserJoinedRoom_User);
		};
		//--//
		
	////////////////////////////////////////
	////////// User exps //////////////////
	///////////////////////////////////////
		exps.GetOnlineUsers_Result = function(result)
		{
			result.set_int(this.GetOnlineUsers_Result);
		};
		exps.GetOnlineUsers_Usernames = function(result,i)
		{
			if( i<this.GetOnlineUsers_Usernames.length && i>-1)result.set_string(this.GetOnlineUsers_Usernames[i]);
			else result.set_string("undefined");
		};
		exps.GetOnlineUsers_UsernamesLength = function(result)
		{
			result.set_int(this.GetOnlineUsers_UsernamesLength);
		};
		exps.GetLiveUserInfo_Result = function(result)
		{
			result.set_int(this.GetLiveUserInfo_Result);
		};
		exps.GetLiveUserInfo_LocationId = function(result)
		{
			result.set_string(this.GetLiveUserInfo_LocationId);
		};
		exps.GetLiveUserInfo_Name = function(result)
		{
			result.set_string(this.GetLiveUserInfo_Name);
		};
		exps.GetLiveUserInfo_CustomData = function(result)
		{
			result.set_string(this.GetLiveUserInfo_CustomData);
		};
		exps.GetLiveUserInfo_IsLobby = function(result)
		{
			result.set_string(this.GetLiveUserInfo_IsLobby);
		};
		exps.SetCustomUserData_Result = function(result)
		{
			result.set_int(this.SetCustomUserData_Result);
		};
		exps.SendChat_Result = function(result)
		{
			result.set_int(this.SendChat_Result);
		};
		exps.SendPrivateChat_Result = function(result)
		{
			result.set_int(this.SendPrivateChat_Result);
		};
		exps.SendUpdate_Result = function(result)
		{
			result.set_int(this.SendUpdate_Result);
		};
		exps.SendMove_Result = function(result)
		{
			result.set_int(this.SendMove_Result);
		};
		exps.UpdatePeersReceived = function(result,i)
		{
			if(this.UpdatePeersReceived[i])result.set_string(this.UpdatePeersReceived[i]);
			else result.set_string("undefined");
		};
		exps.ChatReceived_Sender = function(result)
		{
			result.set_string(this.ChatReceived_Sender);
		};
		exps.ChatReceived_Message = function(result)
		{
			result.set_string(this.ChatReceived_Message);
		};
		exps.ChatReceived_IsLocationLobby = function(result)
		{
			result.set_string(this.ChatReceived_IsLocationLobby);
		};
		exps.PrivateChatReceived_Sender = function(result)
		{
			result.set_string(this.PrivateChatReceived_Sender);
		};
		exps.PrivateChatReceived_Message = function(result)
		{
			result.set_string(this.PrivateChatReceived_Message);
		};
		exps.MoveCompleted_Data = function(result,i)
		{
			if(this.MoveCompleted_Data[i])result.set_string(this.MoveCompleted_Data[i]);
			else result.set_string("undefined");
		};
		exps.MoveCompleted_NextTurn = function(result)
		{
			result.set_string(this.MoveCompleted_NextTurn);
		};
		exps.MoveCompleted_RoomId = function(result)
		{
			result.set_string(this.MoveCompleted_RoomId);
		};
		exps.MoveCompleted_Sender = function(result)
		{
			result.set_string(this.MoveCompleted_Sender);
		};
}());