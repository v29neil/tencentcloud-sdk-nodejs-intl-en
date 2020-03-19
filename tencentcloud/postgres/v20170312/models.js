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
 * RestartDBInstance request structure.
 * @class
 */
class RestartDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeOrders response structure.
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of orders
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Order array
         * @type {Array.<PgDeal> || null}
         */
        this.Deals = null;

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

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new PgDeal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBXlogs request structure.
 * @class
 */
class DescribeDBXlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries returned per page in paged query. Value range: 1–100.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Account information
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Account
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Account remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Account status. 1: creating, 2: normal, 3: modifying, 4: resetting password, -1: deleting
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Account creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Account last modified time
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance request structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance disk size in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance ID in the format of postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance billing type. Valid value: `POSTPAID_BY_HOUR` (pay-as-you-go hourly)
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * DescribeAccounts request structure.
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Number of entries returned per page. Default value: 20. Value range: 1–100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to sort by creation time or username. Valid values: `createTime` (sort by creation time), `name` (sort by username)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Whether returns are sorted in ascending or descending order. Valid values: `desc` (descending), `asc` (ascending)
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeDBErrlogs response structure.
 * @class
 */
class DescribeDBErrlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned for this call
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Error log list
         * @type {Array.<ErrLogDetail> || null}
         */
        this.Details = null;

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

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ErrLogDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceName request structure.
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * New name of database instance
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance response structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total cost before discount.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Actual amount payable
         * @type {number || null}
         */
        this.Price = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Error log details
 * @class
 */
class ErrLogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Error occurrence time
         * @type {string || null}
         */
        this.ErrTime = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.ErrTime = 'ErrTime' in params ? params.ErrTime : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * ModifyAccountRemark response structure.
 * @class
 */
class ModifyAccountRemarkResponse extends  AbstractModel {
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
 * ModifyDBInstancesProject response structure.
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully transferred instances
         * @type {number || null}
         */
        this.Count = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
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
 * Purchasable specification details in an AZ in a region.
 * @class
 */
class SpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region abbreviation, which corresponds to the `Region` field of `RegionSet`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ abbreviate, which corresponds to the `Zone` field of `ZoneSet`
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Specification details list
         * @type {Array.<SpecItemInfo> || null}
         */
        this.SpecItemInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SpecItemInfoList) {
            this.SpecItemInfoList = new Array();
            for (let z in params.SpecItemInfoList) {
                let obj = new SpecItemInfo();
                obj.deserialize(params.SpecItemInfoList[z]);
                this.SpecItemInfoList.push(obj);
            }
        }

    }
}

/**
 * Region information such as number and status
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region abbreviation
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region number
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Availability status. UNAVAILABLE: unavailable, AVAILABLE: available
         * @type {string || null}
         */
        this.RegionState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * InitDBInstances request structure.
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID set.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * Instance admin account username.
         * @type {string || null}
         */
        this.AdminName = null;

        /**
         * Password corresponding to instance root account username.
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * Instance character set. Valid values: UTF8, LATIN1.
         * @type {string || null}
         */
        this.Charset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.Charset = 'Charset' in params ? params.Charset : null;

    }
}

/**
 * RestartDBInstance response structure.
 * @class
 */
class RestartDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async flow ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance details
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance region such as ap-guangzhou, which corresponds to the `Region` field of `RegionSet`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance AZ such as ap-guangzhou-3, which corresponds to the `Zone` field of `ZoneSet`
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Instance status
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * Assigned instance memory size in GB
         * @type {number || null}
         */
        this.DBInstanceMemory = null;

        /**
         * Assigned instance storage capacity in GB
         * @type {number || null}
         */
        this.DBInstanceStorage = null;

        /**
         * Number of assigned CPUs
         * @type {number || null}
         */
        this.DBInstanceCpu = null;

        /**
         * Purchasable specification ID
         * @type {string || null}
         */
        this.DBInstanceClass = null;

        /**
         * Instance type. 1: primary (master instance), 2: readonly (read-only instance), 3: guard (disaster recovery instance), 4: temp (temp instance)
         * @type {string || null}
         */
        this.DBInstanceType = null;

        /**
         * Instance edition. Currently, only `standard` edition (dual-server high-availability one-master-one-slave edition) is supported
         * @type {string || null}
         */
        this.DBInstanceVersion = null;

        /**
         * Instance database character set
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * PostgreSQL kernel version
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance last modified time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Instance isolation time
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * Billing mode. postpaid: pay-as-you-go
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Whether to renew automatically. 1: yes, 0: no
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Instance network connection information
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.DBInstanceMemory = 'DBInstanceMemory' in params ? params.DBInstanceMemory : null;
        this.DBInstanceStorage = 'DBInstanceStorage' in params ? params.DBInstanceStorage : null;
        this.DBInstanceCpu = 'DBInstanceCpu' in params ? params.DBInstanceCpu : null;
        this.DBInstanceClass = 'DBInstanceClass' in params ? params.DBInstanceClass : null;
        this.DBInstanceType = 'DBInstanceType' in params ? params.DBInstanceType : null;
        this.DBInstanceVersion = 'DBInstanceVersion' in params ? params.DBInstanceVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeProductConfig response structure.
 * @class
 */
class DescribeProductConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchasable specification list.
         * @type {Array.<SpecInfo> || null}
         */
        this.SpecInfoList = null;

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

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetAccountPassword response structure.
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
 * ResetAccountPassword request structure.
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance account name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New password corresponding to `UserName` account
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeProductConfig request structure.
 * @class
 */
class DescribeProductConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * InitDBInstances response structure.
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID set.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

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
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBBackups request structure.
 * @class
 */
class DescribeDBBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Backup mode (1: full). Currently, only full backup is supported. The value is 1.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of entries returned per page for backup list. Default value: 20. Minimum value: 1. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0. Default value: 0.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Specification information
 * @class
 */
class SpecItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification ID
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgreSQL kernel version number
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Full version name corresponding to kernel number
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Maximum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * Minimum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * Estimated QPS for this specification
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Billing ID for this specification
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Order details
 * @class
 */
class PgDeal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * User
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Number of instances involved in order
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Billing mode. 0: pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Instance ID array
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;

    }
}

/**
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region information set.
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AZ information such as number and status
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ abbreviation
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * AZ number
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Availability status. UNAVAILABLE: unavailable, AVAILABLE: available
         * @type {string || null}
         */
        this.ZoneState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;

    }
}

/**
 * DescribeAccounts response structure.
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned for this API call.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Account list details.
         * @type {Array.<AccountInfo> || null}
         */
        this.Details = null;

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

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new AccountInfo();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBExtranetAccess request structure.
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeDBErrlogs request structure.
 * @class
 */
class DescribeDBErrlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-5bq3wfjd
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-01-01 00:00:00, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-01-01 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Search keyword
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * Number of entries returned per page. Value range: 1–100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Database backup information
 * @class
 */
class DBBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique backup file ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * File generation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * File generation end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * File size in KB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Policy (0: instance backup, 1: multi-database backup)
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Type (0: scheduled)
         * @type {number || null}
         */
        this.Way = null;

        /**
         * Backup mode (1: full)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Status (1: creating, 2: success, 3: failure)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * DB list
         * @type {Array.<string> || null}
         */
        this.DbList = null;

        /**
         * Download address on private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address on public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Way = 'Way' in params ? params.Way : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DbList = 'DbList' in params ? params.DbList : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;

    }
}

/**
 * Instance network connection information
 * @class
 */
class DBInstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS domain name
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Connection port address
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Network type. 1: inner (private network address), 2: public (public network address)
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Network connection status
         * @type {string || null}
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
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyDBInstancesProject request structure.
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB for PostgreSQL instance ID array
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * New project ID of TencentDB for PostgreSQL instance
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyDBInstanceName response structure.
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
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
 * CloseDBExtranetAccess response structure.
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Slow query details
 * @class
 */
class SlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total time consumed
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * Total number of calls
         * @type {number || null}
         */
        this.TotalCalls = null;

        /**
         * List of slow SQL statements after desensitization
         * @type {Array.<NormalQueryItem> || null}
         */
        this.NormalQueries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.TotalCalls = 'TotalCalls' in params ? params.TotalCalls : null;

        if (params.NormalQueries) {
            this.NormalQueries = new Array();
            for (let z in params.NormalQueries) {
                let obj = new NormalQueryItem();
                obj.deserialize(params.NormalQueries[z]);
                this.NormalQueries.push(obj);
            }
        }

    }
}

/**
 * DescribeDBInstanceAttribute response structure.
 * @class
 */
class DescribeDBInstanceAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance details.
         * @type {DBInstance || null}
         */
        this.DBInstance = null;

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

        if (params.DBInstance) {
            let obj = new DBInstance();
            obj.deserialize(params.DBInstance)
            this.DBInstance = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowlogs request structure.
 * @class
 */
class DescribeDBSlowlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Metric for sorting. Valid values: `sum_calls` (total number of calls), `sum_cost_time` (total time consumed)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. desc: descending, asc: ascending
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Number of entries returned per page. Value range: 1–100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * OpenDBExtranetAccess response structure.
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBBackups response structure.
 * @class
 */
class DescribeDBBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of backup files in the returned backup list
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Backup list
         * @type {Array.<DBBackup> || null}
         */
        this.BackupList = null;

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

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new DBBackup();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DescribeZones response structure.
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * AZ information set.
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

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

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of one SlowQuery
 * @class
 */
class NormalQueryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Number of calls
         * @type {number || null}
         */
        this.Calls = null;

        /**
         * Granularity
         * @type {Array.<number> || null}
         */
        this.CallsGrids = null;

        /**
         * Total time consumed
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * Number of affected rows
         * @type {number || null}
         */
        this.Rows = null;

        /**
         * Minimum time consumed
         * @type {number || null}
         */
        this.MinCostTime = null;

        /**
         * Maximum time consumed
         * @type {number || null}
         */
        this.MaxCostTime = null;

        /**
         * Time of the earliest slow SQL statement
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Time of the latest slow SQL statement
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * Shared memory blocks for reads
         * @type {number || null}
         */
        this.SharedReadBlks = null;

        /**
         * Shared memory blocks for writes
         * @type {number || null}
         */
        this.SharedWriteBlks = null;

        /**
         * Total IO read time
         * @type {number || null}
         */
        this.ReadCostTime = null;

        /**
         * Total IO write time
         * @type {number || null}
         */
        this.WriteCostTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Slow SQL statement after desensitization
         * @type {string || null}
         */
        this.NormalQuery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Calls = 'Calls' in params ? params.Calls : null;
        this.CallsGrids = 'CallsGrids' in params ? params.CallsGrids : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.Rows = 'Rows' in params ? params.Rows : null;
        this.MinCostTime = 'MinCostTime' in params ? params.MinCostTime : null;
        this.MaxCostTime = 'MaxCostTime' in params ? params.MaxCostTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.SharedReadBlks = 'SharedReadBlks' in params ? params.SharedReadBlks : null;
        this.SharedWriteBlks = 'SharedWriteBlks' in params ? params.SharedWriteBlks : null;
        this.ReadCostTime = 'ReadCostTime' in params ? params.ReadCostTime : null;
        this.WriteCostTime = 'WriteCostTime' in params ? params.WriteCostTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.NormalQuery = 'NormalQuery' in params ? params.NormalQuery : null;

    }
}

/**
 * DescribeDBXlogs response structure.
 * @class
 */
class DescribeDBXlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned this time.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Xlog list
         * @type {Array.<Xlog> || null}
         */
        this.XlogList = null;

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

        if (params.XlogList) {
            this.XlogList = new Array();
            for (let z in params.XlogList) {
                let obj = new Xlog();
                obj.deserialize(params.XlogList[z]);
                this.XlogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceAttribute request structure.
 * @class
 */
class DescribeDBInstanceAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeOrders request structure.
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name set
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * DescribeDBSlowlogs response structure.
 * @class
 */
class DescribeDBSlowlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned this time
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query log details
         * @type {SlowlogDetail || null}
         */
        this.Detail = null;

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

        if (params.Detail) {
            let obj = new SlowlogDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountRemark request structure.
 * @class
 */
class ModifyAccountRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New remarks corresponding to user `UserName`
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CloseDBExtranetAccess request structure.
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * Database Xlog information
 * @class
 */
class Xlog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique backup file ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * File generation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * File generation end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Download address on private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address on public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;

    }
}

module.exports = {
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    DescribeOrdersResponse: DescribeOrdersResponse,
    DescribeDBXlogsRequest: DescribeDBXlogsRequest,
    AccountInfo: AccountInfo,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DescribeDBErrlogsResponse: DescribeDBErrlogsResponse,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    ErrLogDetail: ErrLogDetail,
    ModifyAccountRemarkResponse: ModifyAccountRemarkResponse,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DescribeZonesRequest: DescribeZonesRequest,
    SpecInfo: SpecInfo,
    RegionInfo: RegionInfo,
    InitDBInstancesRequest: InitDBInstancesRequest,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    DBInstance: DBInstance,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    SpecItemInfo: SpecItemInfo,
    PgDeal: PgDeal,
    DescribeRegionsResponse: DescribeRegionsResponse,
    ZoneInfo: ZoneInfo,
    DescribeAccountsResponse: DescribeAccountsResponse,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    DescribeDBErrlogsRequest: DescribeDBErrlogsRequest,
    DBBackup: DBBackup,
    DBInstanceNetInfo: DBInstanceNetInfo,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    SlowlogDetail: SlowlogDetail,
    DescribeDBInstanceAttributeResponse: DescribeDBInstanceAttributeResponse,
    DescribeDBSlowlogsRequest: DescribeDBSlowlogsRequest,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    NormalQueryItem: NormalQueryItem,
    DescribeDBXlogsResponse: DescribeDBXlogsResponse,
    DescribeDBInstanceAttributeRequest: DescribeDBInstanceAttributeRequest,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DescribeDBSlowlogsResponse: DescribeDBSlowlogsResponse,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    Xlog: Xlog,

}