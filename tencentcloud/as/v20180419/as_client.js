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
const DisableAutoScalingGroupResponse = models.DisableAutoScalingGroupResponse;
const ModifyLaunchConfigurationAttributesRequest = models.ModifyLaunchConfigurationAttributesRequest;
const DisableAutoScalingGroupRequest = models.DisableAutoScalingGroupRequest;
const ModifyAutoScalingGroupRequest = models.ModifyAutoScalingGroupRequest;
const AutoScalingNotification = models.AutoScalingNotification;
const ModifyScheduledActionRequest = models.ModifyScheduledActionRequest;
const DescribeAutoScalingGroupsRequest = models.DescribeAutoScalingGroupsRequest;
const CreateAutoScalingGroupResponse = models.CreateAutoScalingGroupResponse;
const DescribeAccountLimitsResponse = models.DescribeAccountLimitsResponse;
const CreatePaiInstanceResponse = models.CreatePaiInstanceResponse;
const CreateLaunchConfigurationResponse = models.CreateLaunchConfigurationResponse;
const CreateLifecycleHookResponse = models.CreateLifecycleHookResponse;
const DescribeAutoScalingGroupsResponse = models.DescribeAutoScalingGroupsResponse;
const CreatePaiInstanceRequest = models.CreatePaiInstanceRequest;
const SystemDisk = models.SystemDisk;
const SpotMarketOptions = models.SpotMarketOptions;
const DescribeScalingPoliciesRequest = models.DescribeScalingPoliciesRequest;
const ModifyScheduledActionResponse = models.ModifyScheduledActionResponse;
const ExecuteScalingPolicyResponse = models.ExecuteScalingPolicyResponse;
const ModifyLaunchConfigurationAttributesResponse = models.ModifyLaunchConfigurationAttributesResponse;
const SetInstancesProtectionResponse = models.SetInstancesProtectionResponse;
const CompleteLifecycleActionRequest = models.CompleteLifecycleActionRequest;
const CreateScalingPolicyResponse = models.CreateScalingPolicyResponse;
const CreateNotificationConfigurationResponse = models.CreateNotificationConfigurationResponse;
const DescribeLaunchConfigurationsResponse = models.DescribeLaunchConfigurationsResponse;
const DeleteScalingPolicyResponse = models.DeleteScalingPolicyResponse;
const Tag = models.Tag;
const DescribeAutoScalingInstancesRequest = models.DescribeAutoScalingInstancesRequest;
const LimitedLoginSettings = models.LimitedLoginSettings;
const ModifyLoadBalancersRequest = models.ModifyLoadBalancersRequest;
const RemoveInstancesResponse = models.RemoveInstancesResponse;
const ModifyScalingPolicyResponse = models.ModifyScalingPolicyResponse;
const SetInstancesProtectionRequest = models.SetInstancesProtectionRequest;
const DeleteNotificationConfigurationResponse = models.DeleteNotificationConfigurationResponse;
const DetachInstancesResponse = models.DetachInstancesResponse;
const CreateLaunchConfigurationRequest = models.CreateLaunchConfigurationRequest;
const AutoScalingGroup = models.AutoScalingGroup;
const AttachInstancesResponse = models.AttachInstancesResponse;
const DescribeAutoScalingGroupLastActivitiesResponse = models.DescribeAutoScalingGroupLastActivitiesResponse;
const DescribeAccountLimitsRequest = models.DescribeAccountLimitsRequest;
const UpgradeLifecycleHookRequest = models.UpgradeLifecycleHookRequest;
const ScalingPolicy = models.ScalingPolicy;
const DescribeAutoScalingGroupLastActivitiesRequest = models.DescribeAutoScalingGroupLastActivitiesRequest;
const HostNameSettings = models.HostNameSettings;
const ModifyLoadBalancersResponse = models.ModifyLoadBalancersResponse;
const DescribePaiInstancesRequest = models.DescribePaiInstancesRequest;
const CreateNotificationConfigurationRequest = models.CreateNotificationConfigurationRequest;
const DescribeScheduledActionsResponse = models.DescribeScheduledActionsResponse;
const ModifyNotificationConfigurationRequest = models.ModifyNotificationConfigurationRequest;
const DeleteLifecycleHookRequest = models.DeleteLifecycleHookRequest;
const ModifyAutoScalingGroupResponse = models.ModifyAutoScalingGroupResponse;
const DeleteLaunchConfigurationRequest = models.DeleteLaunchConfigurationRequest;
const ModifyScalingPolicyRequest = models.ModifyScalingPolicyRequest;
const InstanceMarketOptionsRequest = models.InstanceMarketOptionsRequest;
const UpgradeLifecycleHookResponse = models.UpgradeLifecycleHookResponse;
const InstanceTag = models.InstanceTag;
const PaiInstance = models.PaiInstance;
const CreateAutoScalingGroupRequest = models.CreateAutoScalingGroupRequest;
const DeleteScheduledActionResponse = models.DeleteScheduledActionResponse;
const UpgradeLaunchConfigurationRequest = models.UpgradeLaunchConfigurationRequest;
const DescribeAutoScalingActivitiesResponse = models.DescribeAutoScalingActivitiesResponse;
const DescribeNotificationConfigurationsResponse = models.DescribeNotificationConfigurationsResponse;
const DataDisk = models.DataDisk;
const PreviewPaiDomainNameRequest = models.PreviewPaiDomainNameRequest;
const DeleteScalingPolicyRequest = models.DeleteScalingPolicyRequest;
const LoginSettings = models.LoginSettings;
const DetachInstancesRequest = models.DetachInstancesRequest;
const Instance = models.Instance;
const CreateScheduledActionRequest = models.CreateScheduledActionRequest;
const EnhancedService = models.EnhancedService;
const DeleteLaunchConfigurationResponse = models.DeleteLaunchConfigurationResponse;
const DescribeScheduledActionsRequest = models.DescribeScheduledActionsRequest;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeleteScheduledActionRequest = models.DeleteScheduledActionRequest;
const DescribeAutoScalingActivitiesRequest = models.DescribeAutoScalingActivitiesRequest;
const ModifyDesiredCapacityRequest = models.ModifyDesiredCapacityRequest;
const CreateScheduledActionResponse = models.CreateScheduledActionResponse;
const CreateLifecycleHookRequest = models.CreateLifecycleHookRequest;
const ScheduledAction = models.ScheduledAction;
const CompleteLifecycleActionResponse = models.CompleteLifecycleActionResponse;
const Filter = models.Filter;
const DescribeLifecycleHooksRequest = models.DescribeLifecycleHooksRequest;
const ServiceSettings = models.ServiceSettings;
const LaunchConfiguration = models.LaunchConfiguration;
const TargetAttribute = models.TargetAttribute;
const ModifyNotificationConfigurationResponse = models.ModifyNotificationConfigurationResponse;
const DescribeAutoScalingInstancesResponse = models.DescribeAutoScalingInstancesResponse;
const DescribeLifecycleHooksResponse = models.DescribeLifecycleHooksResponse;
const CreateScalingPolicyRequest = models.CreateScalingPolicyRequest;
const DeleteNotificationConfigurationRequest = models.DeleteNotificationConfigurationRequest;
const DescribeLaunchConfigurationsRequest = models.DescribeLaunchConfigurationsRequest;
const NotificationTarget = models.NotificationTarget;
const DeleteAutoScalingGroupResponse = models.DeleteAutoScalingGroupResponse;
const LifecycleActionResultInfo = models.LifecycleActionResultInfo;
const AutoScalingGroupAbstract = models.AutoScalingGroupAbstract;
const EnableAutoScalingGroupRequest = models.EnableAutoScalingGroupRequest;
const MetricAlarm = models.MetricAlarm;
const DescribeNotificationConfigurationsRequest = models.DescribeNotificationConfigurationsRequest;
const LifecycleHook = models.LifecycleHook;
const ForwardLoadBalancer = models.ForwardLoadBalancer;
const PreviewPaiDomainNameResponse = models.PreviewPaiDomainNameResponse;
const DeleteAutoScalingGroupRequest = models.DeleteAutoScalingGroupRequest;
const RemoveInstancesRequest = models.RemoveInstancesRequest;
const AttachInstancesRequest = models.AttachInstancesRequest;
const DescribeScalingPoliciesResponse = models.DescribeScalingPoliciesResponse;
const Activity = models.Activity;
const ModifyDesiredCapacityResponse = models.ModifyDesiredCapacityResponse;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const DeleteLifecycleHookResponse = models.DeleteLifecycleHookResponse;
const ActivtyRelatedInstance = models.ActivtyRelatedInstance;
const InternetAccessible = models.InternetAccessible;
const EnableAutoScalingGroupResponse = models.EnableAutoScalingGroupResponse;
const UpgradeLaunchConfigurationResponse = models.UpgradeLaunchConfigurationResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const DescribePaiInstancesResponse = models.DescribePaiInstancesResponse;
const ExecuteScalingPolicyRequest = models.ExecuteScalingPolicyRequest;


/**
 * as client
 * @class
 */
class AsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("as.tencentcloudapi.com", "2018-04-19", credential, region, profile);
    }
    
    /**
     * This API (ExecuteScalingPolicy) is used to execute a scaling policy.

* The scaling policy can be executed based on the scaling policy ID.
* When the auto scaling group to which the scaling policy belongs is performing a scaling activity, the scaling policy will be rejected.
     * @param {ExecuteScalingPolicyRequest} req
     * @param {function(string, ExecuteScalingPolicyResponse):void} cb
     * @public
     */
    ExecuteScalingPolicy(req, cb) {
        let resp = new ExecuteScalingPolicyResponse();
        this.request("ExecuteScalingPolicy", req, resp, cb);
    }

    /**
     * This API (CreateAutoScalingGroup) is used to create an auto scaling group.
     * @param {CreateAutoScalingGroupRequest} req
     * @param {function(string, CreateAutoScalingGroupResponse):void} cb
     * @public
     */
    CreateAutoScalingGroup(req, cb) {
        let resp = new CreateAutoScalingGroupResponse();
        this.request("CreateAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API (PreviewPaiDomainName) is used to preview a PAI domain name.

     * @param {PreviewPaiDomainNameRequest} req
     * @param {function(string, PreviewPaiDomainNameResponse):void} cb
     * @public
     */
    PreviewPaiDomainName(req, cb) {
        let resp = new PreviewPaiDomainNameResponse();
        this.request("PreviewPaiDomainName", req, resp, cb);
    }

    /**
     * This API (ModifyScalingPolicy) is used to modify an alarm trigger policy.
     * @param {ModifyScalingPolicyRequest} req
     * @param {function(string, ModifyScalingPolicyResponse):void} cb
     * @public
     */
    ModifyScalingPolicy(req, cb) {
        let resp = new ModifyScalingPolicyResponse();
        this.request("ModifyScalingPolicy", req, resp, cb);
    }

    /**
     * This API (DescribeNotificationConfigurations) is used to query the information of one or more notifications.

You can query the details of notifications based on information such as notification ID and auto scaling group ID. For more information on filters, see `Filter`.
If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of notifications of the current user will be returned.
     * @param {DescribeNotificationConfigurationsRequest} req
     * @param {function(string, DescribeNotificationConfigurationsResponse):void} cb
     * @public
     */
    DescribeNotificationConfigurations(req, cb) {
        let resp = new DescribeNotificationConfigurationsResponse();
        this.request("DescribeNotificationConfigurations", req, resp, cb);
    }

    /**
     * This API (DeleteAutoScalingGroup) is used to delete the specified auto scaling group that has no instances and remains inactive.
     * @param {DeleteAutoScalingGroupRequest} req
     * @param {function(string, DeleteAutoScalingGroupResponse):void} cb
     * @public
     */
    DeleteAutoScalingGroup(req, cb) {
        let resp = new DeleteAutoScalingGroupResponse();
        this.request("DeleteAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API (CreatePaiInstance) is used to create a PAI instance.
     * @param {CreatePaiInstanceRequest} req
     * @param {function(string, CreatePaiInstanceResponse):void} cb
     * @public
     */
    CreatePaiInstance(req, cb) {
        let resp = new CreatePaiInstanceResponse();
        this.request("CreatePaiInstance", req, resp, cb);
    }

    /**
     * This API (UpgradeLaunchConfiguration) is used to upgrade a launch configuration.

* This API is used to upgrade a launch configuration in a "completely overriding" manner, i.e., it uniformly sets a new configuration according to the API parameters regardless of the original parameters. If optional fields are left empty, their default values will be used.
* After the launch configuration is upgraded, the existing instances that have been created by it will not be changed, but new instances will be created according to the new configuration.
     * @param {UpgradeLaunchConfigurationRequest} req
     * @param {function(string, UpgradeLaunchConfigurationResponse):void} cb
     * @public
     */
    UpgradeLaunchConfiguration(req, cb) {
        let resp = new UpgradeLaunchConfigurationResponse();
        this.request("UpgradeLaunchConfiguration", req, resp, cb);
    }

    /**
     * This API (AttachInstances) is used to add CVM instances to an auto scaling group.

     * @param {AttachInstancesRequest} req
     * @param {function(string, AttachInstancesResponse):void} cb
     * @public
     */
    AttachInstances(req, cb) {
        let resp = new AttachInstancesResponse();
        this.request("AttachInstances", req, resp, cb);
    }

    /**
     * This API (DescribeScalingPolicies) is used to query alarm trigger policies.
     * @param {DescribeScalingPoliciesRequest} req
     * @param {function(string, DescribeScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeScalingPolicies(req, cb) {
        let resp = new DescribeScalingPoliciesResponse();
        this.request("DescribeScalingPolicies", req, resp, cb);
    }

    /**
     * This API (DeleteScheduledAction) is used to delete the specified scheduled task.
     * @param {DeleteScheduledActionRequest} req
     * @param {function(string, DeleteScheduledActionResponse):void} cb
     * @public
     */
    DeleteScheduledAction(req, cb) {
        let resp = new DeleteScheduledActionResponse();
        this.request("DeleteScheduledAction", req, resp, cb);
    }

    /**
     * This API (DetachInstances) is used to remove CVM instances from an auto scaling group. Instances removed via this API will not be terminated.
     * @param {DetachInstancesRequest} req
     * @param {function(string, DetachInstancesResponse):void} cb
     * @public
     */
    DetachInstances(req, cb) {
        let resp = new DetachInstancesResponse();
        this.request("DetachInstances", req, resp, cb);
    }

    /**
     * This API (CreateScheduledAction) is used to create a scheduled task.
     * @param {CreateScheduledActionRequest} req
     * @param {function(string, CreateScheduledActionResponse):void} cb
     * @public
     */
    CreateScheduledAction(req, cb) {
        let resp = new CreateScheduledActionResponse();
        this.request("CreateScheduledAction", req, resp, cb);
    }

    /**
     * This API (RemoveInstances) is used to remove CVM instances from an auto scaling group. Instances created automatically by AS will be terminated, while those added to the auto scaling group after creation will be removed and retained.
     * @param {RemoveInstancesRequest} req
     * @param {function(string, RemoveInstancesResponse):void} cb
     * @public
     */
    RemoveInstances(req, cb) {
        let resp = new RemoveInstancesResponse();
        this.request("RemoveInstances", req, resp, cb);
    }

    /**
     * This API (DeleteScalingPolicy) is used to delete an alarm trigger policy.
     * @param {DeleteScalingPolicyRequest} req
     * @param {function(string, DeleteScalingPolicyResponse):void} cb
     * @public
     */
    DeleteScalingPolicy(req, cb) {
        let resp = new DeleteScalingPolicyResponse();
        this.request("DeleteScalingPolicy", req, resp, cb);
    }

    /**
     * This API (CompleteLifecycleAction) is used to complete a lifecycle action.

* The result ("CONTINUE" or "ABANDON") of a specific lifecycle hook can be specified by calling this API. If this API is not called at all, the lifecycle hook will be processed based on the "DefaultResult" after timeout.

     * @param {CompleteLifecycleActionRequest} req
     * @param {function(string, CompleteLifecycleActionResponse):void} cb
     * @public
     */
    CompleteLifecycleAction(req, cb) {
        let resp = new CompleteLifecycleActionResponse();
        this.request("CompleteLifecycleAction", req, resp, cb);
    }

    /**
     * This API (ModifyLoadBalancers) is used to modify the load balancers of an auto scaling group.

* This API can specify a new load balancer configuration for the auto scaling group. The new configuration overwrites the original load balancer configuration.
* If you want to clear the load balancer for the auto scaling group, specify only the auto scaling group ID but not the specific load balancer when calling this API.
* This API modifies the load balancer of the auto scaling group and generate a scaling activity to asynchronously modify the load balancers of existing instances.
     * @param {ModifyLoadBalancersRequest} req
     * @param {function(string, ModifyLoadBalancersResponse):void} cb
     * @public
     */
    ModifyLoadBalancers(req, cb) {
        let resp = new ModifyLoadBalancersResponse();
        this.request("ModifyLoadBalancers", req, resp, cb);
    }

    /**
     * This API (ModifyDesiredCapacity) is used to modify the desired number of instances in the specified auto scaling group.
     * @param {ModifyDesiredCapacityRequest} req
     * @param {function(string, ModifyDesiredCapacityResponse):void} cb
     * @public
     */
    ModifyDesiredCapacity(req, cb) {
        let resp = new ModifyDesiredCapacityResponse();
        this.request("ModifyDesiredCapacity", req, resp, cb);
    }

    /**
     * This API (SetInstancesProtection) is used to enable scale-in protection for an instance.
When an instance has scale-in protection enabled, it will not be removed when scaling is triggered by replacement of unhealthy instances, alarm trigger policy, threshold change, etc.
     * @param {SetInstancesProtectionRequest} req
     * @param {function(string, SetInstancesProtectionResponse):void} cb
     * @public
     */
    SetInstancesProtection(req, cb) {
        let resp = new SetInstancesProtectionResponse();
        this.request("SetInstancesProtection", req, resp, cb);
    }

    /**
     * This API (ModifyNotificationConfiguration) is used to modify a notification.
     * @param {ModifyNotificationConfigurationRequest} req
     * @param {function(string, ModifyNotificationConfigurationResponse):void} cb
     * @public
     */
    ModifyNotificationConfiguration(req, cb) {
        let resp = new ModifyNotificationConfigurationResponse();
        this.request("ModifyNotificationConfiguration", req, resp, cb);
    }

    /**
     * This API (CreateLaunchConfiguration) is used to create a launch configuration.

* A few fields of a launch configuration can be modified through `ModifyLaunchConfigurationAttributes`. To use a new launch configuration, it is recommended to create it from scratch.

* You can create up to 20 launch configurations for each project. For more information, see [Usage Limits](https://cloud.tencent.com/document/product/377/3120).

     * @param {CreateLaunchConfigurationRequest} req
     * @param {function(string, CreateLaunchConfigurationResponse):void} cb
     * @public
     */
    CreateLaunchConfiguration(req, cb) {
        let resp = new CreateLaunchConfigurationResponse();
        this.request("CreateLaunchConfiguration", req, resp, cb);
    }

    /**
     * This API (ModifyAutoScalingGroup) is used to modify an auto scaling group.
     * @param {ModifyAutoScalingGroupRequest} req
     * @param {function(string, ModifyAutoScalingGroupResponse):void} cb
     * @public
     */
    ModifyAutoScalingGroup(req, cb) {
        let resp = new ModifyAutoScalingGroupResponse();
        this.request("ModifyAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API (CreateNotificationConfiguration) is used to create a notification.
     * @param {CreateNotificationConfigurationRequest} req
     * @param {function(string, CreateNotificationConfigurationResponse):void} cb
     * @public
     */
    CreateNotificationConfiguration(req, cb) {
        let resp = new CreateNotificationConfigurationResponse();
        this.request("CreateNotificationConfiguration", req, resp, cb);
    }

    /**
     * This API (DescribeAutoScalingInstances) is used to query the information of instances associated with AS.

* You can query the details of instances based on information such as instance ID and auto scaling group ID. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of instances of the current user will be returned.
     * @param {DescribeAutoScalingInstancesRequest} req
     * @param {function(string, DescribeAutoScalingInstancesResponse):void} cb
     * @public
     */
    DescribeAutoScalingInstances(req, cb) {
        let resp = new DescribeAutoScalingInstancesResponse();
        this.request("DescribeAutoScalingInstances", req, resp, cb);
    }

    /**
     * This API (CreateLifeCycleHook) is used to create a lifecycle hook.

* You can configure message notifications in the following format for lifecycle hooks, which will be sent to your CMQ queue by AS:

```
{
	"Service": "Tencent Cloud Auto Scaling",
	"Time": "2019-03-14T10:15:11Z",
	"AppId": "1251783334",
	"ActivityId": "asa-fznnvrja",
	"AutoScalingGroupId": "asg-rrrrtttt",
	"LifecycleHookId": "ash-xxxxyyyy",
	"LifecycleHookName": "my-hook",
	"LifecycleActionToken": "3080e1c9-0efe-4dd7-ad3b-90cd6618298f",
	"InstanceId": "ins-aaaabbbb",
	"LifecycleTransition": "INSTANCE_LAUNCHING",
	"NotificationMetadata": ""
}
```
     * @param {CreateLifecycleHookRequest} req
     * @param {function(string, CreateLifecycleHookResponse):void} cb
     * @public
     */
    CreateLifecycleHook(req, cb) {
        let resp = new CreateLifecycleHookResponse();
        this.request("CreateLifecycleHook", req, resp, cb);
    }

    /**
     * This API (UpgradeLifecycleHook) is used to upgrade a lifecycle hook.

* This API is used to upgrade a lifecycle hook in a "completely overriding" manner, i.e., it uniformly sets a new configuration according to the API parameters regardless of the original parameters. If optional fields are left empty, their default values will be used.

     * @param {UpgradeLifecycleHookRequest} req
     * @param {function(string, UpgradeLifecycleHookResponse):void} cb
     * @public
     */
    UpgradeLifecycleHook(req, cb) {
        let resp = new UpgradeLifecycleHookResponse();
        this.request("UpgradeLifecycleHook", req, resp, cb);
    }

    /**
     * This API (DisableAutoScalingGroup) is used to disable the specified auto scaling group.
     * @param {DisableAutoScalingGroupRequest} req
     * @param {function(string, DisableAutoScalingGroupResponse):void} cb
     * @public
     */
    DisableAutoScalingGroup(req, cb) {
        let resp = new DisableAutoScalingGroupResponse();
        this.request("DisableAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API (DescribeLaunchConfigurations) is used to query the information of launch configurations.

* You can query the launch configuration details based on information such as launch configuration ID and name. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of launch configurations of the current user will be returned.
     * @param {DescribeLaunchConfigurationsRequest} req
     * @param {function(string, DescribeLaunchConfigurationsResponse):void} cb
     * @public
     */
    DescribeLaunchConfigurations(req, cb) {
        let resp = new DescribeLaunchConfigurationsResponse();
        this.request("DescribeLaunchConfigurations", req, resp, cb);
    }

    /**
     * This API (DescribePaiInstances) is used to query the information of PAI instances.

* You can query the detailed information of PAI instances based on information such as instance ID and instance domain name. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of PAI instances of the current user will be returned.
     * @param {DescribePaiInstancesRequest} req
     * @param {function(string, DescribePaiInstancesResponse):void} cb
     * @public
     */
    DescribePaiInstances(req, cb) {
        let resp = new DescribePaiInstancesResponse();
        this.request("DescribePaiInstances", req, resp, cb);
    }

    /**
     * This API (CreateScalingPolicy) is used to create an alarm trigger policy.
     * @param {CreateScalingPolicyRequest} req
     * @param {function(string, CreateScalingPolicyResponse):void} cb
     * @public
     */
    CreateScalingPolicy(req, cb) {
        let resp = new CreateScalingPolicyResponse();
        this.request("CreateScalingPolicy", req, resp, cb);
    }

    /**
     * This API (DeleteLaunchConfiguration) is used to delete a launch configuration.

* If the launch configuration is active in an auto scaling group, it cannot be deleted.

     * @param {DeleteLaunchConfigurationRequest} req
     * @param {function(string, DeleteLaunchConfigurationResponse):void} cb
     * @public
     */
    DeleteLaunchConfiguration(req, cb) {
        let resp = new DeleteLaunchConfigurationResponse();
        this.request("DeleteLaunchConfiguration", req, resp, cb);
    }

    /**
     * This API (DeleteLifeCycleHook) is used to delete a lifecycle hook.
     * @param {DeleteLifecycleHookRequest} req
     * @param {function(string, DeleteLifecycleHookResponse):void} cb
     * @public
     */
    DeleteLifecycleHook(req, cb) {
        let resp = new DeleteLifecycleHookResponse();
        this.request("DeleteLifecycleHook", req, resp, cb);
    }

    /**
     * This API is used to query the latest activity history of an auto scaling group.
     * @param {DescribeAutoScalingGroupLastActivitiesRequest} req
     * @param {function(string, DescribeAutoScalingGroupLastActivitiesResponse):void} cb
     * @public
     */
    DescribeAutoScalingGroupLastActivities(req, cb) {
        let resp = new DescribeAutoScalingGroupLastActivitiesResponse();
        this.request("DescribeAutoScalingGroupLastActivities", req, resp, cb);
    }

    /**
     * This API (DescribeLifecycleHooks) is used to query the information of lifecycle hooks.

* You can query the details of lifecycle hooks based on information such as auto scaling group ID, lifecycle hook ID, or lifecycle hook name. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of lifecycle hooks of the current user will be returned.
     * @param {DescribeLifecycleHooksRequest} req
     * @param {function(string, DescribeLifecycleHooksResponse):void} cb
     * @public
     */
    DescribeLifecycleHooks(req, cb) {
        let resp = new DescribeLifecycleHooksResponse();
        this.request("DescribeLifecycleHooks", req, resp, cb);
    }

    /**
     * This API (EnableAutoScalingGroup) is used to enable the specified auto scaling group.
     * @param {EnableAutoScalingGroupRequest} req
     * @param {function(string, EnableAutoScalingGroupResponse):void} cb
     * @public
     */
    EnableAutoScalingGroup(req, cb) {
        let resp = new EnableAutoScalingGroupResponse();
        this.request("EnableAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API (DescribeScheduledActions) is used to query the details of one or more scheduled tasks.

* You can query the details of scheduled tasks based on information such as scheduled task ID, scheduled task name, or auto scaling group ID. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of scheduled tasks of the current user will be returned.
     * @param {DescribeScheduledActionsRequest} req
     * @param {function(string, DescribeScheduledActionsResponse):void} cb
     * @public
     */
    DescribeScheduledActions(req, cb) {
        let resp = new DescribeScheduledActionsResponse();
        this.request("DescribeScheduledActions", req, resp, cb);
    }

    /**
     * This API (DescribeAutoScalingGroups) is used to query the information of auto scaling groups.

* You can query the details of auto scaling groups based on information such as auto scaling group ID, auto scaling group name, or launch configuration ID. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of auto scaling groups of the current user will be returned.
     * @param {DescribeAutoScalingGroupsRequest} req
     * @param {function(string, DescribeAutoScalingGroupsResponse):void} cb
     * @public
     */
    DescribeAutoScalingGroups(req, cb) {
        let resp = new DescribeAutoScalingGroupsResponse();
        this.request("DescribeAutoScalingGroups", req, resp, cb);
    }

    /**
     * This API (ModifyScheduledAction) is used to modify a scheduled task.
     * @param {ModifyScheduledActionRequest} req
     * @param {function(string, ModifyScheduledActionResponse):void} cb
     * @public
     */
    ModifyScheduledAction(req, cb) {
        let resp = new ModifyScheduledActionResponse();
        this.request("ModifyScheduledAction", req, resp, cb);
    }

    /**
     * This API (DescribeAutoScalingActivities) is used to query the activity history of an auto scaling group.
     * @param {DescribeAutoScalingActivitiesRequest} req
     * @param {function(string, DescribeAutoScalingActivitiesResponse):void} cb
     * @public
     */
    DescribeAutoScalingActivities(req, cb) {
        let resp = new DescribeAutoScalingActivitiesResponse();
        this.request("DescribeAutoScalingActivities", req, resp, cb);
    }

    /**
     * This API (DeleteNotificationConfiguration) is used to delete the specified notification.
     * @param {DeleteNotificationConfigurationRequest} req
     * @param {function(string, DeleteNotificationConfigurationResponse):void} cb
     * @public
     */
    DeleteNotificationConfiguration(req, cb) {
        let resp = new DeleteNotificationConfigurationResponse();
        this.request("DeleteNotificationConfiguration", req, resp, cb);
    }

    /**
     * This API (DescribeAccountLimits) is used to query the limits of user's AS resources.
     * @param {DescribeAccountLimitsRequest} req
     * @param {function(string, DescribeAccountLimitsResponse):void} cb
     * @public
     */
    DescribeAccountLimits(req, cb) {
        let resp = new DescribeAccountLimitsResponse();
        this.request("DescribeAccountLimits", req, resp, cb);
    }

    /**
     * This API (ModifyLaunchConfigurationAttributes) is used to modify some attributes of a launch configuration.

* The changes of launch configuration do not affect the existing instances. New instances will be created based on the modified configuration.
* This API supports modifying certain simple types of attributes.
     * @param {ModifyLaunchConfigurationAttributesRequest} req
     * @param {function(string, ModifyLaunchConfigurationAttributesResponse):void} cb
     * @public
     */
    ModifyLaunchConfigurationAttributes(req, cb) {
        let resp = new ModifyLaunchConfigurationAttributesResponse();
        this.request("ModifyLaunchConfigurationAttributes", req, resp, cb);
    }


}
module.exports = AsClient;
