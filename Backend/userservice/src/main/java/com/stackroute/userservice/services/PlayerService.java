package com.stackroute.userservice.services;

import com.stackroute.userservice.model.Player;
import com.stackroute.userservice.model.PlayerResponse;

import java.util.List;


public interface PlayerService {

    Player addOrUpdate(Player player);

    List<Player> recommend(Integer size);

    PlayerResponse getRemotePlayerResponse();
}
