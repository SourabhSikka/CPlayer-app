package com.stackroute.userservice.config;

import com.stackroute.userservice.model.Player;
import com.stackroute.userservice.model.PlayerDto;
import com.stackroute.userservice.model.PlayerResponse;
import com.stackroute.userservice.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Component
public class PlayerTask {

    @Autowired
    private PlayerService playerService;

    public void execute() {
        PlayerResponse remotePlayerResponse = playerService.getRemotePlayerResponse();
        List<PlayerDto> data = remotePlayerResponse.getData();
        List<Player> collect = data.parallelStream().map(PlayerDto::of).collect(Collectors.toList());
        collect.parallelStream().forEach(playerService::addOrUpdate);
    }

}
