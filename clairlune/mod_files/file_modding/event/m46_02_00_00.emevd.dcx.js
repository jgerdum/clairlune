// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(46020000, 46021950, 1, 0, 0, 0);
    EnableAssetInvunerability(46020412);
    EnableAssetInvunerability(46020413);
    InitializeEvent(0, 46021000, 0);
    InitializeEvent(0, 46021001, 0);
    InitializeEvent(0, 46021101, 0);
    InitializeEvent(0, 46022200, 0);
    InitializeEvent(0, 46022210, 0);
    InitializeEvent(0, 46022220, 0);
    InitializeEvent(0, 46022260, 0);
    InitializeEvent(0, 46029000, 0);
    InitializeEvent(0, 46029001, 0);
    InitializeEvent(0, 46029002, 0);
    InitializeEvent(0, 46029003, 0);
    InitializeEvent(0, 46029004, 0);
    InitializeEvent(0, 46029005, 0);
    InitializeEvent(0, 46029006, 0);
    InitializeEvent(0, 46029007, 0);
    InitializeEvent(0, 46029010, 0);
    InitializeEvent(0, 46029011, 0);
    InitializeEvent(0, 46029012, 0);
    InitializeEvent(0, 46029013, 0);
    InitializeEvent(0, 46029014, 0);
    InitializeEvent(0, 46029015, 0);
    InitializeEvent(0, 46029120, 0);
    InitializeEvent(0, 46029121, 0);
    InitializeEvent(0, 46029500, 0);
    GotoIf(L0, HasArenaMatchType(ArenaMatchType.Duel, false));
    GotoIf(L0, HasArenaMatchType(ArenaMatchType.Duel, true));
    GotoIf(L1, HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, false));
    GotoIf(L1, HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, true));
    GotoIf(L2, HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, false));
    GotoIf(L2, HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, true));
    GotoIf(L3, HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, false));
    GotoIf(L3, HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, true));
    GotoIf(L4, HasArenaMatchType(ArenaMatchType.OneVersusOne, false));
    GotoIf(L4, HasArenaMatchType(ArenaMatchType.OneVersusOne, true));
    GotoIf(L5, HasArenaMatchType(ArenaMatchType.TwoVersusTwo, false));
    GotoIf(L5, HasArenaMatchType(ArenaMatchType.TwoVersusTwo, true));
    GotoIf(L6, HasArenaMatchType(ArenaMatchType.ThreeVersusThree, false));
    GotoIf(L6, HasArenaMatchType(ArenaMatchType.ThreeVersusThree, true));
L0:
    InitializeCommonEvent(0, 98005100, 0, 46022300, 88000, 88020);
    InitializeCommonEvent(0, 98005110, 46022300);
    InitializeCommonEvent(0, 98005121, 46022300);
    EndEvent();
L1:
    InitializeCommonEvent(0, 98005100, 1, 46022300, 88001, 88021);
    Goto(L9);
L2:
    InitializeCommonEvent(0, 98005100, 2, 46022300, 88002, 88022);
    Goto(L9);
L3:
    InitializeCommonEvent(0, 98005100, 3, 46022300, 88003, 88023);
    Goto(L9);
L4:
    InitializeCommonEvent(0, 98005100, 4, 46022300, 88004, 88024);
    Goto(L9);
L5:
    InitializeCommonEvent(0, 98005100, 5, 46022300, 88005, 88025);
    Goto(L9);
L6:
    InitializeCommonEvent(0, 98005100, 6, 46022300, 88006, 88026);
    Goto(L9);
L9:
    InitializeCommonEvent(0, 98005120, 46022300);
});

$Event(46022200, Default, function() {
    DisableNetworkSync();
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, false));
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, true));
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.OneVersusOne, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoVersusTwo, false));
    EndIf(HasArenaMatchType(ArenaMatchType.ThreeVersusThree, false));
    WaitFor(PlayerRespawnedInArena());
    SetEventFlagID(46020110, OFF);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(46022210, Default, function() {
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.OneVersusOne, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoVersusTwo, false));
    EndIf(HasArenaMatchType(ArenaMatchType.ThreeVersusThree, false));
    DisableNetworkSync();
    WaitFor(CharacterDead(10000));
    SetSpEffect(10000, 202);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(46022220, Default, function() {
    DisableNetworkSync();
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, true));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, true));
    EndIf(HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, true));
    EndIf(HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, true));
    EndIf(HasArenaMatchType(ArenaMatchType.OneVersusOne, true));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoVersusTwo, true));
    EndIf(HasArenaMatchType(ArenaMatchType.ThreeVersusThree, true));
    SetEventFlagID(46020110, ON);
    DisableCharacter(46020110);
});

$Event(46022260, Restart, function() {
    EndIf(!PlayerInMap(46, 2, 0, 0));
    SetPlayerPositionDisplay(Disabled, true, 60, 44, 45, 0, -64, 0, -64);
});

$Event(46029000, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029000, 200, 806870);
    WaitFor(ActionButtonInArea(90001, 46029000));
    RotateCharacter(10000, 46029000, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 1, 0, 0, 46019100, 460100);
    RestartEvent();
});

$Event(46029001, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029001, 200, 806870);
    WaitFor(ActionButtonInArea(90001, 46029001));
    RotateCharacter(10000, 46029001, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 1, 0, 0, 46019100, 460100);
    RestartEvent();
});

$Event(46029002, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029002, 200, 806870);
    WaitFor(ActionButtonInArea(90002, 46029002));
    RotateCharacter(10000, 46029002, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 0, 0, 0, 46009100, 460000);
    RestartEvent();
});

$Event(46029003, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029003, 200, 806870);
    WaitFor(ActionButtonInArea(90002, 46029003));
    RotateCharacter(10000, 46029003, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 0, 0, 0, 46009100, 460000);
    RestartEvent();
});

$Event(46029004, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029004, 200, 806870);
    WaitFor(ActionButtonInArea(90003, 46029004));
    RotateCharacter(10000, 46029004, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 3, 0, 0, 46039100, 460300);
    RestartEvent();
});

$Event(46029005, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029005, 200, 806870);
    WaitFor(ActionButtonInArea(90003, 46029005));
    RotateCharacter(10000, 46029005, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 3, 0, 0, 46039100, 460300);
    RestartEvent();
});

$Event(46029006, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029006, 200, 806870);
    WaitFor(ActionButtonInArea(90004, 46029006));
    RotateCharacter(10000, 46029006, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 4, 0, 0, 46049100, 460400);
    RestartEvent();
});

$Event(46029007, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029007, 200, 806870);
    WaitFor(ActionButtonInArea(90004, 46029007));
    RotateCharacter(10000, 46029007, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(46, 4, 0, 0, 46049100, 460400);
    RestartEvent();
});

$Event(46029010, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029010, 200, 806870);
    WaitFor(ActionButtonInArea(90011, 46029010));
    RotateCharacter(10000, 46029010, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 46029101, -1, 10000);
    SetSpEffect(10000, 9651);
    ForceAnimationPlayback(10000, 63010, false, false, false);
    RestartEvent();
});

$Event(46029011, Restart, function() {
    DisableNetworkSync();
    CreateAssetfollowingSFX(46029011, 200, 806870);
    WaitFor(ActionButtonInArea(90011, 46029011));
    RotateCharacter(10000, 46029011, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 46029102, -1, 10000);
    SetSpEffect(10000, 9651);
    ForceAnimationPlayback(10000, 63010, false, false, false);
    RestartEvent();
});

$Event(46029012, Restart, function() {
    CreateAssetfollowingSFX(46021660, 200, 806870);
    WaitFor(CharacterHasSpEffect(10000, 46020200));
    ShootBullet(46029200, 46029201, -1, 46005000, 0, 0, 0);
    ClearSpEffect(10000, 46020200);
    RestartEvent();
});

$Event(46029013, Restart, function() {
    CreateAssetfollowingSFX(46029013, 200, 806870);
    WaitFor(ActionButtonInArea(90010, 46029013));
    RotateCharacter(10000, 46029013, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(8);
    ShootBullet(46029200, 46029201, -1, 46005000, 0, 0, 0);
    RestartEvent();
});

$Event(46029014, Restart, function() {
    CreateAssetfollowingSFX(46021660, 200, 806870);
    WaitFor(CharacterHasSpEffect(10000, 46020201));
    ShootBullet(46029202, 46029203, -1, 46005000, 0, 0, 0);
    ClearSpEffect(10000, 46020201);
    RestartEvent();
});

$Event(46029015, Restart, function() {
    CreateAssetfollowingSFX(46029015, 200, 806870);
    WaitFor(ActionButtonInArea(90010, 46029015));
    RotateCharacter(10000, 46029015, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(8);
    ShootBullet(46029202, 46029203, -1, 46005000, 0, 0, 0);
    RestartEvent();
});

$Event(46029120, Restart, function() {
    DisableNetworkSync();
    WaitFor(InArea(10000, 46029120) && !(InArea(10000, 46029130) && !InArea(10000, 46029131)));
    ClearSpEffect(10000, 46000000);
    SetSpEffect(10000, 46020210);
    SetSpEffect(10000, 46020211);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(46029121, Restart, function() {
    DisableNetworkSync();
    WaitFor(InArea(10000, 46029130));
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 46029100, -1, 10000);
    SetSpEffect(10000, 9651);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


