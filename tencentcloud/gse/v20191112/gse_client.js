/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const GameProperty = models.GameProperty;
const UpdateGameServerSessionResponse = models.UpdateGameServerSessionResponse;
const DescribeGameServerSessionsResponse = models.DescribeGameServerSessionsResponse;
const GetInstanceAccessResponse = models.GetInstanceAccessResponse;
const JoinGameServerSessionRequest = models.JoinGameServerSessionRequest;
const DescribePlayerSessionsResponse = models.DescribePlayerSessionsResponse;
const PlayerLatency = models.PlayerLatency;
const StopGameServerSessionPlacementRequest = models.StopGameServerSessionPlacementRequest;
const GetInstanceAccessRequest = models.GetInstanceAccessRequest;
const DescribeGameServerSessionsRequest = models.DescribeGameServerSessionsRequest;
const UpdateGameServerSessionRequest = models.UpdateGameServerSessionRequest;
const DescribePlayerSessionsRequest = models.DescribePlayerSessionsRequest;
const StartGameServerSessionPlacementResponse = models.StartGameServerSessionPlacementResponse;
const Credentials = models.Credentials;
const GetGameServerSessionLogUrlRequest = models.GetGameServerSessionLogUrlRequest;
const CreateGameServerSessionResponse = models.CreateGameServerSessionResponse;
const DescribeGameServerSessionDetailsResponse = models.DescribeGameServerSessionDetailsResponse;
const JoinGameServerSessionResponse = models.JoinGameServerSessionResponse;
const DesiredPlayerSession = models.DesiredPlayerSession;
const SearchGameServerSessionsResponse = models.SearchGameServerSessionsResponse;
const DescribeGameServerSessionPlacementRequest = models.DescribeGameServerSessionPlacementRequest;
const PlacedPlayerSession = models.PlacedPlayerSession;
const GameServerSessionPlacement = models.GameServerSessionPlacement;
const PlayerSession = models.PlayerSession;
const CreateGameServerSessionRequest = models.CreateGameServerSessionRequest;
const GetGameServerSessionLogUrlResponse = models.GetGameServerSessionLogUrlResponse;
const GameServerSessionDetail = models.GameServerSessionDetail;
const DescribeGameServerSessionDetailsRequest = models.DescribeGameServerSessionDetailsRequest;
const StartGameServerSessionPlacementRequest = models.StartGameServerSessionPlacementRequest;
const GameServerSession = models.GameServerSession;
const DescribeGameServerSessionPlacementResponse = models.DescribeGameServerSessionPlacementResponse;
const SearchGameServerSessionsRequest = models.SearchGameServerSessionsRequest;
const StopGameServerSessionPlacementResponse = models.StopGameServerSessionPlacementResponse;
const InstanceAccess = models.InstanceAccess;


/**
 * gse client
 * @class
 */
class GseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gse.tencentcloudapi.com", "2019-11-12", credential, region, profile);
    }
    
    /**
     * This API is used to update a game server session.
     * @param {UpdateGameServerSessionRequest} req
     * @param {function(string, UpdateGameServerSessionResponse):void} cb
     * @public
     */
    UpdateGameServerSession(req, cb) {
        let resp = new UpdateGameServerSessionResponse();
        this.request("UpdateGameServerSession", req, resp, cb);
    }

    /**
     * This API is used to stop placing a game server session.
     * @param {StopGameServerSessionPlacementRequest} req
     * @param {function(string, StopGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StopGameServerSessionPlacement(req, cb) {
        let resp = new StopGameServerSessionPlacementResponse();
        this.request("StopGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * This API is used to query the list of game server sessions.
     * @param {DescribeGameServerSessionsRequest} req
     * @param {function(string, DescribeGameServerSessionsResponse):void} cb
     * @public
     */
    DescribeGameServerSessions(req, cb) {
        let resp = new DescribeGameServerSessionsResponse();
        this.request("DescribeGameServerSessions", req, resp, cb);
    }

    /**
     * This API is used to get the credentials required for instance login.
     * @param {GetInstanceAccessRequest} req
     * @param {function(string, GetInstanceAccessResponse):void} cb
     * @public
     */
    GetInstanceAccess(req, cb) {
        let resp = new GetInstanceAccessResponse();
        this.request("GetInstanceAccess", req, resp, cb);
    }

    /**
     * This API is used to join a game server session.
     * @param {JoinGameServerSessionRequest} req
     * @param {function(string, JoinGameServerSessionResponse):void} cb
     * @public
     */
    JoinGameServerSession(req, cb) {
        let resp = new JoinGameServerSessionResponse();
        this.request("JoinGameServerSession", req, resp, cb);
    }

    /**
     * This API is used to query the placement of a game server session.
     * @param {DescribeGameServerSessionPlacementRequest} req
     * @param {function(string, DescribeGameServerSessionPlacementResponse):void} cb
     * @public
     */
    DescribeGameServerSessionPlacement(req, cb) {
        let resp = new DescribeGameServerSessionPlacementResponse();
        this.request("DescribeGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * This API is used to query the list of game server session details.
     * @param {DescribeGameServerSessionDetailsRequest} req
     * @param {function(string, DescribeGameServerSessionDetailsResponse):void} cb
     * @public
     */
    DescribeGameServerSessionDetails(req, cb) {
        let resp = new DescribeGameServerSessionDetailsResponse();
        this.request("DescribeGameServerSessionDetails", req, resp, cb);
    }

    /**
     * This API is used to start placing a game server session.
     * @param {StartGameServerSessionPlacementRequest} req
     * @param {function(string, StartGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StartGameServerSessionPlacement(req, cb) {
        let resp = new StartGameServerSessionPlacementResponse();
        this.request("StartGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * This API is used to get the list of player sessions.
     * @param {DescribePlayerSessionsRequest} req
     * @param {function(string, DescribePlayerSessionsResponse):void} cb
     * @public
     */
    DescribePlayerSessions(req, cb) {
        let resp = new DescribePlayerSessionsResponse();
        this.request("DescribePlayerSessions", req, resp, cb);
    }

    /**
     * This API is used to get the log URL of a game server session.
     * @param {GetGameServerSessionLogUrlRequest} req
     * @param {function(string, GetGameServerSessionLogUrlResponse):void} cb
     * @public
     */
    GetGameServerSessionLogUrl(req, cb) {
        let resp = new GetGameServerSessionLogUrlResponse();
        this.request("GetGameServerSessionLogUrl", req, resp, cb);
    }

    /**
     * This API is used to search in the list of game server sessions.
     * @param {SearchGameServerSessionsRequest} req
     * @param {function(string, SearchGameServerSessionsResponse):void} cb
     * @public
     */
    SearchGameServerSessions(req, cb) {
        let resp = new SearchGameServerSessionsResponse();
        this.request("SearchGameServerSessions", req, resp, cb);
    }

    /**
     * This API is used to create a game server session.
     * @param {CreateGameServerSessionRequest} req
     * @param {function(string, CreateGameServerSessionResponse):void} cb
     * @public
     */
    CreateGameServerSession(req, cb) {
        let resp = new CreateGameServerSessionResponse();
        this.request("CreateGameServerSession", req, resp, cb);
    }


}
module.exports = GseClient;
