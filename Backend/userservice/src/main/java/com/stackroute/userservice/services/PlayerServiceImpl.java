package com.stackroute.userservice.services;

import com.stackroute.userservice.model.Player;
import com.stackroute.userservice.model.PlayerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;


@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Player addOrUpdate(Player player) {
        Query query = Query.query(Criteria.where("playerId").is(player.getPlayerId()));
        Player one = mongoTemplate.findOne(query, Player.class);
        if (one != null) {
            one.modify(player);
            return mongoTemplate.save(one);
        }
        return mongoTemplate.insert(player);
    }

    @Override
    public List<Player> recommend(Integer size) {
        List<Player> all = mongoTemplate.findAll(Player.class);
        Collections.shuffle(all);
        if (size > 0 && size < all.size()) {
            return all.subList(0, size);
        }
        return all;
    }

    @Override
    public PlayerResponse getRemotePlayerResponse() {
        String url = "https://api.cricapi.com/v1/players?apikey=bb1861a3-6be3-4894-b8ac-b83b9183899c";
        ResponseEntity<PlayerResponse> forEntity = restTemplate.getForEntity(url, PlayerResponse.class);
        return forEntity.getBody();
    }
}
