﻿import { IInternal } from '../../JavaScriptSDK.Interfaces/Context/IInternal';
import { ITelemetryConfig } from '../../JavaScriptSDK/TelemetryContext';
import { AppInsights } from '../../JavaScriptSDK/AppInsights';

export class Internal implements IInternal {

    /**
     * The SDK version used to create this telemetry item.
     */
    public sdkVersion: string;

    /**
     * The SDK agent version.
     */
    public agentVersion: string;

    /**
    * Constructs a new instance of the internal telemetry data class.
    */
    constructor(config: ITelemetryConfig) {
        this.sdkVersion = (config.sdkExtension() ? config.sdkExtension() + "_" : "") + "javascript:" + AppInsights.Version;
    }
}