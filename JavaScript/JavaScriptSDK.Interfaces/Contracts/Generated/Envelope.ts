// THIS TYPE WAS AUTOGENERATED
/// <reference path="Base.ts" />
module Microsoft.Telemetry
{
"use strict";
    export class Envelope
    {
        public ver: number;
        public name: string;
        public time: string;
        public sampleRate: number;
        public seq: string;
        public iKey: string;
        public flags: number;
        public deviceId: string;
        public os: string;
        public osVer: string;
        public appId: string;
        public appVer: string;
        public userId: string;
        public tags: any;
        public data: Base;
        
        constructor()
        {
            this.ver = 1;
            this.sampleRate = 100.0;
            this.tags = {};
        }
    }
}