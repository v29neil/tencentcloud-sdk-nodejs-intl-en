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
 * DescribeSyncJobs response structure.
 * @class
 */
class DescribeSyncJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of task details
         * @type {Array.<SyncJobInfo> || null}
         */
        this.JobList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.JobList) {
            this.JobList = new Array();
            for (let z in params.JobList) {
                let obj = new SyncJobInfo();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrateJobs response structure.
 * @class
 */
class DescribeMigrateJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of task details
         * @type {Array.<MigrateJobInfo> || null}
         */
        this.JobList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.JobList) {
            this.JobList = new Array();
            for (let z in params.JobList) {
                let obj = new MigrateJobInfo();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes the specific migration process
 * @class
 */
class MigrateDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of steps
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * Current step
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * Overall progress, such as:
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Progress of the current step, such as:
         * @type {string || null}
         */
        this.CurrentStepProgress = null;

        /**
         * Master/slave lag in MB, which is valid during incremental sync and currently supported by TencentDB for Redis and MySQL
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * Master/slave lag in seconds, which is valid during incremental sync and currently supported by TencentDB for MySQL
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * Step information
         * @type {Array.<MigrateStepDetailInfo> || null}
         */
        this.StepInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepAll = 'StepAll' in params ? params.StepAll : null;
        this.StepNow = 'StepNow' in params ? params.StepNow : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CurrentStepProgress = 'CurrentStepProgress' in params ? params.CurrentStepProgress : null;
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new MigrateStepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteMigrateJob response structure.
 * @class
 */
class DeleteMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMigrateCheckJob request structure.
 * @class
 */
class CreateMigrateCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * ModifySubscribeVipVport request structure.
 * @class
 */
class ModifySubscribeVipVportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Specified destination subnet. If this parameter is passed in, `DstIp` must be in the destination subnet
         * @type {string || null}
         */
        this.DstUniqSubnetId = null;

        /**
         * Target IP. Either this field or `DstPort` must be passed in
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * Target port. Value range: [1025-65535]
         * @type {number || null}
         */
        this.DstPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.DstUniqSubnetId = 'DstUniqSubnetId' in params ? params.DstUniqSubnetId : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;

    }
}

/**
 * Instance information of disaster recovery sync, which records the information of the master instance or disaster recovery instance
 * @class
 */
class SyncInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Short instance ID
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
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifySubscribeName response structure.
 * @class
 */
class ModifySubscribeNameResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSyncJob response structure.
 * @class
 */
class CreateSyncJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrateCheckJob request structure.
 * @class
 */
class DescribeMigrateCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * IsolateSubscribe response structure.
 * @class
 */
class IsolateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubscribeObjects response structure.
 * @class
 */
class ModifySubscribeObjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartSyncJob request structure.
 * @class
 */
class StartSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * CreateMigrateJob request structure.
 * @class
 */
class CreateMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Migration task configuration options
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Source instance database type, which currently supports MySQL, Redis, MongoDB, PostgreSQL, MariaDB, and Percona. For more information on the supported types in a specific region, see the migration task creation page in the console.
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance access type. Valid values: extranet (public network), cvm (CVM-based self-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance), ccn (CCN instance)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information, which is correlated with the migration task type
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type, which currently supports MySQL, Redis, MongoDB, PostgreSQL, MariaDB, and Percona. For more information on the supported types in a specific region, see the migration task creation page in the console.
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target instance access type, which currently only supports cdb (TencentDB instance)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Destination instance information
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * Information of the source table to be migrated, which is described in JSON string format. It is required if MigrateOption.MigrateObject is 2 (migrating the specified table).
For databases with a database-table structure:
[{Database:db1,Table:[table1,table2]},{Database:db2}]
For databases with a database-schema-table structure:
[{Database:db1,Schema:s1
Table:[table1,table2]},{Database:db1,Schema:s2
Table:[table1,table2]},{Database:db2,Schema:s1
Table:[table1,table2]},{Database:db3},{Database:db4
Schema:s1}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * Subscription instance information
 * @class
 */
class SubscribeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Data subscription instance name
         * @type {string || null}
         */
        this.SubscribeName = null;

        /**
         * ID of channel bound to data subscription instance
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Name of product bound to data subscription instance
         * @type {string || null}
         */
        this.Product = null;

        /**
         * ID of database instance bound to data subscription instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Status of database instance bound to data subscription instance
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * Data subscription instance configuration status. Valid values: unconfigure, configuring, configured
         * @type {string || null}
         */
        this.SubsStatus = null;

        /**
         * Last modified time
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Isolation time
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Deactivation time
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Last modified consumption starting time point. If it has never been modified, this field is 0
         * @type {string || null}
         */
        this.ConsumeStartTime = null;

        /**
         * Data subscription instance region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Billing mode. 1: pay-as-you-go
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * Data subscription instance VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Data subscription instance Vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Unique ID of the VPC where the data subscription instance VIP resides
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Unique ID of the subnet where the data subscription instance VIP resides
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Data subscription instance status. Valid values: creating, normal, isolating, isolated, offlining, offline
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Timestamp of the last message confirmed by the SDK. If the SDK keeps consuming, this field can also be used as the current consumption time point of the SDK
         * @type {string || null}
         */
        this.SdkConsumedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.SubsStatus = 'SubsStatus' in params ? params.SubsStatus : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.ConsumeStartTime = 'ConsumeStartTime' in params ? params.ConsumeStartTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SdkConsumedTime = 'SdkConsumedTime' in params ? params.SdkConsumedTime : null;

    }
}

/**
 * ModifySubscribeName request structure.
 * @class
 */
class ModifySubscribeNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Data subscription instance name. Length limit: [1,60]
         * @type {string || null}
         */
        this.SubscribeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;

    }
}

/**
 * Disaster recovery sync task information
 * @class
 */
class SyncJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Disaster recovery task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Task sync
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * Source access type
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source data type
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance information
         * @type {SyncInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Disaster recovery access type
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Disaster recovery data type
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Disaster recovery instance information
         * @type {SyncInstanceInfo || null}
         */
        this.DstInfo = null;

        /**
         * Task information
         * @type {SyncDetailInfo || null}
         */
        this.Detail = null;

        /**
         * Task status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Table to be migrated
         * @type {string || null}
         */
        this.DatabaseInfo = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;

        if (params.SrcInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;

        if (params.DstInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.Detail) {
            let obj = new SyncDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifySubscribeConsumeTime response structure.
 * @class
 */
class ModifySubscribeConsumeTimeResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Target instance information, which is correlated with the migration task type
 * @class
 */
class DstInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target instance ID, such as cdb-jd92ijd8
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target instance region, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Target instance VIP, which has been disused and does not need to be entered
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Target instance Vport, which has been disused and does not need to be entered
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Only valid for MySQL currently. For instance-level migration, the value range is: 1 (read-only), 0 (read/write)
         * @type {number || null}
         */
        this.ReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;

    }
}

/**
 * DescribeSubscribeConf response structure.
 * @class
 */
class DescribeSubscribeConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Subscription instance name
         * @type {string || null}
         */
        this.SubscribeName = null;

        /**
         * Subscription channel
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Subscribed database type
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Subscribed instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Subscribed instance status. Valid values: running, offline, isolate
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * Subscription instance status. Valid values: unconfigure, configuring, configured
         * @type {string || null}
         */
        this.SubsStatus = null;

        /**
         * Subscription instance lifecycle status. Valid values: normal, isolating, isolated, offlining
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Subscription instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Subscription instance isolation time
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * Subscription instance expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Subscription instance deactivation time
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Consumption starting time point of subscription instance
         * @type {string || null}
         */
        this.ConsumeStartTime = null;

        /**
         * Subscription instance billing mode. 1: hourly billing
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * Subscription channel VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Subscription channel port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Subscription channel `VpcId`
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subscription channel `SubnetId`
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Current SDK consumption time point
         * @type {string || null}
         */
        this.SdkConsumedTime = null;

        /**
         * Subscription SDK IP address
         * @type {string || null}
         */
        this.SdkHost = null;

        /**
         * Subscription object type. 0: full instance subscription, 1: DDL data subscription, 2: DML structure subscription, 3: DDL data subscription + DML structure subscription
         * @type {number || null}
         */
        this.SubscribeObjectType = null;

        /**
         * Subscription object, which is an empty array if `SubscribeObjectType` is 0
         * @type {Array.<SubscribeObject> || null}
         */
        this.SubscribeObjects = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

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
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.SubsStatus = 'SubsStatus' in params ? params.SubsStatus : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.ConsumeStartTime = 'ConsumeStartTime' in params ? params.ConsumeStartTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.SdkConsumedTime = 'SdkConsumedTime' in params ? params.SdkConsumedTime : null;
        this.SdkHost = 'SdkHost' in params ? params.SdkHost : null;
        this.SubscribeObjectType = 'SubscribeObjectType' in params ? params.SubscribeObjectType : null;

        if (params.SubscribeObjects) {
            this.SubscribeObjects = new Array();
            for (let z in params.SubscribeObjects) {
                let obj = new SubscribeObject();
                obj.deserialize(params.SubscribeObjects[z]);
                this.SubscribeObjects.push(obj);
            }
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAsyncRequestInfo request structure.
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * Source instance information
 * @class
 */
class SrcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alibaba Cloud AccessKey, which is applicable if the source database is an Alibaba Cloud ApsaraDB for RDS 5.6 instance
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * Instance IP address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Instance port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance username
         * @type {string || null}
         */
        this.User = null;

        /**
         * Instance password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Alibaba Cloud ApsaraDB for RDS instance ID, which is applicable if the source database is an Alibaba Cloud ApsaraDB for RDS 5.6/5.7 instance
         * @type {string || null}
         */
        this.RdsInstanceId = null;

        /**
         * Short CVM instance ID in the format of `ins-olgl39y8`. It is the same as the instance ID displayed on the CVM Console page. For CVM-based self-created instances, this field needs to be passed in
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * Direct Connect gateway ID in the format of dcg-0rxtqqxb
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * VPC ID in the format of vpc-92jblxto
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC Subnet ID in the format of subnet-3paxmkdz
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPN gateway ID in the format of vpngw-9ghexg7q
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * Database instance ID in the format of cdb-powiqx8q
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region name, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * For Alibaba Cloud ApsaraDB for RDS instances, enter "aliyun"; otherwise, enter "others"
         * @type {string || null}
         */
        this.Supplier = null;

        /**
         * CCN instance ID, such as ccn-afp6kltc
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * Database version. This parameter is valid only when the instance is an RDS instance. Value: 5.6 or 5.7. Default value: 5.6
         * @type {string || null}
         */
        this.EngineVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.RdsInstanceId = 'RdsInstanceId' in params ? params.RdsInstanceId : null;
        this.CvmInstanceId = 'CvmInstanceId' in params ? params.CvmInstanceId : null;
        this.UniqDcgId = 'UniqDcgId' in params ? params.UniqDcgId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.UniqVpnGwId = 'UniqVpnGwId' in params ? params.UniqVpnGwId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Supplier = 'Supplier' in params ? params.Supplier : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

    }
}

/**
 * Sampling parameter for spot check
 * @class
 */
class ConsistencyParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data content check parameter, which refers to the proportion of the rows selected for data comparison in all the rows of the table. Value: an integer between 1 and 100.
         * @type {number || null}
         */
        this.SelectRowsPerTable = null;

        /**
         * Data content check parameter, which refers to the proportion of the tables selected for data detection in all the tables. Value: an integer between 1 and 100.
         * @type {number || null}
         */
        this.TablesSelectAll = null;

        /**
         * Data quantity check parameter, which checks whether the numbers of rows are identical. It refers to the proportion of the tables selected for quantity check in all the tables. Value: an integer between 1 and 100.
         * @type {number || null}
         */
        this.TablesSelectCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SelectRowsPerTable = 'SelectRowsPerTable' in params ? params.SelectRowsPerTable : null;
        this.TablesSelectAll = 'TablesSelectAll' in params ? params.TablesSelectAll : null;
        this.TablesSelectCount = 'TablesSelectCount' in params ? params.TablesSelectCount : null;

    }
}

/**
 * ModifyMigrateJob request structure.
 * @class
 */
class ModifyMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the data migration task to be modified
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Migration task configuration options
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Source instance access type. Valid values: extranet (public network), cvm (CVM-based self-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information, which is correlated with the migration task type
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type. Valid values: extranet (public network), cvm (CVM-based self-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance). Currently, only `cdb` is supported
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target instance information. The region where the target instance is located cannot be modified.
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * When migrating the specified table, you need to set the information of the source database table to be migrated, which should be described in JSON string format. Below are examples.

For databases with a database-table structure:
[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]
For databases with a database-schema-table structure:
[{"Database":"db1","Schema":"s1","Table":["table1","table2"]},{"Database":"db1","Schema":"s2","Table":["table1","table2"]},{"Database":"db2","Schema":"s1","Table":["table1","table2"]},{"Database":"db3"},{"Database":"db4","Schema":"s1"}]

This field does not need to be set when the entire instance is to be migrated
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * CreateSubscribe request structure.
 * @class
 */
class CreateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscribed database type. Currently, MySQL is supported
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance billing mode, which is always 1 (hourly billing),
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * Purchase duration in months, which is required if `PayType` is 0. Maximum value: 120 (this field is not required of global site users and is better to be hidden)
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Quantity. Default value: 1. Maximum value: 10
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Whether to auto-renew. Default value: 0. This flag does not take effect for hourly billed instances (this field should be hidden from global site users)
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * CreateMigrateCheckJob response structure.
 * @class
 */
class CreateMigrateCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of steps in migration
 * @class
 */
class MigrateStepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Step ID
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * Step status. Value range: 0 (default), 1 (succeeded), 2 (failed), 3 (in progress), 4 (not started)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Start time of current step in the format of `yyyy-mm-dd hh:mm:ss`. This field is meaningless if it does not exist or is empty
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepId = 'StepId' in params ? params.StepId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * ModifySubscribeObjects request structure.
 * @class
 */
class ModifySubscribeObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Data subscription type. Valid values: 0 (full instance subscription), 1 (data subscription), 2 (structure subscription), 3 (data subscription + structure subscription)
         * @type {number || null}
         */
        this.SubscribeObjectType = null;

        /**
         * Information of subscribed table
         * @type {Array.<SubscribeObject> || null}
         */
        this.Objects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeObjectType = 'SubscribeObjectType' in params ? params.SubscribeObjectType : null;

        if (params.Objects) {
            this.Objects = new Array();
            for (let z in params.Objects) {
                let obj = new SubscribeObject();
                obj.deserialize(params.Objects[z]);
                this.Objects.push(obj);
            }
        }

    }
}

/**
 * DescribeMigrateCheckJob response structure.
 * @class
 */
class DescribeMigrateCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check task status: unavailable, starting, running, finished
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task error code
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Task error message
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Check task progress. For example, "30" means 30% completed
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Whether the check succeeds. 0: no; 1: yes; 3: not checked
         * @type {number || null}
         */
        this.CheckFlag = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sale information of data subscription region
 * @class
 */
class SubscribeRegionConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as Guangzhou
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region ID, such as ap-guangzhou
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name, such as South China
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Whether it is the default region. 0: no, 1: yes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsDefaultRegion = null;

        /**
         * Purchasable status of current region. 1: normal, 2: beta test, 3: not purchasable
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.IsDefaultRegion = 'IsDefaultRegion' in params ? params.IsDefaultRegion : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ActivateSubscribe request structure.
 * @class
 */
class ActivateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription instance ID.
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Database Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Data subscription type. 0: full instance subscription, 1: data subscription, 2: structure subscription, 3: data subscription and structure subscription
         * @type {number || null}
         */
        this.SubscribeObjectType = null;

        /**
         * Subscription object
         * @type {SubscribeObject || null}
         */
        this.Objects = null;

        /**
         * Subnet of data subscription service, which is the subnet of the database instance by default.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Subscription service port. Default value: 7507
         * @type {number || null}
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
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SubscribeObjectType = 'SubscribeObjectType' in params ? params.SubscribeObjectType : null;

        if (params.Objects) {
            let obj = new SubscribeObject();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * OfflineIsolatedSubscribe request structure.
 * @class
 */
class OfflineIsolatedSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * DescribeSubscribes request structure.
 * @class
 */
class DescribeSubscribesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Data subscription instance name
         * @type {string || null}
         */
        this.SubscribeName = null;

        /**
         * ID of bound database instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Data subscription instance channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Billing mode filter. Default value: 1 (pay-as-you-go)
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Subscribed database product, such as MySQL
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Data subscription instance status. Valid values: creating, normal, isolating, isolated, offlining
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Data subscription instance configuration status. Valid values: unconfigure, configuring, configured
         * @type {Array.<string> || null}
         */
        this.SubsStatus = null;

        /**
         * Starting offset of returned results
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned at a time
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting order. Valid values: DESC, ASC. Default value: DESC, indicating descending by creation time
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubsStatus = 'SubsStatus' in params ? params.SubsStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * ResetSubscribe response structure.
 * @class
 */
class ResetSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartSyncJob response structure.
 * @class
 */
class StartSyncJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubscribes response structure.
 * @class
 */
class DescribeSubscribesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information list of data subscription instances
         * @type {Array.<SubscribeInfo> || null}
         */
        this.Items = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SubscribeInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Check steps for a disaster recovery task
 * @class
 */
class SyncCheckStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Code of the step execution result
         * @type {number || null}
         */
        this.StepCode = null;

        /**
         * Message about the step execution result
         * @type {string || null}
         */
        this.StepMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepCode = 'StepCode' in params ? params.StepCode : null;
        this.StepMessage = 'StepMessage' in params ? params.StepMessage : null;

    }
}

/**
 * CreateSyncCheckJob response structure.
 * @class
 */
class CreateSyncCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopMigrateJob request structure.
 * @class
 */
class StopMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * DescribeSyncCheckJob request structure.
 * @class
 */
class DescribeSyncCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the disaster recovery sync task to be queried
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * DescribeRegionConf response structure.
 * @class
 */
class DescribeRegionConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of purchasable regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Purchasable region details
         * @type {Array.<SubscribeRegionConf> || null}
         */
        this.Items = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SubscribeRegionConf();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySyncJob response structure.
 * @class
 */
class ModifySyncJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAsyncRequestInfo response structure.
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task execution result information
         * @type {string || null}
         */
        this.Info = null;

        /**
         * Task execution status. Valid values: success, failed, running
         * @type {string || null}
         */
        this.Status = null;

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
        this.Info = 'Info' in params ? params.Info : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompleteMigrateJob request structure.
 * @class
 */
class CompleteMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * ResetSubscribe request structure.
 * @class
 */
class ResetSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * ModifySubscribeConsumeTime request structure.
 * @class
 */
class ModifySubscribeConsumeTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * Consumption starting time point in the format of `Y-m-d h:m:s`, i.e., the starting time point for data subscription. Value range: within the last 24 hours
         * @type {string || null}
         */
        this.ConsumeStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.ConsumeStartTime = 'ConsumeStartTime' in params ? params.ConsumeStartTime : null;

    }
}

/**
 * ModifyMigrateJob response structure.
 * @class
 */
class ModifyMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSyncJob request structure.
 * @class
 */
class CreateSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Configuration options of a disaster recovery sync task
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * Source instance database type, which currently only supports mysql
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance access type, which currently only supports cdb (TencentDB instances)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information
         * @type {SyncInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type, which currently only supports mysql
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target instance access type, which currently only supports cdb (TencentDB instances)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target instance information
         * @type {SyncInstanceInfo || null}
         */
        this.DstInfo = null;

        /**
         * Information of the source table to be synced, which is described in JSON string format.
For databases with a database-table structure:
[{Database:db1,Table:[table1,table2]},{Database:db2}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * DescribeSyncJobs request structure.
 * @class
 */
class DescribeSyncJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Disaster recovery sync task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Sort by field. Value range: JobId, Status, JobName, CreateTime
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting order. Value range: ASC (ascending), DESC (descending)
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of the returned instances. Value range: [1, 100]. Default value: 20
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeMigrateJobs request structure.
 * @class
 */
class DescribeMigrateJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Sort by field. Value range: JobId, Status, JobName, MigrateType, RunMode, CreateTime
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting order. Value range: ASC (ascending), DESC (descending)
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of the returned instances. Value range: [1, 100]. Default value: 20
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Describes the specific process of the sync task.
 * @class
 */
class SyncDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of steps
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * Current step
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * Overall progress
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Progress of the current step
         * @type {string || null}
         */
        this.CurrentStepProgress = null;

        /**
         * Master/slave delay in MB
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * Master/slave delay in seconds
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * Step information
         * @type {Array.<SyncStepDetailInfo> || null}
         */
        this.StepInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepAll = 'StepAll' in params ? params.StepAll : null;
        this.StepNow = 'StepNow' in params ? params.StepNow : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CurrentStepProgress = 'CurrentStepProgress' in params ? params.CurrentStepProgress : null;
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new SyncStepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

    }
}

/**
 * StopMigrateJob response structure.
 * @class
 */
class StopMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration options of a disaster recovery sync task
 * @class
 */
class SyncOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync object. 1: entire instance; 2: specified table
         * @type {number || null}
         */
        this.SyncObject = null;

        /**
         * Sync start configuration. 1: start immediately
         * @type {number || null}
         */
        this.RunMode = null;

        /**
         * Sync mode. 3: full + incremental sync
         * @type {number || null}
         */
        this.SyncType = null;

        /**
         * Data consistency check. 1: no configuration required
         * @type {number || null}
         */
        this.ConsistencyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SyncObject = 'SyncObject' in params ? params.SyncObject : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;
        this.ConsistencyType = 'ConsistencyType' in params ? params.ConsistencyType : null;

    }
}

/**
 * OfflineIsolatedSubscribe response structure.
 * @class
 */
class OfflineIsolatedSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sync task progress
 * @class
 */
class SyncStepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step number
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * Step name
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * Whether it can be stopped
         * @type {number || null}
         */
        this.CanStop = null;

        /**
         * Step ID
         * @type {number || null}
         */
        this.StepId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.CanStop = 'CanStop' in params ? params.CanStop : null;
        this.StepId = 'StepId' in params ? params.StepId : null;

    }
}

/**
 * IsolateSubscribe request structure.
 * @class
 */
class IsolateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * DeleteSyncJob response structure.
 * @class
 */
class DeleteSyncJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSyncCheckJob request structure.
 * @class
 */
class CreateSyncCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery sync task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * ModifySyncJob request structure.
 * @class
 */
class ModifySyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the disaster recovery sync task to be modified
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Name of the disaster recovery sync task
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Configuration options of a disaster recovery sync task
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * When syncing the specified table, you need to set the information of the source table to be synced, which should be described in JSON string format. Below are examples.
For databases with a database-table structure:
[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * DescribeRegionConf request structure.
 * @class
 */
class DescribeRegionConfRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CompleteMigrateJob response structure.
 * @class
 */
class CompleteMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartMigrateJob response structure.
 * @class
 */
class StartMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Data subscription object
 * @class
 */
class SubscribeObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription object type. 0: database, 1: database table
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ObjectsType = null;

        /**
         * Name of subscribed database
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Array of table names in subscribed database
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TableNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectsType = 'ObjectsType' in params ? params.ObjectsType : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableNames = 'TableNames' in params ? params.TableNames : null;

    }
}

/**
 * CreateMigrateJob response structure.
 * @class
 */
class CreateMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubscribeConf request structure.
 * @class
 */
class DescribeSubscribeConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription instance ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * ModifySubscribeVipVport response structure.
 * @class
 */
class ModifySubscribeVipVportResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Migration task details
 * @class
 */
class MigrateJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Data migration task name
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Migration task configuration options
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * Source instance database type: MySQL, Redis, MongoDB, PostgreSQL, MariaDB, Percona
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Source instance access type. Value range: extranet (public network), cvm (CVM-created instance), dcg (Direct Connect-enabled instance), vpncloud (Tencent Cloud VPN-enabled instance), cdb (TencentDB instance), ccn (CCN instances)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Source instance information, which is correlated with the migration task type
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance access type: MySQL, Redis, MongoDB, PostgreSQL, MariaDB, Percona
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * Target instance access type, which currently only supports cdb (TencentDB instance)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Target instance information
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * Information of the source table to be migrated. If the entire instance is to be migrated, this field should be []
         * @type {string || null}
         */
        this.DatabaseInfo = null;

        /**
         * Task creation/submission time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task status. Value range: 1 (Creating), 3 (Checking), 4 (CheckPass), 5 (CheckNotPass), 7 (Running), 8 (ReadyComplete), 9 (Success), 10 (Failed), 11 (Stopping), 12 (Completing)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task details
         * @type {MigrateDetailInfo || null}
         */
        this.Detail = null;

        /**
         * Prompt message for task error, which is not null or empty when an error occurs with the task
         * @type {Array.<ErrorInfo> || null}
         */
        this.ErrorInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Detail) {
            let obj = new MigrateDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }

        if (params.ErrorInfo) {
            this.ErrorInfo = new Array();
            for (let z in params.ErrorInfo) {
                let obj = new ErrorInfo();
                obj.deserialize(params.ErrorInfo[z]);
                this.ErrorInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteMigrateJob request structure.
 * @class
 */
class DeleteMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * DeleteSyncJob request structure.
 * @class
 */
class DeleteSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the disaster recovery sync task to be deleted
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * ActivateSubscribe response structure.
 * @class
 */
class ActivateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription configuration task ID.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubscribe response structure.
 * @class
 */
class CreateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data subscription instance ID array
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubscribeIds = null;

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
        this.SubscribeIds = 'SubscribeIds' in params ? params.SubscribeIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Migration task configuration options
 * @class
 */
class MigrateOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task operation mode. Value range: 1 (immediate execution), 2 (scheduled execution)
         * @type {number || null}
         */
        this.RunMode = null;

        /**
         * Expected execution time in the format of yyyy-mm-dd hh:mm:ss. If runMode=2, this field is required
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * Data migration type. Value range: 1 (structural migration), 2 (full migration), 3 (full + incremental migration)
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * Migration subject. 1: entire instance; 2: specified table
         * @type {number || null}
         */
        this.MigrateObject = null;

        /**
         * Parameter of spot data consistency check. 1: not configured; 2: full check; 3: spot check; 4: check inconsistent tables only; 5: no check
         * @type {number || null}
         */
        this.ConsistencyType = null;

        /**
         * Whether to overwrite the target database with the root account of the source database. Value range: 0 (no), 1 (yes). This value should be 0 for table or structural migration
         * @type {number || null}
         */
        this.IsOverrideRoot = null;

        /**
         * Additional parameters for different databases, which are described in JSON format. 
The following parameters can be defined for Redis: 
{ 
	"ClientOutputBufferHardLimit":512, 	Hard capacity limit of slave buffer (MB) 
	"ClientOutputBufferSoftLimit":512, 	Soft capacity limit of slave buffer (MB) 
	"ClientOutputBufferPersistTime":60, Soft limit duration of slave buffer (s) 
	"ReplBacklogSize":512, 	Circular buffer capacity limit (MB) 
	"ReplTimeout":120, 		Replication timeout period (s) 
}
The following parameters can be defined for MongoDB: 
{
	'SrcAuthDatabase':'admin', 
	'SrcAuthFlag': "1", 
	'SrcAuthMechanism':"SCRAM-SHA-1"
}
MySQL currently does not support configuring additional parameters.
         * @type {string || null}
         */
        this.ExternParams = null;

        /**
         * Only used for "spot data consistency check". It is required if ConsistencyType is spot check
         * @type {ConsistencyParams || null}
         */
        this.ConsistencyParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;
        this.MigrateObject = 'MigrateObject' in params ? params.MigrateObject : null;
        this.ConsistencyType = 'ConsistencyType' in params ? params.ConsistencyType : null;
        this.IsOverrideRoot = 'IsOverrideRoot' in params ? params.IsOverrideRoot : null;
        this.ExternParams = 'ExternParams' in params ? params.ExternParams : null;

        if (params.ConsistencyParams) {
            let obj = new ConsistencyParams();
            obj.deserialize(params.ConsistencyParams)
            this.ConsistencyParams = obj;
        }

    }
}

/**
 * Message and prompt for migration task error
 * @class
 */
class ErrorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific error log, including error code and error message
         * @type {string || null}
         */
        this.ErrorLog = null;

        /**
         * Help document URL corresponding to error
         * @type {string || null}
         */
        this.HelpDoc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorLog = 'ErrorLog' in params ? params.ErrorLog : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;

    }
}

/**
 * DescribeSyncCheckJob response structure.
 * @class
 */
class DescribeSyncCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task check status: starting, running, finished
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Code of the task check result
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Prompt message
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Description of a task execution step
         * @type {Array.<SyncCheckStepInfo> || null}
         */
        this.StepInfo = null;

        /**
         * Check flag. 0: checking; 1: successfully checked
         * @type {number || null}
         */
        this.CheckFlag = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new SyncCheckStepInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartMigrateJob request structure.
 * @class
 */
class StartMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data migration task ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

module.exports = {
    DescribeSyncJobsResponse: DescribeSyncJobsResponse,
    DescribeMigrateJobsResponse: DescribeMigrateJobsResponse,
    MigrateDetailInfo: MigrateDetailInfo,
    DeleteMigrateJobResponse: DeleteMigrateJobResponse,
    CreateMigrateCheckJobRequest: CreateMigrateCheckJobRequest,
    ModifySubscribeVipVportRequest: ModifySubscribeVipVportRequest,
    SyncInstanceInfo: SyncInstanceInfo,
    ModifySubscribeNameResponse: ModifySubscribeNameResponse,
    CreateSyncJobResponse: CreateSyncJobResponse,
    DescribeMigrateCheckJobRequest: DescribeMigrateCheckJobRequest,
    IsolateSubscribeResponse: IsolateSubscribeResponse,
    ModifySubscribeObjectsResponse: ModifySubscribeObjectsResponse,
    StartSyncJobRequest: StartSyncJobRequest,
    CreateMigrateJobRequest: CreateMigrateJobRequest,
    SubscribeInfo: SubscribeInfo,
    ModifySubscribeNameRequest: ModifySubscribeNameRequest,
    SyncJobInfo: SyncJobInfo,
    ModifySubscribeConsumeTimeResponse: ModifySubscribeConsumeTimeResponse,
    DstInfo: DstInfo,
    DescribeSubscribeConfResponse: DescribeSubscribeConfResponse,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    SrcInfo: SrcInfo,
    ConsistencyParams: ConsistencyParams,
    ModifyMigrateJobRequest: ModifyMigrateJobRequest,
    CreateSubscribeRequest: CreateSubscribeRequest,
    CreateMigrateCheckJobResponse: CreateMigrateCheckJobResponse,
    MigrateStepDetailInfo: MigrateStepDetailInfo,
    ModifySubscribeObjectsRequest: ModifySubscribeObjectsRequest,
    DescribeMigrateCheckJobResponse: DescribeMigrateCheckJobResponse,
    SubscribeRegionConf: SubscribeRegionConf,
    ActivateSubscribeRequest: ActivateSubscribeRequest,
    OfflineIsolatedSubscribeRequest: OfflineIsolatedSubscribeRequest,
    DescribeSubscribesRequest: DescribeSubscribesRequest,
    ResetSubscribeResponse: ResetSubscribeResponse,
    StartSyncJobResponse: StartSyncJobResponse,
    DescribeSubscribesResponse: DescribeSubscribesResponse,
    SyncCheckStepInfo: SyncCheckStepInfo,
    CreateSyncCheckJobResponse: CreateSyncCheckJobResponse,
    StopMigrateJobRequest: StopMigrateJobRequest,
    DescribeSyncCheckJobRequest: DescribeSyncCheckJobRequest,
    DescribeRegionConfResponse: DescribeRegionConfResponse,
    ModifySyncJobResponse: ModifySyncJobResponse,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CompleteMigrateJobRequest: CompleteMigrateJobRequest,
    ResetSubscribeRequest: ResetSubscribeRequest,
    ModifySubscribeConsumeTimeRequest: ModifySubscribeConsumeTimeRequest,
    ModifyMigrateJobResponse: ModifyMigrateJobResponse,
    CreateSyncJobRequest: CreateSyncJobRequest,
    DescribeSyncJobsRequest: DescribeSyncJobsRequest,
    DescribeMigrateJobsRequest: DescribeMigrateJobsRequest,
    SyncDetailInfo: SyncDetailInfo,
    StopMigrateJobResponse: StopMigrateJobResponse,
    SyncOption: SyncOption,
    OfflineIsolatedSubscribeResponse: OfflineIsolatedSubscribeResponse,
    SyncStepDetailInfo: SyncStepDetailInfo,
    IsolateSubscribeRequest: IsolateSubscribeRequest,
    DeleteSyncJobResponse: DeleteSyncJobResponse,
    CreateSyncCheckJobRequest: CreateSyncCheckJobRequest,
    ModifySyncJobRequest: ModifySyncJobRequest,
    DescribeRegionConfRequest: DescribeRegionConfRequest,
    CompleteMigrateJobResponse: CompleteMigrateJobResponse,
    StartMigrateJobResponse: StartMigrateJobResponse,
    SubscribeObject: SubscribeObject,
    CreateMigrateJobResponse: CreateMigrateJobResponse,
    DescribeSubscribeConfRequest: DescribeSubscribeConfRequest,
    ModifySubscribeVipVportResponse: ModifySubscribeVipVportResponse,
    MigrateJobInfo: MigrateJobInfo,
    DeleteMigrateJobRequest: DeleteMigrateJobRequest,
    DeleteSyncJobRequest: DeleteSyncJobRequest,
    ActivateSubscribeResponse: ActivateSubscribeResponse,
    CreateSubscribeResponse: CreateSubscribeResponse,
    MigrateOption: MigrateOption,
    ErrorInfo: ErrorInfo,
    DescribeSyncCheckJobResponse: DescribeSyncCheckJobResponse,
    StartMigrateJobRequest: StartMigrateJobRequest,

}
