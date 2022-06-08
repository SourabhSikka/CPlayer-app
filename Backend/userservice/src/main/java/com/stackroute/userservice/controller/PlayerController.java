package com.stackroute.userservice.controller;

import com.stackroute.userservice.config.PlayerTask;
import com.stackroute.userservice.model.Player;
import com.stackroute.userservice.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/player")
@CrossOrigin(origins = "*")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @Autowired
    private PlayerTask playerTask;

    @GetMapping("/recommend/{size}")
    public ResponseEntity<?> recommend(@PathVariable Integer size){
        List<Player> recommend = playerService.recommend(size);
        return ResponseEntity.ok(recommend);
    }

    @PostMapping("/sync")
    public ResponseEntity<?> sync(){
        playerTask.execute();
        return ResponseEntity.ok(null);
    }
}
