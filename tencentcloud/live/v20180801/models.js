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
 * CreateLiveSnapshotRule request structure.
 * @class
 */
class CreateLiveSnapshotRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
Note: if this parameter is a non-empty string, the rule will take effect only for the particular stream.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * Bandwidth and traffic information.
 * @class
 */
class BillDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Bandwidth in Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Traffic in MB.
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * Time point of peak value in the format of `yyyy-mm-dd HH:MM:SS`. As raw data is at a 5-minute granularity, if data at a 1-hour or 1-day granularity is queried, the time point of peak bandwidth value at the corresponding granularity will be returned.
         * @type {string || null}
         */
        this.PeakTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.PeakTime = 'PeakTime' in params ? params.PeakTime : null;

    }
}

/**
 * EnableLiveDomain response structure.
 * @class
 */
class EnableLiveDomainResponse extends  AbstractModel {
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
 * CreateLiveCert request structure.
 * @class
 */
class CreateLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate type. 0: user-added certificate, 1: Tencent Cloud-hosted certificate.
Note: if the certificate type is 0, `HttpsCrt` and `HttpsKey` are required;
If the certificate type is 1, the certificate corresponding to `CloudCertId` will be used first. If `CloudCertId` is empty, `HttpsCrt` and `HttpsKey` will be used.
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * Certificate name.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Certificate content, i.e., public key.
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * Private key.
         * @type {string || null}
         */
        this.HttpsKey = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Tencent Cloud-hosted certificate ID.
         * @type {string || null}
         */
        this.CloudCertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.HttpsKey = 'HttpsKey' in params ? params.HttpsKey : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CloudCertId = 'CloudCertId' in params ? params.CloudCertId : null;

    }
}

/**
 * DescribeLiveCallbackTemplates request structure.
 * @class
 */
class DescribeLiveCallbackTemplatesRequest extends  AbstractModel {
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
 * DeleteLiveRecordRule request structure.
 * @class
 */
class DeleteLiveRecordRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
Domain name+AppName+StreamName uniquely identifies a single transcoding rule. If you need to delete it, strong match is required. For example, even if AppName is blank, you need to pass in a blank string to make a strong match.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
Domain name+AppName+StreamName uniquely identifies a single transcoding rule. If you need to delete it, strong match is required. For example, even if AppName is blank, you need to pass in a blank string to make a strong match.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
Domain name+AppName+StreamName uniquely identifies a single transcoding rule. If you need to delete it, strong match is required. For example, even if AppName is blank, you need to pass in a blank string to make a strong match.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * ResumeLiveStream request structure.
 * @class
 */
class ResumeLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveTranscodeTemplate response structure.
 * @class
 */
class DeleteLiveTranscodeTemplateResponse extends  AbstractModel {
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
 * CreateLiveSnapshotTemplate request structure.
 * @class
 */
class CreateLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name.
Maximum length: 255 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * COS application ID.
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * COS region.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Description.
Maximum length: 1,024 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Screencapturing interval in seconds. Default value: 10s.
Value range: 5–600s.
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * Screenshot width. Default value: 0 (original width).
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Screenshot height. Default value: 0 (original height).
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whether to enable porn detection. 0: no, 1: yes. Default value: 0
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * COS bucket folder prefix.
         * @type {string || null}
         */
        this.CosPrefix = null;

        /**
         * COS filename.
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosPrefix = 'CosPrefix' in params ? params.CosPrefix : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

    }
}

/**
 * Transcoding template information.
 * @class
 */
class TemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video encoding format:
h264/h265.
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Video bitrate. Value range: 100–8000 Kbps.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Audio codec. Valid values: aac, mp3.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. Value range: 0–500 Kbps.
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Width. Value range: 0–3000.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height. Value range: 0–3000.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame rate. Value range: 0–200 FPS.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Keyframe interval. Value range: 1–50s.
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * Rotation angle. Valid values: 0, 90, 180, 270.
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Encoding quality. Valid values:
baseline, main, high.
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * Whether to not exceed the original bitrate. 0: no; 1: yes.
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * Whether to not exceed the original height. 0: no; 1: yes.
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * Whether to not exceed the original frame rate. 0: no; 1: yes.
         * @type {number || null}
         */
        this.FpsToOrig = null;

        /**
         * Whether to keep the video. 0: no; 1: yes.
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * Whether to keep the audio. 0: no; 1: yes.
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether it is a top speed codec template. 0: no, 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.AiTransCode = null;

        /**
         * `VideoBitrate` minus top speed codec bitrate. Value range: 0.1–0.5.
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AiTransCode = 'AiTransCode' in params ? params.AiTransCode : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;

    }
}

/**
 * DeleteLiveCallbackRule response structure.
 * @class
 */
class DeleteLiveCallbackRuleResponse extends  AbstractModel {
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
 * DescribeLiveWatermarkRules response structure.
 * @class
 */
class DescribeLiveWatermarkRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermarking rule list.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveCallbackTemplate response structure.
 * @class
 */
class DescribeLiveCallbackTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback template information.
         * @type {CallBackTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new CallBackTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveSnapshotTemplate request structure.
 * @class
 */
class DeleteLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get from the returned value of the [CreateLiveSnapshotTemplate](/document/product/267/32624) API call.
2. You can query the list of created screencapturing templates through the [DescribeLiveSnapshotTemplates](/document/product/267/32619) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeGroupProIspPlayInfoList response structure.
 * @class
 */
class DescribeGroupProIspPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data content.
         * @type {Array.<GroupProIspDataInfo> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new GroupProIspDataInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Push authentication key information.
 * @class
 */
class PushAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable. 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Master authentication key.
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * Standby authentication key.
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * Validity period in seconds.
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MasterAuthKey = 'MasterAuthKey' in params ? params.MasterAuthKey : null;
        this.BackupAuthKey = 'BackupAuthKey' in params ? params.BackupAuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;

    }
}

/**
 * DeleteLiveRecordTemplate request structure.
 * @class
 */
class DeleteLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteLiveCallbackTemplate response structure.
 * @class
 */
class DeleteLiveCallbackTemplateResponse extends  AbstractModel {
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
 * DescribeLiveStreamOnlineList response structure.
 * @class
 */
class DescribeLiveStreamOnlineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries displayed per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Active push information list.
         * @type {Array.<StreamOnlineInfo> || null}
         */
        this.OnlineInfo = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.OnlineInfo) {
            this.OnlineInfo = new Array();
            for (let z in params.OnlineInfo) {
                let obj = new StreamOnlineInfo();
                obj.deserialize(params.OnlineInfo[z]);
                this.OnlineInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Push quality data of a stream.
 * @class
 */
class PushQualityData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data time in the format of `%Y-%m-%d %H:%M:%S.%ms` and accurate down to the millisecond level.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * Push path.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push client IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Push start time in the format of `%Y-%m-%d %H:%M:%S.%ms` and accurate down to the millisecond level.
         * @type {string || null}
         */
        this.BeginPushTime = null;

        /**
         * Resolution information.
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * Video codec.
         * @type {string || null}
         */
        this.VCodec = null;

        /**
         * Audio codec.
         * @type {string || null}
         */
        this.ACodec = null;

        /**
         * Push serial number, which uniquely identifies a push.
         * @type {string || null}
         */
        this.Sequence = null;

        /**
         * Video frame rate.
         * @type {number || null}
         */
        this.VideoFps = null;

        /**
         * Video bitrate in bps.
         * @type {number || null}
         */
        this.VideoRate = null;

        /**
         * Audio frame rate.
         * @type {number || null}
         */
        this.AudioFps = null;

        /**
         * Audio bitrate in bps.
         * @type {number || null}
         */
        this.AudioRate = null;

        /**
         * Local elapsed time in milliseconds. The greater the difference between audio/video elapsed time and local elapsed time, the poorer the push quality and the more serious the upstream lag.
         * @type {number || null}
         */
        this.LocalTs = null;

        /**
         * Video elapsed time in milliseconds.
         * @type {number || null}
         */
        this.VideoTs = null;

        /**
         * Audio elapsed time in milliseconds.
         * @type {number || null}
         */
        this.AudioTs = null;

        /**
         * Video bitrate in `metadata` in Kbps.
         * @type {number || null}
         */
        this.MetaVideoRate = null;

        /**
         * Audio bitrate in `metadata` in Kbps.
         * @type {number || null}
         */
        this.MetaAudioRate = null;

        /**
         * Frame rate in `metadata`.
         * @type {number || null}
         */
        this.MateFps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.BeginPushTime = 'BeginPushTime' in params ? params.BeginPushTime : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.VCodec = 'VCodec' in params ? params.VCodec : null;
        this.ACodec = 'ACodec' in params ? params.ACodec : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;
        this.VideoFps = 'VideoFps' in params ? params.VideoFps : null;
        this.VideoRate = 'VideoRate' in params ? params.VideoRate : null;
        this.AudioFps = 'AudioFps' in params ? params.AudioFps : null;
        this.AudioRate = 'AudioRate' in params ? params.AudioRate : null;
        this.LocalTs = 'LocalTs' in params ? params.LocalTs : null;
        this.VideoTs = 'VideoTs' in params ? params.VideoTs : null;
        this.AudioTs = 'AudioTs' in params ? params.AudioTs : null;
        this.MetaVideoRate = 'MetaVideoRate' in params ? params.MetaVideoRate : null;
        this.MetaAudioRate = 'MetaAudioRate' in params ? params.MetaAudioRate : null;
        this.MateFps = 'MateFps' in params ? params.MateFps : null;

    }
}

/**
 * ModifyLivePlayAuthKey request structure.
 * @class
 */
class ModifyLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable. 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Authentication key.
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * Validity period in seconds.
         * @type {number || null}
         */
        this.AuthDelta = null;

        /**
         * Authentication backkey.
         * @type {string || null}
         */
        this.AuthBackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;
        this.AuthBackKey = 'AuthBackKey' in params ? params.AuthBackKey : null;

    }
}

/**
 * DescribeLiveDelayInfoList request structure.
 * @class
 */
class DescribeLiveDelayInfoListRequest extends  AbstractModel {
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
 * Domain name certificate information
 * @class
 */
class DomainCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * Certificate name.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time in UTC format.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Certificate content.
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * Certificate type.
0: user-added certificate
1: Tencent Cloud-hosted certificate.
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * Certificate expiration time in UTC format.
         * @type {string || null}
         */
        this.CertExpireTime = null;

        /**
         * Domain name that uses this certificate.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Certificate status.
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Recording template information
 * @class
 */
class RecordTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Message description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * FLV recording parameter.
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * HLS recording parameter.
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * MP4 recording parameter.
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * AAC recording parameter.
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * 0: LVB,
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * Custom HLS recording parameter
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

        /**
         * MP3 recording parameter.
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }

    }
}

/**
 * DeleteLiveTranscodeRule response structure.
 * @class
 */
class DeleteLiveTranscodeRuleResponse extends  AbstractModel {
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
 * Number of concurrent recording channels
 * @class
 */
class ConcurrentRecordStreamNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Number of channels.
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * ModifyLiveSnapshotTemplate response structure.
 * @class
 */
class ModifyLiveSnapshotTemplateResponse extends  AbstractModel {
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
 * ModifyLivePushAuthKey request structure.
 * @class
 */
class ModifyLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable. 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Master authentication key.
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * Backup authentication key.
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * Validity period in seconds.
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MasterAuthKey = 'MasterAuthKey' in params ? params.MasterAuthKey : null;
        this.BackupAuthKey = 'BackupAuthKey' in params ? params.BackupAuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;

    }
}

/**
 * DeleteLiveSnapshotTemplate response structure.
 * @class
 */
class DeleteLiveSnapshotTemplateResponse extends  AbstractModel {
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
 * DescribeLiveStreamState request structure.
 * @class
 */
class DescribeLiveStreamStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLivePlayAuthKey response structure.
 * @class
 */
class DescribeLivePlayAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback authentication key information.
         * @type {PlayAuthKeyInfo || null}
         */
        this.PlayAuthKeyInfo = null;

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

        if (params.PlayAuthKeyInfo) {
            let obj = new PlayAuthKeyInfo();
            obj.deserialize(params.PlayAuthKeyInfo)
            this.PlayAuthKeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveSnapshotTemplate request structure.
 * @class
 */
class DescribeLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
Template ID returned by the [CreateLiveSnapshotTemplate](/document/product/267/32624) API call.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * LVB domain name information
 * @class
 */
class DomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * LVB domain name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Domain name type:
0: push.
1: playback.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Domain name status:
0: deactivated.
1: activated.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether there is a CNAME record pointing to a fixed rule domain name:
0: no.
1: yes.
         * @type {number || null}
         */
        this.BCName = null;

        /**
         * Domain name corresponding to CNAME record.
         * @type {string || null}
         */
        this.TargetDomain = null;

        /**
         * Playback region. This parameter is valid only if `Type` is 1.
1: in Mainland China.
2: global.
3: outside Mainland China.
         * @type {number || null}
         */
        this.PlayType = null;

        /**
         * Whether it is LCB:
0: LVB.
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * Information of currently used CNAME record.
         * @type {string || null}
         */
        this.CurrentCName = null;

        /**
         * Disused parameter, which can be ignored.
         * @type {number || null}
         */
        this.RentTag = null;

        /**
         * Disused parameter, which can be ignored.
         * @type {string || null}
         */
        this.RentExpireTime = null;

        /**
         * 0: LVB.
1: LVB on Mini Program.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsMiniProgramLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BCName = 'BCName' in params ? params.BCName : null;
        this.TargetDomain = 'TargetDomain' in params ? params.TargetDomain : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;
        this.CurrentCName = 'CurrentCName' in params ? params.CurrentCName : null;
        this.RentTag = 'RentTag' in params ? params.RentTag : null;
        this.RentExpireTime = 'RentExpireTime' in params ? params.RentExpireTime : null;
        this.IsMiniProgramLive = 'IsMiniProgramLive' in params ? params.IsMiniProgramLive : null;

    }
}

/**
 * DescribeLiveTranscodeRules request structure.
 * @class
 */
class DescribeLiveTranscodeRulesRequest extends  AbstractModel {
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
 * DeleteLiveSnapshotRule request structure.
 * @class
 */
class DeleteLiveSnapshotRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeBillBandwidthAndFluxList request structure.
 * @class
 */
class DescribeBillBandwidthAndFluxListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time point in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time point in the format of `yyyy-mm-dd HH:MM:SS`. The difference between the start time and end time cannot be greater than 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * LVB playback domain name. If this parameter is left empty, full data will be queried.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * Valid values:
Mainland: query data for Mainland China,
Oversea: query data for regions outside Mainland China,
Default: query data for all regions.
Note: LEB only supports querying data for all regions.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * Data granularity. Valid values:
5: 5-minute granularity (the query time span should be within 1 day),
60: 1-hour granularity (the query time span should be within one month),
1440: 1-day granularity (the query time span should be within one month).
Default value: 5.
         * @type {number || null}
         */
        this.Granularity = null;

        /**
         * Service name. Valid values: LVB, LEB. Default value: LVB.
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * General stream mix output parameter.
 * @class
 */
class CommonMixOutputParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output stream name.
         * @type {string || null}
         */
        this.OutputStreamName = null;

        /**
         * Output stream type. Valid values: [0,1].
If this parameter is left empty, 0 will be used by default.
If the output stream is a stream in the input stream list, enter 0.
If you want the stream mix result to be a new stream, enter 1.
If this value is 1, `output_stream_id` cannot appear in `input_stram_list`, and there cannot be a stream with the same ID on the LVB backend.
         * @type {number || null}
         */
        this.OutputStreamType = null;

        /**
         * Output stream bitrate. Value range: [1,50000].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputStreamBitRate = null;

        /**
         * Output stream GOP size. Value range: [1,10].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputStreamGop = null;

        /**
         * Output stream frame rate. Value range: [1,60].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputStreamFrameRate = null;

        /**
         * Output stream audio bitrate. Value range: [1,500]
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputAudioBitRate = null;

        /**
         * Output stream audio sample rate. Valid values: [96000, 88200, 64000, 48000, 44100, 32000,24000, 22050, 16000, 12000, 11025, 8000].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputAudioSampleRate = null;

        /**
         * Output stream audio sound channel. Valid values: [1,2].
If this parameter is left empty, the system will automatically determine.
         * @type {number || null}
         */
        this.OutputAudioChannels = null;

        /**
         * SEI information in output stream. If there are no special needs, leave it empty.
         * @type {string || null}
         */
        this.MixSei = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputStreamName = 'OutputStreamName' in params ? params.OutputStreamName : null;
        this.OutputStreamType = 'OutputStreamType' in params ? params.OutputStreamType : null;
        this.OutputStreamBitRate = 'OutputStreamBitRate' in params ? params.OutputStreamBitRate : null;
        this.OutputStreamGop = 'OutputStreamGop' in params ? params.OutputStreamGop : null;
        this.OutputStreamFrameRate = 'OutputStreamFrameRate' in params ? params.OutputStreamFrameRate : null;
        this.OutputAudioBitRate = 'OutputAudioBitRate' in params ? params.OutputAudioBitRate : null;
        this.OutputAudioSampleRate = 'OutputAudioSampleRate' in params ? params.OutputAudioSampleRate : null;
        this.OutputAudioChannels = 'OutputAudioChannels' in params ? params.OutputAudioChannels : null;
        this.MixSei = 'MixSei' in params ? params.MixSei : null;

    }
}

/**
 * DescribeLiveSnapshotRules response structure.
 * @class
 */
class DescribeLiveSnapshotRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule list.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomain request structure.
 * @class
 */
class DescribeLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveStreamPublishedList request structure.
 * @class
 */
class DescribeLiveStreamPublishedListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * End time.
In UTC format, such as 2016-06-30T19:00:00Z.
This cannot be after the current time.
Note: The difference between EndTime and StartTime cannot be greater than 30 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Start time. 
In UTC format, such as 2016-06-29T19:00:00Z.
This supports querying data in the past 60 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default. Fuzzy match is not supported.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Page number to get.
Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
Maximum value: 100.
Value range: any integer between 1 and 100.
Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Stream name, which supports fuzzy match.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveTranscodeRule request structure.
 * @class
 */
class DeleteLiveTranscodeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * CreateLiveRecordRule request structure.
 * @class
 */
class CreateLiveRecordRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
Note: If the parameter is a non-empty string, the rule will be only applicable to the particular stream.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLiveSnapshotTemplates request structure.
 * @class
 */
class DescribeLiveSnapshotTemplatesRequest extends  AbstractModel {
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
 * AddLiveWatermark response structure.
 * @class
 */
class AddLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
         * @type {number || null}
         */
        this.WatermarkId = null;

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
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveDomainCert response structure.
 * @class
 */
class DescribeLiveDomainCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate information.
         * @type {DomainCertInfo || null}
         */
        this.DomainCertInfo = null;

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

        if (params.DomainCertInfo) {
            let obj = new DomainCertInfo();
            obj.deserialize(params.DomainCertInfo)
            this.DomainCertInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveRecordTemplate request structure.
 * @class
 */
class DescribeLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyLiveDomainCert request structure.
 * @class
 */
class ModifyLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * Status. 0: off, 1: on.
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateLiveWatermarkRule response structure.
 * @class
 */
class CreateLiveWatermarkRuleResponse extends  AbstractModel {
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
 * DescribeProIspPlaySumInfoList request structure.
 * @class
 */
class DescribeProIspPlaySumInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (Beijing time).
In the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (Beijing time).
In the format of `yyyy-mm-dd HH:MM:SS`.
Note: `EndTime` and `StartTime` only support querying data for the last day.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistics type. Valid values: Province, Isp, CountryOrArea.
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * If this parameter is left empty, full data will be queried.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * Page number. Value range: [1,1000]. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1,1000]. Default value: 20.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Region. Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China), China (data for China, including Hong Kong, Macao, and Taiwan), Foreign (data for regions outside China, excluding Hong Kong, Macao, and Taiwan), Global (default). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * Language used in the output field. Valid values: Chinese (default), English. Currently, country/region, district, and ISP parameters support multiple languages.
         * @type {string || null}
         */
        this.OutLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.OutLanguage = 'OutLanguage' in params ? params.OutLanguage : null;

    }
}

/**
 * DescribeConcurrentRecordStreamNum response structure.
 * @class
 */
class DescribeConcurrentRecordStreamNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics list.
         * @type {Array.<ConcurrentRecordStreamNum> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new ConcurrentRecordStreamNum();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLiveTranscodeTemplate response structure.
 * @class
 */
class ModifyLiveTranscodeTemplateResponse extends  AbstractModel {
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
 * ModifyLiveRecordTemplate response structure.
 * @class
 */
class ModifyLiveRecordTemplateResponse extends  AbstractModel {
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
 * ModifyLivePlayDomain request structure.
 * @class
 */
class ModifyLivePlayDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Pull domain name type. 1: Mainland China. 2: global, 3: outside Mainland China
         * @type {number || null}
         */
        this.PlayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;

    }
}

/**
 * DeleteLiveRecordTemplate response structure.
 * @class
 */
class DeleteLiveRecordTemplateResponse extends  AbstractModel {
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
 * DescribeLiveWatermark request structure.
 * @class
 */
class DescribeLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * AddDelayLiveStream request structure.
 * @class
 */
class AddDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Delay time in seconds, up to 600s.
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * Expiration time of the configured delayed playback in UTC format, such as 2018-11-29T19:00:00Z.
Notes:
1. The configuration will expire after 7 days by default and can last up to 7 days.
2. The Beijing time is in UTC+8. This value should be in the format as required by ISO 8601. For more information, please see [ISO Date and Time Format](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeLiveDomainCert request structure.
 * @class
 */
class DescribeLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveStreamEventList request structure.
 * @class
 */
class DescribeLiveStreamEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time. 
In UTC format, such as 2018-12-29T19:00:00Z.
This supports querying the history of 60 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
In UTC format, such as 2018-12-29T20:00:00Z.
This cannot be after the current time and cannot be more than 30 days after the start time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name; query with wildcard (*) is not supported; fuzzy match by default.
The IsStrict field can be used to change to exact query.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Page number to get.
Default value: 1.
Note: Currently, query for up to 10,000 entries is supported.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
Maximum value: 100.
Value range: any integer between 1 and 100.
Default value: 10.
Note: Currently, query for up to 10,000 entries is supported.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Whether to filter. No filtering by default.
0: No filtering at all.
1: Filter out the failing streams and return only the successful ones.
         * @type {number || null}
         */
        this.IsFilter = null;

        /**
         * Whether to query exactly. Fuzzy match by default.
0: Fuzzy match.
1: Exact query.
Note: This parameter takes effect when StreamName is used.
         * @type {number || null}
         */
        this.IsStrict = null;

        /**
         * Whether to display in ascending order by end time. Descending order by default.
0: Descending.
1: Ascending.
         * @type {number || null}
         */
        this.IsAsc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.IsFilter = 'IsFilter' in params ? params.IsFilter : null;
        this.IsStrict = 'IsStrict' in params ? params.IsStrict : null;
        this.IsAsc = 'IsAsc' in params ? params.IsAsc : null;

    }
}

/**
 * Callback template information.
 * @class
 */
class CallBackTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Stream starting callback URL.
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * Interruption callback URL.
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * Stream mixing callback URL.
         * @type {string || null}
         */
        this.StreamMixNotifyUrl = null;

        /**
         * Recording callback URL.
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * Screencapturing callback URL.
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * Porn detection callback URL.
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * Callback authentication key.
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.StreamMixNotifyUrl = 'StreamMixNotifyUrl' in params ? params.StreamMixNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * UnBindLiveDomainCert request structure.
 * @class
 */
class UnBindLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DeleteLiveRecord response structure.
 * @class
 */
class DeleteLiveRecordResponse extends  AbstractModel {
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
 * ForbidLiveStream request structure.
 * @class
 */
class ForbidLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Your push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Time to resume the stream in UTC format, such as 2018-11-29T19:00:00Z.
Notes:
1. The duration of forbidding is 7 days by default and can be up to 90 days.
2. The Beijing time is in UTC+8. This value should be in the format as required by ISO 8601. For more information, please see [ISO Date and Time Format](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.ResumeTime = null;

        /**
         * Reason for forbidding.
Note: Be sure to enter the reason for forbidding to avoid any faulty operations.
Length limit: 2,048 bytes.
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DescribeLiveDomains response structure.
 * @class
 */
class DescribeLiveDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * List of domain name details.
         * @type {Array.<DomainInfo> || null}
         */
        this.DomainList = null;

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
        this.AllCount = 'AllCount' in params ? params.AllCount : null;

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new DomainInfo();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Queries active push information
 * @class
 */
class StreamOnlineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push time list
         * @type {Array.<PublishTime> || null}
         */
        this.PublishTimeList = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

        if (params.PublishTimeList) {
            this.PublishTimeList = new Array();
            for (let z in params.PublishTimeList) {
                let obj = new PublishTime();
                obj.deserialize(params.PublishTimeList[z]);
                this.PublishTimeList.push(obj);
            }
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * CreateLiveRecord response structure.
 * @class
 */
class CreateLiveRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which uniquely identifies a recording task globally.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rule information.
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * UpdateLiveWatermark response structure.
 * @class
 */
class UpdateLiveWatermarkResponse extends  AbstractModel {
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
 * CreateLiveTranscodeTemplate response structure.
 * @class
 */
class CreateLiveTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLivePlayDomain response structure.
 * @class
 */
class ModifyLivePlayDomainResponse extends  AbstractModel {
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
 * CancelCommonMixStream response structure.
 * @class
 */
class CancelCommonMixStreamResponse extends  AbstractModel {
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
 * AddLiveWatermark request structure.
 * @class
 */
class AddLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark image URL.
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * Watermark name.
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * Display position: X-axis offset. Default value: 0.
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * Display position: Y-axis offset. Default value: 0.
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * Watermark width or its percentage of the live streaming video width. It is recommended to just specify either height or width as the other will be scaled proportionally to avoid distortions. The original width is used by default.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Watermark height or its percentage of the live streaming video width. It is recommended to just specify either height or width as the other will be scaled proportionally to avoid distortions. The original height is used by default.
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DescribeLiveCerts response structure.
 * @class
 */
class DescribeLiveCertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate information list.
         * @type {Array.<CertInfo> || null}
         */
        this.CertInfoSet = null;

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

        if (params.CertInfoSet) {
            this.CertInfoSet = new Array();
            for (let z in params.CertInfoSet) {
                let obj = new CertInfo();
                obj.deserialize(params.CertInfoSet[z]);
                this.CertInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * General stream mix input parameter.
 * @class
 */
class CommonMixInputParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input stream name of up to 80 bytes, which is a string containing letters, digits, and underscores.
         * @type {string || null}
         */
        this.InputStreamName = null;

        /**
         * Input stream layout parameter.
         * @type {CommonMixLayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * Input stream crop parameter.
         * @type {CommonMixCropParams || null}
         */
        this.CropParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputStreamName = 'InputStreamName' in params ? params.InputStreamName : null;

        if (params.LayoutParams) {
            let obj = new CommonMixLayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.CropParams) {
            let obj = new CommonMixCropParams();
            obj.deserialize(params.CropParams)
            this.CropParams = obj;
        }

    }
}

/**
 * ResumeDelayLiveStream request structure.
 * @class
 */
class ResumeDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DescribeLiveRecordTemplates response structure.
 * @class
 */
class DescribeLiveRecordTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording template information list.
         * @type {Array.<RecordTemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new RecordTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveCert request structure.
 * @class
 */
class DescribeLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DeleteLiveWatermark response structure.
 * @class
 */
class DeleteLiveWatermarkResponse extends  AbstractModel {
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
 * ModifyLivePlayAuthKey response structure.
 * @class
 */
class ModifyLivePlayAuthKeyResponse extends  AbstractModel {
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
 * CreateLiveCallbackTemplate request structure.
 * @class
 */
class CreateLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name.
Maximum length: 255 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
Maximum length: 1,024 bytes.
Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Stream starting callback URL,
Protocol document: [Event Message Notification](/document/product/267/32744).
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * Interruption callback URL,
Protocol document: [Event Message Notification](/document/product/267/32744).
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * Recording callback URL,
Protocol document: [Event Message Notification](/document/product/267/32744).
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * Screencapturing callback URL,
Protocol document: [Event Message Notification](/document/product/267/32744).
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * Porn detection callback URL,
Protocol document: [Event Message Notification](/document/product/267/32741).
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * Callback key. The callback URL is public. For the callback signature, please see the event message notification document.
[Event Message Notification](/document/product/267/32744).
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DropLiveStream response structure.
 * @class
 */
class DropLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveStreamState response structure.
 * @class
 */
class DescribeLiveStreamStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream status,
active: active
inactive: Inactive
forbid: forbidden.
         * @type {string || null}
         */
        this.StreamState = null;

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
        this.StreamState = 'StreamState' in params ? params.StreamState : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveWatermarkRule request structure.
 * @class
 */
class DeleteLiveWatermarkRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * Streaming event information.
 * @class
 */
class StreamEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push start time.
In UTC format, such as 2019-01-07T12:00:00Z.
         * @type {string || null}
         */
        this.StreamStartTime = null;

        /**
         * Push end time.
In UTC format, such as 2019-01-07T15:00:00Z.
         * @type {string || null}
         */
        this.StreamEndTime = null;

        /**
         * Stop reason.
         * @type {string || null}
         */
        this.StopReason = null;

        /**
         * Push duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Host IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Resolution.
         * @type {string || null}
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.StreamStartTime = 'StreamStartTime' in params ? params.StreamStartTime : null;
        this.StreamEndTime = 'StreamEndTime' in params ? params.StreamEndTime : null;
        this.StopReason = 'StopReason' in params ? params.StopReason : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * DescribeLiveWatermarks request structure.
 * @class
 */
class DescribeLiveWatermarksRequest extends  AbstractModel {
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
 * CreateLiveTranscodeRule request structure.
 * @class
 */
class CreateLiveTranscodeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default. If you only bind a domain name, leave this parameter empty.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name. If only the domain name or path is bound, leave this parameter blank.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Designates an existing template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveWatermarkRules request structure.
 * @class
 */
class DescribeLiveWatermarkRulesRequest extends  AbstractModel {
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
 * DropLiveStream request structure.
 * @class
 */
class DropLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Your acceleration domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the AppName in push and playback addresses and is "live" by default.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * CreateCommonMixStream request structure.
 * @class
 */
class CreateCommonMixStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of stream mix session (from applying for stream mix to canceling stream mix).
         * @type {string || null}
         */
        this.MixStreamSessionId = null;

        /**
         * Input stream list for stream mix.
         * @type {Array.<CommonMixInputParam> || null}
         */
        this.InputStreamList = null;

        /**
         * Output stream parameter for stream mix.
         * @type {CommonMixOutputParams || null}
         */
        this.OutputParams = null;

        /**
         * Input template ID. If this parameter is set, the output will be generated according to the default template layout, and there is no need to enter the custom position parameters.
If this parameter is left empty, 0 will be used by default.
For two input sources, 10, 20, 30, 40, and 50 are supported.
For three input sources, 310, 390, and 391 are supported.
For four input sources, 410 is supported.
For five input sources, 510 and 590 are supported.
For six input sources, 610 is supported.
         * @type {number || null}
         */
        this.MixStreamTemplateId = null;

        /**
         * Special control parameter for stream mix. If there are no special needs, leave it empty.
         * @type {CommonMixControlParams || null}
         */
        this.ControlParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MixStreamSessionId = 'MixStreamSessionId' in params ? params.MixStreamSessionId : null;

        if (params.InputStreamList) {
            this.InputStreamList = new Array();
            for (let z in params.InputStreamList) {
                let obj = new CommonMixInputParam();
                obj.deserialize(params.InputStreamList[z]);
                this.InputStreamList.push(obj);
            }
        }

        if (params.OutputParams) {
            let obj = new CommonMixOutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }
        this.MixStreamTemplateId = 'MixStreamTemplateId' in params ? params.MixStreamTemplateId : null;

        if (params.ControlParams) {
            let obj = new CommonMixControlParams();
            obj.deserialize(params.ControlParams)
            this.ControlParams = obj;
        }

    }
}

/**
 * CreateLiveCert response structure.
 * @class
 */
class CreateLiveCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {number || null}
         */
        this.CertId = null;

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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * General stream mix layout parameter.
 * @class
 */
class CommonMixLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input layer. Value range: [1,16].
1) For `image_layer` of background stream (i.e., main host video image or canvas), enter 1.
2) For audio stream mix, this parameter is also required.
         * @type {number || null}
         */
        this.ImageLayer = null;

        /**
         * Input type. Value range: [0,5].
If this parameter is left empty, 0 will be used by default.
0: the input stream is audio/video.
2: the input stream is image.
3: the input stream is canvas. 
4: the input stream is audio.
5: the input stream is pure video.
         * @type {number || null}
         */
        this.InputType = null;

        /**
         * Output width of input video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, the input stream width will be used by default.
If percentage is used, the expected output is (percentage * background width).
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * Output height of input video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, the input stream height will be used by default.
If percentage is used, the expected output is (percentage * background height).
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * X-axis offset of input in output video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, 0 will be used by default.
Horizontal offset from the top-left corner of main host background video image. 
If percentage is used, the expected output is (percentage * background width).
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * Y-axis offset of input in output video image. Value range:
Pixel: [0,2000]
Percentage: [0.01,0.99]
If this parameter is left empty, 0 will be used by default.
Vertical offset from the top-left corner of main host background video image. 
If percentage is used, the expected output is (percentage * background width)
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * When `InputType` is 3 (canvas), this value indicates the canvas color.
Commonly used colors include:
Red: 0xcc0033.
Yellow: 0xcc9900.
Green: 0xcccc33.
Blue: 0x99CCFF.
Black: 0x000000.
White: 0xFFFFFF.
Gray: 0x999999
         * @type {string || null}
         */
        this.Color = null;

        /**
         * When `InputType` is 2 (image), this value is the watermark ID.
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageLayer = 'ImageLayer' in params ? params.ImageLayer : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.Color = 'Color' in params ? params.Color : null;
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * DescribeGroupProIspPlayInfoList request structure.
 * @class
 */
class DescribeGroupProIspPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time point in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time point in the format of `yyyy-mm-dd HH:MM:SS`
The time span is (0,3 hours]. Data for the last month can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Playback domain name. If this parameter is left empty, full data will be queried.
         * @type {Array.<string> || null}
         */
        this.PlayDomains = null;

        /**
         * District list. If this parameter is left empty, data for all districts will be returned.
         * @type {Array.<string> || null}
         */
        this.ProvinceNames = null;

        /**
         * ISP list. If this parameter is left empty, data of all ISPs will be returned.
         * @type {Array.<string> || null}
         */
        this.IspNames = null;

        /**
         * Within or outside Mainland China. Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PlayDomains = 'PlayDomains' in params ? params.PlayDomains : null;
        this.ProvinceNames = 'ProvinceNames' in params ? params.ProvinceNames : null;
        this.IspNames = 'IspNames' in params ? params.IspNames : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;

    }
}

/**
 * DescribeStreamDayPlayInfoList request structure.
 * @class
 */
class DescribeStreamDayPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date in the format of `YYYY-mm-dd`.
Data is available at 3 AM the next day. You are recommended to query the latest data after this time point.
         * @type {string || null}
         */
        this.DayTime = null;

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.PlayDomain = null;

        /**
         * Page number. Value range: [1,1000]. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [100,1000]. Default value: 1,000.
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DayTime = 'DayTime' in params ? params.DayTime : null;
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeLiveSnapshotTemplate response structure.
 * @class
 */
class DescribeLiveSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Screencapturing template information.
         * @type {SnapshotTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new SnapshotTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveTranscodeRules response structure.
 * @class
 */
class DescribeLiveTranscodeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of transcoding rules.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLiveDomain request structure.
 * @class
 */
class AddLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Domain name type.
0: push domain name.
1: playback domain name.
         * @type {number || null}
         */
        this.DomainType = null;

        /**
         * Pull domain name type:
1: Mainland China.
2: global.
3: outside Mainland China.
Default value: 1.
         * @type {number || null}
         */
        this.PlayType = null;

        /**
         * Whether it is LCB:
0: LVB,
1: LCB.
Default value: 0.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * Whether it is LVB on Mini Program.
0: LVB.
1: LVB on Mini Program.
Default value: 0.
         * @type {number || null}
         */
        this.IsMiniProgramLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;
        this.PlayType = 'PlayType' in params ? params.PlayType : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;
        this.IsMiniProgramLive = 'IsMiniProgramLive' in params ? params.IsMiniProgramLive : null;

    }
}

/**
 * Stream name list.
 * @class
 */
class StreamName extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push start time.
In UTC format, such as 2019-01-07T12:00:00Z.
         * @type {string || null}
         */
        this.StreamStartTime = null;

        /**
         * Push end time.
In UTC format, such as 2019-01-07T15:00:00Z.
         * @type {string || null}
         */
        this.StreamEndTime = null;

        /**
         * Stop reason.
         * @type {string || null}
         */
        this.StopReason = null;

        /**
         * Push duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Host IP.
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * Resolution.
         * @type {string || null}
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamStartTime = 'StreamStartTime' in params ? params.StreamStartTime : null;
        this.StreamEndTime = 'StreamEndTime' in params ? params.StreamEndTime : null;
        this.StopReason = 'StopReason' in params ? params.StopReason : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * DescribeLiveCerts request structure.
 * @class
 */
class DescribeLiveCertsRequest extends  AbstractModel {
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
 * DescribeLiveCert response structure.
 * @class
 */
class DescribeLiveCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate information.
         * @type {CertInfo || null}
         */
        this.CertInfo = null;

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

        if (params.CertInfo) {
            let obj = new CertInfo();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLiveDomain response structure.
 * @class
 */
class AddLiveDomainResponse extends  AbstractModel {
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
 * DescribeLivePlayAuthKey request structure.
 * @class
 */
class DescribeLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveForbidStreamList response structure.
 * @class
 */
class DescribeLiveForbidStreamListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries displayed per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * List of forbidden streams.
         * @type {Array.<ForbidStreamInfo> || null}
         */
        this.ForbidStreamList = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.ForbidStreamList) {
            this.ForbidStreamList = new Array();
            for (let z in params.ForbidStreamList) {
                let obj = new ForbidStreamInfo();
                obj.deserialize(params.ForbidStreamList[z]);
                this.ForbidStreamList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPushInfoList request structure.
 * @class
 */
class DescribeStreamPushInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Start time point in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time point in the format of `yyyy-mm-dd HH:MM:SS`. The maximum time span is 6 hours. Data for the last 6 days can be queried.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.PushDomain = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PushDomain = 'PushDomain' in params ? params.PushDomain : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * DescribeLiveWatermark response structure.
 * @class
 */
class DescribeLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark information.
         * @type {WatermarkInfo || null}
         */
        this.Watermark = null;

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

        if (params.Watermark) {
            let obj = new WatermarkInfo();
            obj.deserialize(params.Watermark)
            this.Watermark = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeLiveStream response structure.
 * @class
 */
class ResumeLiveStreamResponse extends  AbstractModel {
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
 * DescribeStreamPushInfoList response structure.
 * @class
 */
class DescribeStreamPushInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned data list.
         * @type {Array.<PushQualityData> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PushQualityData();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveWatermarks response structure.
 * @class
 */
class DescribeLiveWatermarksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of watermarks.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Watermark information list.
         * @type {Array.<WatermarkInfo> || null}
         */
        this.WatermarkList = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.WatermarkList) {
            this.WatermarkList = new Array();
            for (let z in params.WatermarkList) {
                let obj = new WatermarkInfo();
                obj.deserialize(params.WatermarkList[z]);
                this.WatermarkList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Watermark information.
 * @class
 */
class WatermarkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * Watermark image URL.
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * Display position: X-axis offset.
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * Display position: Y-axis offset.
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * Watermark name.
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * Current status. 0: not used. 1: in use.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Watermark width.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Watermark height.
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DescribeLiveForbidStreamList request structure.
 * @class
 */
class DescribeLiveForbidStreamListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number to get. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Maximum value: 100. 
Value: any integer between 1 and 100.
Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * BindLiveDomainCert request structure.
 * @class
 */
class BindLiveDomainCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID, which can be obtained through the `CreateLiveCert` API.
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * Playback domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Status. 0: off, 1: on.
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Queries playback information by district/ISP.
 * @class
 */
class ProIspPlaySumInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * District/ISP/country/region.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Total traffic in MB.
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * Total number of requests.
         * @type {number || null}
         */
        this.TotalRequest = null;

        /**
         * Average download traffic in MB/s.
         * @type {number || null}
         */
        this.AvgFluxPerSecond = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;
        this.AvgFluxPerSecond = 'AvgFluxPerSecond' in params ? params.AvgFluxPerSecond : null;

    }
}

/**
 * CreateLiveCallbackRule request structure.
 * @class
 */
class CreateLiveCallbackRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteLiveWatermarkRule response structure.
 * @class
 */
class DeleteLiveWatermarkRuleResponse extends  AbstractModel {
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
 * Push time.
 * @class
 */
class PublishTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push time.
In UTC format, such as 2018-06-29T19:00:00Z.
         * @type {string || null}
         */
        this.PublishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishTime = 'PublishTime' in params ? params.PublishTime : null;

    }
}

/**
 * ModifyLiveCert response structure.
 * @class
 */
class ModifyLiveCertResponse extends  AbstractModel {
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
 * DeleteLiveWatermark request structure.
 * @class
 */
class DeleteLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
Get the watermark ID in the returned value of the [AddLiveWatermark](/document/product/267/30154) API call.
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;

    }
}

/**
 * DescribeLiveDomains request structure.
 * @class
 */
class DescribeLiveDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter by domain name status. 0: disabled, 1: enabled.
         * @type {number || null}
         */
        this.DomainStatus = null;

        /**
         * Filter by domain name type. 0: push. 1: playback
         * @type {number || null}
         */
        this.DomainType = null;

        /**
         * Number of entries per page. Value range: 10–100. Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number to get. Value range: 1–100000. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 0: LVB, 1: LCB. Default value: 0.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * Domain name prefix.
         * @type {string || null}
         */
        this.DomainPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;

    }
}

/**
 * UpdateLiveWatermark request structure.
 * @class
 */
class UpdateLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark ID.
Get the watermark ID in the returned value of the [AddLiveWatermark](/document/product/267/30154) API call.
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * Watermark image URL.
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * Display position: X-axis offset. Default value: 0.
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * Display position: Y-axis offset. Default value: 0.
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * Watermark name.
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * Watermark width or its percentage of the live streaming video width. It is recommended to just specify either height or width as the other will be scaled proportionally to avoid distortions. The original width is used by default.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Watermark height or its percentage of the live streaming video width. It is recommended to just specify either height or width as the other will be scaled proportionally to avoid distortions. The original height is used by default.
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = 'WatermarkId' in params ? params.WatermarkId : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.WatermarkName = 'WatermarkName' in params ? params.WatermarkName : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DeleteLiveSnapshotRule response structure.
 * @class
 */
class DeleteLiveSnapshotRuleResponse extends  AbstractModel {
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
 * CreateLiveRecord request structure.
 * @class
 */
class CreateLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Push domain name. This parameter must be set for multi-domain name push.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Recording start time, which is China standard time and should be URL-encoded (RFC3986). For example, the encoding of 2017-01-01 10:10:01 is 2017-01-01+10%3a10%3a01.
In scheduled recording mode, this field must be set; in real-time video recording mode, this field is ignored.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Recording end time, which is China standard time and should be URL-encoded (RFC3986). For example, the encoding of 2017-01-01 10:30:01 is 2017-01-01+10%3a30%3a01.
In scheduled recording mode, this field must be set; in real-time video recording mode, this field is optional. If the recording is set to real-time video recording mode through the `Highlight` parameter, the set end time should not be more than 30 minutes after the current time. If the set end time is more than 30 minutes after the current time, earlier than the current time, or left empty, the actual end time will be 30 minutes after the current time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Recording type.
"video": Audio-video recording **(default)**.
"audio": audio recording.
In both scheduled and real-time video recording modes, this parameter is valid and is not case sensitive.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Recording file format. Valid values:
"flv" **(default)**, "hls", "mp4", "aac", "mp3".
In both scheduled and real-time video recording modes, this parameter is valid and is not case sensitive.
         * @type {string || null}
         */
        this.FileFormat = null;

        /**
         * Mark for enabling real-time video recording mode.
0: Real-time video recording mode is not enabled, i.e., the scheduled recording mode is used **(default)**. See [Sample 1](#.E7.A4.BA.E4.BE.8B1-.E5.88.9B.E5.BB.BA.E5.AE.9A.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1).
1: Real-time video recording mode is enabled. See [Sample 2](#.E7.A4.BA.E4.BE.8B2-.E5.88.9B.E5.BB.BA.E5.AE.9E.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1).
         * @type {number || null}
         */
        this.Highlight = null;

        /**
         * Flag for enabling A+B=C mixed stream recording.
0: A+B=C mixed stream recording is not enabled **(default)**.
1: A+B=C mixed stream recording is enabled.
In both scheduled and real-time video recording modes, this parameter is valid.
         * @type {number || null}
         */
        this.MixStream = null;

        /**
         * Recording stream parameter. The following parameters are supported currently:
record_interval: recording interval in seconds. Value range: 1800-7200.
storage_time: recording file storage duration in seconds.
Example: record_interval=3600&storage_time=2592000.
Note: the parameter needs to be URL-encoded.
In both scheduled and real-time video recording modes, this parameter is valid.
         * @type {string || null}
         */
        this.StreamParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.FileFormat = 'FileFormat' in params ? params.FileFormat : null;
        this.Highlight = 'Highlight' in params ? params.Highlight : null;
        this.MixStream = 'MixStream' in params ? params.MixStream : null;
        this.StreamParam = 'StreamParam' in params ? params.StreamParam : null;

    }
}

/**
 * ForbidLiveStream response structure.
 * @class
 */
class ForbidLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveSnapshotTemplates response structure.
 * @class
 */
class DescribeLiveSnapshotTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Screencapturing template list.
         * @type {Array.<SnapshotTemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new SnapshotTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelCommonMixStream request structure.
 * @class
 */
class CancelCommonMixStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of stream mix session (from applying for stream mix to canceling stream mix).
         * @type {string || null}
         */
        this.MixStreamSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MixStreamSessionId = 'MixStreamSessionId' in params ? params.MixStreamSessionId : null;

    }
}

/**
 * Certificate information.
 * @class
 */
class CertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * Certificate name.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time in UTC format.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Certificate content.
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * Certificate type:
0: Tencent Cloud-hosted certificate.
1: user-added certificate.
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * Certificate expiration time in UTC format.
         * @type {string || null}
         */
        this.CertExpireTime = null;

        /**
         * List of domain names that use this certificate.
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertExpireTime = 'CertExpireTime' in params ? params.CertExpireTime : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;

    }
}

/**
 * ModifyLivePushAuthKey response structure.
 * @class
 */
class ModifyLivePushAuthKeyResponse extends  AbstractModel {
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
 * DescribeLiveDelayInfoList response structure.
 * @class
 */
class DescribeLiveDelayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delayed playback information list.
         * @type {Array.<DelayInfo> || null}
         */
        this.DelayInfoList = null;

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

        if (params.DelayInfoList) {
            this.DelayInfoList = new Array();
            for (let z in params.DelayInfoList) {
                let obj = new DelayInfo();
                obj.deserialize(params.DelayInfoList[z]);
                this.DelayInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveTranscodeTemplate request structure.
 * @class
 */
class DeleteLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get the template ID in the returned value of the [CreateLiveTranscodeTemplate](/document/product/267/32646) API call.
2. You can query the list of created templates through the [DescribeLiveTranscodeTemplates](/document/product/267/32641) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveCallbackRules request structure.
 * @class
 */
class DescribeLiveCallbackRulesRequest extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplate response structure.
 * @class
 */
class DescribeLiveTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template information.
         * @type {TemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new TemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveSnapshotTemplate response structure.
 * @class
 */
class CreateLiveSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConcurrentRecordStreamNum request structure.
 * @class
 */
class DescribeConcurrentRecordStreamNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Live streaming type. SlowLive: LCB.
NormalLive: LVB.
         * @type {string || null}
         */
        this.LiveType = null;

        /**
         * Start time in the format of `yyyy-mm-dd HH:MM:SS`.
Data for the last 180 days can be queried.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of `yyyy-mm-dd HH:MM:SS`.
The maximum time span supported is 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Valid values: Mainland (data for Mainland China), Oversea (data for regions outside Mainland China). If this parameter is left empty, data for all regions will be queried.
         * @type {string || null}
         */
        this.MainlandOrOversea = null;

        /**
         * Playback domain name list. If this parameter is left empty, full data will be queried.
         * @type {Array.<string> || null}
         */
        this.PushDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveType = 'LiveType' in params ? params.LiveType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MainlandOrOversea = 'MainlandOrOversea' in params ? params.MainlandOrOversea : null;
        this.PushDomains = 'PushDomains' in params ? params.PushDomains : null;

    }
}

/**
 * ModifyLiveCert request structure.
 * @class
 */
class ModifyLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Certificate type. 0: user-added certificate, 1: Tencent Cloud-hosted certificate.
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * Certificate name.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Certificate content, i.e., public key.
         * @type {string || null}
         */
        this.HttpsCrt = null;

        /**
         * Private key.
         * @type {string || null}
         */
        this.HttpsKey = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.HttpsCrt = 'HttpsCrt' in params ? params.HttpsCrt : null;
        this.HttpsKey = 'HttpsKey' in params ? params.HttpsKey : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * General stream mix control parameter
 * @class
 */
class CommonMixControlParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: [0,1].
If 1 is entered, when the layer resolution in the parameter is different from the actual video resolution, the video will be automatically cropped according to the resolution set by the layer.
         * @type {number || null}
         */
        this.UseMixCropCenter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UseMixCropCenter = 'UseMixCropCenter' in params ? params.UseMixCropCenter : null;

    }
}

/**
 * UnBindLiveDomainCert response structure.
 * @class
 */
class UnBindLiveDomainCertResponse extends  AbstractModel {
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
 * ForbidLiveDomain request structure.
 * @class
 */
class ForbidLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LVB domain name to be disabled.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveRecordRules request structure.
 * @class
 */
class DescribeLiveRecordRulesRequest extends  AbstractModel {
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
 * CreateLiveRecordTemplate response structure.
 * @class
 */
class CreateLiveRecordTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Recording template parameter
 * @class
 */
class RecordParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording interval.
In seconds. Default value: 1,800.
Value range: 300–7,200.
This parameter is not valid for HLS, and a file is generated from push start to push end when HLS is recorded.
         * @type {number || null}
         */
        this.RecordInterval = null;

        /**
         * Recording storage duration.
In seconds. Value range: 0–93,312,000.
0 represents permanent storage.
         * @type {number || null}
         */
        this.StorageTime = null;

        /**
         * Whether to enable recording in the current format. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * VOD subapplication ID.
         * @type {number || null}
         */
        this.VodSubAppId = null;

        /**
         * Recording filename.
         * @type {string || null}
         */
        this.VodFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordInterval = 'RecordInterval' in params ? params.RecordInterval : null;
        this.StorageTime = 'StorageTime' in params ? params.StorageTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.VodSubAppId = 'VodSubAppId' in params ? params.VodSubAppId : null;
        this.VodFileName = 'VodFileName' in params ? params.VodFileName : null;

    }
}

/**
 * ModifyLiveRecordTemplate request structure.
 * @class
 */
class ModifyLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Message description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * FLV recording parameter, which is set when FLV recording is enabled.
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * HLS recording parameter, which is set when HLS recording is enabled.
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * MP4 recording parameter, which is set when MP4 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * AAC recording parameter, which is set when AAC recording is enabled.
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * Custom HLS recording parameter.
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

        /**
         * MP3 recording parameter, which is set when MP3 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }

    }
}

/**
 * DeleteLiveRecord request structure.
 * @class
 */
class DeleteLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Task ID, which uniquely identifies a recording task globally.
Get the `TaskId` from the returned value of the [CreateLiveRecord](/document/product/267/30148) API.
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * StopLiveRecord request structure.
 * @class
 */
class StopLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Task ID, which uniquely identifies the recording task globally.
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateLiveTranscodeTemplate request structure.
 * @class
 */
class CreateLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name, such as 900 900p. This can be only a combination of letters and digits.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Video bitrate. Value range: 100–8,000.
Note: The bitrate must be a multiple of 100.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Video encoding format. Valid values: h264, h265. Default value: h264.
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Audio encoding in ACC format. Default value: original audio format.
Note: This parameter will take effect later.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. Value range: 0–500. Default value: 0.
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Width. Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Whether to keep the video. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * Whether to keep the audio. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * Height. Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame rate. Default value: 0.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Keyframe interval in seconds. Original interval by default
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * Whether to rotate. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Encoding quality:
baseline/main/high. Default value: baseline.
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * Whether to not exceed the original bitrate. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * Whether to not exceed the original height. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * Whether to not exceed the original frame rate. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.FpsToOrig = null;

        /**
         * Whether it is a top speed codec template. 0: no, 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.AiTransCode = null;

        /**
         * `VideoBitrate` minus top speed codec bitrate. Value range: 0.1–0.5.
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;
        this.AiTransCode = 'AiTransCode' in params ? params.AiTransCode : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;

    }
}

/**
 * DescribeLiveStreamPublishedList response structure.
 * @class
 */
class DescribeLiveStreamPublishedListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push record information.
         * @type {Array.<StreamName> || null}
         */
        this.PublishInfo = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.PublishInfo) {
            this.PublishInfo = new Array();
            for (let z in params.PublishInfo) {
                let obj = new StreamName();
                obj.deserialize(params.PublishInfo[z]);
                this.PublishInfo.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveDomain request structure.
 * @class
 */
class DeleteLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name to be deleted.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Type. 0: push, 1: playback.
         * @type {number || null}
         */
        this.DomainType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainType = 'DomainType' in params ? params.DomainType : null;

    }
}

/**
 * AddDelayLiveStream response structure.
 * @class
 */
class AddDelayLiveStreamResponse extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplates response structure.
 * @class
 */
class DescribeLiveTranscodeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of transcoding templates.
         * @type {Array.<TemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new TemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveCallbackRule request structure.
 * @class
 */
class DeleteLiveCallbackRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * Playback authentication key information.
 * @class
 */
class PlayAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether to enable:
0: disable.
1: enable.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Authentication key.
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * Validity period in seconds.
         * @type {number || null}
         */
        this.AuthDelta = null;

        /**
         * Authentication `BackKey`.
         * @type {string || null}
         */
        this.AuthBackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.AuthDelta = 'AuthDelta' in params ? params.AuthDelta : null;
        this.AuthBackKey = 'AuthBackKey' in params ? params.AuthBackKey : null;

    }
}

/**
 * ModifyLiveTranscodeTemplate request structure.
 * @class
 */
class ModifyLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Video encoding format:
h264/h265.
         * @type {string || null}
         */
        this.Vcodec = null;

        /**
         * Audio encoding format:
aac/mp3.
         * @type {string || null}
         */
        this.Acodec = null;

        /**
         * Audio bitrate. Default value: 0.
Value range: 0–500.
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Video bitrate. Value range: 100–8000 Kbps.
Note: the bitrate value must be a multiple of 100.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Width. Value range: 0-3000.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Whether to keep the video. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedVideo = null;

        /**
         * Whether to keep the audio. 0: no; 1: yes. Default value: 1.
         * @type {number || null}
         */
        this.NeedAudio = null;

        /**
         * Height. Value range: 0-3000.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame rate. Value range: 0–200.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Keyframe interval in seconds. Value range: 0–50.
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * Rotation angle.
0, 90, 180, 270.
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Encoding quality:
baseline/main/high.
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * Whether to not exceed the original bitrate. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.BitrateToOrig = null;

        /**
         * Whether to not exceed the original height. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.HeightToOrig = null;

        /**
         * Whether to not exceed the original frame rate. 0: no; 1: yes. Default value: 0.
         * @type {number || null}
         */
        this.FpsToOrig = null;

        /**
         * `VideoBitrate` minus top speed codec bitrate. Value range: 0.1–0.5.
         * @type {number || null}
         */
        this.AdaptBitratePercent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Vcodec = 'Vcodec' in params ? params.Vcodec : null;
        this.Acodec = 'Acodec' in params ? params.Acodec : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.NeedVideo = 'NeedVideo' in params ? params.NeedVideo : null;
        this.NeedAudio = 'NeedAudio' in params ? params.NeedAudio : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.BitrateToOrig = 'BitrateToOrig' in params ? params.BitrateToOrig : null;
        this.HeightToOrig = 'HeightToOrig' in params ? params.HeightToOrig : null;
        this.FpsToOrig = 'FpsToOrig' in params ? params.FpsToOrig : null;
        this.AdaptBitratePercent = 'AdaptBitratePercent' in params ? params.AdaptBitratePercent : null;

    }
}

/**
 * ModifyLiveDomainCert response structure.
 * @class
 */
class ModifyLiveDomainCertResponse extends  AbstractModel {
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
 * EnableLiveDomain request structure.
 * @class
 */
class EnableLiveDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LVB domain name to be enabled.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * ForbidLiveDomain response structure.
 * @class
 */
class ForbidLiveDomainResponse extends  AbstractModel {
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
 * DescribeLiveSnapshotRules request structure.
 * @class
 */
class DescribeLiveSnapshotRulesRequest extends  AbstractModel {
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
 * CreateLiveTranscodeRule response structure.
 * @class
 */
class CreateLiveTranscodeRuleResponse extends  AbstractModel {
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
 * CreateLiveCallbackRule response structure.
 * @class
 */
class CreateLiveCallbackRuleResponse extends  AbstractModel {
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
 * DescribeLiveRecordTemplate response structure.
 * @class
 */
class DescribeLiveRecordTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording template information.
         * @type {RecordTemplateInfo || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new RecordTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindLiveDomainCert response structure.
 * @class
 */
class BindLiveDomainCertResponse extends  AbstractModel {
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
 * Rule information
 * @class
 */
class CallBackRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * DescribeLiveTranscodeTemplates request structure.
 * @class
 */
class DescribeLiveTranscodeTemplatesRequest extends  AbstractModel {
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
 * HLS-specific recording parameter
 * @class
 */
class HlsSpecialParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS timeout period.
         * @type {number || null}
         */
        this.FlowContinueDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowContinueDuration = 'FlowContinueDuration' in params ? params.FlowContinueDuration : null;

    }
}

/**
 * DescribeLiveRecordRules response structure.
 * @class
 */
class DescribeLiveRecordRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rules.
         * @type {Array.<RuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillBandwidthAndFluxList response structure.
 * @class
 */
class DescribeBillBandwidthAndFluxListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point of peak bandwidth value in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.PeakBandwidthTime = null;

        /**
         * Peak bandwidth in Mbps.
         * @type {number || null}
         */
        this.PeakBandwidth = null;

        /**
         * Time point of 95th percentile bandwidth value in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.P95PeakBandwidthTime = null;

        /**
         * 95th percentile bandwidth in Mbps.
         * @type {number || null}
         */
        this.P95PeakBandwidth = null;

        /**
         * Total traffic in MB.
         * @type {number || null}
         */
        this.SumFlux = null;

        /**
         * Detailed data information.
         * @type {Array.<BillDataInfo> || null}
         */
        this.DataInfoList = null;

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
        this.PeakBandwidthTime = 'PeakBandwidthTime' in params ? params.PeakBandwidthTime : null;
        this.PeakBandwidth = 'PeakBandwidth' in params ? params.PeakBandwidth : null;
        this.P95PeakBandwidthTime = 'P95PeakBandwidthTime' in params ? params.P95PeakBandwidthTime : null;
        this.P95PeakBandwidth = 'P95PeakBandwidth' in params ? params.P95PeakBandwidth : null;
        this.SumFlux = 'SumFlux' in params ? params.SumFlux : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new BillDataInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveStreamOnlineList request structure.
 * @class
 */
class DescribeLiveStreamOnlineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name. If you use multiple paths, enter the `DomainName`.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default. If you use multiple paths, enter the `AppName`.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Page number to get. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Maximum value: 100. 
Value: any integer between 10 and 100.
Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Stream name, which is used for exact query.
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

/**
 * DeleteLiveCallbackTemplate request structure.
 * @class
 */
class DeleteLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get the template ID in the returned value of the [CreateLiveCallbackTemplate](/document/product/267/32637) API call.
2. You can query the list of created templates through the [DescribeLiveCallbackTemplates](/document/product/267/32632) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyLiveCallbackTemplate request structure.
 * @class
 */
class ModifyLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Stream starting callback URL.
         * @type {string || null}
         */
        this.StreamBeginNotifyUrl = null;

        /**
         * Interruption callback URL.
         * @type {string || null}
         */
        this.StreamEndNotifyUrl = null;

        /**
         * Recording callback URL.
         * @type {string || null}
         */
        this.RecordNotifyUrl = null;

        /**
         * Screencapturing callback URL.
         * @type {string || null}
         */
        this.SnapshotNotifyUrl = null;

        /**
         * Porn detection callback URL.
         * @type {string || null}
         */
        this.PornCensorshipNotifyUrl = null;

        /**
         * Callback key. The callback URL is public. For the callback signature, please see the event message notification document.
[Event Message Notification](/document/product/267/32744).
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StreamBeginNotifyUrl = 'StreamBeginNotifyUrl' in params ? params.StreamBeginNotifyUrl : null;
        this.StreamEndNotifyUrl = 'StreamEndNotifyUrl' in params ? params.StreamEndNotifyUrl : null;
        this.RecordNotifyUrl = 'RecordNotifyUrl' in params ? params.RecordNotifyUrl : null;
        this.SnapshotNotifyUrl = 'SnapshotNotifyUrl' in params ? params.SnapshotNotifyUrl : null;
        this.PornCensorshipNotifyUrl = 'PornCensorshipNotifyUrl' in params ? params.PornCensorshipNotifyUrl : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DeleteLiveCert response structure.
 * @class
 */
class DeleteLiveCertResponse extends  AbstractModel {
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
 * CreateCommonMixStream response structure.
 * @class
 */
class CreateCommonMixStreamResponse extends  AbstractModel {
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
 * CreateLiveCallbackTemplate response structure.
 * @class
 */
class CreateLiveCallbackTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLivePushAuthKey request structure.
 * @class
 */
class DescribeLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DescribeLiveCallbackTemplate request structure.
 * @class
 */
class DescribeLiveCallbackTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
1. Get the template ID in the returned value of the [CreateLiveCallbackTemplate](/document/product/267/32637) API call.
2. You can query the list of created templates through the [DescribeLiveCallbackTemplates](/document/product/267/32632) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyLiveSnapshotTemplate request structure.
 * @class
 */
class ModifyLiveSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
Maximum length: 255 bytes.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Description.
Maximum length: 1,024 bytes.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Screencapturing interval in seconds. Default value: 10s.
Value range: 5–600s.
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * Screenshot width. Default value: 0 (original width).
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Screenshot height. Default value: 0 (original height).
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whether to enable porn detection. Default value: 0.
0: do not enable.
1: enable.
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * COS application ID.
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * COS region.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * COS bucket folder prefix.
         * @type {string || null}
         */
        this.CosPrefix = null;

        /**
         * COS filename.
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CosPrefix = 'CosPrefix' in params ? params.CosPrefix : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

    }
}

/**
 * Downstream playback statistical metrics
 * @class
 */
class CdnPlayStatData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point in the format of `yyyy-mm-dd HH:MM:SS`.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Bandwidth in Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Traffic in MB.
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * Number of new requests.
         * @type {number || null}
         */
        this.Request = null;

        /**
         * Number of concurrent connections.
         * @type {number || null}
         */
        this.Online = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.Online = 'Online' in params ? params.Online : null;

    }
}

/**
 * CreateLiveRecordRule response structure.
 * @class
 */
class CreateLiveRecordRuleResponse extends  AbstractModel {
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
 * DescribeLiveTranscodeTemplate request structure.
 * @class
 */
class DescribeLiveTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
Note: get the template ID in the returned value of the [CreateLiveTranscodeTemplate](/document/product/267/32646) API call.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyLiveCallbackTemplate response structure.
 * @class
 */
class ModifyLiveCallbackTemplateResponse extends  AbstractModel {
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
 * DescribeLiveCallbackTemplates response structure.
 * @class
 */
class DescribeLiveCallbackTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template information list.
         * @type {Array.<CallBackTemplateInfo> || null}
         */
        this.Templates = null;

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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new CallBackTemplateInfo();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLivePushAuthKey response structure.
 * @class
 */
class DescribeLivePushAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push authentication key information.
         * @type {PushAuthKeyInfo || null}
         */
        this.PushAuthKeyInfo = null;

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

        if (params.PushAuthKeyInfo) {
            let obj = new PushAuthKeyInfo();
            obj.deserialize(params.PushAuthKeyInfo)
            this.PushAuthKeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveWatermarkRule request structure.
 * @class
 */
class CreateLiveWatermarkRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Watermark ID, which is the `WatermarkId` returned by the [AddLiveWatermark](/document/product/267/30154) API.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeLiveRecordTemplates request structure.
 * @class
 */
class DescribeLiveRecordTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is an LCB template. Default value: 0.
0: LVB.
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

    }
}

/**
 * DescribeLiveDomain response structure.
 * @class
 */
class DescribeLiveDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name information.
         * @type {DomainInfo || null}
         */
        this.DomainInfo = null;

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

        if (params.DomainInfo) {
            let obj = new DomainInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Playback information at the stream level.
 * @class
 */
class PlayDataInfoByStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Total traffic in MB.
         * @type {number || null}
         */
        this.TotalFlux = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;

    }
}

/**
 * StopLiveRecord response structure.
 * @class
 */
class StopLiveRecordResponse extends  AbstractModel {
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
 * DescribeStreamDayPlayInfoList response structure.
 * @class
 */
class DescribeStreamDayPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Playback data information list.
         * @type {Array.<PlayDataInfoByStream> || null}
         */
        this.DataInfoList = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Page number where the current data resides.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new PlayDataInfoByStream();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLiveSnapshotRule response structure.
 * @class
 */
class CreateLiveSnapshotRuleResponse extends  AbstractModel {
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
 * Delayed playback information.
 * @class
 */
class DelayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Push path, which is the same as the 
 `AppName` in push and playback addresses and is `live` by default.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Delay time in seconds.
         * @type {number || null}
         */
        this.DelayInterval = null;

        /**
         * Creation time in UTC time.
Note: the difference between UTC time and Beijing time is 8 hours.
Example: 2019-06-18T12:00:00Z (i.e., June 18, 2019 20:00:00 Beijing time).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time in UTC time.
Note: the difference between UTC time and Beijing time is 8 hours.
Example: 2019-06-18T12:00:00Z (i.e., June 18, 2019 20:00:00 Beijing time).
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Current status:
-1: expired.
1: in effect.
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.DelayInterval = 'DelayInterval' in params ? params.DelayInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeLiveStreamEventList response structure.
 * @class
 */
class DescribeLiveStreamEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of streaming events.
         * @type {Array.<StreamEventInfo> || null}
         */
        this.EventList = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of eligible ones.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new StreamEventInfo();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLiveCallbackRules response structure.
 * @class
 */
class DescribeLiveCallbackRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information list.
         * @type {Array.<CallBackRuleInfo> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new CallBackRuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of forbidden streams
 * @class
 */
class ForbidStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream name.
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Forbidding expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * ResumeDelayLiveStream response structure.
 * @class
 */
class ResumeDelayLiveStreamResponse extends  AbstractModel {
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
 * Bandwidth, traffic, number of requests, and number of concurrent connections of an ISP in a district.
 * @class
 */
class GroupProIspDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * District.
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * ISP.
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * Detailed data at the minute level.
         * @type {Array.<CdnPlayStatData> || null}
         */
        this.DetailInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;

        if (params.DetailInfoList) {
            this.DetailInfoList = new Array();
            for (let z in params.DetailInfoList) {
                let obj = new CdnPlayStatData();
                obj.deserialize(params.DetailInfoList[z]);
                this.DetailInfoList.push(obj);
            }
        }

    }
}

/**
 * DeleteLiveDomain response structure.
 * @class
 */
class DeleteLiveDomainResponse extends  AbstractModel {
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
 * General stream mix input crop parameter.
 * @class
 */
class CommonMixCropParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Crop width. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropWidth = null;

        /**
         * Crop height. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropHeight = null;

        /**
         * Starting crop X coordinate. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropStartLocationX = null;

        /**
         * Starting crop Y coordinate. Value range: [0,2000].
         * @type {number || null}
         */
        this.CropStartLocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CropWidth = 'CropWidth' in params ? params.CropWidth : null;
        this.CropHeight = 'CropHeight' in params ? params.CropHeight : null;
        this.CropStartLocationX = 'CropStartLocationX' in params ? params.CropStartLocationX : null;
        this.CropStartLocationY = 'CropStartLocationY' in params ? params.CropStartLocationY : null;

    }
}

/**
 * CreateLiveRecordTemplate request structure.
 * @class
 */
class CreateLiveRecordTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name. Only letters, digits, underscores, and hyphens can be contained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Message description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * FLV recording parameter, which is set when FLV recording is enabled.
         * @type {RecordParam || null}
         */
        this.FlvParam = null;

        /**
         * HLS recording parameter, which is set when HLS recording is enabled.
         * @type {RecordParam || null}
         */
        this.HlsParam = null;

        /**
         * Mp4 recording parameter, which is set when Mp4 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp4Param = null;

        /**
         * AAC recording parameter, which is set when AAC recording is enabled.
         * @type {RecordParam || null}
         */
        this.AacParam = null;

        /**
         * LVB type. Default value: 0.
0: LVB.
1: LCB.
         * @type {number || null}
         */
        this.IsDelayLive = null;

        /**
         * HLS-specific recording parameter.
         * @type {HlsSpecialParam || null}
         */
        this.HlsSpecialParam = null;

        /**
         * Mp3 recording parameter, which is set when Mp3 recording is enabled.
         * @type {RecordParam || null}
         */
        this.Mp3Param = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FlvParam) {
            let obj = new RecordParam();
            obj.deserialize(params.FlvParam)
            this.FlvParam = obj;
        }

        if (params.HlsParam) {
            let obj = new RecordParam();
            obj.deserialize(params.HlsParam)
            this.HlsParam = obj;
        }

        if (params.Mp4Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp4Param)
            this.Mp4Param = obj;
        }

        if (params.AacParam) {
            let obj = new RecordParam();
            obj.deserialize(params.AacParam)
            this.AacParam = obj;
        }
        this.IsDelayLive = 'IsDelayLive' in params ? params.IsDelayLive : null;

        if (params.HlsSpecialParam) {
            let obj = new HlsSpecialParam();
            obj.deserialize(params.HlsSpecialParam)
            this.HlsSpecialParam = obj;
        }

        if (params.Mp3Param) {
            let obj = new RecordParam();
            obj.deserialize(params.Mp3Param)
            this.Mp3Param = obj;
        }

    }
}

/**
 * DescribeProIspPlaySumInfoList response structure.
 * @class
 */
class DescribeProIspPlaySumInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total traffic.
         * @type {number || null}
         */
        this.TotalFlux = null;

        /**
         * Total number of requests.
         * @type {number || null}
         */
        this.TotalRequest = null;

        /**
         * Statistics type.
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * Number of results per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Aggregated data list by district, ISP, or country/region.
         * @type {Array.<ProIspPlaySumInfo> || null}
         */
        this.DataInfoList = null;

        /**
         * Average bandwidth.
         * @type {number || null}
         */
        this.AvgFluxPerSecond = null;

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
        this.TotalFlux = 'TotalFlux' in params ? params.TotalFlux : null;
        this.TotalRequest = 'TotalRequest' in params ? params.TotalRequest : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new ProIspPlaySumInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.AvgFluxPerSecond = 'AvgFluxPerSecond' in params ? params.AvgFluxPerSecond : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLiveCert request structure.
 * @class
 */
class DeleteLiveCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {number || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * Screencapturing template information.
 * @class
 */
class SnapshotTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Screencapturing interval. Value range: 5–300s.
         * @type {number || null}
         */
        this.SnapshotInterval = null;

        /**
         * Screenshot width. Value range: 0–3000. 
0: original width and fit to the original ratio.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Screenshot height. Value range: 0–2000.
0: original height and fit to the original ratio.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whether to enable porn detection. 0: no, 1: yes.
         * @type {number || null}
         */
        this.PornFlag = null;

        /**
         * COS application ID.
         * @type {number || null}
         */
        this.CosAppId = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * COS region.
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * COS bucket folder prefix.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosPrefix = null;

        /**
         * COS filename.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.SnapshotInterval = 'SnapshotInterval' in params ? params.SnapshotInterval : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.PornFlag = 'PornFlag' in params ? params.PornFlag : null;
        this.CosAppId = 'CosAppId' in params ? params.CosAppId : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CosPrefix = 'CosPrefix' in params ? params.CosPrefix : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;

    }
}

/**
 * DeleteLiveRecordRule response structure.
 * @class
 */
class DeleteLiveRecordRuleResponse extends  AbstractModel {
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

module.exports = {
    CreateLiveSnapshotRuleRequest: CreateLiveSnapshotRuleRequest,
    BillDataInfo: BillDataInfo,
    EnableLiveDomainResponse: EnableLiveDomainResponse,
    CreateLiveCertRequest: CreateLiveCertRequest,
    DescribeLiveCallbackTemplatesRequest: DescribeLiveCallbackTemplatesRequest,
    DeleteLiveRecordRuleRequest: DeleteLiveRecordRuleRequest,
    ResumeLiveStreamRequest: ResumeLiveStreamRequest,
    DeleteLiveTranscodeTemplateResponse: DeleteLiveTranscodeTemplateResponse,
    CreateLiveSnapshotTemplateRequest: CreateLiveSnapshotTemplateRequest,
    TemplateInfo: TemplateInfo,
    DeleteLiveCallbackRuleResponse: DeleteLiveCallbackRuleResponse,
    DescribeLiveWatermarkRulesResponse: DescribeLiveWatermarkRulesResponse,
    DescribeLiveCallbackTemplateResponse: DescribeLiveCallbackTemplateResponse,
    DeleteLiveSnapshotTemplateRequest: DeleteLiveSnapshotTemplateRequest,
    DescribeGroupProIspPlayInfoListResponse: DescribeGroupProIspPlayInfoListResponse,
    PushAuthKeyInfo: PushAuthKeyInfo,
    DeleteLiveRecordTemplateRequest: DeleteLiveRecordTemplateRequest,
    DeleteLiveCallbackTemplateResponse: DeleteLiveCallbackTemplateResponse,
    DescribeLiveStreamOnlineListResponse: DescribeLiveStreamOnlineListResponse,
    PushQualityData: PushQualityData,
    ModifyLivePlayAuthKeyRequest: ModifyLivePlayAuthKeyRequest,
    DescribeLiveDelayInfoListRequest: DescribeLiveDelayInfoListRequest,
    DomainCertInfo: DomainCertInfo,
    RecordTemplateInfo: RecordTemplateInfo,
    DeleteLiveTranscodeRuleResponse: DeleteLiveTranscodeRuleResponse,
    ConcurrentRecordStreamNum: ConcurrentRecordStreamNum,
    ModifyLiveSnapshotTemplateResponse: ModifyLiveSnapshotTemplateResponse,
    ModifyLivePushAuthKeyRequest: ModifyLivePushAuthKeyRequest,
    DeleteLiveSnapshotTemplateResponse: DeleteLiveSnapshotTemplateResponse,
    DescribeLiveStreamStateRequest: DescribeLiveStreamStateRequest,
    DescribeLivePlayAuthKeyResponse: DescribeLivePlayAuthKeyResponse,
    DescribeLiveSnapshotTemplateRequest: DescribeLiveSnapshotTemplateRequest,
    DomainInfo: DomainInfo,
    DescribeLiveTranscodeRulesRequest: DescribeLiveTranscodeRulesRequest,
    DeleteLiveSnapshotRuleRequest: DeleteLiveSnapshotRuleRequest,
    DescribeBillBandwidthAndFluxListRequest: DescribeBillBandwidthAndFluxListRequest,
    CommonMixOutputParams: CommonMixOutputParams,
    DescribeLiveSnapshotRulesResponse: DescribeLiveSnapshotRulesResponse,
    DescribeLiveDomainRequest: DescribeLiveDomainRequest,
    DescribeLiveStreamPublishedListRequest: DescribeLiveStreamPublishedListRequest,
    DeleteLiveTranscodeRuleRequest: DeleteLiveTranscodeRuleRequest,
    CreateLiveRecordRuleRequest: CreateLiveRecordRuleRequest,
    DescribeLiveSnapshotTemplatesRequest: DescribeLiveSnapshotTemplatesRequest,
    AddLiveWatermarkResponse: AddLiveWatermarkResponse,
    DescribeLiveDomainCertResponse: DescribeLiveDomainCertResponse,
    DescribeLiveRecordTemplateRequest: DescribeLiveRecordTemplateRequest,
    ModifyLiveDomainCertRequest: ModifyLiveDomainCertRequest,
    CreateLiveWatermarkRuleResponse: CreateLiveWatermarkRuleResponse,
    DescribeProIspPlaySumInfoListRequest: DescribeProIspPlaySumInfoListRequest,
    DescribeConcurrentRecordStreamNumResponse: DescribeConcurrentRecordStreamNumResponse,
    ModifyLiveTranscodeTemplateResponse: ModifyLiveTranscodeTemplateResponse,
    ModifyLiveRecordTemplateResponse: ModifyLiveRecordTemplateResponse,
    ModifyLivePlayDomainRequest: ModifyLivePlayDomainRequest,
    DeleteLiveRecordTemplateResponse: DeleteLiveRecordTemplateResponse,
    DescribeLiveWatermarkRequest: DescribeLiveWatermarkRequest,
    AddDelayLiveStreamRequest: AddDelayLiveStreamRequest,
    DescribeLiveDomainCertRequest: DescribeLiveDomainCertRequest,
    DescribeLiveStreamEventListRequest: DescribeLiveStreamEventListRequest,
    CallBackTemplateInfo: CallBackTemplateInfo,
    UnBindLiveDomainCertRequest: UnBindLiveDomainCertRequest,
    DeleteLiveRecordResponse: DeleteLiveRecordResponse,
    ForbidLiveStreamRequest: ForbidLiveStreamRequest,
    DescribeLiveDomainsResponse: DescribeLiveDomainsResponse,
    StreamOnlineInfo: StreamOnlineInfo,
    CreateLiveRecordResponse: CreateLiveRecordResponse,
    RuleInfo: RuleInfo,
    UpdateLiveWatermarkResponse: UpdateLiveWatermarkResponse,
    CreateLiveTranscodeTemplateResponse: CreateLiveTranscodeTemplateResponse,
    ModifyLivePlayDomainResponse: ModifyLivePlayDomainResponse,
    CancelCommonMixStreamResponse: CancelCommonMixStreamResponse,
    AddLiveWatermarkRequest: AddLiveWatermarkRequest,
    DescribeLiveCertsResponse: DescribeLiveCertsResponse,
    CommonMixInputParam: CommonMixInputParam,
    ResumeDelayLiveStreamRequest: ResumeDelayLiveStreamRequest,
    DescribeLiveRecordTemplatesResponse: DescribeLiveRecordTemplatesResponse,
    DescribeLiveCertRequest: DescribeLiveCertRequest,
    DeleteLiveWatermarkResponse: DeleteLiveWatermarkResponse,
    ModifyLivePlayAuthKeyResponse: ModifyLivePlayAuthKeyResponse,
    CreateLiveCallbackTemplateRequest: CreateLiveCallbackTemplateRequest,
    DropLiveStreamResponse: DropLiveStreamResponse,
    DescribeLiveStreamStateResponse: DescribeLiveStreamStateResponse,
    DeleteLiveWatermarkRuleRequest: DeleteLiveWatermarkRuleRequest,
    StreamEventInfo: StreamEventInfo,
    DescribeLiveWatermarksRequest: DescribeLiveWatermarksRequest,
    CreateLiveTranscodeRuleRequest: CreateLiveTranscodeRuleRequest,
    DescribeLiveWatermarkRulesRequest: DescribeLiveWatermarkRulesRequest,
    DropLiveStreamRequest: DropLiveStreamRequest,
    CreateCommonMixStreamRequest: CreateCommonMixStreamRequest,
    CreateLiveCertResponse: CreateLiveCertResponse,
    CommonMixLayoutParams: CommonMixLayoutParams,
    DescribeGroupProIspPlayInfoListRequest: DescribeGroupProIspPlayInfoListRequest,
    DescribeStreamDayPlayInfoListRequest: DescribeStreamDayPlayInfoListRequest,
    DescribeLiveSnapshotTemplateResponse: DescribeLiveSnapshotTemplateResponse,
    DescribeLiveTranscodeRulesResponse: DescribeLiveTranscodeRulesResponse,
    AddLiveDomainRequest: AddLiveDomainRequest,
    StreamName: StreamName,
    DescribeLiveCertsRequest: DescribeLiveCertsRequest,
    DescribeLiveCertResponse: DescribeLiveCertResponse,
    AddLiveDomainResponse: AddLiveDomainResponse,
    DescribeLivePlayAuthKeyRequest: DescribeLivePlayAuthKeyRequest,
    DescribeLiveForbidStreamListResponse: DescribeLiveForbidStreamListResponse,
    DescribeStreamPushInfoListRequest: DescribeStreamPushInfoListRequest,
    DescribeLiveWatermarkResponse: DescribeLiveWatermarkResponse,
    ResumeLiveStreamResponse: ResumeLiveStreamResponse,
    DescribeStreamPushInfoListResponse: DescribeStreamPushInfoListResponse,
    DescribeLiveWatermarksResponse: DescribeLiveWatermarksResponse,
    WatermarkInfo: WatermarkInfo,
    DescribeLiveForbidStreamListRequest: DescribeLiveForbidStreamListRequest,
    BindLiveDomainCertRequest: BindLiveDomainCertRequest,
    ProIspPlaySumInfo: ProIspPlaySumInfo,
    CreateLiveCallbackRuleRequest: CreateLiveCallbackRuleRequest,
    DeleteLiveWatermarkRuleResponse: DeleteLiveWatermarkRuleResponse,
    PublishTime: PublishTime,
    ModifyLiveCertResponse: ModifyLiveCertResponse,
    DeleteLiveWatermarkRequest: DeleteLiveWatermarkRequest,
    DescribeLiveDomainsRequest: DescribeLiveDomainsRequest,
    UpdateLiveWatermarkRequest: UpdateLiveWatermarkRequest,
    DeleteLiveSnapshotRuleResponse: DeleteLiveSnapshotRuleResponse,
    CreateLiveRecordRequest: CreateLiveRecordRequest,
    ForbidLiveStreamResponse: ForbidLiveStreamResponse,
    DescribeLiveSnapshotTemplatesResponse: DescribeLiveSnapshotTemplatesResponse,
    CancelCommonMixStreamRequest: CancelCommonMixStreamRequest,
    CertInfo: CertInfo,
    ModifyLivePushAuthKeyResponse: ModifyLivePushAuthKeyResponse,
    DescribeLiveDelayInfoListResponse: DescribeLiveDelayInfoListResponse,
    DeleteLiveTranscodeTemplateRequest: DeleteLiveTranscodeTemplateRequest,
    DescribeLiveCallbackRulesRequest: DescribeLiveCallbackRulesRequest,
    DescribeLiveTranscodeTemplateResponse: DescribeLiveTranscodeTemplateResponse,
    CreateLiveSnapshotTemplateResponse: CreateLiveSnapshotTemplateResponse,
    DescribeConcurrentRecordStreamNumRequest: DescribeConcurrentRecordStreamNumRequest,
    ModifyLiveCertRequest: ModifyLiveCertRequest,
    CommonMixControlParams: CommonMixControlParams,
    UnBindLiveDomainCertResponse: UnBindLiveDomainCertResponse,
    ForbidLiveDomainRequest: ForbidLiveDomainRequest,
    DescribeLiveRecordRulesRequest: DescribeLiveRecordRulesRequest,
    CreateLiveRecordTemplateResponse: CreateLiveRecordTemplateResponse,
    RecordParam: RecordParam,
    ModifyLiveRecordTemplateRequest: ModifyLiveRecordTemplateRequest,
    DeleteLiveRecordRequest: DeleteLiveRecordRequest,
    StopLiveRecordRequest: StopLiveRecordRequest,
    CreateLiveTranscodeTemplateRequest: CreateLiveTranscodeTemplateRequest,
    DescribeLiveStreamPublishedListResponse: DescribeLiveStreamPublishedListResponse,
    DeleteLiveDomainRequest: DeleteLiveDomainRequest,
    AddDelayLiveStreamResponse: AddDelayLiveStreamResponse,
    DescribeLiveTranscodeTemplatesResponse: DescribeLiveTranscodeTemplatesResponse,
    DeleteLiveCallbackRuleRequest: DeleteLiveCallbackRuleRequest,
    PlayAuthKeyInfo: PlayAuthKeyInfo,
    ModifyLiveTranscodeTemplateRequest: ModifyLiveTranscodeTemplateRequest,
    ModifyLiveDomainCertResponse: ModifyLiveDomainCertResponse,
    EnableLiveDomainRequest: EnableLiveDomainRequest,
    ForbidLiveDomainResponse: ForbidLiveDomainResponse,
    DescribeLiveSnapshotRulesRequest: DescribeLiveSnapshotRulesRequest,
    CreateLiveTranscodeRuleResponse: CreateLiveTranscodeRuleResponse,
    CreateLiveCallbackRuleResponse: CreateLiveCallbackRuleResponse,
    DescribeLiveRecordTemplateResponse: DescribeLiveRecordTemplateResponse,
    BindLiveDomainCertResponse: BindLiveDomainCertResponse,
    CallBackRuleInfo: CallBackRuleInfo,
    DescribeLiveTranscodeTemplatesRequest: DescribeLiveTranscodeTemplatesRequest,
    HlsSpecialParam: HlsSpecialParam,
    DescribeLiveRecordRulesResponse: DescribeLiveRecordRulesResponse,
    DescribeBillBandwidthAndFluxListResponse: DescribeBillBandwidthAndFluxListResponse,
    DescribeLiveStreamOnlineListRequest: DescribeLiveStreamOnlineListRequest,
    DeleteLiveCallbackTemplateRequest: DeleteLiveCallbackTemplateRequest,
    ModifyLiveCallbackTemplateRequest: ModifyLiveCallbackTemplateRequest,
    DeleteLiveCertResponse: DeleteLiveCertResponse,
    CreateCommonMixStreamResponse: CreateCommonMixStreamResponse,
    CreateLiveCallbackTemplateResponse: CreateLiveCallbackTemplateResponse,
    DescribeLivePushAuthKeyRequest: DescribeLivePushAuthKeyRequest,
    DescribeLiveCallbackTemplateRequest: DescribeLiveCallbackTemplateRequest,
    ModifyLiveSnapshotTemplateRequest: ModifyLiveSnapshotTemplateRequest,
    CdnPlayStatData: CdnPlayStatData,
    CreateLiveRecordRuleResponse: CreateLiveRecordRuleResponse,
    DescribeLiveTranscodeTemplateRequest: DescribeLiveTranscodeTemplateRequest,
    ModifyLiveCallbackTemplateResponse: ModifyLiveCallbackTemplateResponse,
    DescribeLiveCallbackTemplatesResponse: DescribeLiveCallbackTemplatesResponse,
    DescribeLivePushAuthKeyResponse: DescribeLivePushAuthKeyResponse,
    CreateLiveWatermarkRuleRequest: CreateLiveWatermarkRuleRequest,
    DescribeLiveRecordTemplatesRequest: DescribeLiveRecordTemplatesRequest,
    DescribeLiveDomainResponse: DescribeLiveDomainResponse,
    PlayDataInfoByStream: PlayDataInfoByStream,
    StopLiveRecordResponse: StopLiveRecordResponse,
    DescribeStreamDayPlayInfoListResponse: DescribeStreamDayPlayInfoListResponse,
    CreateLiveSnapshotRuleResponse: CreateLiveSnapshotRuleResponse,
    DelayInfo: DelayInfo,
    DescribeLiveStreamEventListResponse: DescribeLiveStreamEventListResponse,
    DescribeLiveCallbackRulesResponse: DescribeLiveCallbackRulesResponse,
    ForbidStreamInfo: ForbidStreamInfo,
    ResumeDelayLiveStreamResponse: ResumeDelayLiveStreamResponse,
    GroupProIspDataInfo: GroupProIspDataInfo,
    DeleteLiveDomainResponse: DeleteLiveDomainResponse,
    CommonMixCropParams: CommonMixCropParams,
    CreateLiveRecordTemplateRequest: CreateLiveRecordTemplateRequest,
    DescribeProIspPlaySumInfoListResponse: DescribeProIspPlaySumInfoListResponse,
    DeleteLiveCertRequest: DeleteLiveCertRequest,
    SnapshotTemplateInfo: SnapshotTemplateInfo,
    DeleteLiveRecordRuleResponse: DeleteLiveRecordRuleResponse,

}
