function GetPluginSettings()
{
	return {
		"name":			"Appwarp",				// as appears in 'insert object' dialog, can be changed as long as "id" stays the same
		"id":			"Appwarp",				// this is used to identify this plugin and is saved to the project; never change it
		"version":		"1.0",					// (float in x.y format) Plugin version - C2 shows compatibility warnings based on this
		"description":	"Allows you to communicate with the appwarp server for more informations visit http://appwarp.shephertz.com/",
		"author":		"Yahia Mgarrech",
		"help url":		"https://www.facebook.com/mg.yaya",
		"category":		"Web",				// Prefer to re-use existing categories, but you can set anything here
		"type":			"object",				// either "world" (appears in layout and is drawn), else "object"
		"rotatable":	false,					// only used when "type" is "world".  Enables an angle property on the object.
		"dependency":	"appwarp.js;hmac-sha1.js",
		"flags":		pf_singleglobal						// uncomment lines to enable flags...
					//	| pf_singleglobal		// exists project-wide, e.g. mouse, keyboard.  "type" must be "object".
					//	| pf_texture			// object has a single texture (e.g. tiled background)
					//	| pf_position_aces		// compare/set/get x, y...
					//	| pf_size_aces			// compare/set/get width, height...
					//	| pf_angle_aces			// compare/set/get angle (recommended that "rotatable" be set to true)
					//	| pf_appearance_aces	// compare/set/get visible, opacity...
					//	| pf_tiling				// adjusts image editor features to better suit tiled images (e.g. tiled background)
					//	| pf_animations			// enables the animations system.  See 'Sprite' for usage
					//	| pf_zorder_aces		// move to top, bottom, layer...
					//  | pf_nosize				// prevent resizing in the editor
					//	| pf_effects			// allow WebGL shader effects to be added
					//  | pf_predraw			// set for any plugin which draws and is not a sprite (i.e. does not simply draw
												// a single non-tiling image the size of the object) - required for effects to work properly
	};
};

////////////////////////////////////////
// Parameter types:
// AddNumberParam(label, description [, initial_string = "0"])			// a number
// AddStringParam(label, description [, initial_string = "\"\""])		// a string
// AddAnyTypeParam(label, description [, initial_string = "0"])			// accepts either a number or string
// AddCmpParam(label, description)										// combo with equal, not equal, less, etc.
// AddComboParamOption(text)											// (repeat before "AddComboParam" to add combo items)
// AddComboParam(label, description [, initial_selection = 0])			// a dropdown list parameter
// AddObjectParam(label, description)									// a button to click and pick an object type
// AddLayerParam(label, description)									// accepts either a layer number or name (string)
// AddLayoutParam(label, description)									// a dropdown list with all project layouts
// AddKeybParam(label, description)										// a button to click and press a key (returns a VK)
// AddAnimationParam(label, description)								// a string intended to specify an animation name
// AddAudioFileParam(label, description)								// a dropdown list with all imported project audio files

////////////////////////////////////////
// Conditions

// AddCondition(id,					// any positive integer to uniquely identify this condition
//				flags,				// (see docs) cf_none, cf_trigger, cf_fake_trigger, cf_static, cf_not_invertible,
//									// cf_deprecated, cf_incompatible_with_triggers, cf_looping
//				list_name,			// appears in event wizard list
//				category,			// category in event wizard list
//				display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//				description,		// appears in event wizard dialog when selected
//				script_name);		// corresponding runtime function name
				
// example				
AddCondition(99,cf_trigger,"AppWarp Intialized","0-Initialize","On Appwarp Initialized","Triggered when the AppWarp initialized .","onInitializeDone");

AddCondition(0,cf_trigger,"Connect Done","1-Connection","On connection Done","Triggered when the connection initialized .","onConnectDone");
AddCondition(1,cf_trigger,"Connection Error","1-Connection","On connection Error","Triggered when the connection returns an error.","ConnectionError");
AddCondition(2,cf_trigger,"Disconnect Done","1-Connection","on Disconnect Done","Triggered when the client is disconnected.","onDisconnectDone");

AddCondition(3,cf_trigger,"Join Lobby Done","2-Lobby","on Join Lobby Done","Triggered when the client joined the lobby.","onJoinLobbyDone");
AddCondition(4,cf_trigger,"Leave Lobby Done","2-Lobby","on Leave Lobby Done","Triggered when the client left the lobby.","onLeaveLobbyDone");
AddCondition(5,cf_trigger,"Subscribe Lobby Done","2-Lobby","on Subscribe Lobby Done","Triggered when the client lSubscribed the lobby.","onSubscribeLobbyDone");
AddCondition(6,cf_trigger,"Unsubscribe Lobby Done","2-Lobby","on Unsubscribe Lobby Done","Triggered when the client Unsubscribed the lobby.","onUnsubscribeLobbyDone");
AddCondition(7,cf_trigger,"Get Live Lobby Info Done","2-Lobby","on Get Live Lobby Info Done","Triggered when the client gets Lobby informations.","onGetLiveLobbyInfoDone");

AddCondition(8,cf_trigger,"Join Room Done","3-Room","on Join Room Done","Triggered when the client joined a room.","onJoinRoomDone");
AddCondition(9,cf_trigger,"Leave Room Done","3-Room","on Leave Room Done","Triggered when the client left the room.","onLeaveRoomDone");
AddCondition(10,cf_trigger,"Subscribe Room Done","3-Room","on Subscribe Room Done","Triggered when the client Subscribed a room.","onSubscribeRoomDone");
AddCondition(11,cf_trigger,"Unsubscribe Room Done","3-Room","on Unsubscribe Room Done","Triggered when the client Unsubscribed the room.","onUnsubscribeRoomDone");
AddCondition(12,cf_trigger,"Get Live Room Info Done","3-Room","on Get Live Room Info Done","Triggered when the client got Room info.","onGetLiveRoomInfoDone");
AddCondition(13,cf_trigger,"Set Custom Room Data Done","3-Room","on Set Custom Room Data Done","Triggered when the room data are set.","onSetCustomRoomDataDone");
AddCondition(14,cf_trigger,"Update Property Done","3-Room","on Update Property Done","Invoked in response to add property to any room ","onUpdatePropertyDone");
AddCondition(15,cf_trigger,"Lock Properties Done","3-Room","on Lock Properties Done","Invoked in response to lock property to any room ","onLockPropertiesDone");
AddCondition(16,cf_trigger,"Unlock Properties Done","3-Room","on Unlock Properties Done","Invoked in response to unlock property to any room ","onUnlockPropertiesDone");
AddCondition(17,cf_trigger,"Create Room Done","3-Room","on Create Room Done","Triggered when the client Created a room.","onCreateRoomDone");
AddCondition(18,cf_trigger,"Delete Room Done","3-Room","on Delete Room Done","Triggered when the client Deleated a room.","onDeleteRoomDone");
AddCondition(19,cf_trigger,"Get All Rooms Done","3-Room","on Get All Rooms Done","Invoked in response to get all rooms request ","onGetAllRoomsDone");
AddCondition(23,cf_trigger,"Get Matched Rooms Done","3-Room","on Get Matched Rooms Done","Invoked in response to getRoomsInRange and getRoomWithProperties request ","onGetMatchedRoomsDone");

AddCondition(20,cf_trigger,"Get Online Users Done","4-User","on Get Online Users Done","Invoked in response to GetOnlineUsers request ","onGetOnlineUsersDone");
AddCondition(21,cf_trigger,"Get Live User Info Done","4-User","on Get Live User Info Done","Invoked in response to GetLiveUserInfo request ","onGetLiveUserInfoDone");
AddCondition(22,cf_trigger,"Set Custom User Data Done","4-User","on Set Custom User Data Done","Invoked in response to SetCustomUserData request ","onSetCustomUserDataDone");

AddCondition(24,cf_trigger,"Send Chat Done","5-Data","on Send Chat Done","Invoked in response to sendChat request ","onSendChatDone");
AddCondition(25,cf_trigger,"Send Private Chat Done","5-Data","on Send Private Chat Done","Invoked in response to sendPrivateChat request ","onSendPrivateChatDone");
AddCondition(26,cf_trigger,"Send Update Done","5-Data","on Send Update Done","Invoked in response to sendUpdate request ","onSendUpdateDone");
AddCondition(27,cf_trigger,"Send Move Done","5-Data","on Send Move Done","Invoked in response to sendMove request ","onsendmovedone");
AddCondition(28,cf_trigger,"Start Game Done","5-Data","on Start Game Done","Invoked in response to startGame request ","onStartGameDone");
AddCondition(29,cf_trigger,"Stop Game Done","5-Data","on Start Game Done","Invoked in response to stopGame request ","onStopGameDone");
AddCondition(30,cf_trigger,"Get Move History Done","5-Data","on Get Move History Done","Invoked in response to getMoveHistory request ","onGetMoveHistoryDone");

AddCondition(31,cf_trigger,"Room Created","6-Notification","on Room Created","Invoked when a room is created","onRoomCreated");
AddCondition(32,cf_trigger,"Room Destroyed","6-Notification","on Room Destroyed","Invoked when a room is Destroyed","onRoomDestroyed");
AddCondition(33,cf_trigger,"User Left Room","6-Notification","on User Left Room","Invoked when a User Left the Room","onUserLeftRoom");
AddCondition(34,cf_trigger,"User Joined Room","6-Notification","on User Joined Room","Invoked when a User Joined the Room","onUserJoinedRoom");
AddCondition(35,cf_trigger,"User Left Lobby","6-Notification","on User Left Lobby","Invoked when a User Left the Lobby","onUserLeftLobby");
AddCondition(36,cf_trigger,"User Joined Lobby","6-Notification","on User Joined Lobby","Invoked when a User Joined the Lobby","onUserJoinedLobby");
AddCondition(37,cf_trigger,"Chat Received","6-Notification","on Chat Received","Invoked when a joined user sends a chat","onChatReceived");
AddCondition(38,cf_trigger,"Update Peers Received","6-Notification","on Update Peers Received"," Invoked when a joined user sends a updatePeers request","onUpdatePeersReceived");
AddCondition(39,cf_trigger,"User Change Room Property","6-Notification","on User Change Room Property","Invoked when a user change room property","onUserChangeRoomProperty");
AddCondition(40,cf_trigger,"Private Chat Received","6-Notification","on Private Chat Received","Invoked when a user receive private chat","onPrivateChatReceived");
AddCondition(41,cf_trigger,"Move Completed","6-Notification","on Move Completed","Invoked when a user makes a move in a turn based room","onMoveCompleted");
AddCondition(42,cf_trigger,"Game Started","6-Notification","on Game Started","Invoked when a game starts","onGameStarted");
AddCondition(43,cf_trigger,"Game Stopped","6-Notification","on Game Stopped","Invoked when a game stops","onGameStopped");



////////////////////////////////////////
// Actions

// AddAction(id,				// any positive integer to uniquely identify this action
//			 flags,				// (see docs) af_none, af_deprecated
//			 list_name,			// appears in event wizard list
//			 category,			// category in event wizard list
//			 display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//			 description,		// appears in event wizard dialog when selected
//			 script_name);		// corresponding runtime function name

// example
//AddStringParam("Message", "Enter a string to alert.");
//AddAction(0, af_none, "Alert", "My category", "Alert {0}", "Description for my action!", "MyAction");

AddStringParam("apikey", "Your Application Key", "");
AddStringParam("secretkey", "Your Secret Key","");
AddAction(99,af_none,"Initialize","0-Initialize (first action !)","Initialize Appwarp server","Initialize the appwarp server","Initialize");
AddStringParam("ID", "User ID", "");
AddAction(0,af_none,"Connect","1-Connection","Connect to appwarp server","Connect to appwarp server","Connect");
AddAction(1,af_none,"Disconnect","1-Connection","Disconnect from the appwarp server","Disconnect from the appwarp server","Disconnect");

AddAction(2,af_none,"Join Lobby","2-Lobby","Join the lobby","Sends a join lobby request to the server","joinLobby");
AddAction(3,af_none,"Leave Lobby","2-Lobby","Leave the lobby","Sends a leave lobby request to the server","leaveLobby");
AddAction(4,af_none,"Subscribe Lobby","2-Lobby","Subscribe the lobby","Users receive chat events from other users in the lobby and join/leave notifications about all players.","subscribeLobby");
AddAction(5,af_none,"Unsubscribe Lobby","2-Lobby","Unsubscribe the lobby","Sends a Unsubscribe lobby request to the server","unsubscribeLobby");

AddNumberParam("RoomID", "The Room ID");
AddAction(6,af_none,"Join Room","3-Room","Join a Room","Sends a join room request to the server. A user can only be joined in one location (room or lobby) at a time. If a user joins a room, it will automatically be removed from its current location","joinRoom");
AddNumberParam("Min", "Min players joined the room");
AddNumberParam("Max", "Max players joined the room");
AddAnyTypeParam("Preferred", "desired param to order with");
AddAction(22,af_none,"Join Room In Range","3-Room","Join a Room In Range","Sends a join room In Range request to the server. A user can only be joined in one location (room or lobby) at a time. If a user joins a room, it will automatically be removed from its current location","joinRoomInRange");
AddAnyTypeParam("tableProperties", "properties of the room to be joined");
AddAction(23,af_none,"Join Room with properties","3-Room","Join a Room with properties","Sends a join room request to the server with the condition that the room must have a matching set of property value pairs associated with it","joinRoomWithProperties");
AddNumberParam("RoomID", "The Room ID");
AddAction(7,af_none,"Leave Room","3-Room","Leave a Room","Sends a Leave room request to the server.","leaveRoom");
AddStringParam("Name", "Name of the room","");
AddStringParam("Owner", "Administrator of the room","");
AddNumberParam("MaxUsers", "Number of maximum users allowed in the room",4);
AddAnyTypeParam("tableProperties", "properties of the room to be created","{}");
AddAction(8,af_none,"Create Room","3-Room","Create a Room","Sends a Create room request to the server.","createRoom");
AddStringParam("Name", "Name of the room","");
AddStringParam("Owner", "Administrator of the room","");
AddNumberParam("MaxUsers", "Number of maximum users allowed in the room",4);
AddAnyTypeParam("TableProperties", "properties of the room to be created");
AddNumberParam("TurnTime", "the  time  ( in  seconds )  allowed for  a  user  to  complete  its  turn  and  send  a  move . ",0);
AddAction(27,af_none,"Create Turn Room","3-Room","Create a Turn Room","Sends a Create turn room request to the server.","createTurnRoom");

AddNumberParam("RoomID", "The Room ID");
AddAction(9,af_none,"Delete Room","3-Room","Delete a Room","Sends a Delete room request to the server.","deleteRoom");
AddNumberParam("RoomID", "The Room ID");
AddAction(10,af_none,"Subscribe Room","3-Room","Subscribe a Room","Sends a Subscribe room request to the server.","subscribeRoom");
AddNumberParam("RoomID", "The Room ID");
AddAction(11,af_none,"Unsubscribe Room","3-Room","Unsubscribe a Room","Sends a Unsubscribe room request to the server.","unsubscribeRoom");
AddNumberParam("RoomID", "The Room ID");
AddAnyTypeParam("tableProperties", "properties that will be set for the room");
AddAnyTypeParam("removeArray","properties that will be removed for the room");
AddAction(24,af_none,"Update Room Properties","3-Room","Update Room Properties","Updates the properties associated with the given room on the server.","updateRoomProperties");
AddAnyTypeParam("properties ","vector of properties to be locked");
AddAction(25,af_none,"Lock Room Properties","3-Room","Lock Room Properties","Lock the properties associated with the joined room on the server for requested user.","lockProperties");
AddAnyTypeParam("properties ","vector of properties to be unlocked");
AddAction(26,af_none,"unLock Room Properties","3-Room","unLock Room Properties","unLock the properties associated with the joined room on the server for requested user.","unlockProperties");


AddStringParam("Message", "message to be send","");
AddAction(12,af_none,"Send Chat","4-Send Data","Sends a chat message to the room (or lobby) in which the user is currently joined.","Sends a chat message to the room (or lobby) in which the user is currently joined.","sendChat");
AddStringParam("ToUser", "The recipient of the private chat","");
AddStringParam("Message", "message to be send","");
AddAction(13,af_none,"Send Private Chat","4-Send Data","Sends a private message to the given user if its online. The sender and receiver don’t need to be in the same room or lobby.","Sends a private message to the given user if its online. The sender and receiver don’t need to be in the same room or lobby.","sendPrivateChat");
AddAnyTypeParam("update", "binary data to be send");
AddAction(14,af_none,"Send Update","4-Send Data","Sends a byte array update message to room in which the user is currently joined","Sends a byte array update message to room in which the user is currently joined","sendUpdate");

AddNumberParam("RoomID", "The Room ID");
AddAction(15,af_none,"Get Live Room Info","5-Get Data","Retrieves the live information of the given room from the server","Retrieves the live information of the given room from the server","getLiveRoomInfo");
AddStringParam("Username", "User who's information is requested","");
AddAction(16,af_none,"Get Live User Info","5-Get Data","Retrieves the live information of the user from the server","Retrieves the live information of the user from the server","getLiveUserInfo");
AddAction(17,af_none,"Get Live Lobby Info","5-Get Data","Retrieves the live information of the Lobby from the server","Retrieves the live information of the Lobby from the server","getLiveLobbyInfo");
AddAction(20,af_none,"Get Online Users","5-Get Data","Retrieves usernames of all the users connected (online) to the server.","Retrieves usernames of all the users connected (online) to the server.","getOnlineUsers");
AddAction(21,af_none,"Get All Rooms","5-Get Data","Retrieves the room ids of all the rooms on the server. ","Retrieves the room ids of all the rooms on the server.","getAllRooms");
AddNumberParam("minJoinedUsers", "minimum number of users in room to be joined.");
AddNumberParam("maxJoinedUsers", "maximum number of users in room to be joined");
AddAction(22,af_none,"Get Rooms In Range","5-Get Data","Retrieves information of the rooms that contain currently have joined users in the range given. ","Retrieves information of the rooms that contain currently have joined users in the range given.","getRoomsInRange");
AddStringParam("Properties", "properties of the room to be joined","");
AddAction(23,af_none,"Get Room With Properties","5-Get Data","Retrieves information of the room that contain properties which match with the given properties.","Retrieves information of the room that contain properties which match with the given properties.","getRoomsWithProperties");

AddStringParam("Username", "Whom custom data has to be update","");
AddAnyTypeParam("CustomData", "binary data to be send");
AddAction(18,af_none,"Set Custom User Data","6-Set Data","Updates the custom data associated with the given user on the server (if the given user is online).","Updates the custom data associated with the given user on the server (if the given user is online).","setCustomUserData");
AddNumberParam("RoomID", "The Room ID");
AddAnyTypeParam("customRoomData","custom data that will be set for the room");
AddAction(19,af_none,"Set Room Data","6-Set Data","Updates the custom data associated with the given room on the server","Updates the custom data associated with the given room on the server","SetCustomRoomData");

AddAnyTypeParam("moveData","any  meta  data  associated  with  the  move  ");
AddAction(124,af_none,"Send Move Data","6-User","Sends a move to the server for the joined turn based room.","Sends a move to the server for the joined turn based room.","sendMove");
AddAction(28,af_none,"Get Move History","6-User","Sends a get move history request to the server.","Sends a get move history request to the server.","getMoveHistory");

// 28
////////////////////////////////////////
// Expressions

// AddExpression(id,			// any positive integer to uniquely identify this expression
//				 flags,			// (see docs) ef_none, ef_deprecated, ef_return_number, ef_return_string,
//								// ef_return_any, ef_variadic_parameters (one return flag must be specified)
//				 list_name,		// currently ignored, but set as if appeared in event wizard
//				 category,		// category in expressions panel
//				 exp_name,		// the expression name after the dot, e.g. "foo" for "myobject.foo" - also the runtime function name
//				 description);	// description in expressions panel


AddExpression(1, ef_return_string, "", "Connection", "ConnectionStatus", "The error message in 'On error'.");



AddExpression(3,  ef_return_number, "Get Lobby Result",       "Lobby", "GetLiveLobbyInfo_Result",      "The Result of the lobby.");
AddExpression(4,  ef_return_string, "Get Lobby Owner",        "Lobby", "GetLiveLobbyInfo_Owner",       "The owner  of the lobby.");
AddExpression(5,  ef_return_string, "Get Lobby ID",           "Lobby", "GetLiveLobbyInfo_IdLobby",     "The id 	   of the lobby.");
AddExpression(6,  ef_return_string, "Get Lobby Name",         "Lobby", "GetLiveLobbyInfo_Name",        "The name   of the lobby.");
AddExpression(7,  ef_return_number, "Get Lobby Max Users",    "Lobby", "GetLiveLobbyInfo_MaxUsers",    "The max users allowed in the lobby.");
AddExpression(8,  ef_return_string, "Get Lobby Custom Data",  "Lobby", "GetLiveLobbyInfo_Data",    	   "The Custom Data 	  in the lobby.");
AddStringParam("Key", "Propreties Key");
AddExpression(9,  ef_return_string, "Get Lobby Properties ",  "Lobby", "GetLiveLobbyInfo_Properties",  "The Properties of the lobby");
AddNumberParam("Index", "Array Index of the element to get");
AddExpression(10, ef_return_string, "Get Lobby User",        "Lobby", "GetLiveLobbyInfo_Users",        "The name of the user who is currently joined in the lobby.");
AddExpression(11, ef_return_number, "Get Lobby Users Number", "Lobby", "GetLiveLobbyInfo_UsersNumber", "The number of users who are currently joined in the lobby.");

AddExpression(12,  ef_return_number, "Get Join		  Lobby Result",       "Lobby", "JoinLobby_Result",      	 "The Result of JoinLobby.");
AddExpression(13,  ef_return_number, "Get Leave		  Lobby Result",       "Lobby", "LeaveLobby_Result",      	 "The Result of LeaveLobby.");
AddExpression(14,  ef_return_number, "Get Subscribe	  Lobby Result",       "Lobby", "SubscribeLobby_Result",     "The Result of SubscribeLobby.");
AddExpression(15,  ef_return_number, "Get Unsubscribe Lobby Result",       "Lobby", "UnsubscribeLobby_Result",  "The Result of UnscubscribeLobby.");

AddExpression(45, ef_return_string, "Get Received the User",       "Lobby", "UserJoinedLobby_User", 	 	 "The ID of the User");
AddExpression(71, ef_return_string, "Get Received the Name",       "Lobby", "UserJoinedLobby_Name", 	 	 "The Name of the lobby");
AddExpression(72, ef_return_string, "Get Received the Owner",      "Lobby", "UserJoinedLobby_Owner", 	 	 "The Owner of the lobby");
AddExpression(73, ef_return_string, "Get Received the LobbyId",    "Lobby", "UserJoinedLobby_LobbyId", 	 	 "The LobbyId of the lobby");
AddExpression(74, ef_return_string, "Get Received the IsPrimary",  "Lobby", "UserJoinedLobby_IsPrimary", 	 "The IsPrimary of the lobby");
AddExpression(75, ef_return_number, "Get Received the MaxUsers",   "Lobby", "UserJoinedLobby_MaxUsers", 	 "The MaxUsers of the lobby");
AddExpression(76, ef_return_number, "Get Received the Result",     "Lobby", "UserJoinedLobby_Result", 	 	 "The Result of the lobby");
AddExpression(77, ef_return_string, "Get Received the User",       "Lobby", "UserLeftLobby_User", 	 	 "The ID of the User");
AddExpression(78, ef_return_string, "Get Received the Name",       "Lobby", "UserLeftLobby_Name", 	 	 "The Name of the lobby");
AddExpression(79, ef_return_string, "Get Received the Owner",      "Lobby", "UserLeftLobby_Owner", 	 	 "The Owner of the lobby");
AddExpression(80, ef_return_string, "Get Received the LobbyId",    "Lobby", "UserLeftLobby_LobbyId", 	 	 "The LobbyId of the lobby");
AddExpression(81, ef_return_string, "Get Received the IsPrimary",  "Lobby", "UserLeftLobby_IsPrimary", 	 "The IsPrimary of the lobby");
AddExpression(82, ef_return_number, "Get Received the MaxUsers",   "Lobby", "UserLeftLobby_MaxUsers", 	 "The MaxUsers of the lobby");
AddExpression(83, ef_return_number, "Get Received the Result",     "Lobby", "UserLeftLobby_Result", 	 	 "The Result of the lobby");


AddNumberParam("Index", "Array Index of the element to get");
AddExpression(20,  ef_return_string,    "Get Received RoomsIdsArray", 			  "Rooms", "GetAllRooms_RoomsIdsArray",       "The room IDs array");
AddExpression(21,  ef_return_number, "Get Received length of RoomsIdsArray",  "Rooms", "GetAllRooms_RoomsIdsArrayLength", "The length of the room IDs array");
AddExpression(100, ef_return_number, "Get Received result og getAllRooms",    "Rooms", "GetAllRooms_Result", 			  "The Result of GetAllRooms");

AddExpression(101, ef_return_number, "Get Received the Result 		   of the specefic room", "Rooms", "GetLiveRoomInfo_Result",      "The Result 	of the room");
AddExpression(22,  ef_return_string, "Get Received the ID 			   of the specefic room", "Rooms", "GetLiveRoomInfo_RoomId",      "The ID 		of the room");
AddExpression(103, ef_return_number, "Get Received the MaxUsers 	   of the specefic room", "Rooms", "GetLiveRoomInfo_MaxUsers",    "The MaxUsers of the room");
AddExpression(23,  ef_return_string, "Get Received the Name 		   of the specefic room", "Rooms", "GetLiveRoomInfo_Name", 		  "The Name 	of the room");
AddExpression(24,  ef_return_string, "Get Received the Owner 		   of the specefic room", "Rooms", "GetLiveRoomInfo_Owner", 	  "The Owner 	of the room");
AddNumberParam("Index", "Array Index of the element to get");
AddExpression(41,  ef_return_string, "Get Received joined users 	   of the specefic room", "Rooms", "GetLiveRoomInfo_Users", 	  "Joined users 			of the room");
AddExpression(42,  ef_return_number, "Get Received joined users number of the specefic room", "Rooms", "GetLiveRoomInfo_UsersLength", "Number of joined users	of the room");
AddExpression(102, ef_return_string, "Get Received data	   			   of the specefic room", "Rooms", "GetLiveRoomInfo_Data", 	 	  "Data 					of the room");
AddStringParam("Key", "Propreties Key");
AddExpression(25,  ef_return_string, "Get Received the Properties 	   of the specefic room", "Rooms", "GetLiveRoomInfo_Properties",  "The Properties of the room");

AddExpression(104, ef_return_number,  "Get Received the Result 	   of GetMatchedRooms", "Rooms", "GetMatchedRooms_Result",      	   "The Result 		of GetMatchedRooms");
AddNumberParam("Index", "Array Index of the element to get");
AddExpression(105,  ef_return_string, "Get Received RoomIDs	  	   of GetMatchedRooms", "Rooms", "GetMatchedRooms_RoomIdsArray", 	   "RoomID			of GetMatchedRooms");
AddExpression(106,  ef_return_number, "Get Received RoomIDs number of GetMatchedRooms", "Rooms", "GetMatchedRooms_RoomIdsArrayLength", "Number of Rooms	of GetMatchedRooms");

AddExpression(107, ef_return_string, "Get Received RoomIDs	  SetCustomRoomData", "Rooms", "SetCustomRoomData_RoomId", "RoomID	   of SetCustomRoomData");
AddExpression(108, ef_return_number, "Get Received the Result SetCustomRoomData", "Rooms", "SetCustomRoomData_Result", "The Result of SetCustomRoomData");
AddExpression(109, ef_return_string, "Get Received RoomIDs	  UpdateProperty", "Rooms", "UpdateProperty_RoomId", "RoomID	 of UpdateProperty");
AddExpression(110, ef_return_number, "Get Received the Result UpdateProperty", "Rooms", "UpdateProperty_Result", "The Result of UpdateProperty");
AddExpression(111, ef_return_number, "Get Received the Result LockProperties",   "Rooms", "LockProperties_Result",   "The Result of LockProperties");
AddExpression(112, ef_return_number, "Get Received the Result UnlockProperties", "Rooms", "UnlockProperties_Result", "The Result of UnlockProperties");

AddExpression(29, ef_return_string, "Get Received the RoomId    of the room where I joined", 	   "Rooms", "JoinRoom_RoomId",   		"The RoomId   of the joined 	  room");
AddExpression(26, ef_return_number, "Get Received the Result    of the room where I joined", 	   "Rooms", "JoinRoom_Result",   		"The Result   of the joined    	  room");
AddExpression(87, ef_return_string, "Get Received the RoomId    of the room where I left",		   "Rooms", "LeaveRoom_RoomId",  		"The RoomId   of the left   	  room");
AddExpression(89, ef_return_number, "Get Received the Result    of the room where I left",	 	   "Rooms", "LeaveRoom_Result",  	    "The Result   of the left   	  room");
AddExpression(92, ef_return_string, "Get Received the RoomId    of the room where I Subscribed",   "Rooms", "SubscribeRoom_RoomId",  	"The RoomId   of the Subscribed   room");
AddExpression(94, ef_return_number, "Get Received the Result    of the room where I Subscribed",   "Rooms", "SubscribeRoom_Result",     "The Result   of the Subscribed   room");
AddExpression(97, ef_return_string, "Get Received the RoomId    of the room where I Unsubscribed", "Rooms", "UnsubscribeRoom_RoomId",   "The RoomId   of the Unsubscribed room");
AddExpression(99, ef_return_number, "Get Received the Result    of the room where I Unsubscribed", "Rooms", "UnsubscribeRoom_Result",   "The Result   of the Unsubscribed room");

AddExpression(113, ef_return_string, "Get Received RoomIDs	  CreateRoom", "Rooms", "CreateRoom_RoomId", "RoomID	 of CreateRoom");
AddExpression(114, ef_return_number, "Get Received the Result CreateRoom", "Rooms", "CreateRoom_Result", "The Result of CreateRoom");
AddExpression(115, ef_return_string, "Get Received RoomIDs	  DeleteRoom", "Rooms", "DeleteRoom_RoomId", "RoomID	 of DeleteRoom");
AddExpression(116, ef_return_number, "Get Received the Result DeleteRoom", "Rooms", "DeleteRoom_Result", "The Result of DeleteRoom");


AddExpression(43, ef_return_string, "Get Received the last created room id",       "Rooms", "RoomCreated_RoomId", 	 "The ID of the created Room");
AddExpression(63, ef_return_string, "Get Received the last created room Name",     "Rooms", "RoomCreated_Name", 	 "The Name of the created Room");
AddExpression(64, ef_return_string, "Get Received the last created room Owner",    "Rooms", "RoomCreated_Owner", 	 "The Owner of the created Room");
AddExpression(65, ef_return_number, "Get Received the last created room MaxUsers", "Rooms", "RoomCreated_MaxUsers",  "The MaxUsers of the created Room");
AddExpression(66, ef_return_number, "Get Received the last created room Result",   "Rooms", "RoomCreated_Result", 	 "The Result of the created Room");

AddExpression(44, ef_return_string, "Get Received the last destroyed room id", 		 "Rooms", "RoomDestroyed_RoomId", 	 "The ID of the Destroyed Room");
AddExpression(67, ef_return_string, "Get Received the last destroyed room Name",     "Rooms", "RoomDestroyed_Name", 	 "The Name of the Destroyed Room");
AddExpression(68, ef_return_string, "Get Received the last destroyed room Owner",    "Rooms", "RoomDestroyed_Owner", 	 "The Owner of the Destroyed Room");
AddExpression(69, ef_return_number, "Get Received the last destroyed room MaxUsers", "Rooms", "RoomDestroyed_MaxUsers",  "The MaxUsers of the Destroyed Room");
AddExpression(70, ef_return_number, "Get Received the last destroyed room Result",   "Rooms", "RoomDestroyed_Result", 	 "The Result of the Destroyed Room");

AddExpression(51, ef_return_number, "Get Received Joined Room Max Users", "Rooms", "UserJoinedRoom_MaxUsers", 	 "Joined Room Max Users");
AddExpression(52, ef_return_string, "Get Received Joined Room Name",      "Rooms", "UserJoinedRoom_Name", 	     "Joined Room Name");
AddExpression(53, ef_return_string, "Get Received Joined Room Owner",     "Rooms", "UserJoinedRoom_Owner", 	     "Joined Room Owner");
AddExpression(54, ef_return_number, "Get Received Joined Room Result",    "Rooms", "UserJoinedRoom_Result", 	 "Joined Room Result");
AddExpression(55, ef_return_string, "Get Received Joined Room Id",        "Rooms", "UserJoinedRoom_RoomId", 	 "Joined Room Id");
AddExpression(61, ef_return_string, "Get Received Joined Room User",      "Rooms", "UserJoinedRoom_User", 	 	 "Joined Room User");
AddExpression(56, ef_return_number, "Get Received Left Room Max Users",   "Rooms", "UserLeftRoom_MaxUsers", 	 "Left Room Max Users");
AddExpression(57, ef_return_string, "Get Received Left Room Name",        "Rooms", "UserLeftRoom_Name", 	     "Left Room Name");
AddExpression(58, ef_return_string, "Get Received Left Room Owner",       "Rooms", "UserLeftRoom_Owner", 	     "Left Room Owner");
AddExpression(59, ef_return_number, "Get Received Left Room Result",      "Rooms", "UserLeftRoom_Result", 	     "Left Room Result");
AddExpression(60, ef_return_string, "Get Received Left Room Id",          "Rooms", "UserLeftRoom_RoomId", 	     "Left Room Id");
AddExpression(62, ef_return_string, "Get Received Left Room User",     	  "Rooms", "UserLeftRoom_User", 	 	 "Left Room User");



AddNumberParam("Index", "Array Index of the element to get");
AddExpression(31, ef_return_string, "Get Received the username", 				 "Users", "GetOnlineUsers_Usernames",        "The username");
AddExpression(32, ef_return_number, "Get Received the usernames array length",   "Users", "GetOnlineUsers_UsernamesLength",  "The length of the usernames array");
AddExpression(33, ef_return_string, "Get Last user location id",         		 "Users", "GetLiveUserInfo_LocationId", 	   "The location ID of the user");
AddExpression(34, ef_return_string, "Get Last user Name",         				 "Users", "GetLiveUserInfo_Name", 		   "The Name of the user");
AddExpression(35, ef_return_string, "Get Last user Custom data",         		 "Users", "GetLiveUserInfo_CustomData", 	   "The custom data of the user");
AddExpression(36, ef_return_string, "Get Last user islobby",         			 "Users", "GetLiveUserInfo_IsLobby", 	 	   "The islobby of the user");
AddExpression(2,  ef_return_number, "Get OnlineUsers Result",         			 "Users", "GetOnlineUsers_Result", 	 	   "The GetOnlineUsers Result");
AddExpression(117,ef_return_number, "Get LiveUserInfo Result",         			 "Users", "GetLiveUserInfo_Result", 	 	   "The LiveUserInfo Result");
AddExpression(118,ef_return_number, "Get SetCustomUserData Result",         	 "Users", "SetCustomUserData_Result", 	   "The SetCustomUserData Result");


AddExpression(37, ef_return_string, "Get Last chat sender name",         		 "Users", "ChatReceived_Sender", 	 "The Name of the chat sender");
AddExpression(38, ef_return_string, "Get Last chat sender message",         	 "Users", "ChatReceived_Message",  "The Message of the chat sender");
AddExpression(39, ef_return_string, "Get Last chat sender Islocation Lobby",     "Users", "ChatReceived_IsLocationLobby",  "The is location lobby of the chat sender");
AddExpression(47, ef_return_string, "Get Received the private sender username",  "Users", "PrivateChatReceived_Sender",        "The sender username");
AddExpression(48, ef_return_string, "Get Received the private sender message ",  "Users", "PrivateChatReceived_Message",       "The sender message");

AddStringParam("Index", "Array Index of the element to get");
AddExpression(50, ef_return_string, "Get Received the Update Peers", 			 "Users", "UpdatePeersReceived",       "The result of update message");

AddExpression(119, ef_return_number, "Get SendChat        result",   "Users", "SendChat_Result", 		 "The result of SendChat");
AddExpression(120, ef_return_number, "Get SendPrivateChat result",   "Users", "SendPrivateChat_Result",  "The result of SendPrivateChat");
AddExpression(121, ef_return_number, "Get SendUpdate      result",   "Users", "SendUpdate_Result", 		 "The result of SendUpdate");
AddExpression(122, ef_return_number, "Get SendMove        result",   "Users", "SendMove_Result", 		 "The result of SendMove");

AddStringParam("Index", "Array Index of the element to get");
AddExpression(123, ef_return_string, "Get MoveCompleted Data",     "Users", "MoveCompleted_Data", 		 	 "The MoveCompleted Data");
AddExpression(124, ef_return_string, "Get MoveCompleted NextTurn", "Users", "MoveCompleted_NextTurn", 		 "The MoveCompleted getNextTurn");
AddExpression(125, ef_return_string, "Get MoveCompleted	RoomId",   "Users", "MoveCompleted_RoomId", 		 "The MoveCompleted RoomId");
AddExpression(126, ef_return_string, "Get MoveCompleted	Sender",   "Users", "MoveCompleted_Sender", 		 "The MoveCompleted Sender");


//exps 126
////////////////////////////////////////
ACESDone();

////////////////////////////////////////
// Array of property grid properties for this plugin
// new cr.Property(ept_integer,		name,	initial_value,	description)		// an integer value
// new cr.Property(ept_float,		name,	initial_value,	description)		// a float value
// new cr.Property(ept_text,		name,	initial_value,	description)		// a string
// new cr.Property(ept_color,		name,	initial_value,	description)		// a color dropdown
// new cr.Property(ept_font,		name,	"Arial,-16", 	description)		// a font with the given face name and size
// new cr.Property(ept_combo,		name,	"Item 1",		description, "Item 1|Item 2|Item 3")	// a dropdown list (initial_value is string of initially selected item)
// new cr.Property(ept_link,		name,	link_text,		description, "firstonly")		// has no associated value; simply calls "OnPropertyChanged" on click

var property_list = [
	new cr.Property(ept_integer, 	"My property",		77,		"An example property.")
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
		
	// Plugin-specific variables
	// this.myValue = 0...
}

// Called when inserted via Insert Object Dialog for the first time
IDEInstance.prototype.OnInserted = function()
{
}

// Called when double clicked in layout
IDEInstance.prototype.OnDoubleClicked = function()
{
}

// Called after a property has been changed in the properties bar
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}

// For rendered objects to load fonts or textures
IDEInstance.prototype.OnRendererInit = function(renderer)
{
}

// Called to draw self in the editor if a layout object
IDEInstance.prototype.Draw = function(renderer)
{
}

// For rendered objects to release fonts or textures
IDEInstance.prototype.OnRendererReleased = function(renderer)
{
}