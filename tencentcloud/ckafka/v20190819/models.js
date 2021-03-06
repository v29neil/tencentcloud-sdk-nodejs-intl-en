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
const AbstractModel = require("../../common/abstract_model");

/**
 * Topic details
 * @class
 */
class TopicDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Number of partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Whether to enable IP authentication whitelist. true: yes, false: no
         * @type {boolean || null}
         */
        this.EnableWhiteList = null;

        /**
         * Number of IPs in IP whitelist
         * @type {number || null}
         */
        this.IpWhiteListCount = null;

        /**
         * COS bucket for data backup: address of the destination COS bucket
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ForwardCosBucket = null;

        /**
         * Status of data backup to COS. 1: not enabled, 0: enabled
         * @type {number || null}
         */
        this.ForwardStatus = null;

        /**
         * Frequency of data backup to COS
         * @type {number || null}
         */
        this.ForwardInterval = null;

        /**
         * Advanced configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Config || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteListCount = 'IpWhiteListCount' in params ? params.IpWhiteListCount : null;
        this.ForwardCosBucket = 'ForwardCosBucket' in params ? params.ForwardCosBucket : null;
        this.ForwardStatus = 'ForwardStatus' in params ? params.ForwardStatus : null;
        this.ForwardInterval = 'ForwardInterval' in params ? params.ForwardInterval : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * DeleteAcl request structure.
 * @class
 */
class DeleteAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID information
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ACL resource type. 0: UNKNOWN, 1: ANY, 2: TOPIC, 3: GROUP, 4: CLUSTER, 5: TRANSACTIONAL_ID. Currently, only `TOPIC` is available, and other fields will be used for future ACLs compatible with open-source Kafka
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * ACL operation mode. 0: UNKNOWN, 1: ANY, 2: ALL, 3: READ, 4: WRITE, 5: CREATE, 6: DELETE, 7: ALTER, 8: DESCRIBE, 9: CLUSTER_ACTION, 10: DESCRIBE_CONFIGS, 11: ALTER_CONFIGS, 12: IDEMPOTEN_WRITE. Currently, CKafka only supports `READ` and `WRITE`, and other values will be used for future ACLs compatible with open-source Kafka
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * Permission type. 0: UNKNOWN, 1: ANY, 2: DENY, 3: ALLOW. Currently, CKafka supports `ALLOW` (equivalent to whitelist), and other fields will be used for future ACLs compatible with open-source Kafka
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * The default value is `*`, which means that any host can access. Currently, CKafka does not support the host as `*`, but the future product based on the open-source Kafka will directly support this
         * @type {string || null}
         */
        this.Host = null;

        /**
         * User list. The default value is `*`, which means that any user can access. The current user can only be one included in the user list
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * Consumer information
 * @class
 */
class GroupInfoMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID generated for consumer in consumer group by coordinator
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * `client.id` information by the client consumer SDK
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * Generally stores client IP address
         * @type {string || null}
         */
        this.ClientHost = null;

        /**
         * Stores the information of partition assigned to this consumer
         * @type {Assignment || null}
         */
        this.Assignment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.ClientHost = 'ClientHost' in params ? params.ClientHost : null;

        if (params.Assignment) {
            let obj = new Assignment();
            obj.deserialize(params.Assignment)
            this.Assignment = obj;
        }

    }
}

/**
 * DeleteUser request structure.
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Partition and offset
 * @class
 */
class PartitionOffset extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition, such as "0" or "1"
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Offset, such as 100
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeACL request structure.
 * @class
 */
class DescribeACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ACL resource type. 0: UNKNOWN, 1: ANY, 2: TOPIC, 3: GROUP, 4: CLUSTER, 5: TRANSACTIONAL_ID. Currently, only `TOPIC` is available, and other fields will be used for future ACLs compatible with open-source Kafka
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Offset position
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Keyword match
         * @type {string || null}
         */
        this.SearchWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DescribeTopicAttributes request structure.
 * @class
 */
class DescribeTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeInstanceAttributes request structure.
 * @class
 */
class DescribeInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * User group entity
 * @class
 */
class ConsumerGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group name
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * Subscribed message entity
         * @type {Array.<SubscribedInfo> || null}
         */
        this.SubscribedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;

        if (params.SubscribedInfo) {
            this.SubscribedInfo = new Array();
            for (let z in params.SubscribedInfo) {
                let obj = new SubscribedInfo();
                obj.deserialize(params.SubscribedInfo[z]);
                this.SubscribedInfo.push(obj);
            }
        }

    }
}

/**
 * Stores the information of partition assigned to this consumer
 * @class
 */
class Assignment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Assignment version information
         * @type {number || null}
         */
        this.Version = null;

        /**
         * Topic information list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupInfoTopics> || null}
         */
        this.Topics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new GroupInfoTopics();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }

    }
}

/**
 * DescribeConsumerGroup response structure.
 * @class
 */
class DescribeConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned consumer group information
         * @type {ConsumerGroupResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ConsumerGroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopic request structure.
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CKafka instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * CKafka topic name
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {InstanceResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new InstanceResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Internal topic object of `GroupInfo`
 * @class
 */
class GroupInfoTopics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of assigned topics
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Information of assigned partition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;

    }
}

/**
 * `TopicResponse` returned uniformly
 * @class
 */
class TopicResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned topic information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Topic> || null}
         */
        this.TopicList = null;

        /**
         * Number of eligible topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new Topic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeInstancesDetail response structure.
 * @class
 */
class DescribeInstancesDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object of instance details
         * @type {InstanceDetailResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new InstanceDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeACL response structure.
 * @class
 */
class DescribeACLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned ACL result set object
         * @type {AclResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new AclResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned result value of operation
 * @class
 */
class JgwOperateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned code. 0: normal, other values: error
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * Success message
         * @type {string || null}
         */
        this.ReturnMessage = null;

        /**
         * Data returned by an operation, which may contain `flowId`, etc.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OperateResponseData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMessage = 'ReturnMessage' in params ? params.ReturnMessage : null;

        if (params.Data) {
            let obj = new OperateResponseData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * Returned topic object
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Note = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * Tag object in instance details
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * `DescribeGroup` response
 * @class
 */
class GroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Count
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * GroupList
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribeGroup> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new DescribeGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }

    }
}

/**
 * DescribeTopicAttributes response structure.
 * @class
 */
class DescribeTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object
         * @type {TopicAttributesResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TopicAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned object for route information
 * @class
 */
class RouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route information list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Route> || null}
         */
        this.Routers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Routers) {
            this.Routers = new Array();
            for (let z in params.Routers) {
                let obj = new Route();
                obj.deserialize(params.Routers[z]);
                this.Routers.push(obj);
            }
        }

    }
}

/**
 * DescribeGroup response structure.
 * @class
 */
class DescribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned results
         * @type {GroupResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new GroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration object for modifying instance attributes
 * @class
 */
class ModifyInstanceAttributesConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Automatic creation. true: enabled, false: not enabled
         * @type {boolean || null}
         */
        this.AutoCreateTopicEnable = null;

        /**
         * Optional. If `auto.create.topic.enable` is set to `true` and this value is not set, 3 will be used by default
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * If `auto.create.topic.enable` is set to `true` but this value is not set, 2 will be used by default
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicEnable = 'AutoCreateTopicEnable' in params ? params.AutoCreateTopicEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * Data structure returned by operation
 * @class
 */
class OperateResponseData extends  AbstractModel {
    constructor(){
        super();

        /**
         * FlowId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CreateUser response structure.
 * @class
 */
class CreateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAttributes response structure.
 * @class
 */
class ModifyInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePartition response structure.
 * @class
 */
class CreatePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result set
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUser response structure.
 * @class
 */
class DeleteUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAcl request structure.
 * @class
 */
class CreateAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID information
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ACL resource type. 0: UNKNOWN, 1: ANY, 2: TOPIC, 3: GROUP, 4: CLUSTER, 5: TRANSACTIONAL_ID. Currently, only `TOPIC` is available, and other fields will be used for future ACLs compatible with open-source Kafka
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * ACL operation mode. 0: UNKNOWN, 1: ANY, 2: ALL, 3: READ, 4: WRITE, 5: CREATE, 6: DELETE, 7: ALTER, 8: DESCRIBE, 9: CLUSTER_ACTION, 10: DESCRIBE_CONFIGS, 11: ALTER_CONFIGS
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * Permission type. 0: UNKNOWN, 1: ANY, 2: DENY, 3: ALLOW. Currently, CKafka supports `ALLOW` (equivalent to whitelist), and other fields will be used for future ACLs compatible with open-source Kafka
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * The default value is `*`, which means that any host can access. Currently, CKafka does not support the host as `*`, but the future product based on the open-source Kafka will directly support this
         * @type {string || null}
         */
        this.Host = null;

        /**
         * User list. The default value is `*`, which means that any user can access. The current user can only be one included in the user list
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * DescribeAppInfo request structure.
 * @class
 */
class DescribeAppInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset position
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of users to be queried in this request. Maximum value: 50. Default value: 50
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeTopic response structure.
 * @class
 */
class DescribeTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TopicResult || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TopicResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned consumer group result entity
 * @class
 */
class ConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible consumer groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Topic list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicList = null;

        /**
         * Consumer group list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumerGroup> || null}
         */
        this.GroupList = null;

        /**
         * Total number of partitions
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalPartition = null;

        /**
         * List of monitored partitions
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Partition> || null}
         */
        this.PartitionListForMonitor = null;

        /**
         * Total number of topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalTopic = null;

        /**
         * List of monitored topics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicListForMonitor = null;

        /**
         * List of monitored groups
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Group> || null}
         */
        this.GroupListForMonitor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new ConsumerGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.TotalPartition = 'TotalPartition' in params ? params.TotalPartition : null;

        if (params.PartitionListForMonitor) {
            this.PartitionListForMonitor = new Array();
            for (let z in params.PartitionListForMonitor) {
                let obj = new Partition();
                obj.deserialize(params.PartitionListForMonitor[z]);
                this.PartitionListForMonitor.push(obj);
            }
        }
        this.TotalTopic = 'TotalTopic' in params ? params.TotalTopic : null;

        if (params.TopicListForMonitor) {
            this.TopicListForMonitor = new Array();
            for (let z in params.TopicListForMonitor) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicListForMonitor[z]);
                this.TopicListForMonitor.push(obj);
            }
        }

        if (params.GroupListForMonitor) {
            this.GroupListForMonitor = new Array();
            for (let z in params.GroupListForMonitor) {
                let obj = new Group();
                obj.deserialize(params.GroupListForMonitor[z]);
                this.GroupListForMonitor.push(obj);
            }
        }

    }
}

/**
 * CreateTopicIpWhiteList response structure.
 * @class
 */
class CreateTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of deleting topic IP whitelist
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Consumer group topic object
 * @class
 */
class GroupOffsetTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Array of partitions in the topic, where each element is a JSON object
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupOffsetPartition> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new GroupOffsetPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

    }
}

/**
 * ModifyGroupOffsets response structure.
 * @class
 */
class ModifyGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Partition entity
 * @class
 */
class Partition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * CreateAcl response structure.
 * @class
 */
class CreateAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopic request structure.
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`)
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of partitions, which should be greater than 0
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * Number of replicas, which cannot be higher than the number of brokers. Maximum value: 3
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * IP whitelist switch. 1: enabled, 0: disabled. Default value: 0
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * IP whitelist list for quota limit, which is required if `enableWhileList` is 1
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * Log cleanup policy, which is `delete` by default. `delete`: logs will be deleted by save time; `compact`: logs will be compressed by key; `compact, delete`: logs will be compressed by key and deleted by save time.
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * Topic remarks string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`)
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Default value: 1
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * Whether to allow an unsynced replica to be elected as leader. false: no, true: yes. Default value: false
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Message retention period in ms, which is optional. The current minimum value is 60,000 ms
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment rolling duration in ms. The current minimum value is 3,600,000 ms
         * @type {number || null}
         */
        this.SegmentMs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;

    }
}

/**
 * DeleteAcl response structure.
 * @class
 */
class DeleteAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoute request structure.
 * @class
 */
class DescribeRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Instance configuration entity
 * @class
 */
class InstanceConfigDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to create topics automatically
         * @type {boolean || null}
         */
        this.AutoCreateTopicsEnable = null;

        /**
         * Number of partitions
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * Default replication factor
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicsEnable = 'AutoCreateTopicsEnable' in params ? params.AutoCreateTopicsEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * Returned user entity
 * @class
 */
class UserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of eligible users
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<User> || null}
         */
        this.Users = null;

        /**
         * Total number of eligible users
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeGroupInfo request structure.
 * @class
 */
class DescribeGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka consumer group (`Consumer-group`), which is an array in the format of `GroupList.0=xxx&GroupList.1=yyy`.
         * @type {Array.<string> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupList = 'GroupList' in params ? params.GroupList : null;

    }
}

/**
 * DescribeGroupInfo response structure.
 * @class
 */
class DescribeGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupInfoResponse> || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new GroupInfoResponse();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUser response structure.
 * @class
 */
class DescribeUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result list
         * @type {UserResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new UserResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `AppId` query result
 * @class
 */
class AppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible `AppId`
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of eligible `AppId`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AppIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AppIdList = 'AppIdList' in params ? params.AppIdList : null;

    }
}

/**
 * DescribeTopic request structure.
 * @class
 */
class DescribeTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter by `topicName`. Fuzzy search is supported
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreatePartition request structure.
 * @class
 */
class CreatePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of topic partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * Group entity
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * DescribeAppInfo response structure.
 * @class
 */
class DescribeAppInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned list of eligible `AppId`
         * @type {AppIdResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new AppIdResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Set of returned ACL results
 * @class
 */
class AclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible data entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * ACL list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Acl> || null}
         */
        this.AclList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AclList) {
            this.AclList = new Array();
            for (let z in params.AclList) {
                let obj = new Acl();
                obj.deserialize(params.AclList[z]);
                this.AclList.push(obj);
            }
        }

    }
}

/**
 * Instance object
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance status. 0: creating, 1: running, 2: deleting, 5: isolated, -1: creation failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether it is an open-source instance. true: yes, false: no
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IfCommunity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IfCommunity = 'IfCommunity' in params ? params.IfCommunity : null;

    }
}

/**
 * DescribeInstanceAttributes response structure.
 * @class
 */
class DescribeInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object of instance attributes
         * @type {InstanceAttributesResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new InstanceAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned topic details entity
 * @class
 */
class TopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned topic details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TopicDetail> || null}
         */
        this.TopicList = null;

        /**
         * Number of all eligible topic details
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new TopicDetail();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * Advanced configuration object
 * @class
 */
class Config extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message retention period
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Retention = null;

        /**
         * Minimum number of sync replications
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * Log cleanup mode. Default value: delete.
delete: logs will be deleted by save time; compact: logs will be compressed by key; compact, delete: logs will be compressed by key and deleted by save time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * Segment rolling duration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 0: false, 1: true.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Number of bytes for segment rolling
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SegmentBytes = null;

        /**
         * Maximum number of message bytes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Retention = 'Retention' in params ? params.Retention : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.SegmentBytes = 'SegmentBytes' in params ? params.SegmentBytes : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;

    }
}

/**
 * ModifyPassword request structure.
 * @class
 */
class ModifyPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Current user password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * New user password
         * @type {string || null}
         */
        this.PasswordNew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.PasswordNew = 'PasswordNew' in params ? params.PasswordNew : null;

    }
}

/**
 * ModifyInstanceAttributes request structure.
 * @class
 */
class ModifyInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Maximum retention period in minutes for instance log, which can be up to 30 days. 0 indicates not to enable the log retention period policy
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * Instance name string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance configuration
         * @type {ModifyInstanceAttributesConfig || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.Config) {
            let obj = new ModifyInstanceAttributesConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * ModifyTopicAttributes response structure.
 * @class
 */
class ModifyTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result set
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumerGroup request structure.
 * @class
 */
class DescribeConsumerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CKafka instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name of the group to be queried, which is optional.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Name of the corresponding topic in the group to be queried, which is optional. If this parameter is specified but `group` is not specified, this parameter will be ignored.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Number of results to be returned in this request
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset position
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Virtual IP entity
 * @class
 */
class VipEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Virtual IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Virtual port
         * @type {string || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * Consumer group topic object
 * @class
 */
class ConsumerGroupTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * User entity
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last updated time
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Group offset partition object
 * @class
 */
class GroupOffsetPartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic `partitionId`
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Offset position submitted by consumer
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Metadata can be passed in for other purposes when the consumer submits messages. Currently, this parameter is usually an empty string
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * Error code
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Latest offset of current partition
         * @type {number || null}
         */
        this.LogEndOffset = null;

        /**
         * Number of unconsumed messages
         * @type {number || null}
         */
        this.Lag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.LogEndOffset = 'LogEndOffset' in params ? params.LogEndOffset : null;
        this.Lag = 'Lag' in params ? params.Lag : null;

    }
}

/**
 * DeleteTopic response structure.
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result set
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * (Filter) filter by instance name. Fuzzy search is supported
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * (Filter) instance status. 0: creating, 1: running, 2: deleting. If this parameter is left empty, all instances will be returned by default
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag key match.
         * @type {string || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * Returned result object of instance attributes
 * @class
 */
class InstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * VIP list information of access point
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * Virtual IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Virtual port
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * Instance status. 0: creating, 1: running, 2: deleting
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance bandwidth in Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * AZ
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * VPC ID. If this parameter is empty, it means the basic network
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID. If this parameter is empty, it means the basic network
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance health status. 1: healthy, 2: alarmed, 3: exceptional
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * Instance health information. Currently, the disk utilization is displayed with a maximum length of 256
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Message retention period in minutes
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * Configuration for automatic topic creation. If this field is empty, it means that automatic creation is not enabled
         * @type {InstanceConfigDO || null}
         */
        this.Config = null;

        /**
         * Number of remaining creatable partitions
         * @type {number || null}
         */
        this.RemainderPartitions = null;

        /**
         * Number of remaining creatable topics
         * @type {number || null}
         */
        this.RemainderTopics = null;

        /**
         * Number of partitions already created
         * @type {number || null}
         */
        this.CreatedPartitions = null;

        /**
         * Number of topics already created
         * @type {number || null}
         */
        this.CreatedTopics = null;

        /**
         * Tag array
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Expiration time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * Cross-AZ
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * Kafka version information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Maximum number of groups
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * Sale type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cvm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;

        if (params.Config) {
            let obj = new InstanceConfigDO();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.RemainderPartitions = 'RemainderPartitions' in params ? params.RemainderPartitions : null;
        this.RemainderTopics = 'RemainderTopics' in params ? params.RemainderTopics : null;
        this.CreatedPartitions = 'CreatedPartitions' in params ? params.CreatedPartitions : null;
        this.CreatedTopics = 'CreatedTopics' in params ? params.CreatedTopics : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;

    }
}

/**
 * DescribeGroup request structure.
 * @class
 */
class DescribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Search keyword
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results to be returned
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Query filter
>Key-value pair filters for conditional filtering queries, such as filter ID, name, and status
> * If there are multiple `Filter`, the relationship among them is logical `AND`.
> * If there are multiple `Values` in the same `Filter`, the relationship among them is logical `OR`.
>

 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value of field.
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Returned result of consumer group offset
 * @class
 */
class GroupOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of partitions in the topic, where each element is a JSON object
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupOffsetTopic> || null}
         */
        this.TopicList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new GroupOffsetTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

    }
}

/**
 * CreateUser request structure.
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.Name = null;

        /**
         * User password
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DeleteTopicIpWhiteList response structure.
 * @class
 */
class DeleteTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of deleting topic IP whitelist
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesDetail request structure.
 * @class
 */
class DescribeInstancesDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * (Filter) filter by instance name. Fuzzy search is supported
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * (Filter) instance status. 0: creating, 1: running, 2: deleting. If this parameter is left empty, all instances will be returned by default
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag key match.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Filter
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyPassword response structure.
 * @class
 */
class ModifyPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned result of instance details
 * @class
 */
class InstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of eligible instance details
         * @type {Array.<InstanceDetail> || null}
         */
        this.InstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }

    }
}

/**
 * `GroupInfo` response data entity
 * @class
 */
class GroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code. 0: success
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * Group status description (common valid values: Empty, Stable, Dead):
Dead: the consumer group does not exist
Empty: there are currently no consumer subscriptions in the consumer group
PreparingRebalance: the consumer group is currently in `rebalance` state
CompletingRebalance: the consumer group is currently in `rebalance` state
Stable: each consumer in the consumer group has joined and is in stable state
         * @type {string || null}
         */
        this.State = null;

        /**
         * The type of protocol selected by the consumer group, which is `consumer` for common consumers. However, some systems use their own protocols; for example, the protocol used by kafka-connect is `connect`. Only with the standard `consumer` protocol can this API get to know the specific assigning method and parse the specific partition assignment
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * Consumer partition assignment algorithm, such as `range` (which is the default value for the Kafka consumer SDK), `roundrobin`, and `sticky`
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * This array contains information only if `state` is `Stable` and `protocol_type` is `consumer`
         * @type {Array.<GroupInfoMember> || null}
         */
        this.Members = null;

        /**
         * Kafka consumer group
         * @type {string || null}
         */
        this.Group = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.State = 'State' in params ? params.State : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new GroupInfoMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.Group = 'Group' in params ? params.Group : null;

    }
}

/**
 * Returned topic attributes result entity
 * @class
 */
class TopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Topic remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Note = null;

        /**
         * Number of partitions
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * IP whitelist switch. 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * IP whitelist list
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * Topic configuration array
         * @type {Config || null}
         */
        this.Config = null;

        /**
         * Partition details
         * @type {Array.<TopicPartitionDO> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TopicPartitionDO();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

    }
}

/**
 * Aggregated returned result of instance status
 * @class
 */
class InstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of eligible instances
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Instance> || null}
         */
        this.InstanceList = null;

        /**
         * Total number of eligible results
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new Instance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * `DescribeGroup` response entity
 * @class
 */
class DescribeGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * groupId
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Protocol used by the group.
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Group = 'Group' in params ? params.Group : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Partition details
 * @class
 */
class TopicPartitionDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Leader running status
         * @type {number || null}
         */
        this.LeaderStatus = null;

        /**
         * ISR quantity
         * @type {number || null}
         */
        this.IsrNum = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.ReplicaNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.LeaderStatus = 'LeaderStatus' in params ? params.LeaderStatus : null;
        this.IsrNum = 'IsrNum' in params ? params.IsrNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;

    }
}

/**
 * Return for topic creation
 * @class
 */
class CreateTopicResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeRoute response structure.
 * @class
 */
class DescribeRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result set of route information
         * @type {RouteResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new RouteResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopicDetail request structure.
 * @class
 */
class DescribeTopicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * (Filter) filter by `topicName`. Fuzzy search is supported
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset. If this parameter is left empty, 0 will be used by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. If this parameter is left empty, 10 will be used by default. The maximum value is 20. This value must be greater than 0
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeGroupOffsets response structure.
 * @class
 */
class DescribeGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result object
         * @type {GroupOffsetResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new GroupOffsetResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGroupOffsets request structure.
 * @class
 */
class ModifyGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kafka instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka consumer group
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Offset resetting policy. Meanings of the input parameters: 0: equivalent to the `shift-by` parameter, which indicates to shift the offset forward or backward by the value of the `shift`. 1: equivalent to `by-duration`, `to-datetime`, `to-earliest`, or `to-latest`, which indicates to move the offset to the specified timestamp. 2: equivalent to `to-offset`, which indicates to move the offset to the specified offset position
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Indicates the topics to be reset. If this parameter is left empty, all topics will be reset
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * When `strategy` is 0, this field is required. If it is above zero, the offset will be shifted backward by the value of the `shift`. If it is below zero, the offset will be shifted forward by the value of the `shift`. After a correct reset, the new offset should be (old_offset + shift). Note that if the new offset is smaller than the `earliest` parameter of the partition, it will be set to `earliest`, and if it is greater than the `latest` parameter of the partition, it will be set to `latest`
         * @type {number || null}
         */
        this.Shift = null;

        /**
         * Unit: ms. When `strategy` is 1, this field is required, where -2 indicates to reset the offset to the initial position, -1 indicates to reset to the latest position (equivalent to emptying), and other values represent the specified time, i.e., the offset of the topic at the specified time will be obtained and then reset. Note that if there is no message at the specified time, the last offset will be obtained
         * @type {number || null}
         */
        this.ShiftTimestamp = null;

        /**
         * Position of the offset that needs to be reset. When `strategy` is 2, this field is required
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.Shift = 'Shift' in params ? params.Shift : null;
        this.ShiftTimestamp = 'ShiftTimestamp' in params ? params.ShiftTimestamp : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateTopicIpWhiteList request structure.
 * @class
 */
class CreateTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * IP whitelist list
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * Route entity object
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance connection method
0: PLAINTEXT (plaintext method, which does not carry user information and is supported for legacy versions and Community Edition)
1: SASL_PLAINTEXT (plaintext method, which authenticates the login through SASL before data start and is supported only for Community Edition)
2: SSL (SSL-encrypted communication, which does not carry user information and is supported for legacy versions and Community Edition)
3: SASL_SSL (SSL-encrypted communication, which authenticates the login through SASL before data start and is supported only for Community Edition)
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * Route ID
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * VIP network type (1: public network TGW; 2: classic network; 3: VPC; 4: Tencent Cloud-supported environment (generally used for internal instances); 5: SSL public network access; 6: BM VPC)
         * @type {number || null}
         */
        this.VipType = null;

        /**
         * Virtual IP list
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * Domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain name port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DomainPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.VipType = 'VipType' in params ? params.VipType : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainPort = 'DomainPort' in params ? params.DomainPort : null;

    }
}

/**
 * ACL object entity
 * @class
 */
class Acl extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL resource type. 0: UNKNOWN, 1: ANY, 2: TOPIC, 3: GROUP, 4: CLUSTER, 5: TRANSACTIONAL_ID. Currently, only `TOPIC` is available,
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Resource name, which is related to `resourceType`. For example, if `resourceType` is `TOPIC`, this field indicates the topic name; if `resourceType` is `GROUP`, this field indicates the group name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * User list. The default value is `User:*`, which means that any user can access. The current user can only be one included in the user list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Principal = null;

        /**
         * The default value is `*`, which means that any host can access. Currently, CKafka does not support the host as `*`, but the future product based on the open-source Kafka will directly support this
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * ACL operation mode. 0: UNKNOWN, 1: ANY, 2: ALL, 3: READ, 4: WRITE, 5: CREATE, 6: DELETE, 7: ALTER, 8: DESCRIBE, 9: CLUSTER_ACTION, 10: DESCRIBE_CONFIGS, 11: ALTER_CONFIGS, 12: IDEMPOTEN_WRITE
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * Permission type. 0: UNKNOWN, 1: ANY, 2: DENY, 3: ALLOW
         * @type {number || null}
         */
        this.PermissionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Principal = 'Principal' in params ? params.Principal : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;

    }
}

/**
 * ModifyTopicAttributes request structure.
 * @class
 */
class ModifyTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic remarks string of up to 64 characters, which must begin with a letter and can contain letters, digits, and dashes (`-`).
         * @type {string || null}
         */
        this.Note = null;

        /**
         * IP whitelist switch. 1: enabled, 0: disabled.
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * Default value: 1.
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 0: false, 1: true. Default value: 0.
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Message retention period in ms. The current minimum value is 60,000 ms.
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment rolling duration in ms. The current minimum value is 86,400,000 ms.
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * Maximum topic message length in bytes. The maximum value is 8,388,608 bytes (i.e., 8 MB).
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * Message deletion policy. Valid values: delete, compact
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;

    }
}

/**
 * CreateTopic response structure.
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned creation result
         * @type {CreateTopicResp || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new CreateTopicResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopicIpWhiteList request structure.
 * @class
 */
class DeleteTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * IP whitelist list
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * DescribeGroupOffsets request structure.
 * @class
 */
class DescribeGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Filter) filter by instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka consumer group
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Array of the names of topics subscribed to by a group. If there is no such array, this parameter means the information of all topics in the specified group
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * Fuzzy match by `topicName`
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset position of this query. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results to be returned in this request. Default value: 50. Maximum value: 50
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeUser request structure.
 * @class
 */
class DescribeUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter by name
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned in this request
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Instance details
 * @class
 */
class InstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance VIP information
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Instance port information
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * Virtual IP list
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * Instance status. 0: creating, 1: running, 2: deleting, 5: isolated, -1: creation failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance bandwidth in Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * vpcId. If this parameter is empty, it means the basic network
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether to renew the instance automatically, which is an int-type enumerated value. 1: yes, 2: no
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * Instance status, which is an int-type value. 0: healthy, 1: alarmed, 2: exceptional
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * Instance status information
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * Instance creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Instance expiration time
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * Whether it is an internal customer. 1: yes
         * @type {number || null}
         */
        this.IsInternal = null;

        /**
         * Number of topics
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * Tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Kafka version information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Cross-AZ
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * CKafka sale type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cvm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsInternal = 'IsInternal' in params ? params.IsInternal : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;

    }
}

/**
 * DescribeTopicDetail response structure.
 * @class
 */
class DescribeTopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned entity of topic details
         * @type {TopicDetailResponse || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TopicDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Subscribed message entity
 * @class
 */
class SubscribedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscribed topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Subscribed partition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Partition = null;

        /**
         * Partition offset information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PartitionOffset> || null}
         */
        this.PartitionOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.PartitionOffset) {
            this.PartitionOffset = new Array();
            for (let z in params.PartitionOffset) {
                let obj = new PartitionOffset();
                obj.deserialize(params.PartitionOffset[z]);
                this.PartitionOffset.push(obj);
            }
        }

    }
}

module.exports = {
    TopicDetail: TopicDetail,
    DeleteAclRequest: DeleteAclRequest,
    GroupInfoMember: GroupInfoMember,
    DeleteUserRequest: DeleteUserRequest,
    PartitionOffset: PartitionOffset,
    DescribeACLRequest: DescribeACLRequest,
    DescribeTopicAttributesRequest: DescribeTopicAttributesRequest,
    DescribeInstanceAttributesRequest: DescribeInstanceAttributesRequest,
    ConsumerGroup: ConsumerGroup,
    Assignment: Assignment,
    DescribeConsumerGroupResponse: DescribeConsumerGroupResponse,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    GroupInfoTopics: GroupInfoTopics,
    TopicResult: TopicResult,
    DescribeInstancesDetailResponse: DescribeInstancesDetailResponse,
    DescribeACLResponse: DescribeACLResponse,
    JgwOperateResponse: JgwOperateResponse,
    Topic: Topic,
    Tag: Tag,
    GroupResponse: GroupResponse,
    DescribeTopicAttributesResponse: DescribeTopicAttributesResponse,
    RouteResponse: RouteResponse,
    DescribeGroupResponse: DescribeGroupResponse,
    ModifyInstanceAttributesConfig: ModifyInstanceAttributesConfig,
    OperateResponseData: OperateResponseData,
    CreateUserResponse: CreateUserResponse,
    ModifyInstanceAttributesResponse: ModifyInstanceAttributesResponse,
    CreatePartitionResponse: CreatePartitionResponse,
    DeleteUserResponse: DeleteUserResponse,
    CreateAclRequest: CreateAclRequest,
    DescribeAppInfoRequest: DescribeAppInfoRequest,
    DescribeTopicResponse: DescribeTopicResponse,
    ConsumerGroupResponse: ConsumerGroupResponse,
    CreateTopicIpWhiteListResponse: CreateTopicIpWhiteListResponse,
    GroupOffsetTopic: GroupOffsetTopic,
    ModifyGroupOffsetsResponse: ModifyGroupOffsetsResponse,
    Partition: Partition,
    CreateAclResponse: CreateAclResponse,
    CreateTopicRequest: CreateTopicRequest,
    DeleteAclResponse: DeleteAclResponse,
    DescribeRouteRequest: DescribeRouteRequest,
    InstanceConfigDO: InstanceConfigDO,
    UserResponse: UserResponse,
    DescribeGroupInfoRequest: DescribeGroupInfoRequest,
    DescribeGroupInfoResponse: DescribeGroupInfoResponse,
    DescribeUserResponse: DescribeUserResponse,
    AppIdResponse: AppIdResponse,
    DescribeTopicRequest: DescribeTopicRequest,
    CreatePartitionRequest: CreatePartitionRequest,
    Group: Group,
    DescribeAppInfoResponse: DescribeAppInfoResponse,
    AclResponse: AclResponse,
    Instance: Instance,
    DescribeInstanceAttributesResponse: DescribeInstanceAttributesResponse,
    TopicDetailResponse: TopicDetailResponse,
    Config: Config,
    ModifyPasswordRequest: ModifyPasswordRequest,
    ModifyInstanceAttributesRequest: ModifyInstanceAttributesRequest,
    ModifyTopicAttributesResponse: ModifyTopicAttributesResponse,
    DescribeConsumerGroupRequest: DescribeConsumerGroupRequest,
    VipEntity: VipEntity,
    ConsumerGroupTopic: ConsumerGroupTopic,
    User: User,
    GroupOffsetPartition: GroupOffsetPartition,
    DeleteTopicResponse: DeleteTopicResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    InstanceAttributesResponse: InstanceAttributesResponse,
    DescribeGroupRequest: DescribeGroupRequest,
    Filter: Filter,
    GroupOffsetResponse: GroupOffsetResponse,
    CreateUserRequest: CreateUserRequest,
    DeleteTopicIpWhiteListResponse: DeleteTopicIpWhiteListResponse,
    DescribeInstancesDetailRequest: DescribeInstancesDetailRequest,
    ModifyPasswordResponse: ModifyPasswordResponse,
    InstanceDetailResponse: InstanceDetailResponse,
    GroupInfoResponse: GroupInfoResponse,
    TopicAttributesResponse: TopicAttributesResponse,
    InstanceResponse: InstanceResponse,
    DescribeGroup: DescribeGroup,
    TopicPartitionDO: TopicPartitionDO,
    CreateTopicResp: CreateTopicResp,
    DescribeRouteResponse: DescribeRouteResponse,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DescribeGroupOffsetsResponse: DescribeGroupOffsetsResponse,
    ModifyGroupOffsetsRequest: ModifyGroupOffsetsRequest,
    CreateTopicIpWhiteListRequest: CreateTopicIpWhiteListRequest,
    Route: Route,
    Acl: Acl,
    ModifyTopicAttributesRequest: ModifyTopicAttributesRequest,
    CreateTopicResponse: CreateTopicResponse,
    DeleteTopicIpWhiteListRequest: DeleteTopicIpWhiteListRequest,
    DescribeGroupOffsetsRequest: DescribeGroupOffsetsRequest,
    DescribeUserRequest: DescribeUserRequest,
    InstanceDetail: InstanceDetail,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    SubscribedInfo: SubscribedInfo,

}
